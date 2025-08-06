# 設計フェーズ: モダンポートフォリオサイト設計

## 前段階の確認

前段階のrequirements.mdを読み込みました。既存のHTMLポートフォリオをNext.js 15ベースのモダンなWebアプリケーションに移行するプロジェクトです。

## 1. アーキテクチャ設計

### ディレクトリ構成
```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── Navigation.tsx
│   │   ├── LanguageToggle.tsx
│   │   ├── MobileMenu.tsx
│   │   └── LoadingSpinner.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Awards.tsx
│       ├── Publications.tsx
│       ├── TechnicalSkills.tsx
│       ├── MediaCoverage.tsx
│       ├── Activities.tsx
│       ├── Projects.tsx
│       └── Footer.tsx
├── lib/
│   ├── translations.ts
│   ├── data/
│   │   ├── profile.ts
│   │   ├── awards.ts
│   │   ├── publications.ts
│   │   ├── skills.ts
│   │   ├── media.ts
│   │   ├── activities.ts
│   │   └── projects.ts
│   └── utils.ts
├── hooks/
│   └── useTranslation.ts
└── types/
    └── index.ts
public/
├── images/
│   ├── profile/
│   │   └── profile-square.jpg
│   └── projects/
│       └── [プロジェクト画像群]
└── [Next.jsデフォルト画像]
```

### 技術アーキテクチャ
- **フレームワーク**: Next.js 15 App Router
- **状態管理**: React Context + LocalStorage
- **多言語**: カスタムフック + Context
- **スタイリング**: Tailwind CSS v4
- **コンポーネント設計**: 機能別分割 + 再利用可能なUIコンポーネント

## 2. コンポーネント設計

### 2.1 レイアウトコンポーネント
#### Navigation.tsx
- 固定ヘッダー
- デスクトップ・モバイルメニューの切り替え
- 言語切り替えボタン
- スムーズスクロール機能

#### MobileMenu.tsx
- ハンバーガーメニュー
- アニメーション付きの開閉
- モバイル専用レイアウト

### 2.2 セクションコンポーネント
#### Hero.tsx
- プロフィール画像
- 基本情報表示
- SNSリンク
- グラデーション背景

#### Awards.tsx
- 年度別受賞歴
- カード型レイアウト
- 外部リンク機能

#### Publications.tsx
- 論文一覧
- 著者情報
- 学会情報

#### TechnicalSkills.tsx
- スキルカテゴリ別表示
- タグ型レイアウト
- アイコン表示

#### MediaCoverage.tsx
- メディア掲載情報
- 外部リンク

#### Activities.tsx
- 登壇活動
- カード型レイアウト

#### Projects.tsx
- 画像ギャラリー
- グリッドレイアウト
- ホバーエフェクト

### 2.3 ユーティリティコンポーネント
#### LanguageToggle.tsx
- 言語切り替えボタン
- 現在の言語状態表示

## 3. データ管理設計

### 3.1 多言語データ構造
```typescript
interface Translation {
  ja: string;
  en: string;
}

interface TranslationKeys {
  // Navigation
  navigation: {
    awards: Translation;
    publications: Translation;
    skills: Translation;
    media: Translation;
    activities: Translation;
    projects: Translation;
  };
  // Profile
  profile: {
    name: Translation;
    affiliation: Translation;
    fieldOfInterest: Translation;
  };
  // 各セクションの翻訳データ
}
```

### 3.2 データファイル構造
#### profile.ts
- 基本プロフィール情報
- SNSリンク
- 興味分野

#### awards.ts
- 年度別受賞データ
- 受賞名、受賞内容、URL
- 多言語対応

#### publications.ts
- 論文データ
- 著者、タイトル、学会名

#### skills.ts
- 技術スキル
- カテゴリ別分類

#### projects.ts
- プロジェクト画像
- 画像パス、alt属性

## 4. UI/UXデザイン設計

### 4.1 デザインシステム
#### カラーパレット
- プライマリ: グラデーション（紫〜青系）
- セカンダリ: グレー系
- アクセント: 青系
- 背景: 白、薄いグラデーション

#### タイポグラフィ
- ヘッドライン: Geist Sans（太字）
- ボディテキスト: Geist Sans（通常）
- コード: Geist Mono

#### レイアウトグリッド
- 最大幅: 1200px
- レスポンシブブレークポイント:
  - Mobile: 768px未満
  - Tablet: 768px-1024px
  - Desktop: 1024px以上

### 4.2 アニメーション設計
- フェードイン: セクション読み込み時
- ホバーエフェクト: カード、ボタン
- スムーズスクロール: ナビゲーション
- トランジション: 言語切り替え

### 4.3 レスポンシブ設計
#### モバイル（768px未満）
- 単列レイアウト
- ハンバーガーメニュー
- タッチ操作対応

#### タブレット（768px-1024px）
- 2列グリッド
- 適度なパディング
- タッチ/マウス両対応

#### デスクトップ（1024px以上）
- 3-4列グリッド
- ホバーエフェクト
- 大きな画像表示

## 5. パフォーマンス設計

### 5.1 画像最適化
- Next.js Image コンポーネント使用
- WebP変換
- 遅延読み込み
- レスポンシブ画像

### 5.2 コード最適化
- コンポーネント分割
- React.memo活用
- 不要な再レンダリング防止

### 5.3 バンドル最適化
- Tree shaking
- コード分割
- Turbopack活用

## 6. 多言語機能設計

### 6.1 言語管理
```typescript
interface LanguageContext {
  currentLanguage: 'ja' | 'en';
  setLanguage: (lang: 'ja' | 'en') => void;
  t: (key: string) => string;
}
```

### 6.2 永続化
- LocalStorage使用
- ブラウザ言語自動検出
- デフォルト: 英語

### 6.3 切り替え機能
- ヘッダーに切り替えボタン
- モバイルメニューにも配置
- 即座に反映

## 7. アクセシビリティ設計

### 7.1 キーボードナビゲーション
- Tab順序の適切な設定
- Focus表示の実装

### 7.2 スクリーンリーダー対応
- alt属性の適切な設定
- aria-labelの使用
- セマンティックHTML

### 7.3 色彩・コントラスト
- WCAG AA準拠
- 十分なコントラスト比
- 色のみに依存しない情報提示

## 8. SEO設計

### 8.1 メタデータ
- title, description設定
- OGP設定
- 構造化データ

### 8.2 URL設計
- シンプルな構造
- 適切なheading階層

## 9. 実装方針

### 9.1 段階的実装
1. 基本レイアウト・ナビゲーション
2. ヒーローセクション
3. 各コンテンツセクション
4. 多言語機能
5. 最適化・仕上げ

### 9.2 品質管理
- TypeScript strict mode
- ESLint設定
- Prettier設定
- テスト（必要に応じて）

### 9.3 デプロイ準備
- ビルド最適化
- 画像最適化
- パフォーマンスチェック