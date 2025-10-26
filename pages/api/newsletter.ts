import type { NextApiRequest, NextApiResponse } from 'next';
import { subscribeToNewsletter } from '@/lib/mailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  // Validation
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  try {
    const result = await subscribeToNewsletter(email);

    if (result.success) {
      return res.status(200).json({ message: 'Successfully subscribed to newsletter' });
    } else {
      return res.status(500).json({ message: 'Failed to subscribe', error: result.error });
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
