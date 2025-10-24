import graphics from '../assets/svg/graphics-overview.svg';
import textureTile from '../assets/texture-tile.png';

const ComingSoonMainPage = () => {
  return (
    <div
      className='min-h-screen flex flex-col items-center justify-center text-center'
      style={{
        backgroundImage: `url(${textureTile})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '90px 90px',
      }}>
      <img
        className='pt-20 pb-10 scale-80'
        src={graphics}
        alt='인촌에 나려오다 일러스트'
      />
      <h1 className='px-20 pb-20 text-type-head-2 text-sm md:text-xl lg:text-3xl'>
        인천의 골목이 예술마을로 깨어납니다 — 11월 3일, 인촌에 나려오다 대공개!
      </h1>
    </div>
  );
};

export default ComingSoonMainPage;
