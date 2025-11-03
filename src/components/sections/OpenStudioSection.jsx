import {openStudios} from '@/data/openStudios';
import StudioItem from './StudioItem';
import watercolor_highlight_pink from '@/assets/svg/watercolor-highlight-pink.svg';

const OpenStudioSection = () => {
  return (
    <div className='w-full flex flex-col md:gap-10 mb-10 mt-20'>
      <h1 className='text-type-head-1 font-family-ssYoungestDaughterRegular text-4xl md:text-8xl'>
        Open Studio
      </h1>
      <div className='relative py-1'>
        <img
          className='pointer-events-none select-none absolute scale-80 bottom-0 left-0 -translate-x-[27%] translate-y-[38%] md:translate-y-[42%] md:-translate-x-[22%]'
          src={watercolor_highlight_pink}
          alt=''
        />
        <h3 className='relative text-black pl-6 text-lg md:pl-15 md:text-4xl'>
          단체 오픈스튜디오 소개
        </h3>
      </div>
      <section
        className='w-full items-stretch'
        style={{
          WebkitTextStrokeWidth: '0.2px',
        }}>
        {/* 모바일 */}
        <div className='md:hidden'>
          {openStudios.map((studio) => (
            <StudioItem key={studio.id} studio={studio} />
          ))}
        </div>

        {/* 태블릿, 데스크탑 */}
        <div className='hidden md:grid grid-cols-4 gap-5 *:text-type-body text-base lg:text-lg'>
          <div></div>
          <div>오픈스튜디오 프로그램</div>
          <div>오픈일자</div>
          <div>오픈시간</div>

          {openStudios.map((studio) => (
            <div
              key={studio.id}
              className='contents *:whitespace-pre *:not-first:text-black'>
              <div className='flex gap-10.5'>
                <p>{studio.id}</p>
                <p>{studio.name}</p>
              </div>
              {studio.program ? (
                <>
                  <div
                    style={{
                      WebkitTextStrokeWidth: '0.5px',
                    }}>
                    "{studio.program}"
                  </div>
                  <div>{studio.openDays}</div>
                  <div>{studio.openTime}</div>
                </>
              ) : (
                <>
                  {studio.programs.map(({title, openDays, openTime}, index) => (
                    <div key={index} className='contents'>
                      <div
                        style={{
                          WebkitTextStrokeWidth: '0.5px',
                        }}
                        className='col-start-2'>
                        "{title}"
                      </div>
                      <div>{openDays}</div>
                      <div>{openTime}</div>
                    </div>
                  ))}
                </>
              )}
              {studio.id < '10' && (
                <div
                  className='w-[95%] col-span-full h-[0.1px] bg-type-body opacity-70'
                  role='separator'
                />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OpenStudioSection;
