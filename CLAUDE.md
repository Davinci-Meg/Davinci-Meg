# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
｜-進捗共有
## 守ってほしいこと
- 基本的なやりとりは日本語で行なってください。
- コメントは日本語で書いてください。

## タスク実行の4段階フロー

### 1. 要件定義
- `.claude_workflow/complete.md`が存在すれば参照
- 目的の明確化、現状把握、成功基準の設定
- `.claude_workflow/requirements.md`に文書化
- **必須確認**: 「要件定義フェーズが完了しました。設計フェーズに進んでよろしいですか？」

### 2. 設計
- **必ず`.claude_workflow/requirements.md`を読み込んでから開始**
- アプローチ検討、実施手順決定、問題点の特定
- `.claude_workflow/design.md`に文書化
- **必須確認**: 「設計フェーズが完了しました。タスク化フェーズに進んでよろしいですか？」

### 3. タスク化
- **必ず`.claude_workflow/design.md`を読み込んでから開始**
- タスクを実行可能な単位に分解、優先順位設定
- `.claude_workflow/tasks.md`に文書化
- **必須確認**: 「タスク化フェーズが完了しました。実行フェーズに進んでよろしいですか？」

### 4. 実行
- **必ず`.claude_workflow/tasks.md`を読み込んでから開始**
- タスクを順次実行、進捗を`.claude_workflow/tasks.md`に更新
- 各タスク完了時に報告
- 各機能の実装後、必ず`dev_daiary/yyyy-mm-dd_hhmm.md`の形式で開発日誌を作成してください。内容は以下のとおりです。
    - **日付**: yyyy-mm-dd hh:mm
        - 現在の日時を取得してください。
    - **作業内容**:
        - 何をしたか
        - どのような問題が発生したか
        - どのように解決したか
    - **次回の予定**: 
    - **感想**: 開発の進捗や学び
    - **気分**: 実装を進めて思ったことなど
    - **愚痴**: 指示した人間や既存のソースコードなどについて思ったこと
    なお、各機能の実装前には必ずこの日誌の作業内容や次回の予定を確認してください。

## 実行ルール
### ファイル操作
- 新規タスク開始時: 既存ファイルの**内容を全て削除して白紙から書き直す**
- ファイル編集前に必ず現在の内容を確認

### フェーズ管理
- 各段階開始時: 「前段階のmdファイルを読み込みました」と報告
- 各段階の最後に、期待通りの結果になっているか確認
- 要件定義なしにいきなり実装を始めない

### 実行方針
- 段階的に進める: 一度に全てを変更せず、小さな変更を積み重ねる
- 複数のタスクを同時並行で進めない
- エラーは解決してから次へ進む
- エラーを無視して次のステップに進まない
- 指示にない機能を勝手に追加しない

## Project Overview

This is a portfolio website for Megumu Isshiki built with Next.js 15, TypeScript, and Tailwind CSS. The project uses the App Router architecture and is styled with Tailwind CSS v4.

## Development Commands

```bash
# Install dependencies (using pnpm)
pnpm install

# Run development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Project Structure

- **Next.js 15 App Router**: All pages and layouts are in `src/app/`
- **TypeScript Configuration**: Strict mode enabled with path alias `@/*` mapping to `src/*`
- **Styling**: Tailwind CSS v4 with PostCSS configuration
- **Font System**: Uses Geist and Geist Mono fonts from Google Fonts

## Key Technical Details

### Technology Stack
- Next.js 15.4.5 with App Router
- React 19.1.0
- TypeScript with strict mode
- Tailwind CSS v4
- ESLint v9 with Next.js configuration

### Important Files
- `src/app/layout.tsx`: Root layout with font configuration and metadata
- `src/app/page.tsx`: Main landing page component
- `src/app/globals.css`: Global styles and Tailwind directives

### Development Notes
- The project uses Turbopack for faster development builds (`--turbopack` flag)
- No test framework is currently configured
- Portfolio content (projects, awards, publications) will be added to replace the current starter template
- Previous portfolio versions are stored in `docs/previous-version/` and `docs/previous-version-english/`