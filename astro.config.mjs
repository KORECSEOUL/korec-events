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
        // ✅ GTM 스크립트만 유지, GA4 직접 삽입 제거 (중복 추적 방지)
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
              // GTM 로드 후 UTM 파라미터를 dataLayer에 푸시
              j.onload = function() {
                const urlParams = new URLSearchParams(window.location.search);
                const utmData = {
                  'utm_source': urlParams.get('utm_source') || '(not set)',
                  'utm_medium': urlParams.get('utm_medium') || '(not set)',
                  'utm_campaign': urlParams.get('utm_campaign') || '(not set)'
                };
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push(utmData);
                // 디버깅 로그 추가
                console.log('dataLayer UTM:', utmData);
              };
            })(window, document, 'script', 'dataLayer', 'GTM-5HRKZRKJ');
          `,
        },
      ],
    }),
  ],
});