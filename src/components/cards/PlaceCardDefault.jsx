import bubbleBg from '@/assets/svg/space-bubblebg.svg';

// 호버 전 상태 컴포넌트
export default function PlaceCardDefault({place}) {
  return (
    <div className='absolute inset-0 transition-opacity duration-500 pointer-events-none group-hover:opacity-0'>
      {/* 오른쪽 위: SVG 이미지 */}
      {place.image && (
        <div
          className='absolute'
          style={{
            top: '0px',
            right: place.id === 'jangseung' ? '-30px' : '0px',
          }}>
          <img
            src={place.image}
            alt={place.title}
            className='w-auto h-auto max-w-[200px] max-h-[200px]'
          />
        </div>
      )}

      {/* 아래쪽: subtitle, title */}
      <div className='absolute left-4 flex flex-col' style={{top: '16px'}}>
        {place.subtitle && (
          <p className='justify-start text-type-head-2 text-xl font-normal leading-7 mb-[10px]'>
            {place.subtitle}
          </p>
        )}
        <h3 className='justify-center text-black text-3xl font-normal leading-6'>
          {place.title}
        </h3>
      </div>

      {/* 말풍선 배경 + content */}
      {place.content && (
        <div className='absolute left-4 right-4' style={{bottom: '16px'}}>
          {/* 말풍선 안에 content */}
          <div
            className='relative bg-no-repeat bg-center'
            style={{
              backgroundImage: `url(${bubbleBg})`,
              paddingTop: '32px',
              paddingBottom: '32px',
              paddingLeft: '32px',
              paddingRight: '32px',
              backgroundSize: '100% 100%',
            }}>
            <p
              className='justify-start text-type-head-2 text-base font-normal leading-7'
              style={{
                color: place.contentTextColor || 'inherit',
              }}>
              {place.content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
