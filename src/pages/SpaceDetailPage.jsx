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

const highlightColorMap = {
  pink: pink_highlight,
  green: green_highlight,
  yellow: yellow_highlight,
  blue: blue_highlight,
};

const programHighlightColorMap = {
  pink: pink_highlight_big,
  green: green_highlight_big,
  yellow: yellow_highlight_big,
  blue: blue_highlight_big,
};

const SpacehighlightPage = () => {
  const {id} = useParams();
  const event = spaceEvents.find((event) => Number(event.id) === Number(id));

  return (
    <div
      className='w-full relative'
      style={{
        backgroundImage: `url(${textureTile})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '90px 90px',
      }}>
      <div
        className='relative w-6/7 md:w-3/4 mx-auto min-h-screen py-15 md:py-24 lg:w-full lg:px-37 lg:pt-32 lg:pb-40'
        style={{
          WebkitTextStrokeWidth: '0.2px',
        }}>
        <img
          className={`${event.imgClass} hidden md:block absolute right-0 top-0`}
          src={
            new URL(`../assets/spaceConcepts/${id}.svg`, import.meta.url).href
          }
        />
        <div className='relative flex flex-col text-black text-sm md:text-lg lg:text-2xl'>
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-family-ssYoungestDaughterRegular text-type-head-1 mb-4.5 md:mb-6 lg:mb-9'>
            {event.name}
          </h1>
          <h3
            className='lg:whitespace-pre text-lg md:text-2xl lg:text-4xl mb-11 md:mb-17 lg:mb-22'
            style={{
              WebkitTextStrokeWidth: '0.7px',
            }}>{`< ${event.title} >`}</h3>

          {/* 프로그램 소개 */}
          <div className='md:whitespace-pre space-y-5 md:space-y-7 lg:space-y-14 mb-11 md:mb-30 lg:mb-40'>
            <img
              className='absolute scale-60 md:scale-75 lg:scale-100 -translate-x-[30%] -translate-y-[28%] md:-translate-x-[24%] md:-translate-y-[20%] lg:-translate-x-[16%] lg:-translate-y-[16%]'
              src={programHighlightColorMap[event.themeColor]}
            />
            <p
              className='relative '
              style={{
                WebkitTextStrokeWidth: '0.5px',
              }}>
              프로그램 소개
            </p>
            <p className='text-type-head-2'>{event.description}</p>
          </div>

          {/* 시간 + 장소 */}
          <div className='md:whitespace-pre flex flex-col md:flex-row gap-11 md:gap-30 lg:gap-48'>
            <div className='space-y-5 md:space-y-7 lg:space-y-14'>
              <img
                className='absolute scale-60 md:scale-80 lg:scale-100 -translate-x-[38%] -translate-y-[28%] md:-translate-x-[33%] md:-translate-y-[20%] lg:-translate-x-[28%] lg:-translate-y-[13%]'
                src={highlightColorMap[event.themeColor]}
              />
              <p
                className='relative'
                style={{
                  WebkitTextStrokeWidth: '0.5px',
                }}>
                시간
              </p>
              <p className='text-type-head-2'>{event.time}</p>
            </div>
            <div className='space-y-5 md:space-y-7 lg:space-y-14'>
              <img
                className='absolute scale-60 md:scale-80 lg:scale-100 -translate-x-[38%] -translate-y-[26%] md:-translate-x-[34%] md:-translate-y-[20%] lg:-translate-x-[28%] lg:-translate-y-[13%]'
                src={highlightColorMap[event.themeColor]}
              />
              <p
                className='relative'
                style={{
                  WebkitTextStrokeWidth: '0.5px',
                }}>
                장소
              </p>
              <p className='text-type-head-2'>{event.address}</p>
            </div>
          </div>
        </div>
        <button
          className='absolute right-0 lg:right-28 lg:mb-auto w-fit rounded-[100px] bg-type-head-1 px-5 md:px-7 py-2 my-20 hover:text-type-head-2'
          onClick={() =>
            window.open(event.surveyLink, '_blank', 'noopener,noreferrer')
          }>
          <span className='hidden text-lg lg:text-2xl md:block'>
            설문조사 바로가기 →
          </span>
          <span className='md:hidden text-sm'>설문조사 →</span>
        </button>

        <div className='w-full mt-40 md:mt-50 lg:mt-20 lg:w-3/4'>
          <GoogleMap />
        </div>
      </div>
    </div>
  );
};

export default SpacehighlightPage;
