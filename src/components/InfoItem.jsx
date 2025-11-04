const InfoItem = ({
  label = '',
  highlight = '',
  theme = 'pink',
  children,
  className = '',
}) => {
  return (
    <div
      className={`${className} relative space-y-5 md:space-y-7 lg:space-y-14 text-sm md:text-lg lg:text-2xl`}>
      <img className={highlight} src={theme} aria-hidden='true' />
      <h2
        className='relative font-semibold'
        style={{WebkitTextStrokeWidth: '0.5px'}}>
        {label}
      </h2>
      <p className='text-type-head-2'>{children}</p>
    </div>
  );
};

export default InfoItem;
