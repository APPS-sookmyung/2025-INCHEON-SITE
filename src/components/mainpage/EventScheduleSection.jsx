import purpleDotsUrl from '../../assets/svg/purple-dots.svg';
import greenDotsUrl from '../../assets/svg/green-dots.svg';

const W = 1078;
const H = 2738;

const dotplaces = [
  {x: 551, y: 422, color: 'green'},
  {x: 715, y: 422, color: 'yellow'},
  {x: 590, y: 822, color: 'yellow'},
  {x: 868, y: 822, color: 'yellow'},
  {x: 250, y: 1100, color: 'green'},
  {x: 405, y: 1100, color: 'yellow'},
  {x: 325, y: 1462, color: 'green'},
  {x: 706, y: 1462, color: 'yellow'},
  {x: 850, y: 1462, color: 'purple'},
  {x: 325, y: 1820, color: 'yellow'},
  {x: 504, y: 1820, color: 'green'},
  {x: 678, y: 1820, color: 'purple'},
  {x: 468, y: 2175, color: 'yellow'},
];

const EventScheduleSection = () => {
  return (
    <div className='absolute inset-0 pointer-events-none z-10'>
      <div className='absolute -top-16 -left-56'>
        <img
          src={purpleDotsUrl}
          alt='purple dots'
          className='w-[697px] h-[586px]'
        />
      </div>
      <div className='absolute bottom-56 -right-65'>
        <img
          src={greenDotsUrl}
          alt='green dots'
          className='w-[696px] h-[587px]'
        />
      </div>
      {dotplaces.map((dot, i) => {
        const left = (dot.x / W) * 100;
        const top = (dot.y / H) * 100;

        return (
          <div
            key={i}
            className='absolute'
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}>
            <svg width='40' height='134'>
              <use href={`src/assets/svg/dotplace.svg#${dot.color}dotplace`} />
            </svg>
          </div>
        );
      })}
    </div>
  );
};
export default EventScheduleSection;
