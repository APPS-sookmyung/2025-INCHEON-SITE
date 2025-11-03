import {eventSection} from '@/data/eventContent.jsx';
import EventsIntro from '../components/sections/EventsIntro';
import EventItem from '../components/sections/EventItem';
import EventSection from '@/components/layout/EventSection';
import Section from '@/components/layout/Section';
import textureUrl from '@/assets/svg/texture-tile.svg';

export default function EventsPage() {
  return (
    <main className='flex flex-col'>
      <EventsIntro />

      {eventSection.map((section, index) => (
        <EventItem
          key={index}
          blobs={section.blobs}
          heading={section.heading}
          body={section.body}
          layout={section.layout}
          contentClassName={section.contentClassName}
        />
      ))}

      <div className='relative text-center text-sm sm:text-base lg:text-xl pb-20 text-gray-400'>
        <div
          className='absolute inset-0 z-0'
          style={{
            backgroundImage: `url(${textureUrl})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '150px 150px',
            backgroundPosition: 'top left',
          }}
        />
        <p
          className='relative z-10 pt-[100px] sm:pt-[150px] lg:pt-[220px] px-4'
          style={{
            WebkitTextStrokeWidth: '0.2px',
            WebkitTextStrokeColor: 'var(--type-body, #A49A85)',
          }}>
          ※ 모든 이벤트는 운영 상황에 따라 조기 마감될 수 있습니다.
        </p>
      </div>
    </main>
  );
}
