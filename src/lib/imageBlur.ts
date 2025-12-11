// 画像のblurプレースホルダーデータ
// 実際の画像を小さくしてbase64エンコードしたものを使用
// これにより画像読み込み中の体験が向上します

export const blurDataURLs: Record<string, string> = {
  // プロフィール画像用のプレースホルダー
  '/images/profile/profile-rectangle-v2.webp': 'data:image/jpeg;base64,...',

  // プロジェクト画像用の汎用プレースホルダー
  'default': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gIFAB0AH0fkpgAAAB1JREFUGNNjYKAA/P//n4mBQjBqIBEwDJVnB4AAAwBH0gMBV4g0GgAAAABJRU5ErkJggg=='
};

// プレースホルダーを取得する関数
export function getBlurDataURL(imagePath: string): string {
  return blurDataURLs[imagePath] || blurDataURLs.default;
}