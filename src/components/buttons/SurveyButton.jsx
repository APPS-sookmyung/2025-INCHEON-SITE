export default function SurveyButton({link, className = ''}) {
  if (!link) return null;

  return (
    <div
      className={`absolute flex items-center justify-center right-0 lg:right-28 w-fit my-20 ${className}`}>
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-block rounded-full bg-type-head-1 px-4 md:px-6 py-2 text-type-head-2 hover:text-type-body transition-colors duration-200'
        aria-label='설문조사 바로가기'>
        <span className='hidden lg:inline text-xl'>설문조사 바로가기 →</span>
        <span className='inline lg:hidden text-sm md:text-xl'>설문조사 →</span>
      </a>
    </div>
  );
}
