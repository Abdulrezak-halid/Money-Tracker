import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface MoneyDB extends DBSchema {
  transactions: {
    key: string;
    value: {
      id: string;
      amount: number;
      category: string;
      note?: string;
      date: string;
    };
    indexes: { 'by-date': string };
  };
}

let dbPromise: Promise<IDBPDatabase<MoneyDB>> | null = null;

export function getDB() {
  if (!dbPromise) {
    dbPromise = openDB<MoneyDB>('money-tracker-db', 1, {
      upgrade(db) {
        const store = db.createObjectStore('transactions', { keyPath: 'id' });
        store.createIndex('by-date', 'date');
      }
    });
  }
  return dbPromise;
}

export async function saveTransaction(tx: MoneyDB['transactions']['value']) {
  const db = await getDB();
  await db.put('transactions', tx);
}

export async function getAllTransactions() {
  const db = await getDB();
  return await db.getAll('transactions');
}

export async function clearTransactions() {
  const db = await getDB();
  await db.clear('transactions');
}
