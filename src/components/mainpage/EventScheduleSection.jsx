import purpleDotsUrl from '../../assets/svg/purple-dots.svg';
import greenDotsUrl from '../../assets/svg/green-dots.svg';
import InfoTag from './InfoTag';

const W = 1078;
const H = 2738;

const items = [
  {x: 551, y: 422, type: 'dot', color: 'green'},
  {x: 715, y: 422, type: 'dot', color: 'yellow'},
  {x: 590, y: 822, type: 'dot', color: 'yellow'},
  {x: 868, y: 822, type: 'dot', color: 'yellow'},
  {x: 250, y: 1100, type: 'dot', color: 'green'},
  {x: 405, y: 1100, type: 'dot', color: 'yellow'},
  {x: 325, y: 1462, type: 'dot', color: 'green'},
  {x: 706, y: 1462, type: 'dot', color: 'yellow'},
  {x: 850, y: 1462, type: 'dot', color: 'purple'},
  {x: 325, y: 1820, type: 'dot', color: 'yellow'},
  {x: 504, y: 1820, type: 'dot', color: 'green'},
  {x: 678, y: 1820, type: 'dot', color: 'purple'},
  {x: 468, y: 2175, type: 'dot', color: 'yellow'},
  {x: 820, y: 255, type: 'tag', variant: 'year', text: '2025'},
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
      {items.map((item, i) => {
        const left = (item.x / W) * 100;
        const top = (item.y / H) * 100;

        return (
          <div
            key={i}
            className='absolute'
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}>
            {item.type === 'dot' ? (
              <svg width='40' height='134'>
                <use
                  href={`src/assets/svg/dotplace.svg#${item.color}dotplace`}
                />
              </svg>
            ) : (
              <InfoTag variant={item.variant}>{item.text}</InfoTag>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default EventScheduleSection;
