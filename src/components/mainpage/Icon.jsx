import iconSvg from '../../assets/svg/icons.svg';

const Icon = ({id, classname, width, height, ...props}) => {
  return (
    <svg className={classname} width={width} height={height} {...props}>
      <use href={`${iconSvg}#${id}`} />
    </svg>
  );
};

export default Icon;
