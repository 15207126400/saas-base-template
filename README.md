<p align="center">
  <img src="public/logo.svg" alt="Ivan Logo" width="80" height="80" style="border-radius: 50%;" />
</p>

# Ivan Landing Page

[English](./README.md) | [中文](./README.zh.md)

A modern landing page template built with Next.js, Tailwind CSS, and next-intl for internationalization.

## Features

- 🌐 Multi-language support (17 languages)
- 🎨 Modern UI with Tailwind CSS and Shadcn UI
- ⚡ Built with Next.js 14 App Router
- 📱 Fully responsive design
- 🔍 SEO optimized
- 🛠 TypeScript support

## Performance

PageSpeed Insights performance metrics:

**Desktop Performance:**
![Desktop Performance](/public/1.png)

**Mobile Performance:**
![Mobile Performance](/public/2.png)

These scores demonstrate the template's excellent performance optimization across both desktop and mobile devices.

## Deployment

### Deploy with Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FIvan%2Fhorizon-wing-landing-page)

1. Click the "Deploy" button above
2. Import your GitHub repository
3. Vercel will automatically detect Next.js and configure the build settings
4. Your site will be deployed to a global CDN with HTTPS enabled

### Local Development

First, install pnpm globally (one-time setup):

```bash
# macOS - Recommended
# 1. Install Node.js first if you haven't (using Homebrew)
brew install node

# 2. Then install pnpm using npm
npm install -g pnpm

# Verify installation
pnpm --version
```

Then, run the development server:

```bash
# Clone the repository
git clone https://github.com/Ivan/horizon-wing-landing-page.git

# Navigate to the project
cd horizon-wing-landing-page

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Using Docker

```bash
# .env config file
cp .env.example .env

# docker-compose up project
docker-compose up -d

# Access address
# http://localhost:3000
```

## Project Structure

```shell
horizon-wing-landing-page/
├── src/
│   ├── app/              # Next.js app routes
│   │   ├── [locale]/    # i18n routes
│   │   └── layout.tsx   # Root layout
│   ├── components/      # React components
│   │   ├── ui/         # UI components
│   │   └── sections/   # Page sections
│   ├── styles/         # Global styles
│   └── lib/            # Utilities
├── public/             # Static assets
├── messages/          # i18n messages
└── tailwind.config.ts # Tailwind config
```

## Core Components

- `Hero` - Responsive hero section
- `Feature` - Feature grid showcase
- `Testimonial` - Customer testimonials
- `Pricing` - Pricing plans
- `FAQ` - Collapsible FAQ section
- `CTA` - Call-to-action components
- `Footer` - Navigation and social links

## Internationalization

Currently supports 17 languages including:

- Arabic (العربية)
- German (Deutsch)
- English
- Spanish (Español)
- French (Français)
- Hindi (हिन्दी)
- Indonesian (Bahasa Indonesia)
- Italian (Italiano)
- Japanese (日本語)
- Korean (한국어)
- Malay (Bahasa Melayu)
- Portuguese (Português)
- Russian (Русский)
- Thai (ไทย)
- Vietnamese (Tiếng Việt)
- Traditional Chinese (中文繁體)
- Simplified Chinese (中文简体)

## Tech Stack

- [Next.js 14](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [next-intl](https://next-intl-docs.vercel.app/)

## License

MIT License © 2024-PRESENT Ivan

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

- Issues: [GitHub Issues](https://github.com/Ivan/horizon-wing-landing-page/issues)
- Email: <Ivantech@gmail.com>

## Support

If you find this project helpful, please give it a star ⭐️

<a href="https://www.uneed.best/tool/Ivan-landing-page">
  <img src="https://www.uneed.best/EMBED3.png" alt="Uneed Embed Badge" width="200" height="auto" />
</a>
