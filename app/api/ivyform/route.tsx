import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { IvyEmailPayload } from '@/components/Ivy/types';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData: IvyEmailPayload = await request.json();
    
    const { data, error } = await resend.emails.send({
      from: 'Ivy League Form <apply@mail.topgradesabroad.com>',
      to: ['apply@topgradesabroad.com'], // Replace with your email
      subject: 'New Ivy League Application Submission',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #2c3e50;">New Ivy League Application Submission</h2>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 5px;">
            <h3 style="color: #34495e;">Personal Information</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Mobile Number:</strong> ${formData.mobileNumber}</p>
            <p><strong>University Preferences:</strong> ${formData.universityPreferences}</p>
          </div>

          <div style="margin: 20px 0; padding: 15px; background-color: #f8f9fa; border-radius: 5px;">
            <h3 style="color: #34495e;">Application Details</h3>
            <p><strong>Current Education:</strong> ${formData.currentEducation}</p>
            <p><strong>Course Interest:</strong> ${formData.courseInterest}</p>
            <!-- Add any additional form fields you want to include -->
          </div>
        </div>
      `
    });

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' });
  }
}