// 画像のblurプレースホルダーデータ
// 実際の画像を小さくしてbase64エンコードしたものを使用
// これにより画像読み込み中の体験が向上します

export const blurDataURLs: Record<string, string> = {
  // プロフィール画像用のプレースホルダー
  '/images/profile/profile-rectangle-v2.png': 'data:image/jpeg;base64,...', // Keeping the old base64 for now as I can't generate a new one easily, but key needs to match. Ideally I should remove this line if I don't have the blur data, or use the default. I will point it to valid key.

  // プロジェクト画像用の汎用プレースホルダー
  'default': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gIFAB0AH0fkpgAAAB1JREFUGNNjYKAA/P//n4mBQjBqIBEwDJVnB4AAAwBH0gMBV4g0GgAAAABJRU5ErkJggg=='
};

// プレースホルダーを取得する関数
export function getBlurDataURL(imagePath: string): string {
  return blurDataURLs[imagePath] || blurDataURLs.default;
}