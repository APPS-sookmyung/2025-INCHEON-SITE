import purpleDotsUrl from '../../assets/svg/purple-dots.svg';
import greenDotsUrl from '../../assets/svg/green-dots.svg';
import dotplaceUrl from '../../assets/svg/dotplace.svg?url';
import InfoTag from './InfoTag';

const W = 1078;
const H = 2738;

const items = [
  {x: 573, y: 422, type: 'dot', color: 'green'},
  {x: 734, y: 422, type: 'dot', color: 'yellow'},
  {x: 610, y: 822, type: 'dot', color: 'yellow'},
  {x: 887, y: 822, type: 'dot', color: 'yellow'},
  {x: 267, y: 1100, type: 'dot', color: 'green'},
  {x: 425, y: 1100, type: 'dot', color: 'yellow'},
  {x: 345, y: 1462, type: 'dot', color: 'green'},
  {x: 726, y: 1462, type: 'dot', color: 'yellow'},
  {x: 870, y: 1462, type: 'dot', color: 'purple'},
  {x: 347, y: 1820, type: 'dot', color: 'yellow'},
  {x: 524, y: 1820, type: 'dot', color: 'green'},
  {x: 698, y: 1820, type: 'dot', color: 'purple'},
  {x: 488, y: 2175, type: 'dot', color: 'yellow'},
  {x: 870, y: 255, type: 'tag', variant: 'year', text: '2025'},
  {x: 573, y: 367, type: 'tag', variant: 'date', text: '10.11(금)'},
  {x: 613, y: 767, type: 'tag', variant: 'date', text: '10.12(토)'},
  {x: 887, y: 767, type: 'tag', variant: 'date', text: '10.13(일)'},

  {x: 573, y: 571, type: 'name', text: '모이소'},
  {x: 734, y: 571, type: 'name', text: '어벙또벙<br/>이야기 수선집'},
  {x: 610, y: 971, type: 'name', text: '모이소'},
  {x: 887, y: 971, type: 'name', text: '공간인공빛'},
  {
    x: 267,
    y: 1249,
    type: 'name',
    text: '공예 루틴<br/>올라 아트컴퍼니<br/>카츠오리진 연구소',
  },
  {x: 425, y: 1249, type: 'name', text: '어벙또벙<br/>이야기 수선집'},
  {x: 345, y: 1611, type: 'name', text: '창작집단<br/><발아>'},
  {x: 726, y: 1611, type: 'name', text: '창작집단<br/><발아>'},
  {x: 870, y: 1611, type: 'name', text: '모이소'},
  {x: 347, y: 1969, type: 'name', text: "작업장 '봄'<br/>(주) 위드달"},
  {x: 524, y: 1969, type: 'name', text: '올라 아트컴퍼니<br/>공간인공빛'},
  {x: 698, y: 1969, type: 'name', text: '어벙또벙<br/>이야기 수선집'},
  {
    x: 488,
    y: 2324,
    type: 'name',
    text: "작업장'봄'<br/>(주) 한울소리<br/>코드아트<br/>모이소<br/>공간인공빛",
  },
  {x: 273, y: 1045, type: 'tag', variant: 'date', text: '10.15(화)'},
  {x: 345, y: 1407, type: 'tag', variant: 'date', text: '10.16(수)'},
  {x: 723, y: 1407, type: 'tag', variant: 'date', text: '10.17(목)'},
  {x: 867, y: 1407, type: 'tag', variant: 'date', text: '10.18(금)'},
  {x: 345, y: 1765, type: 'tag', variant: 'date', text: '10.19(토)'},
  {x: 490, y: 2120, type: 'tag', variant: 'date', text: '10.20(일)'},
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
              transform: 'translateX(-50%)',
            }}>
            {item.type === 'dot' ? (
              <svg width='40' height='134'>
                <use href={`${dotplaceUrl}#${item.color}dotplace`} />
              </svg>
            ) : item.type === 'name' ? (
              <div
                className='text-center text-lg font-medium text-black'
                dangerouslySetInnerHTML={{
                  __html: item.text.replace(/<br\/>/g, '<br>'),
                }}
              />
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
