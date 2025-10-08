const DotIcon = ({color}) => {
  const colorMap = {
    green: '#4AC24B',
    purple: '#7268FF',
    yellow: '#FFB522',
  };

  const fillColor = colorMap[color] || colorMap.yellow;

  return (
    <svg width='40' height='134' viewBox='0 0 40 134'>
      <circle
        cx='1.5'
        cy='1.5'
        r='1.5'
        fill={fillColor}
        opacity='.2'
        transform='matrix(-1 0 0 1 22 52)'
      />
      <circle
        cx='2'
        cy='2'
        r='2'
        fill={fillColor}
        opacity='.4'
        transform='matrix(-1 0 0 1 22 68)'
      />
      <circle
        cx='2.5'
        cy='2.5'
        r='2.5'
        fill={fillColor}
        opacity='.6'
        transform='matrix(-1 0 0 1 23 86)'
      />
      <circle
        cx='3.5'
        cy='3.5'
        r='3.5'
        fill={fillColor}
        opacity='.8'
        transform='matrix(-1 0 0 1 24 105)'
      />
      <circle
        cx='4'
        cy='4'
        r='4'
        fill={fillColor}
        transform='matrix(-1 0 0 1 24 126)'
      />
      <circle
        cx='20'
        cy='20'
        r='20'
        fill={fillColor}
        transform='matrix(-1 0 0 1 40 0)'
      />
    </svg>
  );
};

export default DotIcon;
