import Icon from './icon';
import arrow from '../../assets/svg/arrow.svg';

const W = 1078;
const H = 5214;

const icons = [
  {id: 'b1', x: 65, y: 0, w: 140, h: 140, label: '작업장봄', bg: 'orange'},
  {id: 'b2', x: 225, y: 0, w: 140, h: 140, label: '공간인공빛', bg: 'purple'},
  {id: 'b3', x: 70, y: 390, w: 140, h: 140, label: '코드아트', bg: 'green'},
  {
    id: 'b4',
    x: 170,
    y: 540,
    w: 140,
    h: 140,
    label: '주식회사 한울소리',
    bg: 'purple',
  },
  {id: 'b5', x: 330, y: 505, w: 140, h: 140, label: '위드달', bg: 'green'},
  {id: 'b6', x: 525, y: 485, w: 177, h: 177, label: '공예루틴', bg: 'orange'},
  {
    id: 'b7',
    x: 880,
    y: 525,
    w: 140,
    h: 140,
    label: '어벙또벙이야기수선집',
    bg: 'orange',
  },
  {
    id: 'b8',
    x: 710,
    y: 440,
    w: 140,
    h: 140,
    label: '올라 아트컴퍼니',
    bg: 'purple',
  },
  {
    id: 'b9',
    x: 515,
    y: 50,
    w: 140,
    h: 140,
    label: '창작집단<발아>',
    bg: 'green',
  },
  {
    id: 'b10',
    x: 710,
    y: 0,
    w: 140,
    h: 140,
    label: '카츠오리진연구소',
    bg: 'orange',
  },
  {
    id: 'b11',
    x: 920,
    y: 37,
    w: 140,
    h: 140,
    label: '모이소',
    bg: 'purple',
  },
  {id: 'd1', x: 310, y: 305, w: 140, h: 140},
  {id: 'd2', x: 890, y: 225, w: 140, h: 140},
];
const Preview = () => {
  return (
    <div>
      {icons.map(({id, x, y, w, h, label, bg}) => {
        const left = (x / W) * 100;
        const top = (y / H) * 100;

        return (
          <div
            key={id}
            className='absolute gap-3 cursor-pointer'
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}>
            <Icon id={id} width={w} height={h} className='z-0' />
            {label && (
              <div
                className={`bg-${bg} z-10 flex justify-end items-center gap-2.5 border-none pl-6 pr-1.5 py-0.5 rounded-[140px]`}>
                <span className='whitespace-nowrap text-xl text-white leading-[45px] px-4'>
                  {label}
                </span>
                <img
                  className='bg-white border-none rounded-full p-2'
                  src={arrow}
                  alt=''
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Preview;
