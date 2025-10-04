import Icon from './icon';

import description from '../../assets/svg/description.svg';
import {useNavigate} from 'react-router-dom';
import SpaceTag from './SpaceTag';

const W = 1078;
const H = 1024;

const spaces = [
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

const Preview = ({setHover}) => {
  const navigate = useNavigate();

  return (
    <div>
      <img className='absolute z-0 top-13 left-102' src={description} alt='' />
      {spaces.map(({id, x, y, label, bg}, index) => {
        const left = (x / W) * 100;
        const top = (y / H) * 100;

        return (
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => navigate(`spaces/${index + 1}`)}
            key={id}
            className='absolute group flex flex-col items-center cursor-pointer hover:drop-shadow-hover hover:z-30'
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}>
            <Icon id={id} />
            {label && <SpaceTag label={label} color={bg} />}
          </div>
        );
      })}
    </div>
  );
};

export default Preview;
