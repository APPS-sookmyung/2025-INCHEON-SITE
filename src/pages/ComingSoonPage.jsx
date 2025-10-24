import textureTile from '../assets/texture-tile.png';
import curves from '../assets/svg/graphic-curves.svg';
import sparkles from '../assets/svg/graphic-sparkles.svg';

const curvesTransform = {
  base: 'scale-40 -translate-x-25 -translate-y-19',
  md: 'md:scale-65 md:-translate-x-25 md:-translate-y-20',
  lg: 'lg:scale-100 lg:-translate-x-22 lg:-translate-y-23',
};

const sparklesTransform = {
  base: 'scale-30 translate-x-70 translate-y-14',
  md: 'md:scale-65 md:translate-x-130 md:translate-y-20',
  lg: 'lg:scale-100 lg:translate-x-170 lg:translate-y-30',
};

const curvesTransformStyle = Object.values(curvesTransform).join(' ');
const sparklesTransformStyle = Object.values(sparklesTransform).join(' ');

const ComingSoonPage = () => {
  return (
    <div
      className={`relative min-h-screen flex flex-col justify-center items-center text-center`}
      style={{
        backgroundImage: `url(${textureTile})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '90px 90px',
      }}>
      <section className='relative px-8 -translate-y-30'>
        <img
          className={`absolute ${curvesTransformStyle}`}
          src={curves}
          alt='graphic'
        />
        <img
          className={`absolute ${sparklesTransformStyle}`}
          src={sparkles}
          alt='graphic'
        />
        <p className='pb-4 text-type-head-2 text-base md:text-xl lg:text-2xl'>
          {
            '인천의 골목이 예술마을로 깨어납니다 — 11월 3일, 인촌에 나려오다 대공개!'
          }
        </p>
        <h1 className='font-[BrightChalk] text-type-head-1 text-4xl md:text-7xl lg:text-8xl'>
          {'COMING SOON'}
        </h1>
      </section>
    </div>
  );
};

export default ComingSoonPage;
