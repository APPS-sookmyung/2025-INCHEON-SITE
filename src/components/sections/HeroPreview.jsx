import main_graphic from '@/assets/svg/graphic-overview.svg'

export default function Preview() {
  return (
    <section>
      <picture>
        <img
          src={main_graphic}
          alt='인천 그래픽'
          className='object-contain'
        />
      </picture>
    </section>
  );
}
