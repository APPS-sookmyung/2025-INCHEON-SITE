import yellowDotsUrl from '../../assets/svg/yellow-dots.svg';

const EventInfoSection = () => {
  return (
    <div className='absolute inset-0 pointer-events-none z-10'>
      <div className='absolute top-[351px] -left-56'>
        <img
          src={yellowDotsUrl}
          alt='yellow dots'
          className='w-[704px] h-[706px]'
        />
      </div>
    </div>
  );
};
export default EventInfoSection;
