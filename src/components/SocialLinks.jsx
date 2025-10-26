import {Link} from 'react-router-dom';
import blog from '@/assets/svg/blog-icon.svg';
import instagram from '@/assets/svg/instagram-icon.svg';

const SocialLinks = ({className = ''}) => {
  return (
    <div className={`${className}`}>
      <div className='flex flex-1 justify-evenly'>
        <a
          href='https://www.instagram.com'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            className='w-4.5 h-4.5 md:w-6 md:h-6 lg:w-7 lg:h-7'
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
            className='w-4.5 h-4.5 md:w-6 md:h-6 lg:w-7 lg:h-7'
            src={blog}
            alt='블로그 아이콘'
            loading='lazy'
          />
        </a>
      </div>

      <Link
        to='/official'
        className='w-20 h-5 md:w-27 md:h-7 lg:w-28 lg:h-8 px-2.5 py-0.5 rounded-full outline-[1.2px] outline-type-head-2 flex justify-center items-center gap-2.5'>
        <span className='text-center text-type-head-2 text-xs md:text-base lg:text-lg font-normal'>
          공식 사이트
        </span>
      </Link>
    </div>
  );
};

export default SocialLinks;
