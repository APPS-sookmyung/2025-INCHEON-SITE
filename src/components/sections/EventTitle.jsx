/**
 * EventTitle Component
 *
 * 이벤트 섹션 제목을 렌더링하는 컴포넌트입니다.
 * SectionTitle과 동일한 구조를 가지나, pretitle 폰트 크기가 작게(5xl) 고정됩니다.
 *
 * @param {Object} props
 * @param {string} props.pretitle - 섹션 상단 인덱스
 * @param {string} props.title - 메인 타이틀
 * @param {string=} props.layout - 정렬 방향 ('start' 또는 'end')
 * @param {string=} props.className - 전체 래퍼 추가 클래스
 */

export function EventTitle({
  pretitle,
  title,
  layout = 'start',
  className = '',
}) {
  const pretitleClass = `text-type-head-1 text-5xl font-normal leading-[1.2] mb-6 md:mb-8 lg:mb-2`;
  const titleClass = `text-type-head-2 text-lg md:text-3xl lg:text-4xl font-normal leading-relaxed tracking-widest mb-10 md:mb-14 lg:mb-[70px]`;

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
          fontFamily: 'SejongGeulggot, sans-serif',
          textAlign: layout === 'end' ? 'right' : 'left',
        }}>
        {pretitle}
      </p>

      {/* title */}
      <div className='relative'>
        <h2
          className={`relative ${titleClass}`}
          style={{
            fontFamily: 'SejongGeulggot, sans-serif',
            textAlign: layout === 'end' ? 'right' : 'left',
          }}>
          {title}
        </h2>
      </div>
    </header>
  );
}
