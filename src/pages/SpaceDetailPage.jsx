import {SPACE_DATA} from '../util/spaceInfo.js';
import detailBackground1 from '../assets/detail/DetailBackground1.svg';
import detailBackground2 from '../assets/detail/DetailBackground2.svg';
import introDot from '../assets/detail/IntroDot.svg';
import detailDot from '../assets/detail/DetailDot.svg';
import spaceImgDot from '../assets/detail/SpaceImgDot.svg';
import mapIcon from '../assets/detail/MapIcon.svg';

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

  const DetailCard = ({title, children}) => (
    <div>
      <h3 className='text-lg pb-6 font-semibold border-b-2 border-black'>
        {title}
      </h3>
      <div className='text-base mt-5'>{children}</div>
    </div>
  );

  const dotColors = {
    michuhol: 'bg-blue-600',
    jung: 'bg-lime-600',
    dong: 'bg-yellow-400',
  };

  return (
    <div className='bg-[#FDFCF8] relative font-pretendard'>
      {/* 배경 */}
      <div className='absolute top-[180px]'>
        <img src={detailBackground1} alt='background top' className='w-full' />
        <div className='h-[150px]'></div>
        <img
          src={detailBackground2}
          alt='background bottom'
          className='w-full'
        />
        <div className='w-full h-[1000px] bg-[#FDFCF8]' />
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

        {/* detail */}
        <div className='grid mt-[100px] px-[150px] grid-cols-1 md:grid-cols-3 gap-14'>
          <DetailCard title='공간'>
            <p>{space.location}</p>
            <button
              type='button'
              className='mt-5 inline-flex items-center rounded-full border px-1 py-1 pr-4 text-sm'
              // onClick={() => 길찾기 로직}
            >
              <img src={mapIcon} alt='mapIcon' className='pr-2 h-6' />
              길찾기
            </button>
          </DetailCard>
          <DetailCard title='공동 프로젝트 일정'>
            <p>{space.projectSchedule}</p>
          </DetailCard>
          <DetailCard title='오픈스튜디오 정보 및 운영 일정'>
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
          </DetailCard>
          <img
            src={detailDot}
            alt='detailDot'
            className='h-[160px] ml-[100px]'
          />
        </div>

        {/* interview intro*/}
        <div className='flex justify-center mb-[100px]'>
          <div className='w-[50%] pr-35'>
            <p className='block text-lg font-semibold border-b-2 border-black w-full pb-5'>
              팀원
            </p>
            <div className='flex justify-between relative'>
              <div className='inline-block pt-5'>
                {space.members.map((member, idx) => (
                  <p key={idx} className='font-base mb-1'>
                    {member}
                  </p>
                ))}
              </div>
              <img
                src={`${imagePath}/interview.webp`}
                alt='interviewImage'
                className='w-[65%] h-[350px] grayscale rounded-br-[70%] object-cover'
              />
              <p
                className='absolute bottom-5 left-1/2 -translate-x-1/2 
                   bg-white text-black rounded-full px-8 py-2 text-sm font-bold'>
                인터뷰
              </p>
            </div>
          </div>
        </div>

        {/* interview */}
        <div className='w-[55%] relative left-[400px]'>
          {space.interview.map((interview, interviewIdx) => (
            <div
              key={interviewIdx}
              className='flex mb-8 pb-8 border-b-1 border-black items-start'>
              <span className='text-7xl pr-6'>
                {(interviewIdx + 1).toString().padStart(2, '0')}
              </span>
              <div>
                <p className='font-bold mb-6 pt-2'>{interview.q}</p>
                <p className='text-sm'>{interview.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* space img */}
        <div>
          <div className='flex flex-col items-end'>
            <img
              src={spaceImgDot}
              alt='spaceImgDot'
              className='h-[40px] mt-[130px] mr-[150px]'></img>
            <p className='font-bold text-base mt-4 mr-[330px] mb-[100px]'>
              내부 공간
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <div className='grid grid-cols-[1fr_2fr] grid-rows-[3fr_2fr] gap-6 h-[450px] w-[950px]  mb-16'>
              <img
                src={`${imagePath}/1.webp`}
                alt='spaceImg'
                className='w-full h-full object-cover'
              />
              <img
                src={`${imagePath}/2.webp`}
                alt='spaceImg'
                className='row-span-2 w-full h-full object-cover'
              />
              <img
                src={`${imagePath}/3.webp`}
                alt='spaceImg'
                className='h-full w-2/3 object-cover justify-self-end'
              />
            </div>
            <div className='grid grid-cols-[2fr_1fr] grid-rows-[2fr_1fr] gap-6 w-[950px] mb-12'>
              <img
                src={`${imagePath}/4.webp`}
                alt='spaceImg'
                className='w-full justify-self-end object-cover'></img>
              <img
                src={`${imagePath}/5.webp`}
                alt='spaceImg'
                className='w-full self-end'></img>
              <p className='h-1'></p>
              <img
                src={`${imagePath}/6.webp`}
                alt='h-full object-cover spaceImg'></img>
            </div>
            <div className='grid grid-cols-2 grid-rows-[3fr_2fr] gap-6 w-[850px]'>
              <img
                src={`${imagePath}/7.webp`}
                alt='spaceImg'
                className='w-[70%] h-[400px] self-end object-cover col-span-2'></img>
              <img
                src={`${imagePath}/8.webp`}
                alt='spaceImg'
                className='h-full object-cover'></img>
              <img
                src={`${imagePath}/9.webp`}
                alt='spaceImg'
                className='h-full object-cover'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceDetailPage;
