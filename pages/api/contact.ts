import type { NextApiRequest, NextApiResponse } from 'next';
import { sendContactFormEmail } from '@/lib/mailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, company, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  try {
    // Send email using the mailer utility
    const result = await sendContactFormEmail({
      name,
      email,
      phone,
      company,
      message,
    });

    if (result.success) {
      return res.status(200).json({ message: 'Message sent successfully' });
    } else {
      return res.status(500).json({ message: 'Failed to send message', error: result.error });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
