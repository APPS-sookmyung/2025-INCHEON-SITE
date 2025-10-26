import incheonlogo from '@/assets/svg/incheon-logo.svg';
import incheonfoundationlogo from '@/assets/svg/incheon-foundation-logo.svg';
import SocialLinks from '../SocialLinks';

const Footer = () => {
  return (
    <footer className='bg-rose-200'>
      <div className='w-full h-40 md:h-47 lg:h-54 flex items-center justify-evenly md:justify-between md:px-20 lg:px-35'>
        {/* 왼쪽 로고 그룹 */}
        <div className='flex items-center md:gap-8 lg:gap-16'>
          <img
            className='w-19 h-4 md:w-28 md:h-6'
            src={incheonlogo}
            alt='인천 로고'
            loading='lazy'
          />
          <img
            className='w-19 m-5 md:w-28 md:h-7'
            src={incheonfoundationlogo}
            alt='인천재단 로고'
            loading='lazy'
          />
        </div>

        {/* 오른쪽 연락처 */}
        <div className='flex flex-col gap-2'>
          <p className='text-type-head-2 text-sm md:text-xl lg:text-2xl font-normal'>
            032)760-1089,1093
          </p>
          <SocialLinks className='md:hidden flex gap-4 *:gap-4' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
