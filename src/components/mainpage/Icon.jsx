import iconSvg from '../../assets/svg/icons.svg';

const Icon = ({id, width, height, className, ...props}) => {
  return (
    <svg width={width} height={height} className={className} {...props}>
      <use href={`${iconSvg}#${id}`} />
    </svg>
  );
};

export default Icon;
