import {SPACE_DATA} from '../util/spaceInfo.js';
import detailBackground1 from '../assets/detail/DetailBackground1.svg';
import detailBackground2 from '../assets/detail/DetailBackground2.svg';
import introDot from '../assets/detail/IntroDot.svg';
import detailDot from '../assets/detail/DetailDot.svg';
import mapIcon from '../assets/detail/MapIcon.svg';
import michuholLinear from '../assets/detail/MichuholLinear.svg';
import dongLinear from '../assets/detail/DongLinear.svg';
import jungLinear from '../assets/detail/JungLinear.svg';

import {useParams} from 'react-router-dom';

const SpaceDetailPage = () => {
  const {id} = useParams();
  const imagePath = `/assets/${1}`; // 임의로 "1" 폴더만 사용
  const space = SPACE_DATA.find((item) => item.id === Number(id));
  const section = space?.section;

  const imageMap = {
    michuhol: '/detail/MichuholDot.svg',
    dong: '/detail/DongDot.svg',
    jung: '/detail/JungDot.svg',
  };
  const imageSrc = imageMap[section];

  const DetailCard = ({title, children}) => (
    <div>
      <h3 className='text-lg pb-6 font-semibold border-b-[1.8px] border-black'>
        {title}
      </h3>
      <div className='text-base pt-5 relative'>{children}</div>
    </div>
  );

  const dotColors = {
    michuhol: 'bg-blue-600',
    jung: 'bg-lime-600',
    dong: 'bg-yellow-400',
  };

  return (
    <div className='bg-[#FDFCF8] relative '>
      {/* background */}
      <div className='absolute inset-0 z-0 overflow-hidden'>
        <img
          src={detailBackground1}
          alt='상단 배경 요소'
          className='w-full h-full absolute top-[180px]'
        />
      </div>

      {/* contents */}
      <div className='relative w-full'>
        {/* intro */}
        <div className='flex w-full'>
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
            <img src={introDot} alt='' className='h-[30px] mt-[80px]' />
          </div>
          <div className='relative w-1/2 h-[700px] overflow-hidden rounded-bl-full '>
            <img
              src={`${imagePath}/main.webp`}
              alt='대표 이미지'
              className='absolute inset-0 w-full h-full object-cover z-10 grayscale'
            />
            <img
              src={imageSrc}
              alt=''
              className='absolute -right-[20px] top-[50px] h-[95%] z-20'
            />
          </div>
        </div>

        {/* detail */}
        <div className='relative grid mt-[100px] px-[150px] grid-cols-1 md:grid-cols-3 gap-14'>
          {section == 'jung' && (
            <img
              src={jungLinear}
              alt=''
              className='absolute -left-8 top-[8.8px] h-[45px]'
            />
          )}
          <DetailCard title='공간'>
            <p>{space.location}</p>
            <button
              type='button'
              className='mt-5 inline-flex items-center rounded-full border px-1 py-1 pr-4 text-sm'
              // onClick={() => 길찾기 로직}
            >
              <img src={mapIcon} alt='지도 아이콘' className='pr-2 h-6' />
              길찾기
            </button>
          </DetailCard>
          <DetailCard title='공동 프로젝트 일정'>
            <p>{space.projectSchedule}</p>
          </DetailCard>
          <DetailCard title='오픈스튜디오 정보 및 운영 일정'>
            <div className='relative'>
              {section == 'michuhol' && (
                <img
                  src={michuholLinear}
                  alt=''
                  className='absolute !w-[200px] !h-[45px] -right-[150px] -top-[63px]'
                />
              )}
              {space.studioInfo.map((group, groupIdx) => (
                <div key={groupIdx} className='mb-8'>
                  {group.map((item, i) => (
                    <div key={i} className='flex pt-1 '>
                      {i >= 2 && (
                        <span
                          className={`h-3 w-3 mt-1.5 mr-2 ml-8 rounded-full flex-shrink-0 ${
                            dotColors[space.section]
                          }`}>
                          {' '}
                        </span>
                      )}
                      <p className={i === 0 ? 'font-bold mb-1' : ''}>{item}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </DetailCard>
          <img src={detailDot} alt='' className='h-[160px] ml-[100px]' />
        </div>

        {/* map*/}
        <div className='flex justify-center mb-[100px] relative'>
          <div className='w-[50%] pr-35'>
            <div className='relative'>
              <p className='block text-lg font-semibold w-full pb-[3%]'>지도</p>
              <p className='w-[700px] h-[700px] m-0 bg-gray-100'></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceDetailPage;
