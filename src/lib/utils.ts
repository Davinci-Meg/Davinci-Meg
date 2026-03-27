import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function groupByYear<T extends { year: number }>(items: T[]): Record<number, T[]> {
  return items.reduce((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = [];
    }
    acc[item.year].push(item);
    return acc;
  }, {} as Record<number, T[]>);
}

// GitHub Pages用の画像パスヘルパー
// Next.jsのbasePathと同じ値を使用
const BASE_PATH = '/Davinci-Meg';
const isProd = process.env.NODE_ENV === 'production';

export function getImagePath(path: string): string {
  if (!isProd) {
    return path;
  }

  if (!path.startsWith(BASE_PATH)) {
    if (path.startsWith('/')) {
      return `${BASE_PATH}${path}`;
    }
    return `${BASE_PATH}/${path}`;
  }

  return path;
}