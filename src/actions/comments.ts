'use server';

import { connectDatabase, insertDucument } from '@/utils/mongodb-utils';
import { revalidatePath } from 'next/cache';

export const addComment = async (formData: FormData, countrySlug: string, destinationSlug: string, lng: string) => {
  const email = formData.get('email');
  const name = formData.get('name');
  const comment = formData.get('comment');
  let client;
  try {
    client = await connectDatabase();
    const newComment = {
      countrySlug,
      destinationSlug,
      email,
      name,
      text: comment,
    };
    await insertDucument(client, 'comments', newComment);
  } catch (error) {
    return {
      error,
    };
  }
  client.close();
  revalidatePath(`/${lng}/destinations/${countrySlug}/${destinationSlug}`);
};
