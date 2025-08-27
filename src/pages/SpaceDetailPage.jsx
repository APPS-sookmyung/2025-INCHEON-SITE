import {SPACE_DATA} from '../util/spaceInfo.js';
import detailBackground1 from '../assets/DetailBackground1.svg';
import detailBackground2 from '../assets/DetailBackground2.svg';
import introDot from '../assets/introDot.svg';

import {useParams} from 'react-router-dom';

const SpaceDetailPage = () => {
  const {id} = useParams();
  const imagePath = `/assets/${1}`; // 임의로 "1" 폴더만 사용
  const space = SPACE_DATA.find((item) => item.id === Number(id));
  const section = space?.section;

  const imageMap = {
    michuhol: '/MichuholDot.svg',
    dong: '/DongDot.svg',
    jung: '/JungDot.svg',
  };

  const imageSrc = imageMap[section];

  return (
    <div className='bg-[#FDFCF8] relative font-pretendard'>
      {/* 배경 */}
      <div className='absolute top-[180px]'>
        <img src={detailBackground1} alt='background top' className='w-full' />
        <img
          src={detailBackground2}
          alt='background bottom'
          className='w-full'
        />
      </div>

      {/* intro */}
      <div className='absolute flex top-0 w-full'>
        <div className='pl-[150px] pr-[50px] pt-[180px] w-1/2'>
          <h1 className='font-black text-6xl tracking-tighter mb-[80px]'>
            {space.title}
          </h1>
          <span className='text-sm font-normal text-white bg-black rounded-full py-2 px-4'>
            프로그램 소개
          </span>
          <p className='w-[80%] text-xl/10 text-left font-medium mt-[30px]'>
            {space.program}
          </p>
          <img src={introDot} alt='introDot' className='h-[30px] mt-[80px]' />
        </div>
        <div className='relative w-1/2 h-[700px] overflow-hidden rounded-bl-full '>
          <img
            src={`${imagePath}/main.webp`}
            alt='대표 이미지'
            className='absolute inset-0 w-full h-full object-cover z-10 grayscale'
          />
          <img
            src={imageSrc}
            alt={section}
            className='absolute -right-[20px] top-[50px] h-[95%] z-20'
          />
        </div>
      </div>
    </div>
  );
};

export default SpaceDetailPage;
