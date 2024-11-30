import { Metadata } from 'next';
import React from 'react';
import Contact from '../../../old_components/contact-page/contact';

interface Props {
  params: Promise<{ lng: string }>;
}

export const metadata: Metadata = {
  title: 'Travelblog Sinfronteras - Contact Page',
  description: 'Contact Page - Sinfronteras Travel Blog - Contact me!',
};

const ContactPage: React.FC<Props> = async ({ params }) => {
  const { lng } = await params;
  return <Contact lng={lng} />;
};

export default ContactPage;
