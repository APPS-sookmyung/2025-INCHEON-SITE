import jangseungImg from '@/assets/svg/space-jangseung.svg';
import teotbatImg from '@/assets/svg/space-teotbat.svg';
import eumakjangteoImg from '@/assets/svg/space-eumakjangteo.svg';
import yeogwanImg from '@/assets/svg/space-yeogwan.svg';
import doltapImg from '@/assets/svg/space-doltap.svg';
import dokkaebibulImg from '@/assets/svg/space-dokkaebibul.svg';
import munbangguImg from '@/assets/svg/space-munbanggu.svg';
import dabangImg from '@/assets/svg/space-dabang.svg';
import bangatganImg from '@/assets/svg/space-bangatgan.svg';
import golmokImg from '@/assets/svg/space-golmok.svg';

export const PLACES = [
  {
    id: 'jangseung',
    subtitle: '어벙또벙 이야기 수선집',
    title: '<장승>',
    content:
      '우리 마을을 지켜주는 장승이에요. 낮을 가리는 두 장승이랑, 찾아오는 사람들에게 우리마을의 옛날 이야기를 들려줘요.',
    image: jangseungImg,
    hoverBgColor: 'var(--color-primary-4)',
    hoverTitle: '< 어벙대장군과 또벙여장군이 들려주는 전설들을 만나보세요! >',
    hoverContent: '이야기가 모이고 만들어지는 이야기 수선집\n... 더보기',
    time: '13:00 -18:00',
    address: '인천 동구 송림로 16, 2층',
  },
  {
    id: 'teotbat',
    subtitle: '창작집단 발아',
    title: '<텃밭>',
    content:
      '우리 마을에 있는 싹이 튼 텃밭이에요. 작은 원인에 싸움을 바꾸려는 힘, 그 씨앗이 무엇으로 발아될지 궁금하죠?',
    image: teotbatImg,
    hoverBgColor: 'var(--color-primary-3)',
    hoverTitle: '< 읽고, 쓰고, 심고, 돌보는 작은 여정에 당신을 초대합니다. > ',
    hoverContent:
      '창작 도서관의 희곡을 읽으며 휴식을 가집니다. 차분하고 안전한\n... 더보기',
    time: '12:00 -18:00',
    address: '인천 중구 참외전로 27번길 2, 2층',
  },
  {
    id: 'eumakjangteo',
    subtitle: '코드아트',
    title: '<음악장터>',
    content:
      '텃밭을 지나면 음악 장터가 나와요! 특별한 날에는 예술가들의 사연이 담긴 공연을 판대요.',
    image: eumakjangteoImg,
    hoverBgColor: 'var(--color-primary-1)',
    hoverTitle:
      '< 예술과 물건, 사연이 어우러진 특별한 공간으로 여러분을 초대합니다 >',
    hoverContent:
      '예술가들이 가져온 물건에 대한 사연을 음악, 영상과 같이 다양한\n... 더보기',
    time: '11월 14, 21일 18:00-22:00 / 15일, 22일 14:00-18:00',
    address: '코드스페이스 (인천 미추홀구 주안로 78, 3층)',
  },
  {
    id: 'yeogwan',
    subtitle: '올라아트컴퍼니',
    title: '<여관>',
    content:
      '우리 마을에서 가장 오래된 여관은 의문의 시간이었어요. 진실을 알려줄 사람을 늘 찾고 있죠.',
    image: yeogwanImg,
    hoverBgColor: 'var(--color-primary-2)',
    hoverTitle:
      '< 오래된 여관에 남겨진 의문의 사건. 단서와 목격담을 따라, 숨겨진 진실을 밝혀내세요.>',
    hoverContent:
      '<여관괴담〉은 시골의 오래된 여관을 배경으로 펼쳐지는 짧고\n... 더보기',
    time: '12:00-18:00',
    address: '인천 중구 참외전로 27번길 2, 2층',
  },
  {
    id: 'doltap',
    subtitle: '모이소',
    title: '<돌탑>',
    content:
      '뒷산으로 가면 돌탑이 나와요. 소원을 빌어봐요. 어두워지면 도깨비불도 볼 수 있대요!',
    image: doltapImg,
    hoverBgColor: 'var(--color-primary-3)',
    hoverTitle: '< 도심을 거닐다 나오는 돌탑을 잠시 바라보고 가세요! >',
    hoverContent:
      '프로젝트 스페이스 코스모스에서 진행되는 관객참여형 공공미술\n... 더보기',
    time: '12:00 - 18:00',
    address: '인천 중구 우현로 67번길 13, 2층',
  },
  {
    id: 'dokkaebibul',
    subtitle: '공간인공빛',
    title: '<도깨비불>',
    content:
      '뒷산으로 가면 돌탑이 나와요. 소원을 빌어 봐요. 어두워지면 도깨비불도 볼 수 있대요!',
    image: dokkaebibulImg,
    hoverBgColor: 'var(--color-primary-2)',
    hoverTitle: '< 창문 너머로, 공간들이 간직한 이야기가 흘러나온다 >',
    hoverContent:
      '해가 지고 어둑해지면 2층의 공간 인공빛 창문에서 빛이 어른거립\n... 더보기',
    time: '19:30 - 23:00',
    address: '인천 중구 신포로 31번길 6, 2층',
  },
  {
    id: 'golmok',
    subtitle: '㈜한울소리',
    title: '<골목>',
    content: '골목 속으로 들어가면 아이들의 놀이소리와 음악소리가 크게 들려요.',
    image: golmokImg,
    hoverBgColor: 'var(--color-primary-1)',
    hoverTitle:
      '< 아련한 기억 속의 소리들이 눈 앞에 펼쳐지는 새로운 추억 여행의 방식 >',
    hoverContent:
      '시골 마을의 풍경과 소리를 주제로, ‘보는’ 영상과 더불어, 듣고,\n... 더보기',
    time: '11월14일, 11월21일 19:00~20:00 / 11월15일, 11월22일 15:00~16:00 \n(정시 1차 공연 시작, 30분 2차 공연 시작)',
    address: '인천 미추홀구 소성로 285 지하',
  },
  {
    id: 'munbanggu',
    subtitle: '㈜위드달',
    title: '<문방구>',
    content: '골목 초입에 있는 주인아저씨 문방구는 아이들의 놀이터예요.',
    image: munbangguImg,
    hoverBgColor: 'var(--color-primary-2)',
    hoverTitle:
      '< 문방구’는 세대와 세대를 잇는 추억의 공간이자, 놀이와 창의력이 시작되는 작은 우주입니다. >',
    hoverContent:
      '본 전시는 문방구의 향수와 즐거움을 현대적으로 재해석하여,\n... 더보기',
    time: '14:00 -16:00',
    address: '인천시 미추홀구 석정로375번길 23',
  },
  {
    id: 'dabang',
    subtitle: '카츠오리진연구소',
    title: '<다방>',
    content: '작은 다방에는 작은 조각보도 만들 수 있어요.',
    image: dabangImg,
    hoverBgColor: 'var(--color-primary-3)',
    hoverTitle:
      '< 오래된 골목 위 작은 다방에서 당신의 상상도 살며시 놓아두고 가세요. >',
    hoverContent:
      '다방처럼 꾸며진 공간에서는 앉아 차를 마시듯 쉬어가며, 직접\n... 더보기',
    time: '11:00 -18:00',
    address: '인천 중구 자유공원로 5, 빽다방 3층',
  },
  {
    id: 'bangatgan',
    subtitle: '공예루틴',
    title: '<방앗간>',
    content: '골목에는 유명한 방앗간이 있는데 손님이 담긴 이야기가 펼쳐져요.',
    image: bangatganImg,
    hoverBgColor: 'var(--color-primary-4)',
    hoverTitle:
      '< 바다의 기억, 땅의 순간, 하늘의 시간 >\n<토양이 전시의 소재로 그리고 테마로 변화하는 새로운 순간을 경험해 보세요.>',
    hoverContent:
      '임시공간과 함께 하는 이번 프로젝트는 ‘바다의 기억, 땅의 순간,\n... 더보기',
    time: '11월 5일-11월 29일(12:00-18:00)\n오픈 토크: 11월 22일(금) 오후 2시',
    address: '인천 중구 신포로23번길 43',
  },
];
