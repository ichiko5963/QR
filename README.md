# QR Designer v3.0 - AI駆動型QRコード生成プラットフォーム

> URLを入力するだけで、AIが最適でおしゃれなQRコードを自動生成

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Latest-green)](https://supabase.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

---

## 🎯 プロジェクト概要

QR Designer v3.0は、次世代のAI駆動型QRコード生成プラットフォームです。URLを入力するだけで、Google Gemini APIがそのサイトのコンテンツを理解し、最適なQRコードデザインを**自動で4パターン生成**します。

### ユニークな特徴

- 🤖 **AI自動デザイン**: 恐竜サイト → 恐竜モチーフのQRコード
- ⚡ **4秒で生成**: URL入力 → 4パターンのデザイン提案
- 💰 **コスト最適化**: Gemini Pro使用でAPI費用を90%削減
- 🔒 **セキュア**: Supabase RLS + レート制限
- 📊 **履歴管理**: 認証ユーザーは無制限アクセス履歴

---

## 🚀 クイックスタート

### 前提条件

- Node.js 20.x 以上
- npm または yarn
- Google Gemini API キー
- Supabaseアカウント

### インストール

```bash
# 依存パッケージをインストール
npm install

# 環境変数を設定
cp .env.example .env.local
# .env.localを編集してAPIキーを設定
```

### 環境変数設定

```.env.local

# Google Gemini API
GOOGLE_GEMINI_API_KEY=your_gemini_api_key

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### データベースセットアップ

1. Supabaseプロジェクトを作成
2. SQL Editorで`docs/04_BACKEND_SERVICES/SUPABASE_AUTH_DATABASE.md`のSQLを実行
3. Authentication → Providers → Google OAuth を有効化

### 開発サーバー起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開く

---

## 📁 プロジェクト構造

```
qr-designer/
├── app/                        # Next.js App Router
│   ├── components/             # Reactコンポーネント
│   ├── api/                    # APIルート
│   ├── history/                # 履歴ページ
│   ├── layout.tsx              # ルートレイアウト
│   └── page.tsx                # ホームページ
├── lib/                        # ビジネスロジック
│   ├── ai/                     # AI統合
│   ├── qr/                     # QR生成
│   ├── scraper/                # スクレイピング
│   └── supabase/               # Supabase
├── types/                      # TypeScript型定義
├── docs/                       # 技術ドキュメント
├── .env.local                  # 環境変数（git無視）
├── next.config.ts              # Next.js設定
└── README.md
```

---

## 🛠️ 技術スタック

### フロントエンド
- **Next.js 16** - React Server Components
- **TypeScript 5** - 型安全性
- **Tailwind CSS 4** - スタイリング
- **Framer Motion** - アニメーション

### バックエンド
- **Next.js API Routes** - サーバーレス関数
- **Supabase** - 認証・データベース
- **PostgreSQL** - リレーショナルDB

### AI & ML
- **Google Gemini Pro** - コンテンツ分析・デザイン生成
- **Cheerio** - HTMLパース

### QR & 画像処理
- **qrcode** - QRコード生成
- **Sharp** - 高速画像処理

---

## 📖 ドキュメント

詳細な技術ドキュメントは`docs/`ディレクトリにあります:

### アーキテクチャ & 設計
- [エンタープライズシステム設計](docs/00_MASTER_ARCHITECTURE/ENTERPRISE_SYSTEM_DESIGN.md)

### フロントエンド
- [Next.js 14 App Router完全実装ガイド](docs/01_NEXTJS_IMPLEMENTATION/APP_ROUTER_COMPLETE_GUIDE.md)
- [フロントエンドコンポーネント設計](docs/08_FRONTEND/COMPONENT_ARCHITECTURE_GUIDE.md)

### バックエンド & AI
- [Gemini API統合](docs/02_AI_INTEGRATION/GEMINI_API_INTEGRATION.md)
- [QRコード生成エンジン](docs/03_QR_GENERATION/QR_ENGINE_IMPLEMENTATION.md)
- [Supabase認証とデータベース](docs/04_BACKEND_SERVICES/SUPABASE_AUTH_DATABASE.md)

### セキュリティ & 品質
- [セキュリティ＆コンプライアンス](docs/05_SECURITY/SECURITY_COMPLIANCE_GUIDE.md)
- [テスト＆品質保証](docs/07_TESTING/TESTING_QA_GUIDE.md)

### 運用
- [デプロイメント＆運用ガイド](docs/06_DEPLOYMENT/COMPLETE_DEPLOYMENT_GUIDE.md)

### リファレンス
- [マスターURLリファレンス (90+ URLs)](docs/99_REFERENCE/MASTER_URL_REFERENCE.md)

---

## 🎨 主要機能

### 1. AI自動デザイン生成

URLからコンテンツを理解し、4パターンのデザインを自動生成

### 2. 高度なカスタマイズ

- サイズ: 256px〜4096px
- 角の丸み: 0%〜50%
- ロゴサイズ: 10%〜35%
- エラー訂正レベル: L/M/Q/H
- フォーマット: PNG/JPEG/SVG/PDF

### 3. 認証とレート制限

- 無料プラン: 1週間に1回生成
- 有料プラン ($4/月): 無制限生成
- Google OAuth: ワンクリック認証

---

## 🚢 デプロイメント

### Vercel（推奨）

```bash
# Vercel CLIインストール
npm install -g vercel

# デプロイ
vercel --prod
```

詳細は[デプロイメントガイド](docs/06_DEPLOYMENT/COMPLETE_DEPLOYMENT_GUIDE.md)を参照

---

## 🤝 コントリビューション

貢献を歓迎します!

1. Forkする
2. 機能ブランチを作成
3. 変更をコミット
4. Pull Requestを作成

---

## 📝 ライセンス

MIT License

---

**Built with ❤️ using Next.js 16 and AI**
