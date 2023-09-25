'use server';

import { connectDatabase, insertDucument } from '@/utils/mongodb-utils';

export const register = async (email: string) => {
  let client;
  try {
    client = await connectDatabase();
    await insertDucument(client, 'newsletter', { email });
  } catch (error) {
    return {
      error,
    };
  }
  client.close();
};
