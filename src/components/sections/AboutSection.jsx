import Section from '../layout/Section';
import {SectionTitle} from './SectionTitle';

export default function AboutSection({blobs, heading, body, layout = 'start'}) {
  const layoutClass =
    layout === 'end' ? 'flex flex-col items-end' : 'flex flex-col items-start';

  return (
    <Section blobs={blobs} className={`min-h-[900px] ${layoutClass}`}>
      <SectionTitle
        pretitle={heading.pretitle}
        title={heading.title}
        subtitle={heading.subtitle}
        layout={layout}
      />
      {body}
    </Section>
  );
}
