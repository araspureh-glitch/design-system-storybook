import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

const colorFamilies = {
  "base": [
    {
      "name": "base / black",
      "cssVarName": "--uedp-base-black",
      "hex": "#000000"
    },
    {
      "name": "base / white",
      "cssVarName": "--uedp-base-white",
      "hex": "#FFFFFF"
    }
  ],
  "slate": [
    {
      "name": "slate / 50",
      "cssVarName": "--uedp-slate-50",
      "hex": "#F8FAFC"
    },
    {
      "name": "slate / 100",
      "cssVarName": "--uedp-slate-100",
      "hex": "#F1F5F9"
    },
    {
      "name": "slate / 200",
      "cssVarName": "--uedp-slate-200",
      "hex": "#E2E8F0"
    },
    {
      "name": "slate / 300",
      "cssVarName": "--uedp-slate-300",
      "hex": "#CBD5E1"
    },
    {
      "name": "slate / 400",
      "cssVarName": "--uedp-slate-400",
      "hex": "#94A3B8"
    },
    {
      "name": "slate / 500",
      "cssVarName": "--uedp-slate-500",
      "hex": "#64748B"
    },
    {
      "name": "slate / 600",
      "cssVarName": "--uedp-slate-600",
      "hex": "#475569"
    },
    {
      "name": "slate / 700",
      "cssVarName": "--uedp-slate-700",
      "hex": "#334155"
    },
    {
      "name": "slate / 800",
      "cssVarName": "--uedp-slate-800",
      "hex": "#1E293B"
    },
    {
      "name": "slate / 900",
      "cssVarName": "--uedp-slate-900",
      "hex": "#0F172A"
    },
    {
      "name": "slate / 950",
      "cssVarName": "--uedp-slate-950",
      "hex": "#020617"
    }
  ],
  "gray": [
    {
      "name": "gray / 50",
      "cssVarName": "--uedp-gray-50",
      "hex": "#F9FAFB"
    },
    {
      "name": "gray / 100",
      "cssVarName": "--uedp-gray-100",
      "hex": "#F3F4F6"
    },
    {
      "name": "gray / 200",
      "cssVarName": "--uedp-gray-200",
      "hex": "#E5E7EB"
    },
    {
      "name": "gray / 300",
      "cssVarName": "--uedp-gray-300",
      "hex": "#D1D5DB"
    },
    {
      "name": "gray / 400",
      "cssVarName": "--uedp-gray-400",
      "hex": "#9CA3AF"
    },
    {
      "name": "gray / 500",
      "cssVarName": "--uedp-gray-500",
      "hex": "#6B7280"
    },
    {
      "name": "gray / 600",
      "cssVarName": "--uedp-gray-600",
      "hex": "#4B5563"
    },
    {
      "name": "gray / 700",
      "cssVarName": "--uedp-gray-700",
      "hex": "#374151"
    },
    {
      "name": "gray / 800",
      "cssVarName": "--uedp-gray-800",
      "hex": "#1F2937"
    },
    {
      "name": "gray / 900",
      "cssVarName": "--uedp-gray-900",
      "hex": "#111827"
    },
    {
      "name": "gray / 950",
      "cssVarName": "--uedp-gray-950",
      "hex": "#030712"
    }
  ],
  "zinc": [
    {
      "name": "zinc / 50",
      "cssVarName": "--uedp-zinc-50",
      "hex": "#FAFAFA"
    },
    {
      "name": "zinc / 100",
      "cssVarName": "--uedp-zinc-100",
      "hex": "#F4F4F5"
    },
    {
      "name": "zinc / 200",
      "cssVarName": "--uedp-zinc-200",
      "hex": "#E4E4E7"
    },
    {
      "name": "zinc / 300",
      "cssVarName": "--uedp-zinc-300",
      "hex": "#D4D4D8"
    },
    {
      "name": "zinc / 400",
      "cssVarName": "--uedp-zinc-400",
      "hex": "#A1A1AA"
    },
    {
      "name": "zinc / 500",
      "cssVarName": "--uedp-zinc-500",
      "hex": "#71717A"
    },
    {
      "name": "zinc / 600",
      "cssVarName": "--uedp-zinc-600",
      "hex": "#52525B"
    },
    {
      "name": "zinc / 700",
      "cssVarName": "--uedp-zinc-700",
      "hex": "#3F3F46"
    },
    {
      "name": "zinc / 800",
      "cssVarName": "--uedp-zinc-800",
      "hex": "#27272A"
    },
    {
      "name": "zinc / 900",
      "cssVarName": "--uedp-zinc-900",
      "hex": "#18181B"
    },
    {
      "name": "zinc / 950",
      "cssVarName": "--uedp-zinc-950",
      "hex": "#09090B"
    }
  ],
  "neutral": [
    {
      "name": "neutral / 50",
      "cssVarName": "--uedp-neutral-50",
      "hex": "#FAFAFA"
    },
    {
      "name": "neutral / 100",
      "cssVarName": "--uedp-neutral-100",
      "hex": "#F5F5F5"
    },
    {
      "name": "neutral / 200",
      "cssVarName": "--uedp-neutral-200",
      "hex": "#E5E5E5"
    },
    {
      "name": "neutral / 300",
      "cssVarName": "--uedp-neutral-300",
      "hex": "#D4D4D4"
    },
    {
      "name": "neutral / 400",
      "cssVarName": "--uedp-neutral-400",
      "hex": "#A3A3A3"
    },
    {
      "name": "neutral / 500",
      "cssVarName": "--uedp-neutral-500",
      "hex": "#737373"
    },
    {
      "name": "neutral / 600",
      "cssVarName": "--uedp-neutral-600",
      "hex": "#525252"
    },
    {
      "name": "neutral / 700",
      "cssVarName": "--uedp-neutral-700",
      "hex": "#404040"
    },
    {
      "name": "neutral / 800",
      "cssVarName": "--uedp-neutral-800",
      "hex": "#262626"
    },
    {
      "name": "neutral / 900",
      "cssVarName": "--uedp-neutral-900",
      "hex": "#171717"
    },
    {
      "name": "neutral / 950",
      "cssVarName": "--uedp-neutral-950",
      "hex": "#0A0A0A"
    }
  ],
  "stone": [
    {
      "name": "stone / 50",
      "cssVarName": "--uedp-stone-50",
      "hex": "#FAFAF9"
    },
    {
      "name": "stone / 100",
      "cssVarName": "--uedp-stone-100",
      "hex": "#F5F5F4"
    },
    {
      "name": "stone / 200",
      "cssVarName": "--uedp-stone-200",
      "hex": "#E7E5E4"
    },
    {
      "name": "stone / 300",
      "cssVarName": "--uedp-stone-300",
      "hex": "#D6D3D1"
    },
    {
      "name": "stone / 400",
      "cssVarName": "--uedp-stone-400",
      "hex": "#A8A29E"
    },
    {
      "name": "stone / 500",
      "cssVarName": "--uedp-stone-500",
      "hex": "#78716C"
    },
    {
      "name": "stone / 600",
      "cssVarName": "--uedp-stone-600",
      "hex": "#57534E"
    },
    {
      "name": "stone / 700",
      "cssVarName": "--uedp-stone-700",
      "hex": "#44403C"
    },
    {
      "name": "stone / 800",
      "cssVarName": "--uedp-stone-800",
      "hex": "#292524"
    },
    {
      "name": "stone / 900",
      "cssVarName": "--uedp-stone-900",
      "hex": "#1C1917"
    },
    {
      "name": "stone / 950",
      "cssVarName": "--uedp-stone-950",
      "hex": "#0C0A09"
    }
  ],
  "red": [
    {
      "name": "red / 50",
      "cssVarName": "--uedp-red-50",
      "hex": "#FEF2F2"
    },
    {
      "name": "red / 100",
      "cssVarName": "--uedp-red-100",
      "hex": "#FEE2E2"
    },
    {
      "name": "red / 200",
      "cssVarName": "--uedp-red-200",
      "hex": "#FECACA"
    },
    {
      "name": "red / 300",
      "cssVarName": "--uedp-red-300",
      "hex": "#FCA5A5"
    },
    {
      "name": "red / 400",
      "cssVarName": "--uedp-red-400",
      "hex": "#F87171"
    },
    {
      "name": "red / 500",
      "cssVarName": "--uedp-red-500",
      "hex": "#EF4444"
    },
    {
      "name": "red / 600",
      "cssVarName": "--uedp-red-600",
      "hex": "#DC2626"
    },
    {
      "name": "red / 700",
      "cssVarName": "--uedp-red-700",
      "hex": "#B91C1C"
    },
    {
      "name": "red / 800",
      "cssVarName": "--uedp-red-800",
      "hex": "#991B1B"
    },
    {
      "name": "red / 900",
      "cssVarName": "--uedp-red-900",
      "hex": "#7F1D1D"
    },
    {
      "name": "red / 950",
      "cssVarName": "--uedp-red-950",
      "hex": "#450A0A"
    }
  ],
  "orange": [
    {
      "name": "orange / 50",
      "cssVarName": "--uedp-orange-50",
      "hex": "#FFF7ED"
    },
    {
      "name": "orange / 100",
      "cssVarName": "--uedp-orange-100",
      "hex": "#FFEDD5"
    },
    {
      "name": "orange / 200",
      "cssVarName": "--uedp-orange-200",
      "hex": "#FED7AA"
    },
    {
      "name": "orange / 300",
      "cssVarName": "--uedp-orange-300",
      "hex": "#FDBA74"
    },
    {
      "name": "orange / 400",
      "cssVarName": "--uedp-orange-400",
      "hex": "#FB923C"
    },
    {
      "name": "orange / 500",
      "cssVarName": "--uedp-orange-500",
      "hex": "#F97316"
    },
    {
      "name": "orange / 600",
      "cssVarName": "--uedp-orange-600",
      "hex": "#EA580C"
    },
    {
      "name": "orange / 700",
      "cssVarName": "--uedp-orange-700",
      "hex": "#C2410C"
    },
    {
      "name": "orange / 800",
      "cssVarName": "--uedp-orange-800",
      "hex": "#9A3412"
    },
    {
      "name": "orange / 900",
      "cssVarName": "--uedp-orange-900",
      "hex": "#7C2D12"
    },
    {
      "name": "orange / 950",
      "cssVarName": "--uedp-orange-950",
      "hex": "#431407"
    }
  ],
  "amber": [
    {
      "name": "amber / 50",
      "cssVarName": "--uedp-amber-50",
      "hex": "#FFFBEB"
    },
    {
      "name": "amber / 100",
      "cssVarName": "--uedp-amber-100",
      "hex": "#FEF3C7"
    },
    {
      "name": "amber / 200",
      "cssVarName": "--uedp-amber-200",
      "hex": "#FDE68A"
    },
    {
      "name": "amber / 300",
      "cssVarName": "--uedp-amber-300",
      "hex": "#FCD34D"
    },
    {
      "name": "amber / 400",
      "cssVarName": "--uedp-amber-400",
      "hex": "#FBBF24"
    },
    {
      "name": "amber / 500",
      "cssVarName": "--uedp-amber-500",
      "hex": "#F59E0B"
    },
    {
      "name": "amber / 600",
      "cssVarName": "--uedp-amber-600",
      "hex": "#D97706"
    },
    {
      "name": "amber / 700",
      "cssVarName": "--uedp-amber-700",
      "hex": "#B45309"
    },
    {
      "name": "amber / 800",
      "cssVarName": "--uedp-amber-800",
      "hex": "#92400E"
    },
    {
      "name": "amber / 900",
      "cssVarName": "--uedp-amber-900",
      "hex": "#78350F"
    },
    {
      "name": "amber / 950",
      "cssVarName": "--uedp-amber-950",
      "hex": "#451A03"
    }
  ],
  "yellow": [
    {
      "name": "yellow / 50",
      "cssVarName": "--uedp-yellow-50",
      "hex": "#FEFCE8"
    },
    {
      "name": "yellow / 100",
      "cssVarName": "--uedp-yellow-100",
      "hex": "#FEF9C3"
    },
    {
      "name": "yellow / 200",
      "cssVarName": "--uedp-yellow-200",
      "hex": "#FEF08A"
    },
    {
      "name": "yellow / 300",
      "cssVarName": "--uedp-yellow-300",
      "hex": "#FDE047"
    },
    {
      "name": "yellow / 400",
      "cssVarName": "--uedp-yellow-400",
      "hex": "#FACC15"
    },
    {
      "name": "yellow / 500",
      "cssVarName": "--uedp-yellow-500",
      "hex": "#EAB308"
    },
    {
      "name": "yellow / 600",
      "cssVarName": "--uedp-yellow-600",
      "hex": "#CA8A04"
    },
    {
      "name": "yellow / 700",
      "cssVarName": "--uedp-yellow-700",
      "hex": "#A16207"
    },
    {
      "name": "yellow / 800",
      "cssVarName": "--uedp-yellow-800",
      "hex": "#854D0E"
    },
    {
      "name": "yellow / 900",
      "cssVarName": "--uedp-yellow-900",
      "hex": "#713F12"
    },
    {
      "name": "yellow / 950",
      "cssVarName": "--uedp-yellow-950",
      "hex": "#422006"
    }
  ],
  "lime": [
    {
      "name": "lime / 50",
      "cssVarName": "--uedp-lime-50",
      "hex": "#F7FEE7"
    },
    {
      "name": "lime / 100",
      "cssVarName": "--uedp-lime-100",
      "hex": "#ECFCCB"
    },
    {
      "name": "lime / 200",
      "cssVarName": "--uedp-lime-200",
      "hex": "#D9F99D"
    },
    {
      "name": "lime / 300",
      "cssVarName": "--uedp-lime-300",
      "hex": "#BEF264"
    },
    {
      "name": "lime / 400",
      "cssVarName": "--uedp-lime-400",
      "hex": "#A3E635"
    },
    {
      "name": "lime / 500",
      "cssVarName": "--uedp-lime-500",
      "hex": "#84CC16"
    },
    {
      "name": "lime / 600",
      "cssVarName": "--uedp-lime-600",
      "hex": "#65A30D"
    },
    {
      "name": "lime / 700",
      "cssVarName": "--uedp-lime-700",
      "hex": "#4D7C0F"
    },
    {
      "name": "lime / 800",
      "cssVarName": "--uedp-lime-800",
      "hex": "#3F6212"
    },
    {
      "name": "lime / 900",
      "cssVarName": "--uedp-lime-900",
      "hex": "#365314"
    },
    {
      "name": "lime / 950",
      "cssVarName": "--uedp-lime-950",
      "hex": "#111111"
    }
  ],
  "green": [
    {
      "name": "green / 50",
      "cssVarName": "--uedp-green-50",
      "hex": "#F0FDF4"
    },
    {
      "name": "green / 100",
      "cssVarName": "--uedp-green-100",
      "hex": "#DCFCE7"
    },
    {
      "name": "green / 200",
      "cssVarName": "--uedp-green-200",
      "hex": "#BBF7D0"
    },
    {
      "name": "green / 300",
      "cssVarName": "--uedp-green-300",
      "hex": "#86EFAC"
    },
    {
      "name": "green / 400",
      "cssVarName": "--uedp-green-400",
      "hex": "#4ADE80"
    },
    {
      "name": "green / 500",
      "cssVarName": "--uedp-green-500",
      "hex": "#22C55E"
    },
    {
      "name": "green / 600",
      "cssVarName": "--uedp-green-600",
      "hex": "#16A34A"
    },
    {
      "name": "green / 700",
      "cssVarName": "--uedp-green-700",
      "hex": "#15803D"
    },
    {
      "name": "green / 800",
      "cssVarName": "--uedp-green-800",
      "hex": "#166534"
    },
    {
      "name": "green / 900",
      "cssVarName": "--uedp-green-900",
      "hex": "#14532D"
    },
    {
      "name": "green / 950",
      "cssVarName": "--uedp-green-950",
      "hex": "#052E16"
    }
  ],
  "emerald": [
    {
      "name": "emerald / 50",
      "cssVarName": "--uedp-emerald-50",
      "hex": "#ECFDF5"
    },
    {
      "name": "emerald / 100",
      "cssVarName": "--uedp-emerald-100",
      "hex": "#D1FAE5"
    },
    {
      "name": "emerald / 200",
      "cssVarName": "--uedp-emerald-200",
      "hex": "#A7F3D0"
    },
    {
      "name": "emerald / 300",
      "cssVarName": "--uedp-emerald-300",
      "hex": "#6EE7B7"
    },
    {
      "name": "emerald / 400",
      "cssVarName": "--uedp-emerald-400",
      "hex": "#34D399"
    },
    {
      "name": "emerald / 500",
      "cssVarName": "--uedp-emerald-500",
      "hex": "#10B981"
    },
    {
      "name": "emerald / 600",
      "cssVarName": "--uedp-emerald-600",
      "hex": "#059669"
    },
    {
      "name": "emerald / 700",
      "cssVarName": "--uedp-emerald-700",
      "hex": "#047857"
    },
    {
      "name": "emerald / 800",
      "cssVarName": "--uedp-emerald-800",
      "hex": "#065F46"
    },
    {
      "name": "emerald / 900",
      "cssVarName": "--uedp-emerald-900",
      "hex": "#064E3B"
    },
    {
      "name": "emerald / 950",
      "cssVarName": "--uedp-emerald-950",
      "hex": "#022C22"
    }
  ],
  "teal": [
    {
      "name": "teal / 50",
      "cssVarName": "--uedp-teal-50",
      "hex": "#F0FDFA"
    },
    {
      "name": "teal / 100",
      "cssVarName": "--uedp-teal-100",
      "hex": "#CCFBF1"
    },
    {
      "name": "teal / 200",
      "cssVarName": "--uedp-teal-200",
      "hex": "#99F6E4"
    },
    {
      "name": "teal / 300",
      "cssVarName": "--uedp-teal-300",
      "hex": "#5EEAD4"
    },
    {
      "name": "teal / 400",
      "cssVarName": "--uedp-teal-400",
      "hex": "#2DD4BF"
    },
    {
      "name": "teal / 500",
      "cssVarName": "--uedp-teal-500",
      "hex": "#14B8A6"
    },
    {
      "name": "teal / 600",
      "cssVarName": "--uedp-teal-600",
      "hex": "#0D9488"
    },
    {
      "name": "teal / 700",
      "cssVarName": "--uedp-teal-700",
      "hex": "#0F766E"
    },
    {
      "name": "teal / 800",
      "cssVarName": "--uedp-teal-800",
      "hex": "#115E59"
    },
    {
      "name": "teal / 900",
      "cssVarName": "--uedp-teal-900",
      "hex": "#134E4A"
    },
    {
      "name": "teal / 950",
      "cssVarName": "--uedp-teal-950",
      "hex": "#042F2E"
    }
  ],
  "cyan": [
    {
      "name": "cyan / 50",
      "cssVarName": "--uedp-cyan-50",
      "hex": "#ECFEFF"
    },
    {
      "name": "cyan / 100",
      "cssVarName": "--uedp-cyan-100",
      "hex": "#CFFAFE"
    },
    {
      "name": "cyan / 200",
      "cssVarName": "--uedp-cyan-200",
      "hex": "#A5F3FC"
    },
    {
      "name": "cyan / 300",
      "cssVarName": "--uedp-cyan-300",
      "hex": "#67E8F9"
    },
    {
      "name": "cyan / 400",
      "cssVarName": "--uedp-cyan-400",
      "hex": "#22D3EE"
    },
    {
      "name": "cyan / 500",
      "cssVarName": "--uedp-cyan-500",
      "hex": "#06B6D4"
    },
    {
      "name": "cyan / 600",
      "cssVarName": "--uedp-cyan-600",
      "hex": "#0891B2"
    },
    {
      "name": "cyan / 700",
      "cssVarName": "--uedp-cyan-700",
      "hex": "#0E7490"
    },
    {
      "name": "cyan / 800",
      "cssVarName": "--uedp-cyan-800",
      "hex": "#155E75"
    },
    {
      "name": "cyan / 900",
      "cssVarName": "--uedp-cyan-900",
      "hex": "#164E63"
    },
    {
      "name": "cyan / 950",
      "cssVarName": "--uedp-cyan-950",
      "hex": "#083344"
    }
  ],
  "sky": [
    {
      "name": "sky / 50",
      "cssVarName": "--uedp-sky-50",
      "hex": "#F0F9FF"
    },
    {
      "name": "sky / 100",
      "cssVarName": "--uedp-sky-100",
      "hex": "#E0F2FE"
    },
    {
      "name": "sky / 200",
      "cssVarName": "--uedp-sky-200",
      "hex": "#BAE6FD"
    },
    {
      "name": "sky / 300",
      "cssVarName": "--uedp-sky-300",
      "hex": "#7DD3FC"
    },
    {
      "name": "sky / 400",
      "cssVarName": "--uedp-sky-400",
      "hex": "#38BDF8"
    },
    {
      "name": "sky / 500",
      "cssVarName": "--uedp-sky-500",
      "hex": "#0EA5E9"
    },
    {
      "name": "sky / 600",
      "cssVarName": "--uedp-sky-600",
      "hex": "#0284C7"
    },
    {
      "name": "sky / 700",
      "cssVarName": "--uedp-sky-700",
      "hex": "#0369A1"
    },
    {
      "name": "sky / 800",
      "cssVarName": "--uedp-sky-800",
      "hex": "#075985"
    },
    {
      "name": "sky / 900",
      "cssVarName": "--uedp-sky-900",
      "hex": "#0C4A6E"
    },
    {
      "name": "sky / 950",
      "cssVarName": "--uedp-sky-950",
      "hex": "#082F49"
    }
  ],
  "blue": [
    {
      "name": "blue / 50",
      "cssVarName": "--uedp-blue-50",
      "hex": "#EFF6FF"
    },
    {
      "name": "blue / 100",
      "cssVarName": "--uedp-blue-100",
      "hex": "#DBEAFE"
    },
    {
      "name": "blue / 200",
      "cssVarName": "--uedp-blue-200",
      "hex": "#BFDBFE"
    },
    {
      "name": "blue / 300",
      "cssVarName": "--uedp-blue-300",
      "hex": "#93C5FD"
    },
    {
      "name": "blue / 400",
      "cssVarName": "--uedp-blue-400",
      "hex": "#60A5FA"
    },
    {
      "name": "blue / 500",
      "cssVarName": "--uedp-blue-500",
      "hex": "#3B82F6"
    },
    {
      "name": "blue / 600",
      "cssVarName": "--uedp-blue-600",
      "hex": "#2563EB"
    },
    {
      "name": "blue / 700",
      "cssVarName": "--uedp-blue-700",
      "hex": "#1D4ED8"
    },
    {
      "name": "blue / 800",
      "cssVarName": "--uedp-blue-800",
      "hex": "#1E40AF"
    },
    {
      "name": "blue / 900",
      "cssVarName": "--uedp-blue-900",
      "hex": "#1E3A8A"
    },
    {
      "name": "blue / 950",
      "cssVarName": "--uedp-blue-950",
      "hex": "#172554"
    }
  ],
  "indigo": [
    {
      "name": "indigo / 50",
      "cssVarName": "--uedp-indigo-50",
      "hex": "#EEF2FF"
    },
    {
      "name": "indigo / 100",
      "cssVarName": "--uedp-indigo-100",
      "hex": "#E0E7FF"
    },
    {
      "name": "indigo / 200",
      "cssVarName": "--uedp-indigo-200",
      "hex": "#C7D2FE"
    },
    {
      "name": "indigo / 300",
      "cssVarName": "--uedp-indigo-300",
      "hex": "#A5B4FC"
    },
    {
      "name": "indigo / 400",
      "cssVarName": "--uedp-indigo-400",
      "hex": "#818CF8"
    },
    {
      "name": "indigo / 500",
      "cssVarName": "--uedp-indigo-500",
      "hex": "#6366F1"
    },
    {
      "name": "indigo / 600",
      "cssVarName": "--uedp-indigo-600",
      "hex": "#4F46E5"
    },
    {
      "name": "indigo / 700",
      "cssVarName": "--uedp-indigo-700",
      "hex": "#4338CA"
    },
    {
      "name": "indigo / 800",
      "cssVarName": "--uedp-indigo-800",
      "hex": "#3730A3"
    },
    {
      "name": "indigo / 900",
      "cssVarName": "--uedp-indigo-900",
      "hex": "#312E81"
    },
    {
      "name": "indigo / 950",
      "cssVarName": "--uedp-indigo-950",
      "hex": "#1E1B4B"
    }
  ],
  "violet": [
    {
      "name": "violet / 50",
      "cssVarName": "--uedp-violet-50",
      "hex": "#F5F3FF"
    },
    {
      "name": "violet / 100",
      "cssVarName": "--uedp-violet-100",
      "hex": "#EDE9FE"
    },
    {
      "name": "violet / 200",
      "cssVarName": "--uedp-violet-200",
      "hex": "#DDD6FE"
    },
    {
      "name": "violet / 300",
      "cssVarName": "--uedp-violet-300",
      "hex": "#C4B5FD"
    },
    {
      "name": "violet / 400",
      "cssVarName": "--uedp-violet-400",
      "hex": "#A78BFA"
    },
    {
      "name": "violet / 500",
      "cssVarName": "--uedp-violet-500",
      "hex": "#8B5CF6"
    },
    {
      "name": "violet / 600",
      "cssVarName": "--uedp-violet-600",
      "hex": "#7C3AED"
    },
    {
      "name": "violet / 700",
      "cssVarName": "--uedp-violet-700",
      "hex": "#6D28D9"
    },
    {
      "name": "violet / 800",
      "cssVarName": "--uedp-violet-800",
      "hex": "#5B21B6"
    },
    {
      "name": "violet / 900",
      "cssVarName": "--uedp-violet-900",
      "hex": "#4C1D95"
    },
    {
      "name": "violet / 950",
      "cssVarName": "--uedp-violet-950",
      "hex": "#2E1065"
    }
  ],
  "purple": [
    {
      "name": "purple / 50",
      "cssVarName": "--uedp-purple-50",
      "hex": "#FAF5FF"
    },
    {
      "name": "purple / 100",
      "cssVarName": "--uedp-purple-100",
      "hex": "#F3E8FF"
    },
    {
      "name": "purple / 200",
      "cssVarName": "--uedp-purple-200",
      "hex": "#E9D5FF"
    },
    {
      "name": "purple / 300",
      "cssVarName": "--uedp-purple-300",
      "hex": "#D8B4FE"
    },
    {
      "name": "purple / 400",
      "cssVarName": "--uedp-purple-400",
      "hex": "#C084FC"
    },
    {
      "name": "purple / 500",
      "cssVarName": "--uedp-purple-500",
      "hex": "#A855F7"
    },
    {
      "name": "purple / 600",
      "cssVarName": "--uedp-purple-600",
      "hex": "#9333EA"
    },
    {
      "name": "purple / 700",
      "cssVarName": "--uedp-purple-700",
      "hex": "#7E22CE"
    },
    {
      "name": "purple / 800",
      "cssVarName": "--uedp-purple-800",
      "hex": "#6B21A8"
    },
    {
      "name": "purple / 900",
      "cssVarName": "--uedp-purple-900",
      "hex": "#581C87"
    },
    {
      "name": "purple / 950",
      "cssVarName": "--uedp-purple-950",
      "hex": "#3B0764"
    }
  ],
  "fuchsia": [
    {
      "name": "fuchsia / 50",
      "cssVarName": "--uedp-fuchsia-50",
      "hex": "#FDF4FF"
    },
    {
      "name": "fuchsia / 100",
      "cssVarName": "--uedp-fuchsia-100",
      "hex": "#FAE8FF"
    },
    {
      "name": "fuchsia / 200",
      "cssVarName": "--uedp-fuchsia-200",
      "hex": "#F5D0FE"
    },
    {
      "name": "fuchsia / 300",
      "cssVarName": "--uedp-fuchsia-300",
      "hex": "#F0ABFC"
    },
    {
      "name": "fuchsia / 400",
      "cssVarName": "--uedp-fuchsia-400",
      "hex": "#E879F9"
    },
    {
      "name": "fuchsia / 500",
      "cssVarName": "--uedp-fuchsia-500",
      "hex": "#D946EF"
    },
    {
      "name": "fuchsia / 600",
      "cssVarName": "--uedp-fuchsia-600",
      "hex": "#C026D3"
    },
    {
      "name": "fuchsia / 700",
      "cssVarName": "--uedp-fuchsia-700",
      "hex": "#A21CAF"
    },
    {
      "name": "fuchsia / 800",
      "cssVarName": "--uedp-fuchsia-800",
      "hex": "#86198F"
    },
    {
      "name": "fuchsia / 900",
      "cssVarName": "--uedp-fuchsia-900",
      "hex": "#701A75"
    },
    {
      "name": "fuchsia / 950",
      "cssVarName": "--uedp-fuchsia-950",
      "hex": "#4A044E"
    }
  ],
  "pink": [
    {
      "name": "pink / 50",
      "cssVarName": "--uedp-pink-50",
      "hex": "#FDF2F8"
    },
    {
      "name": "pink / 100",
      "cssVarName": "--uedp-pink-100",
      "hex": "#FCE7F3"
    },
    {
      "name": "pink / 200",
      "cssVarName": "--uedp-pink-200",
      "hex": "#FBCFE8"
    },
    {
      "name": "pink / 300",
      "cssVarName": "--uedp-pink-300",
      "hex": "#F9A8D4"
    },
    {
      "name": "pink / 400",
      "cssVarName": "--uedp-pink-400",
      "hex": "#F472B6"
    },
    {
      "name": "pink / 500",
      "cssVarName": "--uedp-pink-500",
      "hex": "#EC4899"
    },
    {
      "name": "pink / 600",
      "cssVarName": "--uedp-pink-600",
      "hex": "#DB2777"
    },
    {
      "name": "pink / 700",
      "cssVarName": "--uedp-pink-700",
      "hex": "#BE185D"
    },
    {
      "name": "pink / 800",
      "cssVarName": "--uedp-pink-800",
      "hex": "#9D174D"
    },
    {
      "name": "pink / 900",
      "cssVarName": "--uedp-pink-900",
      "hex": "#831843"
    },
    {
      "name": "pink / 950",
      "cssVarName": "--uedp-pink-950",
      "hex": "#500724"
    }
  ],
  "rose": [
    {
      "name": "rose / 50",
      "cssVarName": "--uedp-rose-50",
      "hex": "#FFF1F2"
    },
    {
      "name": "rose / 100",
      "cssVarName": "--uedp-rose-100",
      "hex": "#FFE4E6"
    },
    {
      "name": "rose / 200",
      "cssVarName": "--uedp-rose-200",
      "hex": "#FECDD3"
    },
    {
      "name": "rose / 300",
      "cssVarName": "--uedp-rose-300",
      "hex": "#FDA4AF"
    },
    {
      "name": "rose / 400",
      "cssVarName": "--uedp-rose-400",
      "hex": "#FB7185"
    },
    {
      "name": "rose / 500",
      "cssVarName": "--uedp-rose-500",
      "hex": "#F43F5E"
    },
    {
      "name": "rose / 600",
      "cssVarName": "--uedp-rose-600",
      "hex": "#E11D48"
    },
    {
      "name": "rose / 700",
      "cssVarName": "--uedp-rose-700",
      "hex": "#BE123C"
    },
    {
      "name": "rose / 800",
      "cssVarName": "--uedp-rose-800",
      "hex": "#9F1239"
    },
    {
      "name": "rose / 900",
      "cssVarName": "--uedp-rose-900",
      "hex": "#881337"
    },
    {
      "name": "rose / 950",
      "cssVarName": "--uedp-rose-950",
      "hex": "#4C0519"
    }
  ],
  "semanticAlerts": [
    { "name": "Color (Alert Danger)", "cssVarName": "--uedp-semantic-color", "hex": "#DC2626" },
    { "name": "Color 3 (Alert Light Danger)", "cssVarName": "--uedp-semantic-color-3", "hex": "#F87171" },
    { "name": "Color 2 (Alert Soft Danger)", "cssVarName": "--uedp-semantic-color-2", "hex": "#FECACA" },
    { "name": "Color 4 (Alert White)", "cssVarName": "--uedp-semantic-color-4", "hex": "#FFFFFF" },
    { "name": "Color 5 (Alert Light Warning)", "cssVarName": "--uedp-semantic-color-5", "hex": "#FEF3C7" },
    { "name": "Color 6 (Alert Soft Warning)", "cssVarName": "--uedp-semantic-color-6", "hex": "#FDE68A" },
    { "name": "Color 7 (Alert Warning)", "cssVarName": "--uedp-semantic-color-7", "hex": "#FCD34D" },
    { "name": "Color 8 (Alert Light Success)", "cssVarName": "--uedp-semantic-color-8", "hex": "#DCFCE7" },
    { "name": "Color 10 (Alert Soft Success)", "cssVarName": "--uedp-semantic-color-10", "hex": "#86EFAC" },
    { "name": "Color 9 (Alert Success)", "cssVarName": "--uedp-semantic-color-9", "hex": "#22C55E" }
  ],
  "buttonSemantic": [
    { "name": "Color 8 (Button White)", "cssVarName": "--uedp-button-color-8", "hex": "#FFFFFF" },
    { "name": "Color 11 (Button Muted Teal)", "cssVarName": "--uedp-button-color-11", "hex": "#83A4A3" },
    { "name": "Primary (Button Light Teal)", "cssVarName": "--uedp-button-primary", "hex": "#CCFBF1" },
    { "name": "Secondary (Button Teal)", "cssVarName": "--uedp-button-secondary", "hex": "#99F6E4" },
    { "name": "Color (Button Medium Teal)", "cssVarName": "--uedp-button-color", "hex": "#5EEAD4" },
    { "name": "Color 3 (Button Dark Teal)", "cssVarName": "--uedp-button-color-3", "hex": "#14B8A6" },
    { "name": "Color 2 (Button Deep Teal)", "cssVarName": "--uedp-button-color-2", "hex": "#0D9488" },
    { "name": "Color 4 (Button Shadow Teal)", "cssVarName": "--uedp-button-color-4", "hex": "#0F766E" },
    { "name": "Color 5 (Button Darkest Teal)", "cssVarName": "--uedp-button-color-5", "hex": "#115E59" },
    { "name": "Color 6 (Button Deepest Teal)", "cssVarName": "--uedp-button-color-6", "hex": "#134E4A" },
    { "name": "Color 7 (Button Midnight Teal)", "cssVarName": "--uedp-button-color-7", "hex": "#042F2E" }
  ]
};

