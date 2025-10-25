import incheonlogo from '@/assets/svg/incheon-logo.svg';
import incheonfoundationlogo from '@/assets/svg/incheon-foundation-logo.svg';

const Footer = () => {
  return (
    <footer className='w-full bg-rose-200'>
      <div className='max-w-7xl mx-auto h-56 px-4 lg:px-36 py-20 flex justify-between items-start'>
        {/* 왼쪽 로고 그룹 */}
        <div className='flex justify-start items-end gap-24'>
          <img
            className='w-28 h-6'
            src={incheonlogo}
            alt='인천 로고'
            loading='lazy'
          />
          <img
            className='w-28 h-7'
            src={incheonfoundationlogo}
            alt='인천재단 로고'
            loading='lazy'
          />
        </div>

        {/* 오른쪽 연락처 */}
        <div className='w-[216px] h-7 flex items-center justify-start'>
          <p className='text-type-head-2 text-2xl font-normal leading-loose'>
            032)760-1089,1093
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
