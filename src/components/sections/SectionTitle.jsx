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
export function SectionTitle({
  pretitle,
  title,
  subtitle,
  layout = 'start',
  className = '',
}) {
  const pretitleClass = `text-type-head-1 text-8xl font-normal leading-[111px] mb-11`;
  const titleClass = `text-type-head-2 text-4xl font-normal leading-relaxed tracking-widest mb-[70px]`;
  const subtitleClass = `text-type-head-2 text-4xl font-normal leading-8 mb-11`;
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
          fontFamily: 'BrightChalk, SejongGeulggot, sans-serif',
          textAlign: layout === 'end' ? 'right' : 'left',
        }}>
        {pretitle}
      </p>

      {/* title */}
      <h2
        className={`${titleClass}`}
        style={{
          fontFamily: 'BrightChalk, SejongGeulggot, sans-serif',
          textAlign: layout === 'end' ? 'right' : 'left',
        }}>
        {title}
      </h2>

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
