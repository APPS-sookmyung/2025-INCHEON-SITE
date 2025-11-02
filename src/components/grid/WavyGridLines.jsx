import HorizontalGridLine from '@/assets/svg/horizontal-wave-line.svg?react';
import VerticalGridLine from '@/assets/svg/vertical-wave-line.svg?react';

export function WavyGridLines({
  edges,
  inset = 7.5,
  opacity = 0.7,
}) {
  const pad = `${inset}px`;
  return (
    <div className='pointer-events-none absolute inset-0'>
      {edges?.hasTop && (
        <div
          className='absolute left-0 right-0'
          style={{top: 0, paddingLeft: pad, paddingRight: pad}}>
          <HorizontalGridLine style={{width: '100%', opacity}} />
        </div>
      )}
      {edges?.hasBottom && (
        <div
          className='absolute left-0 right-0'
          style={{bottom: 0, paddingLeft: pad, paddingRight: pad}}>
          <HorizontalGridLine style={{width: '100%', opacity}} />
        </div>
      )}
      {edges?.hasLeft && (
        <div
          className='absolute top-0 bottom-0'
          style={{left: 0, paddingTop: pad, paddingBottom: pad}}>
          <VerticalGridLine
            style={{
              height: '100%',
              width: 'auto',
              opacity,
              transform: 'translateX(-50%)',
            }}
          />
        </div>
      )}
      {edges?.hasRight && (
        <div
          className='absolute top-0 bottom-0'
          style={{right: 0, paddingTop: pad, paddingBottom: pad}}>
          <VerticalGridLine
            style={{
              height: '100%',
              width: 'auto',
              opacity,
              transform: 'translateX(50%)',
            }}
          />
        </div>
      )}
    </div>
  );
}
