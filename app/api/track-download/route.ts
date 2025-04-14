// app/api/track-download/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { resourceId, userData } = data;

    if (!resourceId || !userData) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    // Create a log entry
    const logEntry = {
      timestamp: new Date().toISOString(),
      resourceId,
      userData: {
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        targetUniversity: userData.targetUniversity,
        targetProgram: userData.targetProgram
      }
    };

    // Ensure logs directory exists
    const logsDir = path.join(process.cwd(), 'data', 'logs');
    try {
      await fs.mkdir(logsDir, { recursive: true });
    } catch (error) {
      console.error('Error creating logs directory:', error);
    }

    // Append to log file
    const logPath = path.join(logsDir, 'downloads.json');
    
    // Read existing logs or create new array
    let logs = [];
    try {
      const existingLogs = await fs.readFile(logPath, 'utf8');
      logs = JSON.parse(existingLogs);
    } catch (error) {
      // File doesn't exist or is invalid, start with empty array
      logs = [];
    }
    
    // Add new log entry
    logs.push(logEntry);
    
    // Write back to file
    await fs.writeFile(logPath, JSON.stringify(logs, null, 2), 'utf8');

    // Return success
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error tracking download:', error);
    return NextResponse.json(
      { error: 'Failed to track download' },
      { status: 500 }
    );
  }
}