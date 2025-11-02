import {SPACE_DATA} from '../utils/spaceInfo.js';
import textureTile from '@/assets/svg/texture-tile.svg';
import {SPACE_IMAGES} from '../data/SpaceImages.jsx';
import surveyButton from '../assets/svg/survey-button.svg';
import {INFO_HIGHLIGHT} from '../data/InfoHighlights.jsx';
import {DETAIL_HIGHLIGHT} from '../data/DetailHighlights.jsx';
import {TITLE_HIGHLIGHTS} from '../data/TItleHighlights.jsx';
import {useParams} from 'react-router-dom';

const SpaceDetailPage = () => {
  const {id} = useParams();
  //const imagePath = `/assets/${1}`; // 임의로 "1" 폴더만 사용
  const space = SPACE_DATA.find((item) => item.id === Number(id));
  // const section = space?.section;
  //const imagekey=space.image;
  // const imageMap = {
  //   michuhol: '/detail/MichuholDot.svg',
  //   dong: '/detail/DongDot.svg',
  //   jung: '/detail/JungDot.svg',
  // };

  const imageSrc = SPACE_IMAGES[id];
  const titleSrc = TITLE_HIGHLIGHTS[id];
  const infoHighlightSrc = INFO_HIGHLIGHT[id];
  const detailHighlightSrc = DETAIL_HIGHLIGHT[id];

  const DetailCard = ({title, children}) => (
    <div>
      <h3 className='text-lg pb-6 font-semibold border-b-[1.8px] border-black'>
        {title}
      </h3>
      <div className='text-base pt-5 relative'>{children}</div>
    </div>
  );

  return (
    <div
      className='relative min-h-screen'
      style={{
        backgroundImage: `url(${textureTile})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '90px 90px',
      }}>
      <div className='relative z-10 w-full px-36 pt-28 pb-20'>
        {/* 제목 */}
        <div className='mb-12'>
          <h1
            className='text-[56px] font-normal tracking-tight mb-4'
            style={{
              fontFamily: 'ssYoungestDaughterRegular',
              lineHeight: '1.1',
              color: '#D5CFC2',
            }}>
            {space.title}
          </h1>
          {/* 부제목 */}
          <div>
            <p
              className='text-[24px] inline-block'
              style={{
                backgroundImage: `url(${titleSrc})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'auto 100%',
                backgroundPosition: 'left ',
                lineHeight: '1.3',
                padding: '0.2em 0.2em ',
              }}>
              {space.sub_title}
            </p>
          </div>
        </div>

        <div className='flex mt-16 relative'>
          {/* 왼쪽 정보 영역 */}
          <div className='w-1/2 pr-10'>
            {/* 프로그램 소개 */}
            <div>
              <h3
                className='text-lg font-semibold  mb-3'
                style={{
                  backgroundImage: `url(${infoHighlightSrc})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'auto 110%',
                  backgroundPosition: 'left ',
                }}>
                프로그램 소개
              </h3>
              <p className='text-base/7'>{space.program}</p>

              {/* 프로그램 설명 */}
              <div>
                <p className='text-base/7'>{space.program_info}</p>
              </div>
            </div>

            {/* 시간 & 장소 */}
            <div className='mt-10 flex gap-16'>
              <div>
                <h3
                  className='text-lg font-semibold  mb-3'
                  style={{
                    backgroundImage: `url(${detailHighlightSrc})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'auto 80%',
                    backgroundPosition: 'left ',
                  }}>
                  시간
                </h3>
                <p className='text-base'>{space.time}</p>
              </div>

              <div>
                <h3
                  className='text-lg font-semibold  mb-3'
                  style={{
                    backgroundImage: `url(${detailHighlightSrc})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'auto 80%',
                    backgroundPosition: 'left ',
                  }}>
                  장소
                </h3>
                <p className='text-base whitespace-pre-line'>
                  {space.detail_location}
                </p>
              </div>
            </div>

            {/* 설문조사 버튼 (왼쪽 컬럼 내부 하단) */}
            <div className='mt-12'>
              <button>
                <img
                  src={surveyButton}
                  alt='설문조사 바로가기 버튼'
                  className='absolute bottom-0 right-10 w-[150px] h-auto cursor-pointer '
                />
              </button>
            </div>
          </div>
          {/* 오른쪽 이미지 영역 */}
        </div>
        <div className='w-1/2 absolute top-0 right-0 h-full'>
          <img
            src={imageSrc}
            alt={`${space.title} 대표 이미지`}
            className='absolute top-[-100px] right-[-200px] w-[90%] h-auto opacity-40 max-w-none scale-150'
            style={{transformOrigin: 'right top'}}
          />
        </div>
      </div>
      {/*지도*/}
      <div className='mt-10 flex justify-center mb-[100px] relative'>
        <div className='w-[50%] pr-35'>
          <div className='relative'>
            <p
              className='block text-lg font-semibold w-full pb-[3%]'
              style={{
                backgroundImage: `url(${detailHighlightSrc})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'auto 80%',
                backgroundPosition: 'auto ',
              }}>
              지도
            </p>
            <p className='w-[700px] h-[700px] m-0 bg-gray-100'></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceDetailPage;
