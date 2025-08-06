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

export function getImagePath(path: string): string {
  // GitHub Pages環境かローカル環境かを判定
  // ビルド時は常にGitHub Pages用のパスを生成
  const needsBasePath = true; // GitHub Pages用に常にbasePathを追加
  
  if (needsBasePath && !path.startsWith(BASE_PATH)) {
    // スラッシュの重複を避ける
    if (path.startsWith('/')) {
      return `${BASE_PATH}${path}`;
    }
    return `${BASE_PATH}/${path}`;
  }
  
  return path;
}