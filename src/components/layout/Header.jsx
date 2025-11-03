import {Link} from 'react-router-dom';
import dotdotdotlogo from '@/assets/svg/dotdotdot-logo.svg';
import SocialLinks from '../SocialLinks';

export default function Header() {
  return (
    <header className='sticky top-0 z-20 w-full bg-primary-4 shadow-[0_6px_60px_0_rgba(111,111,111,0.20)]'>
      <div className='whitespace-nowrap px-5 py-4 md:px-12 md:flex md:items-center lg:px-36'>
        {/* 왼쪽: 로고 + 메뉴 */}
        <div className='flex items-center gap-3 md:w-3/5 md:gap-10'>
          <Link to='/'>
            <img
              className='h-14 md:h-18 lg:h-20 object-contain'
              src={dotdotdotlogo}
              alt='DotDotDot 로고'
              loading='lazy'
            />
          </Link>

          <nav className='flex flex-1 justify-evenly gap-7 lg:gap-9 *:hover:text-type-body'>
            <Link
              to='/spaces'
              className='text-type-head-2 text-sm md:text-lg lg:text-xl font-normal'>
              문화공간 소개
            </Link>
            <Link
              to='/events'
              className='text-type-head-2 text-sm md:text-lg lg:text-xl font-normal'>
              이벤트 정보
            </Link>
            <a
              href='https://linktr.ee/dot_dot_dot'
              target='_blank'
              rel='noopener noreferrer'
              className='text-type-head-2 text-sm md:text-lg lg:text-xl font-normal'>
              설문조사
            </a>
          </nav>
        </div>

        {/* 오른쪽: 아이콘 + 버튼 */}
        <SocialLinks className='hidden md:flex md:w-2/5' />
      </div>
    </header>
  );
}
