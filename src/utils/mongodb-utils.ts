import { MongoClient } from 'mongodb';
import 'server-only';
import { commentData } from './types';

export const connectDatabase = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.avpr6.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`
  );
  return client;
};
export const insertDucument = async (client: MongoClient, collection: string, document: {}) => {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
};

export const getAllDocuments = async (client: MongoClient, collection: string, filter: {}, sort: {}) => {
  const db = client.db();
  const documents = await db.collection(collection).find(filter).sort(sort).toArray();

  // Convert MongoDB documents to plain objects and transform _id to string
  const plainDocuments = documents.map((doc) => ({
    ...doc,
    _id: doc._id.toString(), // Convert ObjectId to string
  }));

  return plainDocuments as unknown as commentData[];
};
