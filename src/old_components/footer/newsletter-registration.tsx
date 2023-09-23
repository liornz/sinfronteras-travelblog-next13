'use client';

import React, { useRef, useState, useContext, useEffect } from 'react';
import styles from './newsletter-registration.module.scss';
import { useTranslation } from '../../app/i18n/client';

type NewsletterProps = {
  lng: string;
};

const Newsletter: React.FC<NewsletterProps> = ({ lng }) => {
  const [emailIsValid, setEmailIsValid] = useState(true);
  const { t } = useTranslation(lng, 'footer');

  const emailInputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    const timer = setTimeout(() => {
      setEmailIsValid(true);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [emailIsValid]);

  const validateEmail = () => {
    const enteredEmail = emailInputRef.current!.value;
    const pattern =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const isValidEmail = pattern.test(enteredEmail);
    if (!isValidEmail) {
      setEmailIsValid(false);
      emailInputRef.current!.value = '';
      throw new Error('Invalid Email Input!');
    }
  };

  function registrationHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      validateEmail();
    } catch (error) {
      return;
    }

    const sendEmailtoAPI = async () => {
      const enteredEmail = emailInputRef.current!.value;
      try {
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          body: JSON.stringify({ email: enteredEmail }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          // use react toasify to show success message
        } else {
          const data = await response.json();
          throw new Error(data.message || 'Something went wrong!');
        }
      } catch (error) {
        if (error instanceof Error) {
          // use react toasify to show error message
        }
      }
    };
    sendEmailtoAPI();
    emailInputRef.current!.value = '';
  }

  const emailInvalidMsg = t('validate');

  return (
    <div className={styles.container}>
      <p>
        <strong>{t('newsletter-main')}</strong>
      </p>
      <p>{t('newsletter-sub')}</p>
      <form onSubmit={registrationHandler}>
        <input
          type="email"
          id="user-email"
          ref={emailInputRef as React.LegacyRef<HTMLInputElement>}
          placeholder={t('placeholder') as string}
        />
        <button>{t('button')}</button>
      </form>
      {!emailIsValid && <p>{emailInvalidMsg}</p>}
    </div>
  );
};

export default Newsletter;
