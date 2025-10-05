import arrow from '../../assets/svg/arrow.svg';

const SpaceTag = ({color, label}) => {
  return (
    <div
      className={`hidden group-hover:flex top-40 absolute ${color} z-20 justify-end items-center gap-2.5 border-none pl-6 pr-1.5 py-0.5 rounded-[140px]`}>
      <span className='whitespace-nowrap text-lg text-white leading-[40px] px-3.5'>
        {label}
      </span>
      <img
        className='bg-white border-none rounded-full p-2'
        src={arrow}
        alt='arrow'
      />
    </div>
  );
};

export default SpaceTag;
