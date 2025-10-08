import spaceSvg from '../../assets/svg/spaces.svg';

const Space = ({id, width = 140, height = 140, className, ...props}) => {
  return (
    <svg width={width} height={height} className={className} {...props}>
      <use href={`${spaceSvg}#${id}`} />
    </svg>
  );
};

export default Space;
