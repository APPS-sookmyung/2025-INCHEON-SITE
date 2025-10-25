import {Link} from 'react-router-dom';
import dotdotdotlogo from '@/assets/svg/dotdotdot-logo.svg';
import blog from '@/assets/svg/blog-icon.svg';
import instagram from '@/assets/svg/instagram-icon.svg';

export default function Header() {
  return (
    <header className='sticky top-0 z-20 w-full bg-primary-4 shadow-[0_6px_60px_0_rgba(111,111,111,0.20)]'>
      <div className='whitespace-nowrap px-5 py-4 md:px-12 md:py-5 md:flex md:items-center lg:px-36 lg:py-6'>
        {/* 왼쪽: 로고 + 메뉴 */}
        <div className='flex items-center gap-3 md:w-3/5 md:gap-10'>
          <Link to='/'>
            <img
              className='w-18 h-14 md:w-21 md:h-19 lg:w-28 lg:h-24 object-contain'
              src={dotdotdotlogo}
              alt='DotDotDot 로고'
              loading='lazy'
            />
          </Link>

          <nav className='flex flex-1 justify-evenly gap-7 lg:gap-9'>
            <Link
              to='/spaces'
              className='text-type-head-2 text-sm md:text-lg lg:text-xl font-normal'>
              창작 공간들
            </Link>
            <Link
              to='/events'
              className='text-type-head-2 text-sm md:text-lg lg:text-xl font-normal'>
              이벤트 정보
            </Link>
            <Link
              to='/schedule'
              className='text-type-head-2 text-sm md:text-lg lg:text-xl font-normal'>
              설문조사
            </Link>
          </nav>
        </div>

        {/* 오른쪽: 아이콘 + 버튼 */}
        <div className='hidden md:flex md:w-2/5'>
          <div className='flex flex-1 justify-evenly'>
            <a
              href='https://www.instagram.com'
              target='_blank'
              rel='noopener noreferrer'>
              <img
                className='md:w-6 md:h-6 lg:w-7 lg:h-7'
                src={instagram}
                alt='인스타그램 아이콘'
                loading='lazy'
              />
            </a>
            <a
              href='https://blog.example.com'
              target='_blank'
              rel='noopener noreferrer'>
              <img
                className='md:w-6 md:h-6 lg:w-7 lg:h-7'
                src={blog}
                alt='블로그 아이콘'
                loading='lazy'
              />
            </a>
          </div>

          <Link
            to='/official'
            className='md:w-27 md:h-7 lg:w-28 lg:h-8 px-2.5 py-0.5 rounded-full outline-[1.2px] outline-type-head-2 flex justify-center items-center gap-2.5'>
            <span className='text-center text-type-head-2 md:text-base lg:text-lg font-normal'>
              공식 사이트
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
