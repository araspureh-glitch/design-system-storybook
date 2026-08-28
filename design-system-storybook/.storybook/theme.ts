import { create } from '@storybook/theming/create';

// Animated SVG logo with pulsing H icon, text shimmer, and snake border
const animatedLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50" width="150" height="38">
  <defs>
    <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#67b7be" />
      <stop offset="100%" stop-color="#30848d" />
    </linearGradient>
    <linearGradient id="snake-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8fd8df" />
      <stop offset="50%" stop-color="#67b7be" />
      <stop offset="100%" stop-color="#30848d" />
    </linearGradient>
    <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0">
        <animate attributeName="offset" values="-0.5;1.5" dur="3s" repeatCount="indefinite" />
      </stop>
      <stop offset="15%" stop-color="#ffffff" stop-opacity="0.25">
        <animate attributeName="offset" values="-0.35;1.65" dur="3s" repeatCount="indefinite" />
      </stop>
      <stop offset="30%" stop-color="#ffffff" stop-opacity="0">
        <animate attributeName="offset" values="-0.2;1.8" dur="3s" repeatCount="indefinite" />
      </stop>
    </linearGradient>
  </defs>
  <style>
    @keyframes icon-pulse {
      0%, 100% { opacity: 1; filter: drop-shadow(0 0 0px rgba(103,183,190,0)); }
      50% { opacity: 0.85; filter: drop-shadow(0 0 6px rgba(103,183,190,0.6)); }
    }
    @keyframes snake-crawl {
      0% { stroke-dashoffset: 120; }
      100% { stroke-dashoffset: 0; }
    }
    .icon-bar {
      animation: icon-pulse 2.8s ease-in-out infinite;
    }
    .icon-bar:nth-child(2) { animation-delay: 0.3s; }
    .icon-bar:nth-child(3) { animation-delay: 0.6s; }
    .snake-border {
      fill: none;
      stroke: url(#snake-grad);
      stroke-width: 1.5;
      stroke-dasharray: 20 100;
      stroke-linecap: round;
      animation: snake-crawl 3s linear infinite;
    }
  </style>
  <g>
    <rect class="icon-bar" x="10" y="8" width="10" height="34" rx="4" fill="url(#logo-grad)" />
    <rect class="icon-bar" x="30" y="8" width="10" height="34" rx="4" fill="url(#logo-grad)" />
    <rect class="icon-bar" x="15" y="20" width="20" height="10" rx="3" fill="url(#logo-grad)" />
  </g>
  <rect class="snake-border" x="6" y="4" width="38" height="42" rx="8" />
  <text x="55" y="32" font-family="'Inter', sans-serif" font-weight="800" font-size="20" fill="#ffffff" letter-spacing="1">himu</text>
  <text x="55" y="32" font-family="'Inter', sans-serif" font-weight="800" font-size="20" fill="url(#shimmer)" letter-spacing="1">himu</text>
  <text x="115" y="32" font-family="'Inter', sans-serif" font-weight="400" font-size="16" fill="#67b7be" letter-spacing="0.5">Design</text>
</svg>`;

const encodedLogo = `data:image/svg+xml;base64,${typeof btoa !== 'undefined' ? btoa(animatedLogoSvg) : Buffer.from(animatedLogoSvg).toString('base64')}`;

export default create({
  base: 'dark',
  brandTitle: 'himu Design',
  brandUrl: 'https://github.com/araspureh-glitch/design-system-storybook',
  brandImage: encodedLogo,
  brandTarget: '_self',
});
