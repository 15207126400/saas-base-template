import { type MetadataRoute } from "next";
import { env } from "@/env";

export default function sitemap(): MetadataRoute.Sitemap {
  // 使用环境变量中的域名
  const domain = `https://${env.DOMAIN}`;
  
  const routes = [
    "",
  ];

  // 根据实际的语言文件定义支持的语言
  const locales = [
    "ar",    // Arabic
    "de",    // German
    "en",    // English
    "es",    // Spanish
    "fr",    // French
    "hi",    // Hindi
    "id",    // Indonesian
    "it",    // Italian
    "ja",    // Japanese
    "ko",    // Korean
    "ms",    // Malay
    "pt",    // Portuguese
    "ru",    // Russian
    "th",    // Thai
    "vi",    // Vietnamese
    "zh",    // Simplified Chinese
    "zh-t",  // Traditional Chinese
  ];

  return routes.flatMap((route) =>
    locales.map((locale) => {
      // 英语作为默认语言，不需要语言前缀
      if (locale === "en") {
        return {
          url: `${domain}${route}`,
          lastModified: new Date(),
          changeFrequency: 'weekly' as const,
          priority: route === "" ? 1 : 0.8,
        };
      }

      // 其他语言需要添加语言前缀
      return {
        url: `${domain}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === "" ? 1 : 0.8,
      };
    })
  );
} 