// import textureTile from '@/assets/svg/texture-tile.svg';
import {useParams} from 'react-router-dom';
import {spaceEvents} from '../data/spaceEvents';

const SpaceDetailPage = () => {
  const {id} = useParams();
  const event = spaceEvents.find((event) => Number(event.id) === Number(id));

  return (
    <div className='w-9/10 md:w-3/4 mx-auto min-h-screen py-15 md:py-24 lg:w-full lg:px-37 lg:py-32'>
      <div className='flex flex-col text-black text-sm md:text-lg lg:text-2xl'>
        <h1 className='text-5xl md:text-7xl lg:text-8xl font-family-ssYoungestDaughterRegular text-type-head-1 mb-4.5 md:mb-6 lg:mb-9'>
          {event.name}
        </h1>
        <h3 className='text-lg md:text-2xl lg:text-4xl mb-11 md:mb-17 lg:mb-22'>{`< ${event.title} >`}</h3>

        {/* 프로그램 소개 */}
        <div className='whitespace-pre space-y-5 md:space-y-7 lg:space-y-14 mb-20 md:mb-30 lg:mb-40'>
          <p>프로그램 소개</p>
          <p className='text-type-head-2'>{event.description}</p>
        </div>

        {/* 시간 + 장소 */}
        <div className='flex gap-15 md:gap-30 lg:gap-48'>
          <div className='space-y-5 md:space-y-7 lg:space-y-14'>
            <p>시간</p>
            <p className='text-type-head-2'>{event.time}</p>
          </div>
          <div className='space-y-5 md:space-y-7 lg:space-y-14'>
            <p>장소</p>
            <p className='text-type-head-2'>{event.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceDetailPage;
