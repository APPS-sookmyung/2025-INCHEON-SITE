const EventCard = ({event}) => {
  return (
    // 카드 전체 레이아웃
    <div className='w-586px h-493px flex flex-col gap-11'>
      {/* 01. 이벤트 제목 */}
      <p className='text-3xl font-semibold leading-[1.56rem]'>
        {event.id}. {event.title}
      </p>

      {/* 참여 방법 리스트 */}
      <ol className='list-decimal list-inside text-lg not-italic font-normal leading-[1.88rem] -mt-4.5'>
        {event.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      {/* 상세 정보 섹션 */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-123px gap-y-5'>
        {/* 필수 해시태그 */}
        <div className='flex flex-col gap-3'>
          <label className='text-lg not-italic font-medium leading-[1.88rem]'>
            필수 해시태그
          </label>
          <div className='flex flex-wrap gap-2'>
            {event.hashtags.map((tag, index) => (
              <span
                key={index}
                className=' text-[1.31rem] not-italic font-normal leading-[1.56rem] border border-black px-5 py-3 rounded-full'>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 계정 태그 */}
        <div className='flex flex-col gap-3'>
          <label className='text-lg not-italic font-normal leading-[1.88rem]'>
            계정 태그
          </label>
          <p className='text-[#5B666F] text-lg not-italic font-normal leading-[1.88rem]'>
            {event.account}
          </p>
        </div>

        {/* 이벤트 참여 기간 */}
        <div className='flex flex-col gap-3'>
          <label className='text-lg not-italic font-normal leading-[1.88rem]'>
            이벤트 참여 기간
          </label>
          <p className='text-[#5B666F] text-lg not-italic font-normal leading-5'>
            {event.period.join(' - ')}
          </p>
        </div>

        {/* 당첨 인원 */}
        <div className='flex flex-col gap-3'>
          <label className='text-lg not-italic font-normal leading-[1.88rem]'>
            당첨 인원
          </label>
          <p className='text-[#5B666F] text-lg not-italic font-normal leading-5'>
            {event.reward}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
