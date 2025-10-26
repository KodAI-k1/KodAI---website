// Placeholder mailer utility
// Configure with SendGrid, Mailgun, or SMTP

export interface EmailData {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
}

export async function sendEmail(data: EmailData): Promise<{ success: boolean; error?: string }> {
  // Example SendGrid implementation (commented out)
  /*
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  
  try {
    await sgMail.send(data);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
  */

  // For development/testing - just log the email
  console.log('Email would be sent:', data);
  return { success: true };
}

export async function sendContactFormEmail(formData: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}): Promise<{ success: boolean; error?: string }> {
  const emailData: EmailData = {
    to: process.env.MAIL_TO || 'contact@kodai.com',
    from: process.env.MAIL_FROM || 'noreply@kodai.com',
    subject: `New Contact Form Submission from ${formData.name}`,
    text: `
Name: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}` : ''}
${formData.company ? `Company: ${formData.company}` : ''}

Message:
${formData.message}
    `,
    html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${formData.name}</p>
<p><strong>Email:</strong> ${formData.email}</p>
${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
<p><strong>Message:</strong></p>
<p>${formData.message.replace(/\n/g, '<br>')}</p>
    `,
  };

  return sendEmail(emailData);
}

export async function subscribeToNewsletter(email: string): Promise<{ success: boolean; error?: string }> {
  // Example Mailchimp implementation (commented out)
  /*
  const mailchimp = require('@mailchimp/mailchimp_marketing');
  
  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: 'us1', // e.g., us1, us2, etc.
  });
  
  try {
    const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
    });
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
  */

  // For development/testing - just log the subscription
  console.log('Newsletter subscription for:', email);
  return { success: true };
}
