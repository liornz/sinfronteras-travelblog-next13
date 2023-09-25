'use client';

import React, { useRef } from 'react';
import styles from './newsletter-registration.module.scss';
import { useTranslation } from '../../app/i18n/client';
import { register } from '@/actions/newsletter-registration';
import { toast } from 'react-toastify';
import { z } from 'zod';

type NewsletterProps = {
  lng: string;
};

const Newsletter: React.FC<NewsletterProps> = ({ lng }) => {
  const { t } = useTranslation(lng, 'footer');
  const ref = useRef<HTMLFormElement>(null);

  const actionHandler = async (formData: FormData) => {
    const email = formData.get('email');
    ref.current?.reset();
    if (typeof email !== 'string') {
      return;
    }

    if (z.string().email().safeParse(email).success === false) {
      toast(t('invalid'));
      return;
    }

    const result = await register(email);
    if (result?.error instanceof Error) {
      toast(result.error.message);
    } else {
      toast(t('success'));
    }
  };

  return (
    <div className={styles.container}>
      <p>
        <strong>{t('newsletter-main')}</strong>
      </p>
      <p>{t('newsletter-sub')}</p>
      <form ref={ref} action={actionHandler}>
        <input type="email" name="email" id="user-email" placeholder={t('placeholder') as string} />
        <button>{t('button')}</button>
      </form>
    </div>
  );
};

export default Newsletter;
