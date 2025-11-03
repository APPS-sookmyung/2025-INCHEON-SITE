import {Link} from 'react-router-dom';
import blog from '@/assets/svg/blog-icon.svg';
import blogFooter from '@/assets/svg/blog-icon-footer.svg';
import instagram from '@/assets/svg/instagram-icon.svg';

const SocialLinks = ({className = '', isFooter = false}) => {
  return (
    <div className={`${className}`}>
      <div className='flex flex-1 justify-evenly *:p-1'>
        <a
          href='https://www.instagram.com/ifacpr/'
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
          href='https://blog.naver.com/PostList.naver?blogId=ifacpr'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            className='w-4.5 h-4.5 md:w-6 md:h-6 lg:w-7 lg:h-7'
            src={isFooter ? blogFooter : blog}
            alt='블로그 아이콘'
            loading='lazy'
          />
        </a>
        <div className='w-18 h-5 md:w-25 md:h-7 lg:w-28 lg:h-8 rounded-full outline-[1.2px] outline-type-head-2 hover:outline-type-body md:outline-type-body md:hover:outline-type-head-2 flex items-center justify-center text-center'>
          <a
            href='https://ifac.or.kr/index.do'
            target='_blank'
            rel='noopener noreferrer'>
            <p className='text-type-head-2 hover:text-type-body text-xs md:text-type-body md:hover:text-type-head-2 md:text-base lg:text-lg font-normal'>
              공식 사이트
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
