import background from '../assets/svg/background.svg';
import Preview from '../components/mainpage/Preview';
import EventScheduleSection from '../components/mainpage/EventScheduleSection';
import EventInfoSection from '../components/mainpage/EventInfoSection';

const MainPage = () => {
  return (
    <div className='flex justify-center py-15'>
      <div className='w-full max-w-[1078px]'>
        <div
          className='relative w-full'
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            aspectRatio: '1078 / 5214',
          }}>
          <div
            className='absolute w-full'
            style={{top: '0%', height: '19.64%' /* 1024/5214 */}}>
            <Preview />
          </div>
          <div
            className='absolute w-full'
            style={{top: '19.64%', height: '52.51%' /* 2738/5214 */}}>
            <EventScheduleSection />
          </div>
          <div
            className='absolute w-full'
            style={{top: '72.15%', height: '27.85%' /* 1452/5214 */}}>
            <EventInfoSection />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
