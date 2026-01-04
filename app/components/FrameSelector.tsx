'use client'

import { frameTemplates } from '@/lib/frameTemplates'

interface FrameSelectorProps {
  selectedFrame: string
  frameColor: string
  onFrameSelect: (frameId: string) => void
}

export default function FrameSelector({ selectedFrame, frameColor, onFrameSelect }: FrameSelectorProps) {
  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 pb-2">
        {frameTemplates.map((template) => (
          <button
            key={template.id}
            onClick={() => onFrameSelect(template.id)}
            className={`relative h-24 rounded-lg border-2 flex flex-col items-center justify-center text-xs transition-all hover:scale-105 ${
              selectedFrame === template.id
                ? 'border-purple-500 ring-2 ring-purple-200 bg-purple-50'
                : 'border-gray-200 hover:border-purple-300 bg-white'
            }`}
            title={template.name}
          >
            {/* フレームプレビュー */}
            <div className="w-16 h-16 flex items-center justify-center">
              {template.id === 'none' ? (
                <span className="text-gray-400 text-2xl">∅</span>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  {template.renderFrame(frameColor, 64)}
                </div>
              )}
            </div>
            
            {/* フレーム名 */}
            <span className={`mt-1 font-medium ${
              selectedFrame === template.id ? 'text-purple-700' : 'text-gray-600'
            }`}>
              {template.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
