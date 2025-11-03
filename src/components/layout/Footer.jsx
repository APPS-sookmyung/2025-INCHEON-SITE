import incheonlogo from '@/assets/svg/incheon-logo.svg';
import incheonfoundationlogo from '@/assets/svg/incheon-foundation-logo.svg';
import SocialLinks from '../SocialLinks';

const Footer = () => {
  return (
    <footer className='bg-rose-200'>
      <div className='-translate-y-[3%] w-full h-40 md:h-47 lg:h-54 flex gap-5 flex-col md:flex-row items-center justify-center md:justify-between md:px-20 lg:px-35'>
        {/* 왼쪽 로고 그룹 */}
        <div className='flex items-center gap-6 md:gap-8 lg:gap-16'>
          <img
            className='w-19 h-4 md:w-28 md:h-6'
            src={incheonlogo}
            alt='인천 로고'
            loading='lazy'
          />
          <img
            className='w-19 h-5 md:w-28 md:h-7'
            src={incheonfoundationlogo}
            alt='인천재단 로고'
            loading='lazy'
          />
        </div>

        {/* 오른쪽 연락처 + 외부 링크 아이콘 + 저작권 표기*/}
        <div className='relative flex flex-row gap-5'>
          <p className='text-type-head-2 text-sm md:text-xl lg:text-2xl font-normal mx-auto'>
            032)760-1089,1093
          </p>
          <SocialLinks className='md:hidden flex gap-4 *:gap-4' isFooter />
          <p className='absolute bottom-0 right-0 text-[10px] md:text-xs -translate-x-[23%] md:translate-x-0 translate-y-[200%] whitespace-nowrap text-type-head-2'>
            본 사이트는 세종글꽃체 서체를 사용하고 있습니다.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
