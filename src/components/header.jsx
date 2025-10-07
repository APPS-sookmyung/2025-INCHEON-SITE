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
      <div className='mx-auto max-w-6xl px-5 h-16 flex items-center justify-between'>
        <div className='flex items-center gap-6 '>
          <Link to='/' onClick={() => goToMainAndScroll('top')}>
            <img src={dotdotdot_logo} alt='logo' className='h-8' />
          </Link>
          <nav className='hidden md:flex items-center gap-6 text-sm text-neutral-600'>
            <Link className='hover:text-black' to='/spaces'>
              창작 공간들
            </Link>
          </nav>
        </div>
        <div className='flex items-center gap-3 text-neutral-600'>
          <a
            href='https://blog.naver.com/ifacpr'
            className='p-8 hover:text-black'>
            <img
              src='src/assets/blog_logo.png'
              alt='global'
              className='w-7 h-7'
            />
          </a>
        </div>
      </div>
    </header>
  );
}
