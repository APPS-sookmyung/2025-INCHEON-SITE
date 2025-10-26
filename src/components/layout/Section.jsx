import React from 'react';
import textureUrl from '@/assets/svg/texture-tile.svg';

/**
 * 섹션 배경/여백/폭을 통일하는 래퍼
 * @param {Object} props
 * @param {{ url: string, size?: string, position?: string, blendMode?: string }[]} [props.blobs]
 * @param {boolean} [props.textureOnly=false]
 * @param {Object} [props.style]
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 */
export default function SectionFrame({
  blobs = [],
  textureOnly = false,
  style,
  className = '',
  children,
}) {
  return (
    <section
      className={`relative w-full overflow-hidden ${className}`}
      style={style}>
      {/* texture (기본 배경 패턴) */}
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: `url(${textureUrl})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '150px 150px',
          backgroundPosition: 'top left',
        }}
      />

      {/* blobs */}
      {!textureOnly &&
        blobs.map((b, i) => {
          const pos = b.position || '';
          const [sideX, xVal, sideY, yVal] = pos.split(' ');
          return (
            <img
              key={i}
              src={b.url}
              alt=''
              className='absolute z-0 pointer-events-none select-none'
              style={{
                width: b.size?.split(' ')[0] || '32vw',
                left: sideX === 'left' ? xVal : 'auto',
                right: sideX === 'right' ? xVal : 'auto',
                top: sideY === 'top' ? yVal : 'auto',
                bottom: sideY === 'bottom' ? yVal : 'auto',
                mixBlendMode: b.blendMode || 'multiply',
              }}
            />
          );
        })}

      <div className='relative z-10 px-4 sm:px-6 lg:px-[150px] py-14 sm:py-20 lg:py-28'>
        {children}
      </div>
    </section>
  );
}
