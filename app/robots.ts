import { MetadataRoute } from 'next';
import { CLIENT_DATA } from '@/lib/constants';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      // PRE-SALE: disallow all crawlers until site is live and client data is filled
      disallow: '/',
    },
    sitemap: `${CLIENT_DATA.DOMAIN}/sitemap.xml`,
  };
}
