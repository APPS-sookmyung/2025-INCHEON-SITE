import blue from '@/assets/svg/watercolor-graphic-blue.svg';
import pink from '@/assets/svg/watercolor-graphic-pink.svg';
import green from '@/assets/svg/watercolor-graphic-green.svg';
import yellow from '@/assets/svg/watercolor-graphic-yellow.svg';

export const aboutSections = [
  {
    heading: {
      pretitle: 'About Us',
      title: "'2025 문화예술 특화거리 점점점' 소개",
    },
    layout: 'start',
    blobs: [
      // 파랑: left 65.46px, top 298.52px (≈9.9%)
      {url: blue, size: '21vw auto', position: 'left 65.46px top 9.9%'},
      // 핑크: left 677px, top 247px (≈8.2%)
      {url: pink, size: '54vw auto', position: 'left 677px top 8.2%'},
    ],
    body: (
      <section
        className='max-w-full sm:max-w-2xl lg:w-[744px] text-sm sm:text-base lg:text-lg text-type-body leading-relaxed sm:leading-relaxed lg:leading-relaxed'
        style={{fontFamily: 'SejongGeulggot, Pretendard, sans-serif'}}>
        <p className='mb-4 sm:mb-6 lg:mb-[var(--spacing-p-gap)]'>
          (재)인천문화재단은 인천 원도심 내 문화거점 조성을 통해 지역 예술인의
          창작기반을 강화하고 지역민의 일상 속 문화 접근성을 제고하기 위하여
          {'<2025 문화예술특화거리 점점점>'} 사업을 운영합니다.
        </p>
        <p className='last:mb-0'>
          인천 곳곳의 잠자던 공간들이 10개 예술단체의 '창작점(•)'으로
          깨어납니다.
          <span className='text-type-head-2'>
            '점점점(...)' 사업은 이 점들이 서로의 예술적 교류로 이어져 예술의
            가능성이 무한히 확장되고, 시민과의 만남이 끊임없이 이어진다는 의미를
            담고 있습니다.
          </span>
          점점점 예술단체들은 인천 곳곳의 공간에서 시민과 함께하는 문화예술
          활동을 통해 창작공간을 넘어 인천의 문화거점으로서 지속가능한 문화
          생태계 조성을 지향합니다. 점점점 예술단체들은 지역 내 예술단체 간
          협력으로 이뤄내는 공동프로젝트, 단체의 창작활동을 뽐내는 개별프로젝트,
          그리고 언제나 방문객 을 반기는 오픈스튜디오 프로젝트를 통해
          문화거점으로 활약하고 있습니다.
        </p>
      </section>
    ),
  },
  {
    heading: {
      pretitle: (
        <>
          2025 Project
          <br />
          "Coming to Inchon"
        </>
      ),
      title: '2025 공동 프로젝트 ‘인촌에 나려오다’ 소개',
      subtitle: '예술마을 산책하기',
      highlight: 'highlightProject',
      className: 'text-right',
    },
    layout: 'end',
    blobs: [
      // 초록: left 60px, top 1108.9px (≈36.8%)
      {url: green, size: '38vw auto', position: 'left 60px top 36.8%'},
    ],
    body: (
      <section
        className='w-[832px] text-lg text-type-body leading-relaxed'
        style={{fontFamily: 'SejongGeulggot, Pretendard, sans-serif'}}>
        <p className='mb-[var(--spacing-p-gap)] text-right'>
          한때 인천의 골목마다에는 사람의 숨결이 깃든 이야기들이 있었습니다.
          문방구의 연필 냄새, 다방의 음악소리, 장승 거리의 웃음소리처럼, 그
          시절의 감성은 사라지지 않고 여전히 이곳 어딘가에 머물러 있습니다.
          「인촌에 나려오다」 는 ‘점점점 프로젝트’에 참여한 예술단체들이 각자의
          공간을 ‘예술마을’로 탈바꿈시키는 공동 프로젝트입니다.
        </p>
        <p className='mb-[var(--spacing-p-gap)] text-right'>
          문방구, 다방, 방앗간 등 오래된 일상 풍경을 현대적으로 재해석해, 예술이
          일상으로 스며드는 새로운 마을을 함께 짓는 시도이자 축제입니다.
          단체들은 각자의 예술언어로 공간을 꾸미고, 그 안에서 창작, 전시, 공연,
          교류가 이어지며 하나의 마을이 형성됩니다.이 마을에서는 관객이 단순한
          방문객이 아닌, 예술을 함께 짓는 ‘이웃’이 됩니다
        </p>
        <p className='last:mb-0 text-type-head-2 text-right'>
          ‘인촌에 나려오다’—이 프로젝트는 과거의 정취를 오늘의 감각으로 이어붙여
          사람과 예술, 그리고 도시가 다시 만나 함께 살아 숨 쉬는 예술마을을
          꿈꿉니다.마을 곳곳을 산책하며 여러분만의 문화지도를 완성하고 구석구석
          숨은 이벤트도 확인해보세요.
        </p>
      </section>
    ),
  },
  {
    heading: {
      pretitle: 'Dot Dot Dot Open Studio',
      title: '점점점 오픈 스튜디오 소개',
    },
    layout: 'start',
    blobs: [{url: yellow, size: '38vw auto', position: 'right 0 bottom 100px'}],
    body: (
      <section
        className='w-[588px] text-lg text-type-body leading-relaxed'
        style={{fontFamily: 'SejongGeulggot, Pretendard, sans-serif'}}>
        <p className='mb-[var(--spacing-p-gap)]'>
          공동 프로젝트 “인촌에 나려오다”에 참석하지 못한다고 아쉬워 하지
          마세요.
          <br />
          점점점 예술단체들은 문화공간을 개방하는 “오픈스튜디오”를 통해 여러분을
          맞이합니다.
          <br />
          정기적으로 열리는 문화공간에서 예술단체들의 창작활동을 탐색하고 함께
          즐겨보세요.
        </p>
        <p className='last:mb-0'>
          단체별 오픈일자가 상이하니, 사전 확인은 필수!
        </p>
      </section>
    ),
  },
];
