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
        {/* PreviewSection */}
        <div
          className='relative w-full h-[1024px]'
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: '0 0',
            backgroundSize: '1078px 5214px',
            backgroundRepeat: 'no-repeat',
          }}>
          <Preview setHover={setHover} />
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
