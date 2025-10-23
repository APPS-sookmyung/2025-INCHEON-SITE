import textureTile from '../assets/texture-tile.png';

const ComingSoonPage = () => {
  return (
    <div
      className={`min-h-screen flex flex-col justify-center items-center text-center`}
      style={{
        backgroundImage: `url(${textureTile})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '90px 90px',
      }}>
      <section className='px-4 -translate-y-30'>
        <p className='pb-4 text-type-head-2 text-lg md:text-2xl'>
          {
            '인천의 골목이 예술마을로 깨어납니다 — 11월 3일, 인촌에 나려오다 대공개!'
          }
        </p>
        <h1 className='font-[BrightChalk] text-type-head-1 text-6xl md:text-8xl'>
          {'COMING SOON'}
        </h1>
      </section>
    </div>
  );
};

export default ComingSoonPage;
