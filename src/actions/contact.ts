'use server';

import { connectDatabase, insertDucument } from '@/utils/mongodb-utils';
import { z } from 'zod';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const contact = async (formData: FormData) => {
  const email = formData.get('email');
  const name = formData.get('name');
  const message = formData.get('message');

  try {
    const schema = z.object({
      email: z.string().email(),
      name: z.string().min(3),
      message: z.string().min(5),
    });
    schema.parse({
      email,
      name,
      message,
    });
  } catch (error) {
    return {
      error: 'Invalid input',
    };
  }

  const msg = {
    to: 'travelblogsinfronteras@gmail.com',
    from: 'info@sinfronteras-travelblog.com',
    subject: 'Sin-Fronteras - Contact Form',
    html: `<h2>New Message from ${name} - ${email}</h2><hr><p>${message}</p>`,
  };

  const newMessage = {
    email,
    name,
    message,
    date: new Date(),
  };

  let client;
  try {
    client = await connectDatabase();
    await sgMail.send(msg);
    await insertDucument(client, 'messages', newMessage);
  } catch (error) {
    return {
      error,
    };
  }
  client.close();
};
