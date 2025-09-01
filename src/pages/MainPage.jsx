import background from '../assets/svg/background.svg';
import Preview from '../components/mainpage/Preview';

const MainPage = () => {
  return (
    <div className='flex justify-center py-15'>
      <div className='relative w-full max-w-[1078px]'>
        <img src={background} alt='background' />
        <Preview />
      </div>
    </div>
  );
};
export default MainPage;
