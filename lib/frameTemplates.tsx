/**
 * QRコードフレームSVGテンプレート
 * 各フレームはカラーを動的に変更可能
 */

export interface FrameTemplate {
  id: string
  name: string
  renderFrame: (color: string, size?: number) => JSX.Element
}

export const frameTemplates: FrameTemplate[] = [
  {
    id: 'none',
    name: 'なし',
    renderFrame: () => <></>
  },
  {
    id: 'outline',
    name: 'アウトライン',
    renderFrame: (color, size = 512) => (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none">
        <rect x="20" y="20" width="472" height="472" rx="8" stroke={color} strokeWidth="8" fill="none"/>
      </svg>
    )
  },
  {
    id: 'double',
    name: 'ダブルボーダー',
    renderFrame: (color, size = 512) => (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none">
        <rect x="15" y="15" width="482" height="482" rx="8" stroke={color} strokeWidth="6" fill="none"/>
        <rect x="30" y="30" width="452" height="452" rx="4" stroke={color} strokeWidth="4" fill="none"/>
      </svg>
    )
  },
  {
    id: 'band-bottom',
    name: '下部バンド',
    renderFrame: (color, size = 512) => (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none">
        <rect x="20" y="20" width="472" height="472" rx="8" stroke={color} strokeWidth="6" fill="none"/>
        <rect x="20" y="420" width="472" height="72" rx="0 0 8 8" fill={color}/>
        <text x="256" y="465" fill="white" fontSize="24" fontWeight="bold" textAnchor="middle">SCAN ME!</text>
      </svg>
    )
  },
  {
    id: 'band-top',
    name: '上部バンド',
    renderFrame: (color, size = 512) => (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none">
        <rect x="20" y="20" width="472" height="472" rx="8" stroke={color} strokeWidth="6" fill="none"/>
        <rect x="20" y="20" width="472" height="72" rx="8 8 0 0" fill={color}/>
      </svg>
    )
  },
  {
    id: 'ticket',
    name: 'チケット',
    renderFrame: (color, size = 512) => (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none">
        <rect x="20" y="20" width="472" height="472" rx="8" stroke={color} strokeWidth="6" strokeDasharray="10,5" fill="none"/>
        <circle cx="20" cy="256" r="12" fill="white" stroke={color} strokeWidth="4"/>
        <circle cx="492" cy="256" r="12" fill="white" stroke={color} strokeWidth="4"/>
      </svg>
    )
  },
  {
    id: 'dotted',
    name: 'ドット',
    renderFrame: (color, size = 512) => (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none">
        <rect x="20" y="20" width="472" height="472" rx="8" stroke={color} strokeWidth="6" strokeDasharray="2,8" fill="none"/>
      </svg>
    )
  },
  {
    id: 'badge',
    name: 'バッジ',
    renderFrame: (color, size = 512) => (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none">
        <rect x="20" y="20" width="472" height="472" rx="12" stroke={color} strokeWidth="8" fill="none"/>
        <circle cx="50" cy="50" r="20" fill={color}/>
        <circle cx="462" cy="50" r="20" fill={color}/>
        <circle cx="50" cy="462" r="20" fill={color}/>
        <circle cx="462" cy="462" r="20" fill={color}/>
      </svg>
    )
  },
  {
    id: 'ribbon-left',
    name: '左リボン',
    renderFrame: (color, size = 512) => (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none">
        <rect x="20" y="20" width="472" height="472" rx="8" stroke={color} strokeWidth="6" fill="none"/>
        <path d="M 20 200 L 80 200 L 100 220 L 80 240 L 20 240 Z" fill={color}/>
        <path d="M 20 272 L 80 272 L 100 292 L 80 312 L 20 312 Z" fill={color}/>
      </svg>
    )
  },
  {
    id: 'ribbon-right',
    name: '右リボン',
    renderFrame: (color, size = 512) => (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none">
        <rect x="20" y="20" width="472" height="472" rx="8" stroke={color} strokeWidth="6" fill="none"/>
        <path d="M 492 200 L 432 200 L 412 220 L 432 240 L 492 240 Z" fill={color}/>
        <path d="M 492 272 L 432 272 L 412 292 L 432 312 L 492 312 Z" fill={color}/>
      </svg>
    )
  },
  {
    id: 'shadow',
    name: 'シャドウ',
    renderFrame: (color, size = 512) => (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none">
        <defs>
          <filter id="shadow">
            <feDropShadow dx="4" dy="4" stdDeviation="8" floodOpacity="0.3"/>
          </filter>
        </defs>
        <rect x="20" y="20" width="472" height="472" rx="12" stroke={color} strokeWidth="6" fill="white" filter="url(#shadow)"/>
      </svg>
    )
  },
  {
    id: 'glow',
    name: 'グロー',
    renderFrame: (color, size = 512) => (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <rect x="20" y="20" width="472" height="472" rx="12" stroke={color} strokeWidth="8" fill="none" filter="url(#glow)"/>
      </svg>
    )
  },
  {
    id: 'minimal',
    name: 'ミニマル',
    renderFrame: (color, size = 512) => (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none">
        <rect x="30" y="30" width="452" height="452" rx="4" stroke={color} strokeWidth="2" fill="none"/>
      </svg>
    )
  },
  {
    id: 'rounded',
    name: 'ラウンド',
    renderFrame: (color, size = 512) => (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none">
        <rect x="20" y="20" width="472" height="472" rx="40" stroke={color} strokeWidth="8" fill="none"/>
      </svg>
    )
  },
  {
    id: 'corners',
    name: 'コーナー',
    renderFrame: (color, size = 512) => (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none">
        {/* Top-left */}
        <path d="M 20 60 L 20 20 L 60 20" stroke={color} strokeWidth="8" fill="none" strokeLinecap="round"/>
        {/* Top-right */}
        <path d="M 452 20 L 492 20 L 492 60" stroke={color} strokeWidth="8" fill="none" strokeLinecap="round"/>
        {/* Bottom-left */}
        <path d="M 60 492 L 20 492 L 20 452" stroke={color} strokeWidth="8" fill="none" strokeLinecap="round"/>
        {/* Bottom-right */}
        <path d="M 492 452 L 492 492 L 452 492" stroke={color} strokeWidth="8" fill="none" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 'bubble',
    name: 'バブル',
    renderFrame: (color, size = 512) => (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none">
        <rect x="20" y="20" width="472" height="442" rx="20" stroke={color} strokeWidth="8" fill="none"/>
        <path d="M 230 462 L 256 492 L 282 462" fill={color} stroke={color} strokeWidth="4"/>
      </svg>
    )
  },
  {
    id: 'hexagon',
    name: '六角形',
    renderFrame: (color, size = 512) => (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none">
        <path d="M 256 20 L 456 136 L 456 376 L 256 492 L 56 376 L 56 136 Z" stroke={color} strokeWidth="8" fill="none"/>
      </svg>
    )
  },
  {
    id: 'starburst',
    name: 'スターバースト',
    renderFrame: (color, size = 512) => (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none">
        <rect x="40" y="40" width="432" height="432" rx="8" stroke={color} strokeWidth="6" fill="none"/>
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45) * Math.PI / 180
          const x1 = 256 + Math.cos(angle) * 180
          const y1 = 256 + Math.sin(angle) * 180
          const x2 = 256 + Math.cos(angle) * 220
          const y2 = 256 + Math.sin(angle) * 220
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="3"/>
        })}
      </svg>
    )
  },
  {
    id: 'envelope',
    name: 'エンベロープ',
    renderFrame: (color, size = 512) => (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none">
        <rect x="20" y="20" width="472" height="472" rx="8" stroke={color} strokeWidth="6" fill="none"/>
        <path d="M 40 40 L 256 220 L 472 40" stroke={color} strokeWidth="4" fill="none"/>
        <path d="M 256 470 L 472 470 L 472 290 L 256 220 L 40 290 L 40 470 Z" fill={color} opacity="0.2"/>
      </svg>
    )
  },
  {
    id: 'smartphone',
    name: 'スマートフォン',
    renderFrame: (color, size = 512) => (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none">
        <rect x="100" y="10" width="312" height="492" rx="24" stroke={color} strokeWidth="8" fill="white"/>
        <rect x="120" y="50" width="272" height="412" rx="4" stroke={color} strokeWidth="4" fill="none"/>
        <circle cx="256" cy="480" r="12" fill={color}/>
      </svg>
    )
  },
  {
    id: 'floral',
    name: 'フローラル',
    renderFrame: (color, size = 512) => (
      <svg width={size} height={size} viewBox="0 0 512 512" fill="none">
        <rect x="30" y="30" width="452" height="452" rx="12" stroke={color} strokeWidth="6" fill="none"/>
        {/* Top-left corner ornament */}
        <path d="M 30 30 Q 30 60, 50 70 Q 30 80, 30 110" stroke={color} strokeWidth="3" fill="none"/>
        {/* Top-right corner ornament */}
        <path d="M 482 30 Q 482 60, 462 70 Q 482 80, 482 110" stroke={color} strokeWidth="3" fill="none"/>
        {/* Bottom-left corner ornament */}
        <path d="M 30 482 Q 30 452, 50 442 Q 30 432, 30 402" stroke={color} strokeWidth="3" fill="none"/>
        {/* Bottom-right corner ornament */}
        <path d="M 482 482 Q 482 452, 462 442 Q 482 432, 482 402" stroke={color} strokeWidth="3" fill="none"/>
      </svg>
    )
  }
]

export function getFrameTemplate(id: string): FrameTemplate | undefined {
  return frameTemplates.find(t => t.id === id)
}

export function getAllFrameIds(): string[] {
  return frameTemplates.map(t => t.id)
}
