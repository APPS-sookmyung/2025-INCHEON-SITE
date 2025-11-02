import React from 'react';
import Section from '../layout/Section';
import {SectionTitle} from './SectionTitle';

const EventsIntro = () => {
  return (
    <Section
      className={`relative min-h-[450px] md:min-h-[600px] lg:min-h-[898px] mx-0 start pb-[130px]`}>
      <div className='w-full'>
        <SectionTitle
          pretitle={'Our Events'}
          title={`<점점점 즐거움이 채워지는 마을 선물 대잔치>`}
          highlightColor={'pink_long'}
          layout={'start'}
        />
      </div>

      {/* 왼쪽 설명 텍스트 */}
      <p
        className='absolute top-[80%] left-[5%] lg:left-[15%]  max-w-[450px] font-bold text-type-head-2 tracking-[-0.75px] text-base md:text-lg lg:text-2xl'
        style={{
          fontFamily: 'SejongGeulggot, Pretendard, sans-serif',
        }}>
        점점점 마을에 오시는 발걸음이 더욱 즐거워지도록 정성을 담아 작은
        선물들을 준비했어요.
      </p>

      {/* 오른쪽 설명 텍스트 */}
      <p
        className='absolute -bottom-[30%] right-[5%] lg:right-[15%] sm:right-[3%] max-w-[510px] font-bold text-type-head-2 tracking-[-0.75px] text-base md:text-lg lg:text-2xl '
        style={{
          fontFamily: 'SejongGeulggot, Pretendard, sans-serif',
        }}>
        즐거운 이벤트와 함께 점점점 마을을 200% 즐겨보세요!
      </p>
    </Section>
  );
};

export default EventsIntro;
