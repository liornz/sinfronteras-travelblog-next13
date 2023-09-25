'use client';

import React, { useRef } from 'react';
import styles from './new-comment.module.scss';
import { useTranslation } from '../../app/i18n/client';
import { addComment } from '@/actions/comments';
import Button from './button';
import { toast } from 'react-toastify';

interface Props {
  lng: string;
  destinationSlug: string;
  countrySlug: string;
}

const NewComment: React.FC<Props> = (props) => {
  const { lng, countrySlug, destinationSlug } = props;
  const { t } = useTranslation(lng, 'comments');
  const ref = useRef<HTMLFormElement>(null);

  const actionHandler = async (formData: FormData) => {
    ref.current?.reset();
    const result = await addComment(formData, countrySlug, destinationSlug, lng);
    if (result?.error instanceof Error) {
      toast(result.error.message);
    }
  };

  return (
    <form ref={ref} className={styles.form} action={actionHandler}>
      <div className={styles.row}>
        <div className={styles.control}>
          <label htmlFor="email">{t('email')}</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className={styles.control}>
          <label htmlFor="name">{t('name')}</label>
          <input type="text" id="name" name="name" />
        </div>
      </div>
      <div className={styles.control}>
        <label htmlFor="comment">{t('comment')}</label>
        <textarea name="comment" id="comment" rows={5}></textarea>
      </div>
      <Button lng={lng} />
    </form>
  );
};

export default NewComment;
