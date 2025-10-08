const EventCard = ({event}) => {
  return (
    // 카드 전체 레이아웃
    <div className='w-536px h-493px flex flex-col gap-11'>
      {/* 01. 이벤트 제목 */}
      <p className='text-3xl font-semibold leading-[1.56rem]'>
        {event.id}. {event.title}
      </p>

      <ol className='list-decimal list-inside text-lg font-normal leading-[1.88rem] -mt-4.5'>
        {event.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <div className='grid grid-cols-2 gap-x-[100px] gap-y-8 items-start'>
        {/* 필수 해시태그 */}
        <div className='flex flex-col'>
          <label className='text-lg font-medium leading-[1.88rem]'>
            필수 해시태그
          </label>
          <div className='border-b border-black mt-3'></div>
          <div className='flex flex-col gap-2 mt-5'>
            {Array.from(
              {length: Math.ceil(event.hashtags.length / 2)},
              (_, rowIndex) => (
                <div key={rowIndex} className='flex gap-2'>
                  {event.hashtags
                    .slice(rowIndex * 2, rowIndex * 2 + 2)
                    .map((tag, index) => (
                      <div
                        key={index}
                        className='text-[1.31rem] font-normal leading-[1.56rem] border border-black px-5 py-3 rounded-full whitespace-nowrap'>
                        {tag}
                      </div>
                    ))}
                </div>
              )
            )}
          </div>
        </div>

        {/* 계정 태그 */}
        <div className='flex flex-col'>
          <label className='text-lg font-normal leading-[1.88rem]'>
            계정 태그
          </label>
          <div className='border-b border-black mt-3'></div>
          <p className='text-[#5B666F] text-lg font-normal leading-[1.88rem] mt-5'>
            {event.account}
          </p>
        </div>

        {/* 이벤트 참여 기간 */}
        <div className='flex flex-col'>
          <label className='text-lg font-normal leading-[1.88rem]'>
            이벤트 참여 기간
          </label>
          <div className='border-b border-black mt-3'></div>
          <p className='text-[#5B666F] text-lg font-normal leading-5 mt-5'>
            {event.period.join(' - ')}
          </p>
        </div>

        {/* 당첨 인원 */}
        <div className='flex flex-col'>
          <label className='text-lg font-normal leading-[1.88rem]'>
            당첨 인원
          </label>
          <div className='border-b border-black mt-3'></div>
          <p className='text-[#5B666F] text-lg font-normal leading-5 mt-5'>
            {event.reward}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
