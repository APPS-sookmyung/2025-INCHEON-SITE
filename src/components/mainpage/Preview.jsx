import Icon from './Icon';
import arrow from '../../assets/svg/arrow.svg';

const W = 1078;
const H = 1024;

const icons = [
  {id: 'b1', x: 65, y: 0, label: '작업장봄', bg: 'bg-orange'},
  {id: 'b2', x: 225, y: 0, label: '공간인공빛', bg: 'bg-purple'},
  {id: 'b3', x: 70, y: 390, label: '코드아트', bg: 'bg-green'},
  {id: 'b4', x: 170, y: 540, label: '주식회사 한울소리', bg: 'bg-purple'},
  {id: 'b5', x: 330, y: 505, label: '위드달', bg: 'bg-green'},
  {id: 'b6', x: 525, y: 485, label: '공예루틴', bg: 'bg-orange'},
  {id: 'b7', x: 880, y: 525, label: '어벙또벙이야기수선집', bg: 'bg-orange'},
  {id: 'b8', x: 710, y: 440, label: '올라 아트컴퍼니', bg: 'bg-purple'},
  {id: 'b9', x: 515, y: 50, label: '창작집단<발아>', bg: 'bg-green'},
  {id: 'b10', x: 710, y: 0, label: '카츠오리진연구소', bg: 'bg-orange'},
  {id: 'b11', x: 920, y: 37, label: '모이소', bg: 'bg-purple'},
  {id: 'd1', x: 310, y: 305},
  {id: 'd2', x: 890, y: 225},
];

const Preview = () => {
  return (
    <div>
      {icons.map(({id, x, y, label, bg}) => {
        const left = (x / W) * 100;
        const top = (y / H) * 100;

        return (
          <div
            key={id}
            className='absolute group flex flex-col items-center cursor-pointer hover:drop-shadow-hover hover:z-20'
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}>
            <Icon id={id} />
            {label && (
              <div
                className={`hidden group-hover:flex top-40 absolute ${bg} z-10 justify-end items-center gap-2.5 border-none pl-6 pr-1.5 py-0.5 rounded-[140px]`}>
                <span className='whitespace-nowrap text-lg text-white leading-[40px] px-3.5'>
                  {label}
                </span>
                <img
                  className='bg-white border-none rounded-full p-2'
                  src={arrow}
                  alt='arrow'
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
