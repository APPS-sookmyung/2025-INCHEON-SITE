import {aboutSections} from '@/data/aboutContent.jsx';
import AboutSection from '@/components/sections/AboutSection';
import Section from '@/components/layout/Section';

export default function MainPage() {
  return (
    <main className='flex flex-col'>
      {/* --- Preview 섹션: textureOnly --- */}
      <Section
        textureOnly
        className='h-[100vh] flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-5xl font-bold mb-4'>2025 점점점 프로젝트</h1>
          <p className='text-lg text-gray-500'>예술이 흐르는 거리, 인천에서</p>
        </div>
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
