import EventSection from '../layout/EventSection';
import {EventTitle} from './EventTitle';

export default function EventItem({
  blobs,
  heading,
  body,
  layout = 'start',
  contentClassName,
}) {
  const layoutClass =
    layout === 'end' ? 'flex flex-col items-end' : 'flex flex-col items-start';

  return (
    <EventSection
      blobs={blobs}
      className={`min-h-[500px] md:min-h-[700px] lg:min-h-[730px] ${layoutClass}`}
      contentClassName={contentClassName}>
      <EventTitle
        pretitle={heading.pretitle}
        title={heading.title}
        layout={layout}
      />
      {body}
    </EventSection>
  );
}
