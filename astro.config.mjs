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
        // 기존 GA4 스크립트
        {
          tag: 'script',
          attrs: {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-1RGL93F9RE'
          },
        },
        {
          tag: 'script',
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1RGL93F9RE');
          `,
        },
        // GTM 스크립트 (기존 코드 유지)
        {
          tag: 'script',
          content: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5HRKZRKJ');
            // UTM 파라미터를 dataLayer에 푸시
            (function() {
              const urlParams = new URLSearchParams(window.location.search);
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                'utm_source': urlParams.get('utm_source') || '(not set)',
                'utm_medium': urlParams.get('utm_medium') || '(not set)',
                'utm_campaign': urlParams.get('utm_campaign') || '(not set)'
              });
            })();
          `,
        },
      ],
    }),
  ],
});