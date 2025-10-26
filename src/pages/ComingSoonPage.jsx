import textureTile from '@/assets/svg/texture-tile.svg';
import curves from '@/assets/svg/graphic-curves.svg';
import sparkles from '@/assets/svg/graphic-sparkles.svg';

const curvesTransform = {
  base: 'translate-x-[5%] -translate-y-[60%]',
  md: 'md:-translate-x-[20%] md:-translate-y-[75%]',
  lg: 'lg:-translate-x-[25%] lg-translate-y-[70%]',
};

const sparklesTransform = {
  base: '-translate-x-[60%] translate-y-[50%]',
  md: 'md:translate-x-[30%] md:translate-y-[50%]',
  lg: 'lg:translate-x-[80%] lg:translate-y-[50%]',
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
          className={`absolute top-0 left-0 ${curvesTransformStyle} w-23 md:w-55 lg:w-67`}
          src={curves}
          alt='graphic'
        />
        <img
          className={`absolute bottom-0 right-0 ${sparklesTransformStyle} w-8 md:w-15 lg:w-19`}
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
