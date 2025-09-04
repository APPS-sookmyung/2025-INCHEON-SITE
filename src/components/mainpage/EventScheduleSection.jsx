import purpleDotsUrl from '../../assets/svg/purple-dots.svg';
import greenDotsUrl from '../../assets/svg/green-dots.svg';

const EventScheduleSection = () => {
  return (
    <div className='absolute inset-0 pointer-events-none z-10'>
      <div className='absolute -top-16 -left-56'>
        <img
          src={purpleDotsUrl}
          alt='purple dots'
          className='w-[697px] h-[586px]'
        />
      </div>
      <div className='absolute bottom-56 -right-65'>
        <img
          src={greenDotsUrl}
          alt='green dots'
          className='w-[696px] h-[587px]'
        />
      </div>
    </div>
  );
};
export default EventScheduleSection;
