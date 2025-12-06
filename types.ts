export enum Category {
  MARKET = 'Market', 
  ULASIM = 'Ulaşım', 
  YEMEK = 'Yemek & Restoran',
  GIYIM = 'Giyim & Moda', 
  FATURA = 'Faturalar', 
  EGLENCE = 'Eğlence',
  SAGLIK = 'Sağlık',
  EGITIM = 'Eğitim',
  KOZMETIK = 'Kozmetik',
  TEKNOLOJI = 'Teknoloji',
  EV = 'Ev & Yaşam',
  HEDIYE = 'Hediye',
  DIGER = 'Diğer'
}

export interface Expense {
  id: string;
  amount: number;
  description: string; 
  category: Category;
  date: string; // ISO String
}

export interface ParsedExpenseData {
  amount: number;
  description: string;
  category: Category;
}