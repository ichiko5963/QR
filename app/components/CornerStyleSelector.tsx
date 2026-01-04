'use client'

interface CornerStyleSelectorProps {
  currentCornerFrameStyle: string
  currentCornerDotStyle: string
  onCornerFrameStyleSelect: (style: string) => void
  onCornerDotStyleSelect: (style: string) => void
}

const cornerFrameStyles = [
  {
    key: 'square',
    label: '四角',
    preview: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <rect x="4" y="4" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"/>
        <rect x="8" y="8" width="8" height="8" fill="currentColor"/>
      </svg>
    )
  },
  {
    key: 'rounded',
    label: '角丸',
    preview: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke="currentColor" strokeWidth="2"/>
        <rect x="8" y="8" width="8" height="8" rx="2" fill="currentColor"/>
      </svg>
    )
  },
  {
    key: 'circle',
    label: '円形',
    preview: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="4" fill="currentColor"/>
      </svg>
    )
  },
  {
    key: 'outline',
    label: 'アウトライン',
    preview: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <rect x="4" y="4" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3"/>
        <rect x="10" y="10" width="4" height="4" fill="currentColor"/>
      </svg>
    )
  }
]

const cornerDotStyles = [
  {
    key: 'square',
    label: '四角',
    preview: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <rect x="8" y="8" width="8" height="8" fill="currentColor"/>
      </svg>
    )
  },
  {
    key: 'dot',
    label: 'ドット',
    preview: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <circle cx="12" cy="12" r="4" fill="currentColor"/>
      </svg>
    )
  },
  {
    key: 'rounded',
    label: '角丸',
    preview: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <rect x="8" y="8" width="8" height="8" rx="2" fill="currentColor"/>
      </svg>
    )
  },
  {
    key: 'diamond',
    label: '菱形',
    preview: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <path d="M 12 8 L 16 12 L 12 16 L 8 12 Z" fill="currentColor"/>
      </svg>
    )
  }
]

export default function CornerStyleSelector({
  currentCornerFrameStyle,
  currentCornerDotStyle,
  onCornerFrameStyleSelect,
  onCornerDotStyleSelect
}: CornerStyleSelectorProps) {
  return (
    <div className="space-y-4">
      {/* フレーム周囲のドットのスタイル */}
      <div>
        <label className="text-xs text-gray-600 mb-2 block">フレーム周囲のスタイル</label>
        <div className="grid grid-cols-4 gap-2">
          {cornerFrameStyles.map((style) => (
            <button
              key={style.key}
              onClick={() => onCornerFrameStyleSelect(style.key)}
              className={`h-16 rounded border-2 flex flex-col items-center justify-center text-xs ${
                currentCornerFrameStyle === style.key
                  ? 'border-purple-500 ring-2 ring-purple-200 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300'
              }`}
              title={style.label}
            >
              <div className={currentCornerFrameStyle === style.key ? 'text-purple-700' : 'text-gray-700'}>
                {style.preview}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* コーナードットタイプ */}
      <div>
        <label className="text-xs text-gray-600 mb-2 block">コーナードットタイプ</label>
        <div className="grid grid-cols-4 gap-2">
          {cornerDotStyles.map((style) => (
            <button
              key={style.key}
              onClick={() => onCornerDotStyleSelect(style.key)}
              className={`h-16 rounded border-2 flex flex-col items-center justify-center text-xs ${
                currentCornerDotStyle === style.key
                  ? 'border-purple-500 ring-2 ring-purple-200 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300'
              }`}
              title={style.label}
            >
              <div className={currentCornerDotStyle === style.key ? 'text-purple-700' : 'text-gray-700'}>
                {style.preview}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
