import desktop from '@/assets/svg/graphic-desktop.svg';
import tablet from '@/assets/svg/graphic-tablet.svg';
import mobile from '@/assets/svg/graphic-mobile.svg';
import logo from '@/assets/svg/dotdotdot-logo.svg';

export default function Preview() {
  return (
    <section className='relative w-full overflow-hidden'>
      <picture>
        <source media='(max-width: 640px)' srcSet={mobile} />
        <source media='(max-width: 1024px)' srcSet={tablet} />
        <img
          src={desktop}
          alt='인천 그래픽'
          className='w-full h-auto object-contain'
        />
      </picture>

      {/* 중앙 로고 */}
      <img
        src={logo}
        alt='메인 로고'
        className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                   w-[280px] sm:w-[400px] lg:w-[506px] h-auto'
      />
    </section>
  );
}
