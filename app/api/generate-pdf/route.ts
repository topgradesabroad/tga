// app/api/generate-pdf/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { resourceId, userData } = data;

    if (!resourceId) {
      return NextResponse.json(
        { error: 'Missing required parameter: resourceId' },
        { status: 400 }
      );
    }

    // Get resource metadata
    const metadataPath = path.join(process.cwd(), 'data', 'resources-meta.json');
    
    try {
      await fs.access(metadataPath);
    } catch (error) {
      console.error('Metadata file not found:', metadataPath);
      return NextResponse.json(
        { error: 'Resource metadata file not found' },
        { status: 404 }
      );
    }
    
    const metadataContent = await fs.readFile(metadataPath, 'utf8');
    let resources;
    
    try {
      resources = JSON.parse(metadataContent);
    } catch (error) {
      console.error('Error parsing metadata JSON:', error);
      return NextResponse.json(
        { error: 'Invalid resource metadata format' },
        { status: 500 }
      );
    }
    
    // Find the resource by ID
    const resourceMeta = resources.find((r: any) => r.id === resourceId);
    if (!resourceMeta) {
      return NextResponse.json(
        { error: `Resource not found with ID: ${resourceId}` },
        { status: 404 }
      );
    }

    // Get the resource content
    let resource;
    try {
      const contentPath = path.join(process.cwd(), 'data', resourceMeta.fileName);
      await fs.access(contentPath);
      const contentJson = await fs.readFile(contentPath, 'utf8');
      resource = JSON.parse(contentJson);
    } catch (error) {
      console.error('Error with resource content:', error);
      // Use default values if there are issues with the content file
      resource = {
        title: resourceMeta.title,
        content: "Content could not be loaded. Please contact support."
      };
    }

    // Create a PDF document directly to buffer
    const pdfBuffer = await new Promise<Buffer>((resolve, reject) => {
      try {
        const chunks: Buffer[] = [];
        const doc = new PDFDocument({
          size: 'A4',
          margins: {
            top: 50,
            bottom: 50,
            left: 72,
            right: 72
          },
          font: undefined, // Don't set a default font
          info: {
            Title: resourceMeta.title,
            Author: 'Your Company Name',
            Subject: 'Study Abroad Resource',
          }
        });

        // Collect PDF data chunks
        doc.on('data', chunk => chunks.push(Buffer.from(chunk)));
        
        // When PDF is done, resolve with the complete buffer
        doc.on('end', () => resolve(Buffer.concat(chunks)));
        
        // Handle errors
        doc.on('error', err => reject(err));

        // Use standard PDF fonts that don't require embedding
        doc.font('Times-Roman')
           .fontSize(24)
           .text(resourceMeta.title, { align: 'center' });
        doc.moveDown(2);

        doc.font('Times-Roman')
           .fontSize(14)
           .text(resourceMeta.description || '', { align: 'center' });
        doc.moveDown(2);

        doc.font('Times-Roman')
           .fontSize(12)
           .text(resource.content || 'No content available', { align: 'justify' });
        doc.moveDown(2);

        // Add simple watermark
        doc.fillOpacity(0.1)
           .font('Times-Bold')
           .fontSize(60)
           .fillColor('#999999')
           .text('YOUR BRAND', 150, 400);
        
        // Reset opacity for footer text
        doc.fillOpacity(1)
           .font('Times-Roman')
           .fontSize(10)
           .fillColor('#333333');

        // Add user email at the bottom if provided
        if (userData && userData.email) {
          doc.moveDown(4);
          doc.text(`Prepared for: ${userData.email}`, { align: 'center' });
        }
        
        // Finalize the PDF
        doc.end();
      } catch (error) {
        reject(error);
      }
    });

    // Return the PDF as a downloadable file
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${resourceMeta.title.replace(/[^a-z0-9]/gi, '_')}.pdf"`,
      },
    });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF: ' + (error as Error).message },
      { status: 500 }
    );
  }
}