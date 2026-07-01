export interface Faq {
  q: string;
  a: string;
}
export interface Section {
  h: string;
  paras: string[];
  bullets?: string[];
}
export interface ArticleEn {
  title: string;
  metaTitle: string;
  description: string;
  lead: string;
  sections: Section[];
  faq: Faq[];
  ctaTitle: string;
  ctaBody: string;
  lineupLabel: string;
}
export interface Article {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keywords: string[];
  date: string;
  category: string;
  readMin: number;
  heroImage: string;
  heroImageEn?: string;
  heroAlt: string;
  heroContain?: boolean;
  heroWidth?: number;
  heroHeight?: number;
  lead: string;
  sections: Section[];
  faq: Faq[];
  relatedKeywords: string[];
  ctaTitle: string;
  ctaBody: string;
  lineupHref: string;
  lineupLabel: string;
  categoryEn?: string;
  en?: ArticleEn;
}

export const articles: Article[] = [
  {
    slug: "food-factory-condensation",
    title: "식품공장 결로, 왜 생기고 어떻게 잡나",
    metaTitle: "식품공장 결로 해결 가이드 — 저온제습 쿨링시스템 | 쎄슬프라이머스",
    description:
      "식품공장·포장실 결로의 원인(노점·표면결로·공급공기)과 저온제습 기반 해결법을 정리했습니다. 냉방·환기만으로 안 되는 이유와 알파쿨링 적용 방식까지.",
    keywords: ["식품공장 결로", "결로 방지", "저온제습", "포장실 결로", "쿨링시스템", "식품공장 공조", "HGR"],
    date: "2026-06-23",
    category: "알파쿨링",
    readMin: 5,
    heroImage: "/media/sns/sns-blog-condensation.webp",
    heroAlt: "식품공장 결로 문제 / Food factory condensation problem",
    lead:
      "여름철이면 식품공장과 포장실 곳곳에 물방울이 맺힙니다. 천장에서 떨어진 결로수가 제품·포장재에 닿으면 곧바로 위생 사고와 클레임으로 이어지죠. 결로는 '온도만 더 낮추면' 잡히지 않습니다. 원인을 알아야 제대로 해결됩니다.",
    sections: [
      {
        h: "결로는 왜 생기나 — 노점과 표면결로",
        paras: [
          "공기는 온도가 낮아질수록 머금을 수 있는 수분량이 줄어듭니다. 그 한계점이 '노점온도'입니다. 천장·벽·배관·바닥 같은 차가운 표면의 온도가 주변 공기의 노점보다 낮아지면, 그 표면에 수분이 응축되어 물방울, 즉 결로가 맺힙니다.",
          "여름에 특히 심한 이유는 분명합니다. 외부의 고온다습한 공기가 출입문·자재 반입구로 들어오면 실내 습도가 급등하고, 차가운 냉방 표면과 만나 결로가 폭증합니다. 결국 결로는 표면온도·공기 노점·공급공기 습도, 이 세 가지의 문제입니다."
        ],
        bullets: ["표면온도: 천장·배관 등 차가운 면", "노점온도: 공기가 응축을 시작하는 온도", "공급공기 습도: 외기 유입으로 상승"]
      },
      {
        h: "결로가 부르는 진짜 비용",
        paras: ["결로는 단순한 불편이 아니라 직접적인 손실로 이어집니다."],
        bullets: [
          "위생: 천장 결로수 낙하로 제품 직접 오염, HACCP 부적합 리스크",
          "곰팡이·세균: 상시 젖은 표면에서 곰팡이 번식 → 냄새·재시공 비용",
          "품질: 포장재 젖음, 라벨 불량, 제품 흡습",
          "안전: 바닥 미끄럼으로 인한 작업자 사고"
        ]
      },
      {
        h: "냉방·환기만으로 안 되는 이유",
        paras: [
          "흔한 대처가 결로를 못 잡는 데는 이유가 있습니다. 냉방을 더 세게 틀면 표면이 더 차가워져 오히려 결로가 악화될 수 있습니다. 환기는 바깥 공기가 실내보다 더 습한 계절엔 습기를 끌어들이는 역효과를 냅니다. 일반 제습기는 저온 공간에서 효율이 급락하고 착상(서리)이 생깁니다.",
          "핵심은 '저온 상태를 유지하면서 공급공기의 습도(노점)를 낮추는' 통합 설계입니다. 온도와 습도를 따로 보지 않고 함께 제어해야 결로 발생 자체를 막을 수 있습니다."
        ]
      },
      {
        h: "저온제습 기반 해결 — 알파쿨링",
        paras: [
          "알파쿨링은 냉각·제습·재열·기류를 하나로 설계해, 저온을 유지하면서 공급공기의 노점을 낮춥니다. 식품공정·포장실에는 인라인 핫가스 재열 제습(HGR) 유닛으로 과냉 없이 습도만 제거합니다.",
          "냉각기·순환팬·기류·센서를 통합해 공간 전체의 습도와 표면온도를 균일하게 맞추면, 결로가 생기는 조건 자체가 사라집니다. 수직농장 재배실부터 식품 포장실, 저온저장시설, 콜드체인 공간까지 같은 원리로 적용합니다."
        ]
      },
      {
        h: "도입 전 점검 체크리스트",
        paras: ["현장에 맞는 해결을 위해 아래 항목을 먼저 확인합니다."],
        bullets: [
          "공간별 목표 온습도와 운영 시간",
          "출입구·자재 반입구의 외기 유입 경로",
          "천장·배관 등 결로 다발 표면의 온도",
          "기존 공조·냉동 설비 용량과 기류 분포",
          "결로수 배수 동선과 위생 구역 구분"
        ]
      }
    ],
    faq: [
      { q: "결로는 왜 유독 여름에 심한가요?", a: "여름엔 외부 공기의 온도와 습도가 모두 높아, 출입구로 유입된 다습한 공기가 차가운 냉방 표면과 만나면서 결로가 급증합니다. 표면온도와 공급공기 노점의 차이가 커지기 때문입니다." },
      { q: "환기만 늘리면 해결되지 않나요?", a: "바깥 공기가 실내보다 더 습한 계절에는 환기가 오히려 습기를 끌어들여 결로를 악화시킬 수 있습니다. 습도(노점)를 낮추는 제습이 함께 가야 합니다." },
      { q: "도입 비용은 얼마나 드나요?", a: "공간 규모·목표 온습도·기존 설비 조건에 따라 크게 달라져 일률적으로 말씀드리기 어렵습니다. 현장 진단 후 조건에 맞춰 제안드립니다." }
    ],
    relatedKeywords: [
      "식품공장 결로 / Food Factory Condensation",
      "결로 방지 솔루션 / Condensation Control Solution",
      "저온제습 / Low-Temperature Dehumidification",
      "식품 포장실 공조 / Food Packaging Room HVAC",
      "쿨링시스템 / Cooling System",
      "핫가스 재열 제습 / Hot-Gas Reheat Dehumidification"
    ],
    ctaTitle: "결로 문제, 현장 조건에 맞게 진단해 드립니다.",
    ctaBody: "시설 종류와 현재 겪는 결로·습도 문제를 알려주시면 저온제습 공조 담당자가 직접 검토해 회신드립니다.",
    lineupHref: "/alphacooling",
    lineupLabel: "알파쿨링 솔루션 보기"
  },
  {
    slug: "cold-storage-condensation-mold",
    title: "지하·저온저장고 결로·곰팡이, 근본 원인과 해결법",
    metaTitle: "저온저장고·식품창고 결로 곰팡이 해결 — 저온제습 | 쎄슬프라이머스",
    description:
      "저온저장고·지하 식품창고의 결로와 곰팡이가 생기는 메커니즘, 환기·배수만으로 부족한 이유, 저온제습 쿨러 기반 해결법을 정리했습니다.",
    keywords: ["저온저장고 결로", "식품창고 곰팡이", "저온제습", "콜드체인 공조", "냉장창고 공조", "지하 결로", "저온저장고"],
    date: "2026-06-25",
    category: "알파쿨링",
    readMin: 5,
    heroImage: "/media/sns/sns-blog-dehumidification.webp",
    heroAlt: "저온저장고 결로·곰팡이 / Cold storage condensation and mold",
    lead:
      "저온저장고나 지하 식품창고의 벽·천장에 맺히는 결로와 검은 곰팡이는 저장품 품질과 위생을 직접 위협합니다. 환기팬을 더 달아도 잘 잡히지 않는 이유와, 근본 해결법을 정리했습니다.",
    sections: [
      {
        h: "저온·지하 공간에서 결로·곰팡이가 생기는 메커니즘",
        paras: [
          "저온저장고는 표면온도가 낮아 공기가 노점에 쉽게 도달합니다. 여기에 지하 공간은 외부 습기 유입, 지중 수분, 부족한 환기가 겹쳐 습도가 높게 유지됩니다. 결과적으로 결로가 상시화되고, 젖은 표면은 곰팡이가 번식하기에 최적의 환경이 됩니다.",
          "곰팡이는 한 번 자리 잡으면 냄새와 포자가 저장품으로 옮겨가고, 표면 재시공 없이는 잘 사라지지 않습니다. 그래서 '생긴 뒤 닦는' 방식이 아니라 '생기지 않게' 하는 접근이 필요합니다."
        ]
      },
      {
        h: "환기·배수만으로 부족한 이유",
        paras: [
          "환기는 외기가 실내보다 건조할 때만 효과가 있습니다. 장마철처럼 바깥이 더 습하면 환기가 오히려 습기를 들여옵니다. 배수는 이미 생긴 물을 흘려보낼 뿐, 공기 중 습도(노점) 자체를 낮추지는 못합니다. 그래서 환기·배수만으로는 결로와 곰팡이가 계속 재발합니다."
        ]
      },
      {
        h: "저장품 품질·위생 리스크",
        paras: ["결로·곰팡이를 방치하면 다음과 같은 손실로 이어집니다."],
        bullets: [
          "곰팡이 냄새·포자의 저장품 이염",
          "포장 손상·라벨 불량, 표면 결빙",
          "위생 점검·HACCP 리스크",
          "재고 손실과 클레임"
        ]
      },
      {
        h: "저온제습 쿨러로 잡는 법 — 알파쿨링",
        paras: [
          "알파쿨링은 저온을 유지하면서 공급공기의 노점을 낮추는 저온제습 쿨러와 기류 설계로 표면 결로와 곰팡이를 근본에서 차단합니다. 식품창고·저온저장고·냉장/냉동창고·콜드체인 시설에 적용합니다.",
          "지하 공간을 활용하는 사업, 예컨대 지하 딸기수직농장 같은 경우에도 동일한 원리가 적용됩니다. 결로·환기·배수·제습을 하나의 설계로 묶어 공간 전체를 안정시킵니다."
        ]
      },
      {
        h: "도입 전 점검 항목",
        paras: ["현장에 맞는 제안을 위해 아래를 확인합니다."],
        bullets: [
          "목표 온습도와 저장품 특성",
          "현재 환기·배수 현황과 곰팡이 발생 위치",
          "단열·방습 상태와 외기·지중 습기 유입",
          "기존 냉동기 용량과 운전 방식"
        ]
      }
    ],
    faq: [
      { q: "환기팬을 늘렸는데 곰팡이가 계속 생겨요.", a: "공기 중 습도(노점)를 낮추지 않으면 결로와 곰팡이는 재발합니다. 외기가 더 습한 계절엔 환기가 역효과일 수 있어, 저온을 유지하며 제습하는 저온제습이 핵심입니다." },
      { q: "지하 공간에도 적용할 수 있나요?", a: "가능합니다. 지하는 결로·환기·배수 조건이 핵심이라, 이를 통합 설계로 함께 관리합니다. 지하 딸기수직농장처럼 지하를 생산·저장 공간으로 활용하는 경우에도 적용합니다." },
      { q: "기존 냉동기를 그대로 두고 추가할 수 있나요?", a: "현장 설비 용량과 운전 방식을 진단한 뒤, 기존 설비를 활용하는 방향까지 포함해 조건에 맞게 제안드립니다." }
    ],
    relatedKeywords: [
      "저온저장고 결로 / Cold Storage Condensation",
      "식품창고 곰팡이 / Food Warehouse Mold",
      "저온제습 / Low-Temperature Dehumidification",
      "콜드체인 공조 / Cold Chain HVAC",
      "냉장창고 공조 / Refrigerated Warehouse HVAC",
      "지하 결로 해결 / Underground Condensation Control"
    ],
    ctaTitle: "저온저장고·식품창고 결로, 근본부터 잡습니다.",
    ctaBody: "저장 공간 종류와 곰팡이·결로 상황을 알려주시면 저온제습 공조 담당자가 직접 검토해 회신드립니다.",
    lineupHref: "/alphacooling",
    lineupLabel: "알파쿨링 솔루션 보기"
  },
  {
    slug: "year-round-strawberry-vertical-farm",
    title: "딸기 수직농장으로 연중 딸기 사업, 어떻게 가능한가",
    metaTitle: "딸기 수직농장 연중 사업 가이드 — 알파팜 연중 딸기 사업솔루션 | 쎄슬프라이머스",
    description:
      "계절·날씨와 무관하게 1년 내내 프리미엄 딸기를 생산·판매하는 딸기 수직농장 사업의 원리와, 재배·운영·판매를 패키지로 제공하는 알파팜 연중 딸기 사업솔루션을 정리했습니다.",
    keywords: ["딸기수직농장", "수직농장", "연중 딸기 사업솔루션", "알파팜", "프리미엄 딸기 생산", "도심형 딸기농장", "스마트팜 딸기"],
    date: "2026-06-25",
    category: "알파팜",
    readMin: 6,
    heroImage: "/media/cases/case-suwon-urban-01.webp",
    heroAlt: "수원 도심형 딸기 수직농장 운영 현장 / Suwon urban strawberry vertical farm in operation",
    lead:
      "딸기는 제철이 짧고 날씨에 민감한 작물입니다. 그래서 봄 한철에 공급이 몰리고, 여름·가을엔 물량이 귀해 가격이 뜁니다. 딸기 수직농장은 이 '계절'을 없앱니다. 실내 환경을 정밀하게 제어해 1년 내내 균일한 프리미엄 딸기를 생산하는 방식입니다.",
    sections: [
      {
        h: "딸기 수직농장이란 — 계절을 없앤 생산",
        paras: [
          "딸기 수직농장은 재배 선반을 여러 층으로 쌓아 좁은 면적에서 고밀도로 딸기를 키우는 실내 생산 시설입니다. 온도·습도·이산화탄소·빛·양액을 사람이 정밀하게 제어하기 때문에, 바깥 날씨나 계절과 상관없이 연중 안정적으로 수확할 수 있습니다.",
          "노지나 비닐하우스 재배가 기후·병해충·일조량에 좌우되는 반면, 수직농장은 '재배 환경 자체를 설계'합니다. 그 결과 당도와 크기, 출하 시기를 일정하게 맞출 수 있어 프리미엄 시장에 적합합니다."
        ],
        bullets: ["고밀도 수직 재배로 단위면적 생산성↑", "온습도·CO₂·광·양액 정밀 제어", "계절·날씨와 무관한 연중 수확"]
      },
      {
        h: "왜 '연중'이 사업의 핵심인가",
        paras: [
          "딸기 사업의 수익은 '언제 파느냐'에 크게 좌우됩니다. 공급이 몰리는 제철엔 가격이 낮고, 물량이 귀한 비수기엔 프리미엄 가격이 형성됩니다. 연중 생산이 가능하면 비수기 공급으로 가격 협상력을 갖고, 카페·호텔·베이커리 같은 고정 거래처에 1년 내내 일정 품질로 납품할 수 있습니다.",
          "계절에 묶이지 않는다는 것은 곧 매출이 한철에 쏠리지 않는다는 뜻입니다. 안정적인 연중 공급은 사업의 예측 가능성과 거래처 신뢰를 동시에 높입니다."
        ]
      },
      {
        h: "딸기 수직농장 사업의 핵심 변수",
        paras: ["수직농장 딸기 사업은 설비만 갖춘다고 되는 것이 아니라, 다음 네 가지가 함께 맞물려야 합니다."],
        bullets: [
          "환경제어: 딸기에 최적화된 온습도·CO₂·광 설계와 안정적 운전",
          "재배 노하우: 품종·양액·생육 관리로 당도와 수율 확보",
          "운영 지속성: 전력·설비·데이터를 안정적으로 돌리는 운영 체계",
          "판로: 프리미엄 가격을 받을 수 있는 리테일·납품 채널"
        ]
      },
      {
        h: "알파팜 — 연중 딸기 사업솔루션",
        paras: [
          "쎄슬프라이머스 알파팜은 설비만 파는 것이 아니라 재배·운영·판매까지 패키지로 책임지는 '연중 딸기 사업솔루션'입니다. 고객이 초기 투자를 결정하면, 생산 기반 구축부터 운영, 판매 연결까지 하나의 흐름으로 설계합니다. 계약은 1년 기본, 이후 1년 단위로 연장합니다.",
          "산하 구성은 대형 프리미엄 딸기 생산기지인 모듈형 수직농장 알파코어, 생산한 딸기를 케이크·생과·음료로 판매하는 매장형 모델 알파카페, 호텔·쇼룸·베이커리 공간경험 포트폴리오, 그리고 소형 검증형 알파 컨테이너팜입니다. 재배 경험이 없어도 시작할 수 있도록 운영 노하우와 시스템을 함께 제공해 진입장벽을 낮춥니다."
        ],
        bullets: [
          "알파코어: 모듈형 수직농장 생산기지 (반복 증설로 확장)",
          "알파카페: 생산–프리미엄 리테일 연결 매장형 모델",
          "경험형 포트폴리오: 호텔·쇼룸·베이커리 공간경험",
          "알파 컨테이너팜: 40피트 기반 소형 생산·검증형"
        ]
      },
      {
        h: "시작하기 전 점검 항목",
        paras: ["사업 목표와 현장 조건에 맞는 설계를 위해 아래를 먼저 확인합니다. 규모가 부담되면 컨테이너팜 같은 검증형 모델로 작게 시작해 데이터를 확보한 뒤 확장하는 방법도 있습니다."],
        bullets: [
          "확보 가능한 공간 면적과 층고",
          "전력 용량과 냉방·제습 설비 조건",
          "목표 생산량과 출하 시기",
          "판로(리테일·납품·체험 매장) 계획",
          "초기 투자 여력과 단계적 확장 의향"
        ]
      }
    ],
    faq: [
      { q: "수직농장 딸기가 노지 딸기보다 맛이 떨어지지 않나요?", a: "환경을 정밀하게 제어하기 때문에 당도와 품질을 일정하게 맞출 수 있어, 오히려 프리미엄 시장을 겨냥한 균일한 품질 관리에 유리합니다. 품종과 양액·생육 관리가 맛을 좌우합니다." },
      { q: "농사 경험이 전혀 없어도 시작할 수 있나요?", a: "알파팜은 재배·운영·판매를 패키지로 제공하는 사업솔루션이라, 재배 경험이 없어도 운영 노하우와 시스템을 함께 받아 시작할 수 있습니다. 운영 교육과 프로토콜도 지원합니다." },
      { q: "초기 투자와 수익은 어느 정도인가요?", a: "공간 규모·목표 생산량·판로·지역 조건에 따라 크게 달라져 일률적으로 말씀드리기 어렵습니다. 수익을 보장하기보다, 현장 진단 후 조건에 맞는 사업 모델과 단계적 확장 방안을 제안드립니다." }
    ],
    relatedKeywords: [
      "딸기수직농장 / Strawberry Vertical Farm",
      "연중 딸기 사업솔루션 / Year-Round Strawberry Business Solution",
      "알파팜 / AlphaFarm",
      "프리미엄 딸기 생산 / Premium Strawberry Production",
      "도심형 딸기농장 / Urban Strawberry Farm",
      "스마트팜 딸기 재배 / Smart Farm Strawberry Cultivation",
      "수직농장 사업모델 / Vertical Farm Business Model",
      "고밀도 딸기 재배 / High-Density Strawberry Cultivation"
    ],
    ctaTitle: "딸기 수직농장 사업, 조건에 맞게 설계해 드립니다.",
    ctaBody: "보유 공간·목표 생산량·판로를 알려주시면 알파팜 담당자가 연중 딸기 사업 모델을 직접 검토해 회신드립니다.",
    lineupHref: "/alphafarm",
    lineupLabel: "알파팜 솔루션 보기"
  },
  {
    slug: "alphafarm-core-resource-circulation",
    title: "버려지는 폐열과 CO₂, 프리미엄 딸기 매출로 바꾸다",
    metaTitle: "폐열·CO₂ 자원순환 — 알파팜 코어 모델 | 쎄슬프라이머스",
    description:
      "데이터센터·발전소·브루어리·바이오가스·산업단지의 폐열과 CO₂를 프리미엄 딸기 수직농장의 생산자원으로 전환하는 알파팜 코어 자원순환 모델을 소개합니다.",
    keywords: ["폐열활용", "CO2활용", "자원순환", "알파팜코어", "딸기수직농장", "ESG", "데이터센터"],
    date: "2026-06-28",
    category: "알파팜",
    readMin: 4,
    heroImage: "/media/series/series-1.webp",
    heroImageEn: "/media/series/series-1-en.webp",
    heroAlt: "알파팜 코어 폐열·CO₂ 자원순환 인프라 / AlphaFarm Core waste heat and CO₂ circular infrastructure",
    heroContain: true,
    heroWidth: 1200,
    heroHeight: 1200,
    lead:
      "데이터센터·발전소·브루어리·바이오가스 시설·산업단지에서 나오는 폐열과 CO₂. 지금까지는 처리 부담과 인허가·ESG 과제였지만, 조건이 맞으면 프리미엄 딸기 수직농장의 생산자원이 될 수 있습니다.",
    sections: [
      {
        h: "폐열·CO₂를 자산으로 바꾸는 알파팜 코어 모델",
        paras: [
          "쎄슬프라이머스는 알파팜 코어 모델을 통해 폐열, 정제·조절된 CO₂, 안정적인 전력, 유휴 부지를 고부가 프리미엄 딸기 생산 인프라로 전환하는 자원순환 모델을 제안합니다. 단순히 스마트팜을 설치하는 것이 아니라, 기업이 고민하는 문제를 동시에 해결하는 사업모델입니다."
        ],
        bullets: [
          "폐열 → 냉방·제습 보조 에너지로 활용",
          "CO₂ → 프리미엄 딸기 생육 자원으로 활용",
          "유휴 부지 → 고부가 식품생산 공간으로 전환",
          "ESG 과제 → 눈에 보이는 자원순환 사례로",
          "부산물 처리 부담 → 프리미엄 딸기 매출 기회로"
        ]
      },
      {
        h: "어디에 적용할 수 있나",
        paras: ["알파팜 코어 1개 모듈은 운영 조건에 따라 연간 10톤 이상의 프리미엄 딸기 생산을 목표로 설계됩니다."],
        bullets: ["SOFC 데이터센터", "CHP·CCGT 발전소", "브루어리·발효공장", "바이오가스·자원회수 시설", "석유화학·수소 생산기지"]
      }
    ],
    faq: [
      { q: "배기가스를 그대로 사용하나요?", a: "아니요. 포집·정제·조절된 CO₂를 농업용 자원으로 활용 가능한지 기술적으로 검토하는 구조입니다. 폐열도 온도·열량 조건을 별도로 확인합니다." },
      { q: "어떤 기업에 적합한가요?", a: "폐열, 정제 가능한 CO₂, 안정적 전력, 유휴 부지를 보유한 시설이라면 검토해 볼 수 있습니다. 조건에 따라 적용 가능성을 함께 진단합니다." }
    ],
    relatedKeywords: [
      "폐열 활용 / Waste Heat Recovery",
      "CO₂ 활용 / CO₂ Utilization",
      "자원순환 인프라 / Circular Infrastructure",
      "알파팜 코어 / AlphaFarm Core",
      "딸기수직농장 / Strawberry Vertical Farm",
      "ESG 자원순환 / ESG Circularity"
    ],
    ctaTitle: "폐열·CO₂ 보유 시설, 적용 가능성을 검토해 드립니다.",
    ctaBody: "폐열·CO₂·전력·유휴 부지 조건을 알려주시면 알파팜 코어 모델 적용 가능성을 직접 검토해 회신드립니다.",
    lineupHref: "/alphafarm",
    lineupLabel: "알파팜 솔루션 보기"
  },
  {
    slug: "alphafarm-core20-sofc-datacenter",
    title: "숫자로 보는 데이터센터 연계 수직농장 — 알파팜 코어-20",
    metaTitle: "알파팜 코어-20 SOFC 데이터센터 연계 모델 (숫자) | 쎄슬프라이머스",
    description:
      "SOFC 데이터센터와 연계한 알파팜 코어-20 모델을 숫자로 정리했습니다. 약 1,000평 규모, 연 200~240톤, CAPEX·OPEX 절감 구조까지.",
    keywords: ["Core20", "SOFC", "데이터센터", "CAPEX절감", "OPEX절감", "폐열재이용", "CO2재이용", "수직농장"],
    date: "2026-06-28",
    category: "알파팜",
    readMin: 4,
    heroImage: "/media/series/series-2.webp",
    heroImageEn: "/media/series/series-2-en.webp",
    heroAlt: "알파팜 코어-20 SOFC 데이터센터 연계 모델 숫자 / AlphaFarm Core-20 SOFC data center model figures",
    heroContain: true,
    heroWidth: 1200,
    heroHeight: 676,
    lead:
      "폐열과 CO₂를 생산자원으로 전환하는 알파팜 코어 모델 중에서도, SOFC 데이터센터와 연계한 코어-20 모델을 숫자로 정리했습니다. 약 1,000평 규모의 프리미엄 딸기 수직농장입니다.",
    sections: [
      {
        h: "코어-20, 숫자로 보면",
        paras: ["핵심은 단순한 ESG 이미지가 아니라, CAPEX와 OPEX 구조 자체를 개선할 수 있는 사업모델이라는 점입니다."],
        bullets: [
          "연간 예상 생산량 200~240톤",
          "기준 판매가 30,000원/kg · 연 매출 약 60~72억원",
          "CAPEX 약 35% 절감 (유틸리티 인프라 공동 활용)",
          "전력비 최대 45% 절감 · 방열동력 60%+ 절감 목표",
          "CO₂ 구매비 Zero · 연 약 438톤 CO₂ 재이용"
        ]
      },
      {
        h: "데이터센터 옆 농장이 아니라, 루프를 닫는 인프라",
        paras: ["알파팜 코어-20은 SOFC 데이터센터의 전력·폐열·CO₂ 루프를 닫는 자원순환형 사업 인프라입니다. 데이터센터 입장에서는 처리 부담을 ERE 실적·ESG 가치·프리미엄 식품 생산 자산으로 전환할 수 있습니다."]
      }
    ],
    faq: [
      { q: "제시된 매출·수익은 보장되나요?", a: "운영 조건·품종·지역에 따라 달라지는 검토용 추정치입니다. 수익을 보장하기보다 현장 조건에 맞춰 사업성을 함께 검토합니다." },
      { q: "일반 코어-20 대비 무엇이 다른가요?", a: "데이터센터의 방열·배관·계측 등 유틸리티 인프라를 공동 활용해 설치비(CAPEX)를 약 35% 절감할 수 있는 구조입니다." }
    ],
    relatedKeywords: [
      "알파팜 코어-20 / AlphaFarm Core-20",
      "SOFC 데이터센터 / SOFC Data Center",
      "CAPEX 절감 / CAPEX Reduction",
      "OPEX 절감 / OPEX Reduction",
      "CO₂ 재이용 / CO₂ Reuse",
      "자원순환 인프라 / Circular Infrastructure"
    ],
    ctaTitle: "데이터센터 연계 모델, 조건에 맞게 검토해 드립니다.",
    ctaBody: "전력·폐열·CO₂·부지 조건을 알려주시면 코어-20 연계 모델의 사업성을 직접 검토해 회신드립니다.",
    lineupHref: "/alphafarm",
    lineupLabel: "알파팜 솔루션 보기"
  },
  {
    slug: "alphacafe-farm-to-retail",
    title: "알파카페 — 생산과 리테일을 잇는 팜투리테일 모델",
    metaTitle: "알파카페 팜투리테일 모델 — 프리미엄 딸기 | 쎄슬프라이머스",
    description:
      "프리미엄 딸기 생산기지와 카페 리테일을 결합해 딸기를 케이크·디저트·음료·생과팩·선물상품으로 직접 판매하는 알파팜+알파카페 팜투리테일 모델을 소개합니다.",
    keywords: ["알파카페", "팜투리테일", "프리미엄딸기", "딸기수직농장", "알파팜", "스마트팜"],
    date: "2026-06-28",
    category: "알파팜",
    readMin: 3,
    heroImage: "/media/series/series-3.webp",
    heroImageEn: "/media/series/series-3-en.webp",
    heroAlt: "알파카페 팜투리테일 모델 / AlphaCafe farm-to-retail model",
    heroContain: true,
    heroWidth: 1200,
    heroHeight: 899,
    lead:
      "알파카페는 적용 방식에 따라 매장 단독+알파재배기 모델, 알파팜+알파카페 모델 등으로 구성됩니다. 이번에 소개하는 것은 생산과 리테일을 결합한 알파팜+알파카페 모델입니다.",
    sections: [
      {
        h: "생산–판매–고객경험을 하나로",
        paras: [
          "프리미엄 딸기 생산기지와 카페 리테일을 결합해, 생산된 딸기를 케이크·디저트·음료·생과팩·선물상품으로 직접 판매하는 팜투리테일 모델입니다. 재배실·작업실·매장을 하나의 사업공간으로 구성해 생산, 판매, 고객 경험을 연결하는 것이 핵심입니다.",
          "알파카페는 단순한 카페가 아니라, 프리미엄 딸기 생산과 리테일을 결합한 새로운 사업화 모델입니다."
        ]
      }
    ],
    faq: [
      { q: "일반 카페와 무엇이 다른가요?", a: "단순 판매 매장이 아니라, 프리미엄 딸기 '생산'과 '리테일'을 한 공간에서 결합한 사업화 모델입니다. 매장 단독형부터 생산기지 결합형까지 조건에 맞게 구성합니다." }
    ],
    relatedKeywords: [
      "알파카페 / AlphaCafe",
      "팜투리테일 / Farm-to-Retail",
      "프리미엄 딸기 / Premium Strawberry",
      "딸기수직농장 / Strawberry Vertical Farm",
      "알파팜 / AlphaFarm"
    ],
    ctaTitle: "알파카페 모델, 공간·판로에 맞게 설계해 드립니다.",
    ctaBody: "보유 공간과 판매 채널을 알려주시면 알파카페 팜투리테일 모델을 직접 검토해 회신드립니다.",
    lineupHref: "/alphafarm",
    lineupLabel: "알파팜 솔루션 보기"
  },
  {
    slug: "alphafarm-high-density-rack",
    title: "알파팜 고밀도 재배랙 기술",
    metaTitle: "알파팜 고밀도 딸기 재배랙 기술 — 수직농장 | 쎄슬프라이머스",
    description:
      "폭 1.8m 광폭 설계로 빛·양액·기류를 균일하게 전달하는 알파팜 고밀도 딸기 수직재배랙 기술과 연중 생산 프로토콜(DSRP)을 소개합니다.",
    keywords: ["고밀도재배랙", "딸기수직농장", "저온제습", "에너지절감", "연중생산", "스마트팜"],
    date: "2026-06-28",
    category: "알파팜",
    readMin: 4,
    heroImage: "/media/series/series-4.webp",
    heroImageEn: "/media/series/series-4-en.webp",
    heroAlt: "알파팜 고밀도 딸기 재배랙 기술 / AlphaFarm high-density cultivation rack",
    heroContain: true,
    heroWidth: 1200,
    heroHeight: 849,
    lead:
      "알파팜 재배랙은 딸기를 많이 심기 위한 구조물이 아닙니다. 폭 1.8m 광폭 설계로 빛·양액·기류가 랙 전체에 균일하게 전달되고 작업성까지 확보한 고밀도 딸기 수직재배 시스템입니다.",
    sections: [
      {
        h: "고밀도 재배랙 + 핵심 기술",
        paras: ["기본형 7단 224주, 밀식형 14단 448주까지 적용할 수 있습니다. 여기에 광량 최적화(FlexiLight), 레이어별 에어플로우(AirSpine), 양분 정량공급(DualFlow-Loop), 상토 화분 트레이(SmartTray-4) 기술이 함께 적용됩니다."],
        bullets: [
          "기본 7단 224주 / 밀식 14단 448주",
          "15°C·50%RH 저온제습 쿨링(알파쿨링) 결합",
          "전력 소비 절감 기술(알파에너지) 결합",
          "균일 생육 · 병해 리스크 저감 · 작업 효율 향상"
        ]
      },
      {
        h: "연중 생산 프로토콜 (DSRP)",
        paras: ["모종 교체 기반 연중 생산 프로토콜(DSRP)은 분기 25% 모종 교체, 수직농장 육묘, 개화묘 재배를 통해 수확 공백을 줄이고 안정적인 연중 생산을 지원합니다."]
      }
    ],
    faq: [
      { q: "한 랙에 몇 주까지 심을 수 있나요?", a: "기본형은 7단 224주, 밀식형은 14단 448주까지 적용 가능합니다. 현장 층고와 운영 조건에 맞춰 구성합니다." }
    ],
    relatedKeywords: [
      "고밀도 재배랙 / High-Density Rack",
      "딸기수직농장 / Strawberry Vertical Farm",
      "저온제습 / Low-Temperature Dehumidification",
      "에너지 절감 / Energy Saving",
      "연중 생산 / Year-Round Production"
    ],
    ctaTitle: "고밀도 재배랙, 현장 조건에 맞게 설계해 드립니다.",
    ctaBody: "공간 층고와 목표 생산량을 알려주시면 재배랙 구성과 운영 방식을 직접 검토해 회신드립니다.",
    lineupHref: "/alphafarm",
    lineupLabel: "알파팜 솔루션 보기"
  },
  {
    slug: "alphafarm-core-brewery-fermentation",
    title: "알파팜 코어 양조장·발효공장 연계 모델",
    metaTitle: "알파팜 코어 양조장·발효공장 연계 모델 | 쎄슬프라이머스",
    description:
      "발효 CO₂·폐열·전력·유휴공간·판매채널을 프리미엄 딸기 생산과 연결하는 알파팜 코어 1~3 양조장·발효공장 연계 사업모델을 소개합니다.",
    keywords: ["양조장", "발효공장", "알파팜코어", "딸기수직농장", "프리미엄딸기", "디저트연계"],
    date: "2026-06-28",
    category: "알파팜",
    readMin: 3,
    heroImage: "/media/series/series-5.webp",
    heroImageEn: "/media/series/series-5-en.webp",
    heroAlt: "알파팜 코어 양조장·발효공장 연계 모델 / AlphaFarm Core brewery and fermentation model",
    heroContain: true,
    heroWidth: 1200,
    heroHeight: 676,
    lead:
      "양조장과 발효공장은 발효 과정에서 CO₂가 발생하고, 유휴공간·전력 인프라·직영매장 같은 자원을 갖춘 경우가 많습니다. 이 자원을 프리미엄 딸기 생산과 연결하는 코어 1~3 사업모델입니다.",
    sections: [
      {
        h: "기존 자원으로 만드는 새로운 매출",
        paras: [
          "알파팜 코어 1~3 모델은 발효 CO₂, 활용 가능한 폐열, 기존 전력 인프라, 유휴공간과 판매채널을 활용해 프리미엄 딸기를 생산하고, 이를 디저트·음료·직영매장·방문형 콘텐츠와 연계하는 소형·중형 모델입니다.",
          "핵심은 대형 인프라 프로젝트가 아니라, 이미 보유한 공간과 채널을 바탕으로 프리미엄 딸기 생산 기반과 부가 매출 기회를 만드는 현실적인 코어형 모델이라는 점입니다."
        ]
      }
    ],
    faq: [
      { q: "적용 전 무엇을 검토하나요?", a: "발효 CO₂ 품질, 폐열의 온도·열량, 전력 여유, 설치 공간, 판매채널을 함께 검토한 뒤 조건에 맞는 모델을 제안합니다." }
    ],
    relatedKeywords: [
      "양조장 연계 / Brewery Integration",
      "발효공장 / Fermentation Plant",
      "알파팜 코어 / AlphaFarm Core",
      "프리미엄 딸기 / Premium Strawberry",
      "디저트 연계 / Dessert Business"
    ],
    ctaTitle: "양조장·발효공장 연계, 보유 자원으로 검토해 드립니다.",
    ctaBody: "발효 CO₂·폐열·공간·판로 조건을 알려주시면 코어 연계 모델을 직접 검토해 회신드립니다.",
    lineupHref: "/alphafarm",
    lineupLabel: "알파팜 솔루션 보기"
  },
  {
    slug: "alphafarm-core-power-plant",
    title: "알파팜 코어 열병합·복합화력 발전소 연계 모델",
    metaTitle: "알파팜 코어 발전소(CHP·CCPP) 연계 모델 | 쎄슬프라이머스",
    description:
      "발전소의 포집·정제 CO₂·폐열·전력·유휴 부지를 프리미엄 딸기 생산과 연결하는 알파팜 코어 5 발전소 연계 실증 모델을 소개합니다.",
    keywords: ["열병합발전", "복합화력발전", "탄소활용", "폐열활용", "알파팜코어", "딸기수직농장"],
    date: "2026-06-28",
    category: "알파팜",
    readMin: 4,
    heroImage: "/media/series/series-6.webp",
    heroImageEn: "/media/series/series-6-en.webp",
    heroAlt: "알파팜 코어 열병합·복합화력 발전소 연계 모델 / AlphaFarm Core power plant model",
    heroContain: true,
    heroWidth: 1200,
    heroHeight: 676,
    lead:
      "발전소는 포집·정제 가능한 CO₂, 활용 가능한 폐열, 전력 인프라, 유휴 부지를 보유한 경우가 많습니다. 알파팜 코어 5 모델은 이 자원을 프리미엄 딸기 생산과 연결하는 발전소 연계 실증 모델입니다.",
    sections: [
      {
        h: "코어 5 기준 실증 모델",
        paras: [
          "코어 5 기준으로 연간 50톤 이상의 프리미엄 딸기 생산과 약 15억원 수준의 매출 잠재력을 검토할 수 있습니다. 중요한 점은 발전소 배기가스를 직접 사용하는 모델이 아니라는 것입니다. CO₂는 반드시 포집·정제·조절 과정을 거쳐 농업용 활용 가능성을 검토하며, 폐열도 온도·열량 조건을 별도로 확인합니다.",
          "대규모 탄소감축 설비가 아니라, 발전소 자원을 활용해 프리미엄 식품생산·식음료 연계·방문형 콘텐츠·자원순환 실증 가치를 만드는 현실적인 사업모델입니다."
        ]
      }
    ],
    faq: [
      { q: "발전소 배기가스를 직접 쓰나요?", a: "아니요. 포집·정제·조절된 CO₂의 농업용 활용 가능성을 기술적으로 검토하는 구조이며, 폐열도 온도·열량 조건을 별도로 확인합니다." }
    ],
    relatedKeywords: [
      "열병합발전 / CHP",
      "복합화력발전 / Combined Cycle Power Plant",
      "탄소 활용 / CO₂ Utilization",
      "폐열 활용 / Waste Heat Utilization",
      "알파팜 코어 / AlphaFarm Core"
    ],
    ctaTitle: "발전소 연계 모델, 자원 조건으로 검토해 드립니다.",
    ctaBody: "CO₂·폐열·전력·부지 조건을 알려주시면 발전소 연계 실증 모델을 직접 검토해 회신드립니다.",
    lineupHref: "/alphafarm",
    lineupLabel: "알파팜 솔루션 보기"
  },
  {
    slug: "alphafarm-core-petrochem-hydrogen",
    title: "알파팜 코어 석유화학·수소 생산기지 연계 모델",
    metaTitle: "알파팜 코어 석유화학·수소 생산기지 연계 모델 | 쎄슬프라이머스",
    description:
      "산업단지·수소 생산기지의 포집·정제 CO₂·폐열·전력·부지를 프리미엄 딸기 생산과 연결하는 알파팜 코어 3~10 전략형 자원활용 모델을 소개합니다.",
    keywords: ["석유화학", "수소생산", "탄소활용", "폐열활용", "알파팜코어", "식량안보"],
    date: "2026-06-28",
    category: "알파팜",
    readMin: 4,
    heroImage: "/media/series/series-7.webp",
    heroImageEn: "/media/series/series-7-en.webp",
    heroAlt: "알파팜 코어 석유화학·수소 생산기지 연계 모델 / AlphaFarm Core petrochemical and hydrogen model",
    heroContain: true,
    heroWidth: 1200,
    heroHeight: 676,
    lead:
      "석유화학단지와 수소 생산기지는 CO₂·폐열·전력 인프라·부지 등 다양한 산업 자원을 보유한 전략적 인프라입니다. 알파팜 코어 3~10 모델은 이 자원을 프리미엄 딸기 생산과 연결합니다.",
    sections: [
      {
        h: "산업단지 속 프리미엄 식품생산 쇼케이스",
        paras: [
          "코어 3~10 규모를 중심으로 검토할 수 있으며, 코어 10 기준으로 연간 100톤 이상의 프리미엄 딸기 생산과 약 30억원 수준의 매출 잠재력을 목표로 합니다.",
          "포집·정제·조절된 CO₂와 활용 가능한 폐열을 고부가 식품생산에 연결함으로써, 산업단지 내부 또는 인근에 탄소활용·식량안보·프리미엄 식품생산을 보여주는 가시적인 쇼케이스를 구축할 수 있습니다."
        ]
      }
    ],
    faq: [
      { q: "검토 시 무엇을 확인하나요?", a: "CO₂ 품질, 폐열 온도·열량, 전력 여유, 부지 조건, 안전·인허가, 운영 주체, 판매채널을 함께 확인한 뒤 적용 가능성을 진단합니다." }
    ],
    relatedKeywords: [
      "석유화학 연계 / Petrochemical Integration",
      "수소 생산기지 / Hydrogen Production",
      "탄소 활용 / CO₂ Utilization",
      "폐열 활용 / Waste Heat Utilization",
      "알파팜 코어 / AlphaFarm Core",
      "식량안보 / Food Security"
    ],
    ctaTitle: "석유화학·수소기지 연계, 전략적으로 검토해 드립니다.",
    ctaBody: "CO₂·폐열·전력·부지·인허가 조건을 알려주시면 코어 3~10 연계 모델을 직접 검토해 회신드립니다.",
    lineupHref: "/alphafarm",
    lineupLabel: "알파팜 솔루션 보기"
  },
  {
    slug: "what-is-strawberry-vertical-farm",
    title: "딸기 수직농장이란? 개념부터 원리까지",
    metaTitle: "딸기 수직농장이란 — 개념·원리·장점 총정리 | 쎄슬프라이머스",
    description:
      "딸기 수직농장의 개념과 작동 원리, 노지·비닐하우스와의 차이, 계절과 무관하게 연중 생산이 가능한 이유까지 한 번에 정리했습니다.",
    keywords: ["딸기 수직농장", "수직농장", "딸기 스마트팜", "딸기 실내재배", "딸기 수직재배", "연중 딸기 생산"],
    date: "2026-06-30",
    category: "알파팜",
    readMin: 5,
    heroImage: "/media/cases/case-suwon-urban-02.webp",
    heroAlt: "딸기 수직농장 재배실 / Strawberry vertical farm grow room",
    lead:
      "딸기 수직농장은 재배 선반을 여러 층으로 쌓아 좁은 면적에서 딸기를 키우는 실내 생산 방식입니다. 날씨·계절과 무관하게 1년 내내 균일한 딸기를 생산할 수 있어 프리미엄 시장에서 주목받고 있습니다. 개념과 원리를 정리했습니다.",
    sections: [
      {
        h: "딸기 수직농장이란",
        paras: [
          "딸기 수직농장은 실내 공간에 재배 랙(선반)을 수직으로 쌓아 고밀도로 딸기를 재배하는 시설입니다. 흙 대신 양액으로 뿌리에 영양을 공급하고, 빛은 LED로, 온도·습도·이산화탄소는 설비로 정밀하게 제어합니다. 한마디로 '딸기가 자라는 환경 전체를 사람이 설계하는' 재배 방식입니다."
        ]
      },
      {
        h: "어떻게 작동하나 — 환경을 제어한다",
        paras: ["딸기 수직농장의 핵심은 생육에 필요한 조건을 인위적으로 최적화한다는 점입니다."],
        bullets: [
          "빛: 딸기 생육에 맞춘 LED 광량·광질 제어",
          "온습도: 저온제습 공조로 균일한 기후 유지",
          "CO₂·양액: 생육 단계에 맞춰 정량 공급",
          "층 구조: 좁은 면적에서 여러 층 재배로 생산성↑"
        ]
      },
      {
        h: "노지·비닐하우스와 무엇이 다른가",
        paras: [
          "노지와 비닐하우스 재배는 날씨·일조량·병해충에 크게 좌우되고, 딸기 제철도 겨울~봄에 집중됩니다. 반면 수직농장은 외부 환경과 분리된 실내에서 조건을 제어하므로, 계절과 무관하게 균일한 품질을 연중 생산할 수 있습니다."
        ]
      },
      {
        h: "왜 주목받나",
        paras: ["딸기 수직농장이 프리미엄 사업으로 주목받는 이유는 명확합니다."],
        bullets: [
          "연중 생산 → 비수기 공급으로 가격 안정·협상력",
          "균일한 당도·크기 → 프리미엄·납품 시장 적합",
          "도심 근접 생산 → 신선도·물류 이점",
          "데이터 기반 운영 → 품질·생산성 관리 용이"
        ]
      }
    ],
    faq: [
      { q: "수직농장 딸기는 맛이 떨어지지 않나요?", a: "환경을 정밀 제어하기 때문에 당도와 품질을 일정하게 맞출 수 있어, 오히려 균일한 프리미엄 품질 관리에 유리합니다. 품종과 양액·생육 관리가 맛을 좌우합니다." },
      { q: "전기·운영비가 많이 들지 않나요?", a: "LED·공조 전력이 드는 것은 맞지만, 저온제습·에너지 절감 설계와 운영 최적화로 비용을 관리합니다. 규모·조건에 따라 달라 현장 진단이 필요합니다." },
      { q: "누구나 시작할 수 있나요?", a: "재배 경험이 없어도 시작할 수 있도록 재배·운영을 패키지로 지원하는 사업 모델(알파팜)이 있습니다. 공간·전력·판로 조건을 함께 검토해 설계합니다." }
    ],
    relatedKeywords: [
      "딸기 수직농장 / Strawberry Vertical Farm",
      "수직농장 / Vertical Farm",
      "딸기 스마트팜 / Strawberry Smart Farm",
      "연중 딸기 생산 / Year-Round Strawberry Production",
      "딸기 실내재배 / Indoor Strawberry Cultivation"
    ],
    ctaTitle: "딸기 수직농장, 우리 조건에서 가능한지 검토해 드립니다.",
    ctaBody: "보유 공간·전력·목표 생산량을 알려주시면 알파팜 담당자가 도입 가능성을 직접 검토해 회신드립니다.",
    lineupHref: "/alphafarm",
    lineupLabel: "알파팜 솔루션 보기",
    categoryEn: "AlphaFarm",
    en: {
      title: "What Is a Strawberry Vertical Farm? Concept and Principles",
      metaTitle: "What Is a Strawberry Vertical Farm — Concept, Principles, Benefits | CESeL Primus",
      description:
        "The concept and working principles of strawberry vertical farming, how it differs from open-field and greenhouse cultivation, and why year-round production is possible.",
      lead:
        "A strawberry vertical farm grows strawberries indoors on stacked cultivation racks, producing a uniform crop year-round regardless of weather or season. Here is the concept and how it works.",
      sections: [
        {
          h: "What is a strawberry vertical farm",
          paras: [
            "A strawberry vertical farm stacks cultivation racks vertically to grow strawberries at high density indoors. Nutrients reach the roots through a nutrient solution instead of soil, light comes from LEDs, and temperature, humidity, and CO₂ are precisely controlled by equipment. In short, people design the entire growing environment."
          ]
        },
        {
          h: "How it works — controlling the environment",
          paras: ["The core of a strawberry vertical farm is optimizing every condition strawberries need to grow."],
          bullets: [
            "Light: LED intensity and spectrum tuned to strawberry growth",
            "Temperature & humidity: a uniform climate via low-temperature dehumidification",
            "CO₂ & nutrients: supplied in the right amount for each growth stage",
            "Stacked structure: multiple layers on a small footprint for higher productivity"
          ]
        },
        {
          h: "How it differs from open-field and greenhouse farming",
          paras: [
            "Open-field and greenhouse cultivation depend heavily on weather, sunlight, and pests, and strawberry season concentrates in winter and spring. A vertical farm controls conditions indoors, isolated from the outside, so it produces a uniform crop year-round regardless of season."
          ]
        },
        {
          h: "Why it draws attention",
          paras: ["Strawberry vertical farms draw attention as a premium business for clear reasons."],
          bullets: [
            "Year-round production → off-season supply and pricing power",
            "Uniform sweetness and size → suited to premium and wholesale markets",
            "Production near cities → freshness and logistics advantages",
            "Data-driven operation → easier quality and productivity management"
          ]
        }
      ],
      faq: [
        { q: "Do vertical-farm strawberries taste worse?", a: "Because the environment is precisely controlled, sweetness and quality can be kept consistent — an advantage for uniform premium quality. Cultivar and nutrient/growth management drive the taste." },
        { q: "Don't electricity and operating costs run high?", a: "LED and HVAC power are real costs, but low-temperature dehumidification, energy-saving design, and operational optimization keep them managed. It varies by scale and conditions, so an on-site review is needed." },
        { q: "Can anyone start one?", a: "There is a business model (AlphaFarm) that supports cultivation and operations as a package, so you can start even without growing experience. Space, power, and sales-channel conditions are reviewed together." }
      ],
      ctaTitle: "We'll assess whether a strawberry vertical farm fits your conditions.",
      ctaBody: "Tell us your available space, power, and target output, and the AlphaFarm team will review feasibility and reply directly.",
      lineupLabel: "Explore the AlphaFarm solution"
    }
  },
  {
    slug: "strawberry-vertical-farm-startup",
    title: "딸기 수직농장 창업, 무엇부터 준비해야 하나",
    metaTitle: "딸기 수직농장 창업 가이드 — 준비사항·시작 순서 | 쎄슬프라이머스",
    description:
      "딸기 수직농장 창업을 고민한다면 꼭 확인해야 할 준비사항 — 공간·전력·투자·재배기술·판로와, 실패를 줄이는 시작 순서를 정리했습니다.",
    keywords: ["딸기 수직농장 창업", "수직농장 창업", "딸기 농장 창업", "스마트팜 창업", "딸기 사업"],
    date: "2026-06-29",
    category: "알파팜",
    readMin: 5,
    heroImage: "/media/cases/case-naju-growroom-01.webp",
    heroAlt: "딸기 수직농장 창업 준비 / Starting a strawberry vertical farm",
    lead:
      "딸기 수직농장 창업은 설비만 들이면 되는 것이 아니라, 공간·전력·재배기술·판로가 함께 맞물려야 합니다. 시작 전에 꼭 확인할 것과, 실패를 줄이는 순서를 정리했습니다.",
    sections: [
      {
        h: "창업 전 반드시 확인할 5가지",
        paras: ["아래 다섯 가지가 준비되면 딸기 수직농장 창업의 큰 그림이 잡힙니다."],
        bullets: [
          "공간: 확보 가능한 면적과 층고",
          "전력·설비: 전력 용량과 냉방·제습 조건",
          "투자 여력: 초기 투자와 단계적 확장 계획",
          "재배기술: 품종·양액·생육 관리 역량(또는 지원)",
          "판로: 프리미엄 가격을 받을 수 있는 판매 채널"
        ]
      },
      {
        h: "실패를 줄이는 시작 순서",
        paras: [
          "규모부터 크게 시작하면 리스크가 큽니다. 작게 검증하고 데이터를 확보한 뒤 확장하는 것이 안전합니다.",
          "예컨대 컨테이너형 소형 모델로 생산·운영을 검증하고, 수율과 품질이 확인되면 모듈을 반복 증설해 확장하는 방식입니다."
        ]
      },
      {
        h: "혼자 다 해야 할까 — 패키지형 접근",
        paras: [
          "재배·운영·판매를 모두 혼자 준비하려면 진입장벽이 높습니다. 알파팜은 재배·운영·판매를 패키지로 제공하는 연중 딸기 사업솔루션으로, 재배 경험이 없어도 시스템과 함께 시작할 수 있게 설계했습니다."
        ]
      }
    ],
    faq: [
      { q: "재배 경험이 전혀 없어도 창업할 수 있나요?", a: "가능합니다. 재배·운영을 패키지로 지원받는 모델(알파팜)이면 운영 노하우와 시스템을 함께 받아 시작할 수 있습니다. 운영 교육과 프로토콜도 지원합니다." },
      { q: "초기 투자와 수익은 어느 정도인가요?", a: "공간 규모·목표 생산량·판로·지역 조건에 따라 크게 달라져 일률적으로 말씀드리기 어렵습니다. 수익을 보장하기보다, 현장 진단 후 조건에 맞는 사업 모델과 단계적 확장안을 제안드립니다." },
      { q: "작게 시작해서 키울 수 있나요?", a: "네. 컨테이너형 검증 모델로 작게 시작해 데이터를 확보한 뒤, 모듈을 반복 증설해 확장하는 방식을 권장합니다." }
    ],
    relatedKeywords: [
      "딸기 수직농장 창업 / Strawberry Vertical Farm Startup",
      "수직농장 창업 / Vertical Farm Startup",
      "딸기 농장 창업 / Strawberry Farm Startup",
      "스마트팜 창업 / Smart Farm Startup",
      "연중 딸기 사업솔루션 / Year-Round Strawberry Business Solution"
    ],
    ctaTitle: "딸기 수직농장 창업, 조건에 맞게 설계해 드립니다.",
    ctaBody: "보유 공간·투자 여력·판로를 알려주시면 알파팜 담당자가 창업 방향을 직접 검토해 회신드립니다.",
    lineupHref: "/alphafarm",
    lineupLabel: "알파팜 솔루션 보기",
    categoryEn: "AlphaFarm",
    en: {
      title: "Starting a Strawberry Vertical Farm — What to Prepare First",
      metaTitle: "Strawberry Vertical Farm Startup Guide — Preparation & Steps | CESeL Primus",
      description:
        "Key things to check before starting a strawberry vertical farm — space, power, investment, cultivation know-how, and sales channels — plus a lower-risk starting sequence.",
      lead:
        "Starting a strawberry vertical farm isn't just about installing equipment — space, power, cultivation know-how, and sales channels all have to come together. Here's what to check first and a sequence that lowers risk.",
      sections: [
        {
          h: "5 things to check before you start",
          paras: ["Once these five are in place, the big picture of a strawberry vertical farm startup comes together."],
          bullets: [
            "Space: available floor area and ceiling height",
            "Power & equipment: power capacity and cooling/dehumidification conditions",
            "Investment: initial budget and a phased expansion plan",
            "Cultivation know-how: cultivar, nutrient, and growth management (or support)",
            "Sales channels: outlets that can command premium prices"
          ]
        },
        {
          h: "A sequence that lowers risk",
          paras: [
            "Starting large carries big risk. It's safer to validate small, secure data, and then expand.",
            "For example, validate production and operations with a compact container-type model, and once yield and quality are confirmed, scale by repeatedly adding modules."
          ]
        },
        {
          h: "Do you have to do it all yourself — a packaged approach",
          paras: [
            "Preparing cultivation, operations, and sales entirely on your own is a high barrier. AlphaFarm is a year-round strawberry business solution that provides cultivation, operations, and sales as a package, designed so you can start even without growing experience."
          ]
        }
      ],
      faq: [
        { q: "Can I start with no cultivation experience at all?", a: "Yes. With a packaged model (AlphaFarm), you receive operating know-how and systems together, so you can start without experience. Operating training and protocols are also provided." },
        { q: "How much is the initial investment and return?", a: "It varies widely by space, target output, sales channels, and region, so it can't be stated uniformly. Rather than guaranteeing returns, we assess on site and propose a fitting model and phased expansion plan." },
        { q: "Can I start small and grow?", a: "Yes. We recommend starting small with a container-type validation model, securing data, and then scaling by repeatedly adding modules." }
      ],
      ctaTitle: "We'll design your strawberry vertical farm startup to fit your conditions.",
      ctaBody: "Tell us your space, investment capacity, and sales channels, and the AlphaFarm team will review your startup direction and reply directly.",
      lineupLabel: "Explore the AlphaFarm solution"
    }
  }
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
