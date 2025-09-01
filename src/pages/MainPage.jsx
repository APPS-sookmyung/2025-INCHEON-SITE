import background from '../assets/svg/background.svg';
import Preview from '../components/mainpage/Preview';
import title from '../assets/svg/title.svg';

const MainPage = () => {
  return (
    <div className='flex justify-center py-20'>
      <img className='absolute z-0 top-8 left-7' src={title} alt='' />
      {/* <h1 className='absolute z-0 top-8 left-7 text-5xl text-purple origin-left rotate-90'>
        Incheon Foundation
      </h1> */}
      <div className='relative w-full max-w-[1078px]'>
        <img src={background} alt='background' />
        <Preview />
      </div>
    </div>
  );
};
export default MainPage;
