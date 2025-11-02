const StudioItem = ({studio}) => {
  return (
    <div className='w-full leading-8 border-b-[0.5px] border-type-body px-3 py-4 last:border-none'>
      <h3 className='text-type-body pb-2'>
        {studio.id} {studio.name}
      </h3>
      {studio.program ? (
        <div className='grid grid-cols-2 gap-x-10 gap-y-3'>
          <div>
            <p className='text-type-body'>오픈스튜디오 프로그램</p>
            <p
              className='text-black'
              style={{
                WebkitTextStrokeWidth: '0.5px',
              }}>
              "{studio.program}"
            </p>
          </div>
          <div>
            <p className='text-type-body'>오픈 일자</p>
            <p className='text-black whitespace-pre'>{studio.openDays}</p>
          </div>
          <div>
            <p className='text-type-body'>오픈 시간</p>
            <p className='text-black whitespace-pre'>{studio.openTime}</p>
          </div>
        </div>
      ) : (
        <div>
          {studio.programs.map((program, index) => (
            <div key={index} className='grid grid-cols-2 gap-5 pt-2 pb-2'>
              <div>
                <p className='text-type-body'>오픈스튜디오 프로그램</p>
                <p
                  className='whitespace-pre text-black'
                  style={{
                    WebkitTextStrokeWidth: '0.5px',
                  }}>
                  "{program.title}"
                </p>
              </div>
              <div>
                <p className='text-type-body'>오픈 일자</p>
                <p className='whitespace-pre text-black'>{program.openDays}</p>
              </div>
              <div>
                <p className='text-type-body'>
                  {program.openTime ? '오픈 시간' : ''}
                </p>
                <p className='whitespace-pre text-black'>{program.openTime}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudioItem;
