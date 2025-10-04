import clsx from 'clsx';

const InfoTag = ({ variant = 'date', children, className, ...props }) => {
  const variants = {
    year: 'w-[114px] h-[42px]',
    date: 'w-[100px] h-[40px]',
  };

  return (
    <div
      className={clsx(
        'rounded-[100px] border border-[#6D7276] flex items-center justify-center',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default InfoTag;
