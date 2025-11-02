// 호버 후 상태 컴포넌트
export default function PlaceCardHover({place}) {
  // hoverBgColor에 따라 각 요소별 텍스트 색상 결정
  const getTextColors = (hoverBgColor) => {
    if (hoverBgColor.includes('primary-1')) {
      // primary-1 (연한 초록)
      return {
        hoverTitle: '#566346',
        hoverContent: '#9AA78A',
        time: '#899679',
        address: '#899679',
      };
    } else if (hoverBgColor.includes('primary-2')) {
      // primary-2 (연한 핑크)
      return {
        hoverTitle: '#867171',
        hoverContent: '#867171',
        time: '#B69D98',
        address: '#B69D98',
      };
    } else if (hoverBgColor.includes('primary-3')) {
      // primary-3 (연한 파랑)
      return {
        hoverTitle: '#496573',
        hoverContent: '#8DA5B1',
        time: '#7798A8',
        address: '#7798A8',
      };
    } else if (hoverBgColor.includes('primary-4')) {
      // primary-4 (연한 노랑)
      return {
        hoverTitle: 'var(--color-type-head-2)',
        hoverContent: '#B1AD8A',
        time: 'var(--color-type-body)',
        address: 'var(--color-type-body)',
      };
    }

    return {
      hoverTitle: '#000000',
      hoverContent: '#000000',
      time: '#000000',
      address: '#000000',
    };
  };

  const textColors = getTextColors(place.hoverBgColor);

  return (
    <div
      className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex flex-col gap-2'
      style={{padding: '20px'}}>
      {/* 호버 시 메인 제목 */}
      {place.hoverTitle && (
        <div
          className='justify-start text-slate-600 text-2xl font-normal leading-8'
          style={{
            color: textColors.hoverTitle,
            fontFamily: 'SejongGeulggot',
          }}>
          {place.hoverTitle}
        </div>
      )}

      {/* 호버 시 설명 */}
      {place.hoverContent && (
        <p
          className='w-80 justify-start flex-1'
          style={{color: textColors.hoverContent}}>
          {place.hoverContent}
        </p>
      )}

      {/* 하단: 시간 + 주소 */}
      <div className='mt-auto space-y-1'>
        {place.time && (
          <p
            className='justify-start text-type-body text-base font-normal leading-7'
            style={{color: textColors.time}}>
            {place.time}
          </p>
        )}
        {place.address && (
          <p
            className='justify-start text-slate-400 text-base font-normal leading-7'
            style={{color: textColors.address}}>
            {place.address}
          </p>
        )}
      </div>
    </div>
  );
}
