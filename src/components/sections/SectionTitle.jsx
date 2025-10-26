/**
 * Heading Component
 *
 * 섹션 제목을 렌더링하는 컴포넌트입니다.
 * pretitle(상단 태그) → title(메인 타이틀) → subtitle(부제목) 순서로 표시됩니다.
 *
 * @param {Object} props
 * @param {string} props.pretitle             - 섹션 상단 꼬리표
 * @param {string} props.title                - 메인 타이틀
 * @param {string=} props.subtitle            - 부제 (보조 설명문)
 * @param {string=} props.className           - 전체 래퍼 클래스
 * @param {string=} props.pretitleClassName   - pretitle 전용 추가 클래스
 * @param {string=} props.titleClassName      - title 전용 추가 클래스
 * @param {string=} props.subtitleClassName   - subtitle 전용 추가 클래스
 */

import watercolor_highlight_pink from '@/assets/svg/watercolor-highlight-pink.svg';
import watercolor_highlight_green from '@/assets/svg/watercolor-highlight-green.svg';
import watercolor_highlight_pink_short from '@/assets/svg/watercolor-highlight-pink-short.svg';

const highlightColorMap = {
  pink_short: watercolor_highlight_pink_short,
  green: watercolor_highlight_green,
  pink: watercolor_highlight_pink,
};

const highlightClassMap = {
  pink_short:
    'scale-55 md:scale-60 lg:scale-100 -translate-x-[33%] -translate-y-[40%] md:-translate-x-[33%] md:-translate-y-[36%]',
  green:
    'scale-100 -translate-x-[5%] -translate-y-[30%] md:-translate-x-[23%] md:-translate-y-[33%]',
  pink: 'scale-100 md:scale-110 lg:scale-160 -translate-x-[20%] -translate-y-[30%]',
};

export function SectionTitle({
  pretitle,
  title,
  subtitle,
  highlightColor = 'pink',
  layout = 'start',
  className = '',
}) {
  const pretitleClass = `text-type-head-1 text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.2] mb-6 md:mb-8 lg:mb-11`;
  const titleClass = `text-type-head-2 text-2xl md:text-3xl lg:text-4xl font-normal leading-relaxed tracking-widest mb-10 md:mb-14 lg:mb-[70px]`;
  const subtitleClass = `text-type-head-2 text-2xl md:text-3xl lg:text-4xl font-normal leading-8 mb-6 md:mb-8 lg:mb-11`;

  return (
    <header
      className={`mb-6 ${
        layout === 'end'
          ? 'flex flex-col items-end'
          : 'flex flex-col items-start'
      } ${className}`}>
      {/* pretitle */}
      <p
        className={`${pretitleClass}`}
        style={{
          fontFamily: 'SSYoungestDaughterRegular, SejongGeulggot, sans-serif',
          textAlign: layout === 'end' ? 'right' : 'left',
        }}>
        {pretitle}
      </p>

      {/* title */}
      <div className='relative'>
        <img
          className={`absolute ${highlightClassMap[highlightColor]}`}
          src={highlightColorMap[highlightColor]}
          alt=''
        />
        <h2
          className={`relative ${titleClass}`}
          style={{
            fontFamily: 'SSYoungestDaughterRegular, SejongGeulggot, sans-serif',
            textAlign: layout === 'end' ? 'right' : 'left',
          }}>
          {title}
        </h2>
      </div>

      {/* subtitle */}
      {subtitle && (
        <p
          className={`${subtitleClass}`}
          style={{textAlign: layout === 'end' ? 'right' : 'left'}}>
          {subtitle}
        </p>
      )}
    </header>
  );
}
