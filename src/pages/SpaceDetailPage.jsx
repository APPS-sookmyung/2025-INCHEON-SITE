import textureTile from '@/assets/svg/texture-tile.svg';
import {useParams} from 'react-router-dom';
import {spaceEvents} from '../data/spaceEvents';
import yellow_highlight from '../assets/svg/yellow-highlight.svg';
import blue_highlight from '../assets/svg/blue-highlight.svg';
import green_highlight from '../assets/svg/green-highlight.svg';
import pink_highlight from '../assets/svg/pink-highlight.svg';
import yellow_highlight_big from '../assets/svg/yellow-highlight-big.svg';
import blue_highlight_big from '../assets/svg/blue-highlight-big.svg';
import pink_highlight_big from '../assets/svg/pink-highlight-big.svg';
import green_highlight_big from '../assets/svg/green-highlight-big.svg';
import GoogleMap from '../components/sections/GoogleMap';
import InfoItem from '../components/InfoItem';
import SurveyButton from '../components/buttons/SurveyButton';

const HIGHLIGHT_IMAGE_MAP = {
  pink: pink_highlight,
  green: green_highlight,
  yellow: yellow_highlight,
  blue: blue_highlight,
};

const PROGRAM_HIGHLIGHT_IMAGE_MAP = {
  pink: pink_highlight_big,
  green: green_highlight_big,
  yellow: yellow_highlight_big,
  blue: blue_highlight_big,
};

const HIGHLIGHT_POSITION_CLASSES = {
  program:
    'absolute scale-60 md:scale-75 lg:scale-100 -translate-x-[30%] -translate-y-[28%] md:-translate-x-[24%] md:-translate-y-[20%] lg:-translate-x-[16%] lg:-translate-y-[16%]',
  time: 'absolute scale-60 md:scale-80 lg:scale-100 -translate-x-[38%] -translate-y-[28%] md:-translate-x-[33%] md:-translate-y-[20%] lg:-translate-x-[28%] lg:-translate-y-[13%]',
  address:
    'absolute scale-60 md:scale-80 lg:scale-100 -translate-x-[38%] -translate-y-[26%] md:-translate-x-[34%] md:-translate-y-[20%] lg:-translate-x-[28%] lg:-translate-y-[13%]',
};

const SpacehighlightPage = () => {
  const {id} = useParams();
  const event = spaceEvents.find((event) => event.id === id);

  const conceptImgUrl = new URL(
    `../assets/spaceConcepts/${id}.svg`,
    import.meta.url
  ).href;

  const theme = event.themeColor;

  return (
    <main
      className='w-full relative lg:pb-20'
      style={{
        backgroundImage: `url(${textureTile})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '150px 150px',
        backgroundPosition: 'top left',
      }}>
      <article
        className='relative w-6/7 md:w-3/4 mx-auto min-h-screen py-15 md:py-24 lg:w-full lg:px-37 lg:pt-32 lg:pb-40'
        style={{WebkitTextStrokeWidth: '0.2px'}}
        aria-labelledby='space-title'>
        {/* 공간 컨셉 일러스트 */}
        <img
          className={`${event.imgClass} hidden md:block absolute right-0 top-0`}
          src={conceptImgUrl}
          alt={`${event.name} 공간 컨셉 일러스트`}
        />

        {/* 헤더 영역 */}
        <header className='relative flex flex-col text-black gap-4.5 md:gap-6 lg:gap-9 mb-11 md:mb-17 lg:mb-22'>
          <h1
            id='space-title'
            className='text-5xl md:text-7xl lg:text-8xl font-family-ssYoungestDaughterRegular text-type-head-1'>
            {event.name}
          </h1>
          <p
            className='text-lg md:text-2xl lg:text-[33px]'
            style={{WebkitTextStrokeWidth: '0.7px'}}
            aria-label={`공간 타이틀: ${event.title}`}>
            {`< ${event.title} >`}
          </p>
        </header>

        {/* 프로그램 정보 */}
        <section className='flex flex-col gap-11 md:gap-30 lg:gap-40'>
          <InfoItem
            label='프로그램 소개'
            highlight={HIGHLIGHT_POSITION_CLASSES.program}
            theme={PROGRAM_HIGHLIGHT_IMAGE_MAP[theme]}>
            {event.description}
          </InfoItem>
          <div className='flex flex-col md:flex-row gap-11 md:gap-30 lg:gap-50'>
            <InfoItem
              label='시간'
              highlight={HIGHLIGHT_POSITION_CLASSES.time}
              theme={HIGHLIGHT_IMAGE_MAP[theme]}
              className='whitespace-pre'>
              {event.time}
            </InfoItem>
            <InfoItem
              label='장소'
              highlight={HIGHLIGHT_POSITION_CLASSES.address}
              theme={HIGHLIGHT_IMAGE_MAP[theme]}
              className='md:whitespace-pre'>
              {event.address}
            </InfoItem>
          </div>
        </section>

        {/* 설문 링크 */}
        <SurveyButton link={event.surveyLink} />

        {/* 지도 섹션 */}
        <section className='w-full mt-40 md:mt-50 lg:mt-20 lg:w-3/4'>
          <GoogleMap aria-label={`${event.name} 위치 지도`} />
        </section>
      </article>
    </main>
  );
};

export default SpacehighlightPage;
