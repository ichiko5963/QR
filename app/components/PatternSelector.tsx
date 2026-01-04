'use client'

import type { Customization } from '@/types/design'

interface PatternSelectorProps {
  currentPattern: Customization['patternStyle'] | Customization['dotStyle']
  onPatternSelect: (pattern: Customization['patternStyle']) => void
}

const patternStyles: { key: Customization['patternStyle']; label: string; preview: JSX.Element }[] = [
  {
    key: 'square',
    label: '標準四角',
    preview: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <rect x="8" y="8" width="8" height="8" fill="currentColor"/>
        <rect x="20" y="8" width="8" height="8" fill="currentColor"/>
        <rect x="32" y="8" width="8" height="8" fill="currentColor"/>
        <rect x="8" y="20" width="8" height="8" fill="currentColor"/>
        <rect x="32" y="20" width="8" height="8" fill="currentColor"/>
        <rect x="8" y="32" width="8" height="8" fill="currentColor"/>
        <rect x="20" y="32" width="8" height="8" fill="currentColor"/>
        <rect x="32" y="32" width="8" height="8" fill="currentColor"/>
      </svg>
    )
  },
  {
    key: 'round',
    label: '角丸',
    preview: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <rect x="8" y="8" width="8" height="8" rx="2" fill="currentColor"/>
        <rect x="20" y="8" width="8" height="8" rx="2" fill="currentColor"/>
        <rect x="32" y="8" width="8" height="8" rx="2" fill="currentColor"/>
        <rect x="8" y="20" width="8" height="8" rx="2" fill="currentColor"/>
        <rect x="32" y="20" width="8" height="8" rx="2" fill="currentColor"/>
        <rect x="8" y="32" width="8" height="8" rx="2" fill="currentColor"/>
        <rect x="20" y="32" width="8" height="8" rx="2" fill="currentColor"/>
        <rect x="32" y="32" width="8" height="8" rx="2" fill="currentColor"/>
      </svg>
    )
  },
  {
    key: 'rounder',
    label: 'より丸',
    preview: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <rect x="8" y="8" width="8" height="8" rx="4" fill="currentColor"/>
        <rect x="20" y="8" width="8" height="8" rx="4" fill="currentColor"/>
        <rect x="32" y="8" width="8" height="8" rx="4" fill="currentColor"/>
        <rect x="8" y="20" width="8" height="8" rx="4" fill="currentColor"/>
        <rect x="32" y="20" width="8" height="8" rx="4" fill="currentColor"/>
        <rect x="8" y="32" width="8" height="8" rx="4" fill="currentColor"/>
        <rect x="20" y="32" width="8" height="8" rx="4" fill="currentColor"/>
        <rect x="32" y="32" width="8" height="8" rx="4" fill="currentColor"/>
      </svg>
    )
  },
  {
    key: 'dot',
    label: 'ドット',
    preview: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <circle cx="12" cy="12" r="4" fill="currentColor"/>
        <circle cx="24" cy="12" r="4" fill="currentColor"/>
        <circle cx="36" cy="12" r="4" fill="currentColor"/>
        <circle cx="12" cy="24" r="4" fill="currentColor"/>
        <circle cx="36" cy="24" r="4" fill="currentColor"/>
        <circle cx="12" cy="36" r="4" fill="currentColor"/>
        <circle cx="24" cy="36" r="4" fill="currentColor"/>
        <circle cx="36" cy="36" r="4" fill="currentColor"/>
      </svg>
    )
  },
  {
    key: 'heart',
    label: 'ハート',
    preview: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <path d="M 12 14 Q 12 10, 14 10 Q 16 10, 16 12 Q 16 14, 12 18 Q 8 14, 8 12 Q 8 10, 10 10 Q 12 10, 12 14 Z" fill="currentColor"/>
        <path d="M 24 14 Q 24 10, 26 10 Q 28 10, 28 12 Q 28 14, 24 18 Q 20 14, 20 12 Q 20 10, 22 10 Q 24 10, 24 14 Z" fill="currentColor"/>
        <path d="M 36 14 Q 36 10, 38 10 Q 40 10, 40 12 Q 40 14, 36 18 Q 32 14, 32 12 Q 32 10, 34 10 Q 36 10, 36 14 Z" fill="currentColor"/>
        <path d="M 12 26 Q 12 22, 14 22 Q 16 22, 16 24 Q 16 26, 12 30 Q 8 26, 8 24 Q 8 22, 10 22 Q 12 22, 12 26 Z" fill="currentColor"/>
        <path d="M 36 26 Q 36 22, 38 22 Q 40 22, 40 24 Q 40 26, 36 30 Q 32 26, 32 24 Q 32 22, 34 22 Q 36 22, 36 26 Z" fill="currentColor"/>
        <path d="M 12 38 Q 12 34, 14 34 Q 16 34, 16 36 Q 16 38, 12 42 Q 8 38, 8 36 Q 8 34, 10 34 Q 12 34, 12 38 Z" fill="currentColor"/>
        <path d="M 24 38 Q 24 34, 26 34 Q 28 34, 28 36 Q 28 38, 24 42 Q 20 38, 20 36 Q 20 34, 22 34 Q 24 34, 24 38 Z" fill="currentColor"/>
        <path d="M 36 38 Q 36 34, 38 34 Q 40 34, 40 36 Q 40 38, 36 42 Q 32 38, 32 36 Q 32 34, 34 34 Q 36 34, 36 38 Z" fill="currentColor"/>
      </svg>
    )
  },
  {
    key: 'diamond',
    label: '菱形',
    preview: (
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <path d="M 12 8 L 16 12 L 12 16 L 8 12 Z" fill="currentColor"/>
        <path d="M 24 8 L 28 12 L 24 16 L 20 12 Z" fill="currentColor"/>
        <path d="M 36 8 L 40 12 L 36 16 L 32 12 Z" fill="currentColor"/>
        <path d="M 12 20 L 16 24 L 12 28 L 8 24 Z" fill="currentColor"/>
        <path d="M 36 20 L 40 24 L 36 28 L 32 24 Z" fill="currentColor"/>
        <path d="M 12 32 L 16 36 L 12 40 L 8 36 Z" fill="currentColor"/>
        <path d="M 24 32 L 28 36 L 24 40 L 20 36 Z" fill="currentColor"/>
        <path d="M 36 32 L 40 36 L 36 40 L 32 36 Z" fill="currentColor"/>
      </svg>
    )
  }
]

export default function PatternSelector({ currentPattern, onPatternSelect }: PatternSelectorProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {patternStyles.map((pattern) => (
        <button
          key={pattern.key}
          onClick={() => onPatternSelect(pattern.key)}
          className={`h-20 rounded-lg border-2 flex flex-col items-center justify-center text-xs transition-all hover:scale-105 ${
            currentPattern === pattern.key
              ? 'border-purple-500 ring-2 ring-purple-200 bg-purple-50'
              : 'border-gray-200 hover:border-purple-300 bg-white'
          }`}
          title={pattern.label}
        >
          <div className={`${currentPattern === pattern.key ? 'text-purple-700' : 'text-gray-700'}`}>
            {pattern.preview}
          </div>
          <span className={`mt-1 font-medium ${
            currentPattern === pattern.key ? 'text-purple-700' : 'text-gray-600'
          }`}>
            {pattern.label}
          </span>
        </button>
      ))}
    </div>
  )
}
