import background from '../assets/svg/background.svg';
import Preview from '../components/mainpage/Preview';
import EventScheduleSection from '../components/mainpage/EventScheduleSection';
import EventInfoSection from '../components/mainpage/EventInfoSection';

const MainPage = () => {
  return (
    <div className='flex justify-center py-15'>
      <div className='w-full max-w-[1078px]'>
        {/* PreviewSection */}
        <div
          className='relative w-full h-[1024px]'
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: '0 0',
            backgroundSize: '1078px 5214px',
            backgroundRepeat: 'no-repeat',
          }}>
          <Preview />
        </div>

        {/* EventScheduleSection */}
        <div
          className='relative w-full h-[2738px]'
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: '0 -1024px',
            backgroundSize: '1078px 5214px',
            backgroundRepeat: 'no-repeat',
          }}>
          <EventScheduleSection />
        </div>

        {/* EventInfoSection */}
        <div
          className='relative w-full h-[1452px]'
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: '0 -3762px',
            backgroundSize: '1078px 5214px',
            backgroundRepeat: 'no-repeat',
          }}>
          <EventInfoSection />
        </div>
      </div>
    </div>
  );
};
export default MainPage;
