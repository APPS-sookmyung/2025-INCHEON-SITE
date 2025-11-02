import React, {useState, useEffect} from 'react'; //
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

const SM_BREAKPOINT = 640;

export default function SectionFrame({
  blobs = [],
  textureOnly = false,
  // layout = 'start',
  style,
  className = '',
  children,
  contentClassName = '',
}) {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= SM_BREAKPOINT);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const finalClassName = `${className} 
    [--blob-scale:0.4] 
    lg:[--blob-scale:0.6] 
    [--header-offset:120px] 
  `;

  return (
    <section className={`relative w-full ${finalClassName}`} style={style}>
      {/* 텍스처 배경 */}
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: `url(${textureUrl})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '150px 150px',
          backgroundPosition: 'top left',
        }}
      />

      {!textureOnly &&
        blobs.map((b, i) => {
          const sizeToUse = isLargeScreen ? b.size : b.smSize || b.size;
          const positionToUse = isLargeScreen
            ? b.position
            : b.smPosition || b.position;

          const pos = positionToUse || '';
          const [sideX, xVal, sideY, yVal] = pos.split(' ');

          let finalWidthStyle = sizeToUse?.split(' ')[0] || '32vw';

          if (finalWidthStyle !== '100%') {
            const sizePart = sizeToUse?.split(' ')[0];
            const baseSizeMatch = sizePart?.match(/(\d+)px/);
            if (baseSizeMatch) {
              const baseSize = parseInt(baseSizeMatch[1], 10);
              finalWidthStyle = `calc(${baseSize}px * var(--blob-scale, 1))`;
            }
          }

          let finalLeftStyle = sideX === 'left' ? xVal : 'auto';
          let finalRightStyle = sideX === 'right' ? xVal : 'auto';
          let finalTopStyle = sideY === 'top' ? yVal : 'auto';
          let finalBottomStyle = sideY === 'bottom' ? yVal : 'auto';

          if (finalWidthStyle === '100%') {
            finalLeftStyle = '0';
            finalRightStyle = '0';
          }

          return (
            <img
              key={i}
              src={b.url}
              alt=''
              className='absolute z-0 pointer-events-none select-none max-w-none'
              style={{
                width: finalWidthStyle,
                left: finalLeftStyle,
                right: finalRightStyle,
                top: finalTopStyle,
                bottom: finalBottomStyle,
                mixBlendMode: b.blendMode || 'multiply',
              }}
            />
          );
        })}

      {/* 콘텐츠 래퍼 */}
      <div
        className={`
          relative z-10 px-4 sm:px-6 lg:pr-[15%] py-14 lg:pb-10 
          ${contentClassName ? contentClassName : 'lg:pl-[21%]'}
        `}>
        {children}
      </div>
    </section>
  );
}
