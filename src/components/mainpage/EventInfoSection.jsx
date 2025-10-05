import yellowDotsUrl from '../../assets/svg/yellow-dots.svg';
import events from '../../data/events';
import EventCard from './EventCard';

const EventInfoSection = () => {
  const W = 1078; // 기준 너비
  const H = 1452; // EventInfoSection의 기준 높이 (전체 5214의 27.85%)

  // 이벤트 카드 위치 정의
  const eventPositions = [
    {eventId: 1, x: 269, y: 50}, // 첫 번째 이벤트 카드 위치
    {eventId: 2, x: 269, y: 735}, // 두 번째 이벤트 카드 위치
  ];

  return (
    <div className='relative w-full h-full'>
      <div className='absolute top-[351px] -left-56 pointer-events-none z-0'>
        <img
          src={yellowDotsUrl}
          alt='yellow dots'
          className='w-[704px] h-[706px]'
        />
      </div>

      {eventPositions.map((pos) => {
        const event = events.find((e) => e.id === pos.eventId);
        const left = (pos.x / W) * 100;
        const top = (pos.y / H) * 100;

        return (
          <div
            key={pos.eventId}
            className='absolute z-10'
            style={{left: `${left}%`, top: `${top}%`}}>
            <EventCard event={event} />
          </div>
        );
      })}
    </div>
  );
};
export default EventInfoSection;
