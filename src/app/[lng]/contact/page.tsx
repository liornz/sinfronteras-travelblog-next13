import React from 'react';
import Contact from '../../../old_components/contact-page/contact';
import { Metadata } from 'next';

interface Props {
  params: { lng: string };
}

export const metadata: Metadata = {
  title: 'Travelblog Sinfronteras - Contact Page',
  description: 'Contact Page - Sinfronteras Travel Blog - Contact me!',
};

const ContactPage: React.FC<Props> = (props) => {
  const {
    params: { lng },
  } = props;
  return <Contact lng={lng} />;
};

export default ContactPage;
