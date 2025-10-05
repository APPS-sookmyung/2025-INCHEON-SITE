import background from '../assets/svg/background.svg';
import background_blur from '../assets/svg/background_blur.svg';
import Preview from '../components/mainpage/Preview';
import EventScheduleSection from '../components/mainpage/EventScheduleSection';
import EventInfoSection from '../components/mainpage/EventInfoSection';
import title from '../assets/svg/title.svg';
import {useState} from 'react';

const MainPage = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className='flex justify-center py-20'>
      <img className='absolute z-0 top-8 left-7' src={title} alt='' />
      {hover && (
        <img className={`absolute z-10`} src={background_blur} alt='' />
      )}
      {/* <h1 className='absolute z-0 top-8 left-7 text-5xl text-purple origin-left rotate-90'>
        Incheon Foundation
      </h1> */}
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
            <Preview setHover={setHover} />
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
