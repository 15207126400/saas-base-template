<p align="center">
  <img src="public/logo.svg" alt="Ivan Logo" width="80" height="80" style="border-radius: 50%;" />
</p>

# Ivan 落地页

[English](./README.md) | [中文](./README.zh.md)

一个使用 Next.js、Tailwind CSS 和 next-intl 构建的现代化多语言落地页模板。

## 特性

- 🌐 多语言支持（17种语言）
- 🎨 基于 Tailwind CSS 和 Shadcn UI 的现代界面
- ⚡ 使用 Next.js 14 App Router 构建
- 📱 完全响应式设计
- 🔍 SEO 优化
- 🛠 TypeScript 支持

## 性能指标

PageSpeed Insights 性能评分：

**桌面端性能：**
![桌面端性能](/public/1.png)

**移动端性能：**
![移动端性能](/public/2.png)

这些评分展示了本模板在桌面端和移动端的出色性能优化。

## 部署方式

### Vercel 部署（推荐）

使用 [Vercel 平台](https://vercel.com) 是部署 Next.js 应用最简单的方式。

[![使用 Vercel 部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FIvan%2Fhorizon-wing-landing-page)

1. 点击上方的"部署"按钮
2. 导入你的 GitHub 仓库
3. Vercel 将自动检测 Next.js 并配置构建设置
4. 你的网站将部署到全球 CDN 网络，并启用 HTTPS

### 本地开发

首先，全局安装 pnpm（仅需安装一次）：

```bash
# macOS - 推荐方式
# 1. 如果还没安装 Node.js，先安装（使用 Homebrew）
brew install node

# 2. 然后使用 npm 安装 pnpm
npm install -g pnpm

# 验证安装
pnpm --version
```

然后，运行开发服务器：

```bash
# 克隆仓库
git clone https://github.com/Ivan/horizon-wing-landing-page.git

# 进入项目目录
cd horizon-wing-landing-page

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

### 使用 Docker

```bash
# .env 配置文件
cp .env.example .env

# docker-compose 启动项目
docker-compose up -d

# 访问地址
# http://localhost:3000
```

## 项目结构

```shell
horizon-wing-landing-page/
├── src/
│   ├── app/              # Next.js 应用路由
│   │   ├── [locale]/    # 国际化路由
│   │   └── layout.tsx   # 根布局
│   ├── components/      # React 组件
│   │   ├── ui/         # UI 组件
│   │   └── sections/   # 页面区块组件
│   ├── styles/         # 全局样式
│   └── lib/            # 工具函数
├── public/             # 静态资源
├── messages/          # 国际化文件
└── tailwind.config.ts # Tailwind 配置
```

## 核心组件

- `Hero` - 响应式主页横幅
- `Feature` - 特性展示网格
- `Testimonial` - 用户评价展示
- `Pricing` - 价格方案展示
- `FAQ` - 可折叠的常见问题
- `CTA` - 引导用户行动组件
- `Footer` - 导航和社交链接

## 国际化

目前支持 17 种语言，包括：

- 阿拉伯语 (العربية)
- 德语 (Deutsch)
- 英语 (English)
- 西班牙语 (Español)
- 法语 (Français)
- 印地语 (हिन्दी)
- 印尼语 (Bahasa Indonesia)
- 意大利语 (Italiano)
- 日语 (日本語)
- 韩语 (한국어)
- 马来语 (Bahasa Melayu)
- 葡萄牙语 (Português)
- 俄语 (Русский)
- 泰语 (ไทย)
- 越南语 (Tiếng Việt)
- 繁体中文
- 简体中文

## 技术栈

- [Next.js 14](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [next-intl](https://next-intl-docs.vercel.app/)

## 许可证

MIT License © 2024-PRESENT Ivan

## 贡献

欢迎提交 Pull Request 来改进这个项目！

## 联系我们

- 问题反馈：[GitHub Issues](https://github.com/Ivan/horizon-wing-landing-page/issues)
- 邮件联系：<Ivantech@gmail.com>

## 支持项目

如果这个项目对你有帮助，请给它一个 star ⭐️

<a href="https://www.uneed.best/tool/Ivan-landing-page">
  <img src="https://www.uneed.best/EMBED3.png" alt="Uneed Embed Badge" width="200" height="auto" />
</a>
