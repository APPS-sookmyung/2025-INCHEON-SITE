import {Instagram, Menu, Globe} from 'lucide-react';
import {use} from 'react';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import dotdotdot_logo from '../assets/dotdotdot_logo.png';
import blog from '../assets/svg/blog.svg';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToMainAndScroll = (section) => {
    if (location.pathname === '/') {
      navigate('/', {state: {scrollTo: section}});
    } else {
      navigate('/', {state: {scrollTo: section}});
    }
  };

  return (
    <header className='sticky top-0 z-20 bg-[#F2F1EC]/80 backdrop-blur border-b border-neutral-300/70'>
      <div className='mx-auto max-w-6xl px-5 h-16 flex items-center justify-between text-base font-medium text-neutral-600'>
        <Link to='/' onClick={() => goToMainAndScroll('top')}>
          <img src={dotdotdot_logo} alt='logo' className='h-8' />
        </Link>
        <nav className='hidden md:flex gap-10'>
          <Link className='hover:text-black hover:font-semibold' to='/spaces'>
            창작 공간들
          </Link>
          <Link className='hover:text-black hover:font-semibold' to='/survey'>
            설문 조사
          </Link>
        </nav>
        <button
          onClick={() => {
            window.open('https://blog.naver.com/ifacpr');
          }}
          className='cursor-pointer hover:text-black hover:font-semibold'>
          <img src={blog} alt='블로그' className='w-6 h-6 md:hidden' />
          <span className='hidden md:flex'>인천문화재단 블로그</span>
        </button>
      </div>
    </header>
  );
}
