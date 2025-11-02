import {aboutSections} from '@/data/aboutContent.jsx';
import AboutSection from '@/components/sections/AboutSection';
import Section from '@/components/layout/Section';
import Preview from '../components/sections/HeroPreview';

export default function MainPage() {
  return (
    <main className='flex flex-col'>
      {/* --- Preview 섹션: textureOnly --- */}
      <Section textureOnly>
        <Preview />
      </Section>

      {/* --- 나머지 섹션들: blobs 적용 --- */}
      {aboutSections.map((section, index) => (
        <AboutSection
          key={index}
          blobs={section.blobs}
          heading={section.heading}
          body={section.body || ''}
          layout={section.layout}
        />
      ))}
    </main>
  );
}
