import {Link} from 'react-router-dom';
import dotdotdotlogo from '@/assets/svg/dotdotdot-logo.svg';
import blog from '@/assets/svg/blog-icon.svg';
import instagram from '@/assets/svg/instagram-icon.svg';

export default function Header() {
  return (
    <header className='sticky top-0 z-20 w-full bg-primary-4 shadow-[0_6px_60px_0_rgba(111,111,111,0.20)]'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-36 py-6 flex justify-between items-center'>
        {/* 왼쪽: 로고 + 메뉴 */}
        <div className='flex items-center gap-12 lg:gap-24'>
          <Link to='/'>
            <img
              className='w-28 h-24 object-contain'
              src={dotdotdotlogo}
              alt='DotDotDot 로고'
              loading='lazy'
            />
          </Link>

          <nav className='flex justify-center items-center gap-8 lg:gap-24'>
            <Link to='/spaces' className='text-type-head-2 text-xl font-normal'>
              창작 공간들
            </Link>
            <Link to='/events' className='text-type-head-2 text-xl font-normal'>
              이벤트 정보
            </Link>
            <Link
              to='/schedule'
              className='text-type-head-2 text-xl font-normal'>
              행사일정
            </Link>
          </nav>
        </div>

        {/* 오른쪽: 아이콘 + 버튼 */}
        <div className='flex items-center gap-8 lg:gap-12'>
          <div className='flex justify-start items-center gap-6'>
            <a
              href='https://www.instagram.com'
              target='_blank'
              rel='noopener noreferrer'>
              <img
                className='w-7 h-7'
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
                className='w-7 h-7'
                src={blog}
                alt='블로그 아이콘'
                loading='lazy'
              />
            </a>
          </div>

          <Link
            to='/official'
            className='w-28 h-8 px-2.5 py-0.5 rounded-full outline outline-[1.2px] outline-type-head-2 flex justify-center items-center gap-2.5'>
            <span className='text-center text-type-head-2 text-lg font-normal'>
              공식 사이트
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
