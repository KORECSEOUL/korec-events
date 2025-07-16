import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'KOREC Event',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/GNUHONG' },
      ],
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css',
          },
        },
        {
          tag: 'style',
          content: `
            html, body, * {
              font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif !important;
            }
          `,
        },
        {
          tag: 'script',
          content: `
            (function(w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
              var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
              j.async = true;
              j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-5HRKZRKJ');
          `,
        },
        {
          tag: 'script',
          content: `
            document.addEventListener('astro:page-load', () => {
              if (typeof window !== 'undefined') {
                const urlParams = new URLSearchParams(window.location.search);
                const utmData = {
                  'utm_source': urlParams.get('utm_source') || '(not set)',
                  'utm_medium': urlParams.get('utm_medium') || '(not set)',
                  'utm_campaign': urlParams.get('utm_campaign') || '(not set)'
                };
                window.dataLayer = window.dataLayer || [];
                if (!window.dataLayer.some(item => item.utm_source === utmData.utm_source)) {
                  window.dataLayer.push(utmData);
                  console.log('dataLayer UTM on page load:', utmData);
                }
              }
            });
          `,
        },
      ],
    }),
  ],
});