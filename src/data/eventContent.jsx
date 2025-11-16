import green from '@/assets/svg/linear-top.svg';
import pink from '@/assets/svg/linear-mid.svg';
import blue from '@/assets/svg/linear-bottom.svg';

export const eventSection = [
  {
    heading: {
      pretitle: '01',
      title: '점점점 마을 같이 갈 사람?',
    },
    layout: 'start',
    blobs: [
      {
        url: green,
        size: '99.9% auto',
        position: 'left 0% top -500px',
        blendMode: 'normal',
        smSize: '130% auto',
        smPosition: 'left -20% top -48%',
      },
    ],
    body: (
      <section
        className='max-w-full sm:max-w-2xl lg:w-[684px] text-sm sm:text-base lg:text-2xl  leading-relaxed sm:leading-relaxed lg:leading-relaxed text-type-body '
        style={{
          fontFamily: 'SejongGeulggot, Pretendard, sans-serif',
          color: 'var(--type-body, #A49A85)',
          WebkitTextStrokeWidth: '0.2px',
          WebkitTextStrokeColor: 'var(--type-body, #A49A85)',
        }}>
        <p className='last:mb-0'>
          점점점 마을, 누구와 함께 오고 싶으신가요?
          <br />
          지금 바로&nbsp;
          <span className='text-type-head-2'>
            인천문화재단 공식인스타그램{`(@ifacpr)`} 홍보 피드에 함께 하고 싶은
            친구를 {`@`}태그하여 댓글
          </span>
          을 남겨주세요. <br />
          추첨으로 소풍 감성 가득한 예쁜 {`<피크닉 테이블 바구니>`}을 드려요.
        </p>
        <div className='mt-10'>
          <p>
            <span className='text-type-head-2'>참여 방법: </span>
            <span>인스타그램 댓글로 친구 소환하기</span>
          </p>
          <p>
            <span className='text-type-head-2'>증정 선물: </span>
            <span>피크닉 테이블 바구니</span>
          </p>
          <p>
            <span className='text-type-head-2'>참여 기간: </span>
            <span>2025.11.22(토) 14:00까지</span>
          </p>
          <p>
            <span className='text-type-head-2'>당첨자 발표: </span>
            <span>인천문화재단 인스타그램(@ifacpr), 12월 1주 예정</span>
          </p>
        </div>
      </section>
    ),
  },
  {
    heading: {
      pretitle: '02',
      title: '발걸음마다 반가운 선물!',
    },
    layout: 'end',
    blobs: [
      {
        url: pink,
        size: '100% auto',
        position: 'right 10% top -240px',
        blendMode: 'normal',
        smSize: '140% auto',
        smPosition: 'left -25% top -25%',
      },
    ],
    body: (
      <section
        className='max-w-full sm:max-w-2xl lg:w-[744px] text-sm sm:text-base lg:text-2xl text-type-body leading-relaxed sm:leading-relaxed lg:leading-relaxed mx-30% text-right '
        style={{
          fontFamily: 'SejongGeulggot, Pretendard, sans-serif',
          color: 'var(--type-body, #A49A85)',
          WebkitTextStrokeWidth: '0.2px',
          WebkitTextStrokeColor: 'var(--type-body, #A49A85)',
        }}>
        <p className='last:mb-0'>
          점점점 마을에 오신 여러분을 환영하는 마음을 담아
          <br /> 싱그러운 흙 내음이 날 것 같은 {`<텃밭 야채 젓가락 받침대>`}와
          공간 구석구석의 이야기를 담은 {`<점점점 마을 소원 카드 세트>`}를
          드려요.
          <br />
          지금 바로
          <span className='text-type-head-2'>
            &nbsp;공간별 카드를 모아 나만의 점점점 마을 지도를 완성해 보세요!
          </span>
        </p>
        <div className='mt-20'>
          <p>
            <span className='text-type-head-2'>참여 방법: </span>
            <span>점점점 공간 방문하기</span>
          </p>
          <p>
            <span className='text-type-head-2'>증정 선물: </span>
            <span>소원 카드 & 젓가락 받침대{`(선착순 증정)`}</span>
            <br />
            <span>{`(TIP: 여러 공간에 방문하면 귀엽고 다양한 야채 받침대들을 모을 수 있어요!)`}</span>
          </p>
        </div>
      </section>
    ),
  },
  {
    heading: {
      pretitle: '03',
      title: '나만 알기 아까운 점점점 공간 소개!',
    },
    layout: 'start',
    contentClassName: 'lg:pl-[15%]',
    blobs: [
      {
        url: blue,
        size: '99.9% auto',
        position: 'left 0% top -150px',
        blendMode: 'normal',
        smSize: '150% auto',
        smPosition: 'left -15% top -10%',
      },
    ],
    body: (
      <section
        className='max-w-full sm:max-w-2xl lg:w-[744px] text-sm sm:text-base lg:text-2xl text-type-body leading-relaxed sm:leading-relaxed lg:leading-relaxed'
        style={{
          fontFamily: 'SejongGeulggot, Pretendard, sans-serif',
          color: 'var(--type-body, #A49A85)',
          WebkitTextStrokeWidth: '0.2px',
          WebkitTextStrokeColor: 'var(--type-body, #A49A85)',
        }}>
        <p className='last:mb-0'>
          <span className='text-type-head-2'>
            점점점 마을에서 보낸 즐거운 순간을 SNS에 소개해주세요!
          </span>
          <br />
          필수 해시태그와 함께 사진을 올려주시면
          <br /> 선착순으로 예쁜 {`<런치박스>`}를 선물합니다.
        </p>
        <div className='my-20'>
          <p>
            <span className='text-type-head-2'>참여 방법: </span>
            <span>
              필수 해시태그와 함께 SNS에 방문 인증샷 올리고 공간 담당자에게
              보여주기 <br />
              (홍보 및 사업관리 목적의 정보 활용 동의 완료 후 지급)
              <br />
              {`(TIP: 여러 공간을 방문하면 당첨률이 올라가요!)`}
            </span>
            <br />
            <span className='text-type-head-2'>
              {` ·`}필수 해시태그: {`#인천광역시 #인천문화재단 #점점점`}
            </span>
          </p>
          <br />
          <p>
            <span className='text-type-head-2'>증정 선물: </span>
            <span>레디고 런치박스(선착순 증정)</span>
          </p>
        </div>
      </section>
    ),
  },
];
