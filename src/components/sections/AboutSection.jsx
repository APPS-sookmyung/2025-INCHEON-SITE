import Section from '../layout/Section';
import {SectionTitle} from './SectionTitle';

export default function AboutSection({blobs, heading, body, layout = 'start'}) {
  const layoutClass =
    layout === 'end' ? 'flex flex-col items-end' : 'flex flex-col items-start';

  return (
    <Section blobs={blobs} className={`min-h-[500px] md:min-h-[700px] lg:min-h-[900px] ${layoutClass}`}>
      <SectionTitle
        pretitle={heading.pretitle}
        title={heading.title}
        highlightColor={heading.highlightColor}
        subtitle={heading.subtitle}
        layout={layout}
      />
      {body}
    </Section>
  );
}