const ColorPaletteComponent: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', padding: '24px', backgroundColor: 'var(--uedp-slate-900, #0f172a)', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>🎨 UEDP 4 Base Color Palette</h1>
      <p style={{ color: 'var(--uedp-slate-400, #94a3b8)', marginBottom: '32px' }}>
        Design tokens synchronized directly from <code>base-palette-tokens.json</code>.
      </p>

      {Object.entries(colorFamilies).map(([familyName, swatches]) => (
        <div key={familyName} style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '20px', textTransform: 'capitalize', borderBottom: '1px solid var(--uedp-slate-800, #1e293b)', paddingBottom: '8px', marginBottom: '16px' }}>
            {familyName} Family
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
            {(swatches as any[]).map(swatch => (
              <div key={swatch.cssVarName} style={{ background: 'var(--uedp-slate-800, #1e293b)', borderRadius: '12px', padding: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                <div style={{ backgroundColor: swatch.hex, height: '64px', borderRadius: '8px', marginBottom: '12px', border: '1px solid rgba(255,255,255,0.1)' }} />
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#f8fafc' }}>{swatch.name}</div>
                <div style={{ fontSize: '11px', fontFamily: 'monospace', color: 'var(--uedp-slate-400, #94a3b8)', margin: '4px 0' }}>{swatch.hex}</div>
                <div style={{ fontSize: '11px', fontFamily: 'monospace', color: '#38bdf8', wordBreak: 'break-all' }}>{swatch.cssVarName}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const meta: Meta<typeof ColorPaletteComponent> = {
  title: 'Tokens/Color Palette',
  component: ColorPaletteComponent,
  parameters: {
    docs: {
      description: {
        component: 'Complete palette of color family design tokens extracted from Figma design variables.',
      },
    },
  },
};

export default meta;
export const Default: StoryObj<typeof ColorPaletteComponent> = {};
