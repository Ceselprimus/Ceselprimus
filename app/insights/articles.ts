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
  publishAt?: string;
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
    slug: "alphafarm-dsrp-year-round-production",
    title: "DSRP란? 다단 육묘랙과 개화묘 순환 교체로 만드는 연중 딸기 생산",
    metaTitle: "DSRP 연중 딸기 생산 프로토콜 — 다단 육묘랙·개화묘 순환 교체 | 쎄슬프라이머스",
    description:
      "DSRP(Dynamic Seedling Reserved Protocol)는 다단 육묘랙에서 교체용 개화묘를 지속 준비하고 분기별로 순환 교체해, 장기 휴지기 없이 연중 딸기를 생산하는 알파팜의 생산기술입니다.",
    keywords: ["DSRP", "연중 딸기 생산", "다단 육묘랙", "개화묘 순환 교체", "딸기수직농장", "알파팜 생산기술"],
    date: "2026-07-16",
    category: "알파팜",
    readMin: 4,
    heroImage: "/media/concepts/alphacore-hero.webp",
    heroImageEn: "/media/concepts/alphacore-hero-en.webp",
    heroContain: true,
    heroWidth: 1672,
    heroHeight: 941,
    heroAlt: "DSRP 다단 육묘랙 개화묘 순환 교체 연중 딸기 생산 / AlphaFarm DSRP year-round strawberry production",
    lead:
      "DSRP(Dynamic Seedling Reserved Protocol)는 다단 육묘랙에서 교체용 개화묘를 지속적으로 준비하고, 생산 중인 모종을 분기별로 순환 교체하는 AlphaFarm의 연중 생산 프로토콜입니다.",
    sections: [
      {
        h: "DSRP란 무엇인가",
        paras: [
          "DSRP(Dynamic Seedling Reserved Protocol)는 다단 육묘랙에서 교체용 개화묘를 지속적으로 준비하고, 생산 중인 모종을 분기별로 순환 교체하는 AlphaFarm의 연중 생산 프로토콜입니다.",
          "전체 재배공간의 모종을 한 번에 철거하고 다시 정식하지 않고, 준비된 개화묘를 분기별로 단계적으로 투입합니다. 이를 통해 모종 노화에 따른 생산성 저하를 줄이고, 전체 모종 교체로 발생하는 장기 휴지기 없이 연중 지속적인 생산과 공급을 유지합니다."
        ]
      },
      {
        h: "DSRP 핵심 구성",
        paras: ["다단 육묘랙에서 교체용 개화묘를 준비하고, 생산 라인과 병행 운영하여 분기별로 순환 교체합니다."],
        bullets: [
          "다단 육묘랙 기반 개화묘 재배",
          "생산용 모종과 교체용 개화묘의 동시 운영",
          "분기별 모종 순환 교체",
          "전체 재배실 일괄 교체 휴지기 방지",
          "연중 생산량과 품질 안정화"
        ]
      },
      {
        h: "고밀도 정밀 재배랙과의 결합",
        paras: [
          "DSRP는 알파팜의 고밀도 정밀 재배랙 위에서 작동합니다. 정량관수, 광량 조절, 재배층 내부 에어덕트와 슬릿형 화분 트레이로 균일한 재배환경을 만들고, 그 위에서 개화묘를 분기별로 순환 교체해 프리미엄 딸기의 공간 생산성과 생산 연속성을 함께 높입니다."
        ]
      }
    ],
    faq: [
      {
        q: "DSRP란 무엇인가요?",
        a: "DSRP(Dynamic Seedling Reserved Protocol)는 다단 육묘랙에서 교체용 개화묘를 지속적으로 준비하고, 생산 중인 모종을 분기별로 순환 교체하는 AlphaFarm의 연중 생산 프로토콜입니다. 전체 모종을 한 번에 교체하지 않아 장기 생산중단을 방지하고, 모종 노화에 따른 생산성 저하를 줄입니다."
      },
      {
        q: "왜 전체 모종을 한 번에 교체하지 않나요?",
        a: "전체 재배공간의 모종을 한 번에 철거하고 다시 정식하면 장기 휴지기가 발생합니다. DSRP는 준비된 개화묘를 분기별로 단계적으로 투입해 이 휴지기 없이 연중 지속적인 생산과 공급을 유지합니다."
      },
      {
        q: "DSRP는 어떤 재배 시스템에서 작동하나요?",
        a: "DSRP는 알파팜의 고밀도 정밀 재배랙과 다단 육묘랙을 기반으로 작동합니다. 정량관수·광량 조절·에어덕트·슬릿형 화분 트레이로 균일한 재배환경을 만든 뒤, 개화묘를 분기별로 순환 교체합니다."
      }
    ],
    relatedKeywords: [
      "DSRP / Dynamic Seedling Reserved Protocol",
      "연중 딸기 생산 / Year-Round Strawberry Production",
      "다단 육묘랙 / Multi-Layer Nursery Rack",
      "개화묘 / Flowering Seedling",
      "고밀도 재배랙 / High-Density Rack",
      "딸기수직농장 / Strawberry Vertical Farm"
    ],
    ctaTitle: "연중 딸기 생산, DSRP로 설계해 드립니다.",
    ctaBody: "재배 공간과 목표 생산량을 알려주시면 DSRP 기반 연중 생산·개화묘 순환 운영 방식을 직접 검토해 회신드립니다.",
    lineupHref: "/alphafarm",
    lineupLabel: "알파팜 솔루션 보기",
    categoryEn: "AlphaFarm",
    en: {
      title: "What Is DSRP? Year-Round Strawberry Production through Multi-Layer Flowering-Seedling Nurseries and Rotational Plant Replacement",
      metaTitle: "DSRP Year-Round Strawberry Production Protocol — Multi-Layer Nursery Racks | CESeL Primus",
      description:
        "DSRP (Dynamic Seedling Reserved Protocol) continuously prepares replacement flowering seedlings in multi-layer nursery racks and rotates them quarterly to sustain year-round strawberry production without extended downtime.",
      lead:
        "DSRP, the Dynamic Seedling Reserved Protocol, is AlphaFarm's year-round production protocol based on continuous flowering-seedling preparation in multi-layer nursery racks and quarterly rotational plant replacement.",
      sections: [
        {
          h: "What is DSRP?",
          paras: [
            "DSRP, the Dynamic Seedling Reserved Protocol, is AlphaFarm's year-round production protocol based on continuous flowering-seedling preparation in multi-layer nursery racks and quarterly rotational plant replacement.",
            "Instead of removing and replanting the entire crop at once, prepared flowering seedlings are introduced progressively on a quarterly basis. This reduces productivity decline caused by plant aging and supports continuous year-round production without the extended downtime associated with full crop replacement."
          ]
        },
        {
          h: "Core components of DSRP",
          paras: ["Replacement flowering seedlings are prepared in multi-layer nursery racks and rotated into the production line on a quarterly basis."],
          bullets: [
            "Flowering-seedling cultivation in multi-layer nursery racks",
            "Simultaneous operation of production plants and replacement seedlings",
            "Quarterly rotational plant replacement",
            "Prevention of extended full-room replacement downtime",
            "More stable year-round production and quality"
          ]
        },
        {
          h: "Built on high-density precision racks",
          paras: [
            "DSRP runs on top of AlphaFarm's high-density precision cultivation racks. Precision irrigation, adjustable lighting, internal air ducts, and slit-type pot trays create uniform growing conditions, and flowering seedlings are then rotated quarterly to raise both space productivity and production continuity for premium strawberries."
          ]
        }
      ],
      faq: [
        {
          q: "What is DSRP?",
          a: "DSRP, the Dynamic Seedling Reserved Protocol, continuously prepares replacement flowering seedlings in multi-layer nursery racks and replaces production plants on a quarterly rotational basis. It avoids extended production downtime from full crop replacement and reduces productivity decline caused by plant aging."
        },
        {
          q: "Why not replace all plants at once?",
          a: "Removing and replanting the entire crop at once creates extended downtime. DSRP introduces prepared flowering seedlings progressively on a quarterly basis, sustaining continuous year-round production and supply without that downtime."
        },
        {
          q: "What cultivation system does DSRP run on?",
          a: "DSRP runs on AlphaFarm's high-density precision racks and multi-layer nursery racks. Precision irrigation, adjustable lighting, air ducts, and slit-type pot trays create uniform growing conditions before flowering seedlings are rotated quarterly."
        }
      ],
      ctaTitle: "We'll design year-round strawberry production with DSRP.",
      ctaBody: "Tell us your cultivation space and target output, and we'll review a DSRP-based year-round production and flowering-seedling rotation plan and reply directly.",
      lineupLabel: "Explore the AlphaFarm solution"
    }
  },
  {
    slug: "alphafarm-malaysia-palmoil-biogas",
    title: "말레이시아 알파팜 팜오일 바이오가스 발전 연계 수출 모델",
    metaTitle: "말레이시아 딸기수직농장 — 팜오일 바이오가스 연계 알파팜 수출 모델 | 쎄슬프라이머스",
    description:
      "말레이시아 팜오일 폐수(POME)를 바이오가스 발전으로 전환해 전력·정제 Bio-CO₂·폐열을 프리미엄 딸기수직농장 알파팜 Core 3와 연계하는 순환 인프라형 수출 모델. 태양광 발전 연계 대비 통합 사업가치를 비교했습니다.",
    keywords: ["말레이시아 딸기수직농장", "알파팜 수출", "팜오일 바이오가스", "POME", "Bio-CO2", "순환 인프라 알파팜", "태양광 발전 비교", "동남아 스마트팜"],
    date: "2026-07-15",
    category: "알파팜",
    readMin: 5,
    heroImage: "/media/series/series-12-2.webp",
    heroImageEn: "/media/series/series-12-2-en.webp",
    heroContain: true,
    heroWidth: 1672,
    heroHeight: 941,
    heroAlt: "말레이시아 알파팜 팜오일 바이오가스 발전 연계 수출 모델 인포그래픽 — 태양광 발전 대비 Core 3 비교 / Malaysia AlphaFarm palm oil biogas power linkage export model vs solar PV infographic",
    lead:
      "말레이시아 알파팜 수출 전략은 단순한 농장 수출이 아닙니다. 쎄슬프라이머스는 세계적인 팜오일 생산국인 말레이시아의 산업 구조에 맞춰, 팜오일 바이오가스 발전과 프리미엄 딸기수직농장을 연계하는 순환 인프라형 수출 모델을 검토하고 있습니다.",
    sections: [
      {
        h: "팜오일 폐수(POME)를 자원으로",
        paras: [
          "말레이시아는 세계적인 팜오일 생산국입니다. 팜오일 공장에서 발생하는 POME(팜오일 폐수)는 처리 부담이 크지만, 동시에 바이오가스 발전의 중요한 자원이 될 수 있습니다.",
          "쎄슬프라이머스는 이 자원을 전기, 열, 정제 Bio-CO₂로 전환하고, 이를 프리미엄 딸기수직농장 알파팜 Core 3와 연계하는 모델을 제안합니다."
        ],
        bullets: ["POME(팜오일 폐수) → 바이오가스 발전", "전력 · 폐열 · 정제 Bio-CO₂ 회수", "알파팜 Core 3 재배 자원으로 연계"]
      },
      {
        h: "태양광 발전과 무엇이 다른가",
        paras: [
          "태양광 발전은 전력비 절감에는 장점이 있지만, 알파팜 운영에 필요한 CO₂, 열, 폐기물 처리, 메탄저감 가치까지 제공하지는 못합니다.",
          "반면 팜오일 바이오가스 발전 연계 모델은 전력, 정제 Bio-CO₂, 폐열, POME 처리 부담 완화, 메탄저감, 프리미엄 딸기 생산을 동시에 제공합니다."
        ],
        bullets: ["전력 생산", "정제 Bio-CO₂ 공급", "폐열 활용", "POME 처리 부담 완화", "메탄저감", "프리미엄 딸기 생산"]
      },
      {
        h: "Core 3 기준 통합 사업가치 비교",
        paras: [
          "아래 지수는 알파팜 Core 3(연 약 30톤 목표)를 기준으로 딸기수직농장 단독 대비 상대 비교한 개념 수치입니다. 농장·전기판매 기준은 두 모델이 동일하지만, 태양광은 에너지 CAPEX가 크고 Bio-CO₂·폐열·POME 처리·메탄저감 가치를 제공하지 못합니다.",
          "※ 본 자료는 이해를 돕기 위한 개념 자료이며, 실제 사업성은 부지 조건, 전력단가, 바이오가스 품질, CO₂ 정제 조건, 운영 조건 및 경제성 검토 결과에 따라 달라질 수 있습니다."
        ],
        bullets: [
          "농장 · 전기판매 기준 — 두 모델 동일(지수 100)",
          "에너지 CAPEX — 태양광이 더 큼(지수 250)",
          "Bio-CO₂ · 폐열 · POME 처리 · 메탄저감 — 바이오가스만 제공(태양광 0)",
          "종합 EBITDA · 사업가치 지수 — 바이오가스 100 vs 태양광 80"
        ]
      },
      {
        h: "말레이시아·동남아 순환 인프라형 수출 모델",
        paras: [
          "즉, 이는 단순한 스마트팜이 아니라 말레이시아 팜오일 산업과 연결되는 순환 인프라형 알파팜 수출 모델입니다. 쎄슬프라이머스는 AlphaFarm Johor를 기반으로, 말레이시아 및 동남아시아 시장에 적합한 에너지 연계형 딸기수직농장 모델을 단계적으로 추진하겠습니다."
        ],
        bullets: ["팜오일 산업 연계 순환 인프라", "AlphaFarm Johor 거점", "에너지 연계형 딸기수직농장", "동남아 단계적 확장"]
      }
    ],
    faq: [
      { q: "POME가 무엇인가요?", a: "POME(Palm Oil Mill Effluent)는 팜오일 공장에서 발생하는 폐수입니다. 처리 부담이 큰 부산물이지만, 혐기 소화를 통해 바이오가스로 전환하면 전력·열·정제 Bio-CO₂ 자원이 됩니다. 이 모델은 POME 처리 부담을 완화하면서 알파팜 재배 자원으로 연결합니다." },
      { q: "태양광 대신 바이오가스를 쓰는 이유는?", a: "태양광은 전력 중심의 재생에너지로 전력비 절감에 유리합니다. 다만 알파팜은 전력 외에도 CO₂, 폐열, 폐기물 처리, 메탄저감이 함께 필요합니다. 팜오일 바이오가스 발전은 이 요소들을 하나의 순환 구조로 연결해 통합 사업가치를 높입니다." },
      { q: "비교 지수는 확정된 수익성인가요?", a: "아니요. 본 자료의 지수는 이해를 돕기 위한 개념 비교입니다. 실제 사업성은 부지 조건, 전력단가, 바이오가스 품질, CO₂ 정제 조건, 운영 조건 및 경제성 검토 결과에 따라 달라집니다." }
    ],
    relatedKeywords: [
      "말레이시아 알파팜 / AlphaFarm Malaysia",
      "팜오일 바이오가스 / Palm Oil Biogas",
      "POME 처리 / POME Treatment",
      "정제 Bio-CO₂ / Conditioned Bio-CO₂",
      "순환 인프라 / Circular Infrastructure",
      "딸기수직농장 수출 / Vertical Farm Export"
    ],
    ctaTitle: "말레이시아·동남아 진출, 에너지 연계 모델로 검토해 드립니다.",
    ctaBody: "부지·전력·바이오가스 조건을 알려주시면 팜오일 바이오가스 연계 알파팜 수출 모델을 현지 기준으로 검토해 회신드립니다.",
    lineupHref: "/alphafarm",
    lineupLabel: "알파팜 솔루션 보기",
    categoryEn: "AlphaFarm",
    en: {
      title: "Malaysia AlphaFarm Export Model — Palm Oil Biogas Power Linkage",
      metaTitle: "Malaysia Strawberry Vertical Farm — Palm Oil Biogas-Linked AlphaFarm Export Model | CESeL Primus",
      description:
        "A circular-infrastructure export model converting Malaysian palm oil mill effluent (POME) into biogas power — electricity, conditioned Bio-CO₂, and waste heat — linked to the premium AlphaFarm Core 3 strawberry vertical farm, compared against a solar PV-linked model.",
      lead:
        "Exporting AlphaFarm to Malaysia is not simply exporting a farm. As one of the world's largest palm oil producers, Malaysia's industrial structure suits a circular-infrastructure model that links palm oil biogas power with a premium strawberry vertical farm.",
      sections: [
        {
          h: "Turning palm oil mill effluent (POME) into a resource",
          paras: [
            "Malaysia is one of the world's largest palm oil producers. POME — palm oil mill effluent — is a heavy treatment burden, yet it can also be a valuable resource for biogas power.",
            "CESeL Primus proposes converting this resource into electricity, heat, and conditioned Bio-CO₂, then linking it to the premium AlphaFarm Core 3 strawberry vertical farm."
          ],
          bullets: ["POME (palm oil mill effluent) → biogas power", "Recovers electricity, waste heat, and conditioned Bio-CO₂", "Linked to AlphaFarm Core 3 as a cultivation resource"]
        },
        {
          h: "How it differs from solar PV",
          paras: [
            "Solar PV is a strong renewable power option, but it is mainly electricity-focused — it does not provide the CO₂, heat, waste treatment, or methane-reduction value that AlphaFarm operations need.",
            "A palm oil biogas-linked model, by contrast, delivers electricity, conditioned Bio-CO₂, waste heat, POME treatment support, methane reduction, and premium strawberry production together."
          ],
          bullets: ["Power generation", "Conditioned Bio-CO₂ supply", "Waste heat utilization", "POME treatment support", "Methane reduction", "Premium strawberry production"]
        },
        {
          h: "Integrated business value — Core 3 comparison",
          paras: [
            "The figures below are conceptual indices comparing each model against a stand-alone strawberry vertical farm, based on AlphaFarm Core 3 (targeting ~30 t/year). Farm and power-sales bases are identical for both models, but solar PV carries higher energy CAPEX and provides none of the Bio-CO₂, waste-heat, POME-treatment, or methane-reduction value.",
            "This material is a concept slide for discussion only. Actual performance and business results may vary depending on site conditions, energy cost, biogas quality, CO₂ conditioning, technical design, and economic feasibility review."
          ],
          bullets: [
            "Farm and power-sales basis — identical for both (index 100)",
            "Energy CAPEX — higher for solar PV (index 250)",
            "Bio-CO₂ · waste heat · POME treatment · methane reduction — biogas only (solar 0)",
            "Integrated EBITDA / business-value index — biogas 100 vs solar PV 80"
          ]
        },
        {
          h: "A circular-infrastructure export model for Malaysia & Southeast Asia",
          paras: [
            "In short, this is not simply a smart farm but a circular-infrastructure AlphaFarm export model connected to Malaysia's palm oil industry. Building on AlphaFarm Johor, CESeL Primus will advance an energy-linked strawberry vertical-farm model suited to Malaysia and Southeast Asia, step by step."
          ],
          bullets: ["Circular infrastructure tied to the palm oil industry", "AlphaFarm Johor as the base", "Energy-linked strawberry vertical farm", "Phased Southeast Asia expansion"]
        }
      ],
      faq: [
        { q: "What is POME?", a: "POME (Palm Oil Mill Effluent) is wastewater from palm oil mills. It is a heavy-burden by-product, but through anaerobic digestion it converts into biogas — a source of electricity, heat, and conditioned Bio-CO₂. This model eases the POME treatment burden while channeling it into AlphaFarm cultivation resources." },
        { q: "Why biogas instead of solar PV?", a: "Solar PV is an electricity-focused renewable that helps cut power costs. But AlphaFarm also needs CO₂, waste heat, waste treatment, and methane reduction. Palm oil biogas power connects these into a single circular structure, raising integrated business value." },
        { q: "Are the comparison indices confirmed returns?", a: "No. The indices here are a conceptual comparison for understanding. Actual business results depend on site conditions, energy cost, biogas quality, CO₂ conditioning, technical design, and economic feasibility review." }
      ],
      ctaTitle: "We'll review your Malaysia / Southeast Asia entry as an energy-linked model.",
      ctaBody: "Tell us your site, power, and biogas conditions, and we'll review a palm oil biogas-linked AlphaFarm export model for your location and reply directly.",
      lineupLabel: "Explore the AlphaFarm solution"
    }
  },
  {
    slug: "alphaenergy-ais-power-saving",
    title: "딸기수직농장이 만든 물로 냉방 전력을 줄이는 법 — 알파에너지-AIS",
    metaTitle: "알파에너지-AIS — 딸기수직농장 회수수로 냉방 전력절감 | 쎄슬프라이머스",
    description:
      "알파팜은 저온제습으로 회수한 저TDS 응축수를 AlphaEnergy-AIS™로 순환시켜 실외기 인입공기를 프리쿨링합니다. 물의 증발잠열로 응축부하를 낮춰 딸기수직농장의 냉방 전력을 줄이는 순환형 인프라 기술을 정리했습니다.",
    keywords: ["알파에너지", "AlphaEnergy-AIS", "딸기수직농장 전력절감", "실외기 프리쿨링", "증발잠열 냉각", "응축수 회수", "저TDS 응축수", "냉방 전력절감"],
    date: "2026-07-10",
    category: "알파팜",
    readMin: 4,
    heroImage: "/media/series/series-12.webp",
    heroImageEn: "/media/series/series-12-en.webp",
    heroContain: true,
    heroWidth: 1672,
    heroHeight: 941,
    heroAlt: "딸기수직농장이 만든 물로 냉방 전력을 줄이는 알파에너지-AIS 인포그래픽 — 회수수 증발잠열 실외기 프리쿨링 / AlphaEnergy-AIS power saving using AlphaFarm recovered water infographic",
    lead:
      "알파팜은 저온제습 과정에서 고순도에 가까운 저TDS 응축수를 회수합니다. 이 물은 농장 안에서 재사용되는 데 그치지 않고, AlphaEnergy-AIS™를 통해 냉방 전력을 줄이는 에너지 절감 자원으로 활용됩니다.",
    sections: [
      {
        h: "알파팜은 물을 생산합니다",
        paras: [
          "알파팜은 저온제습 과정에서 고순도에 가까운 저TDS 응축수를 회수합니다. 이 회수수는 단순히 농장 안에서 재사용되는 물에 그치지 않고, 냉방 시스템의 전력을 줄이는 에너지 자원으로 다시 활용될 수 있습니다."
        ],
        bullets: ["저온제습 과정에서 응축수 회수", "고순도에 가까운 저TDS 수질", "농장 내 재사용을 넘어 에너지 자원으로 활용"]
      },
      {
        h: "AlphaEnergy-AIS™의 작동 원리",
        paras: [
          "AlphaEnergy-AIS™는 알파팜에서 생산된 회수수를 모듈 내부에 순환시키고, 물의 증발잠열을 활용해 실외기로 들어가는 인입공기의 온도를 낮춥니다.",
          "실외기 인입공기 온도가 낮아지면 응축부하가 완화되고, 압축기 운전 부담이 줄어듭니다. 그 결과 냉방·저온제습 시스템의 전력소비 절감과 운전 안정화에 기여할 수 있습니다."
        ],
        bullets: ["회수수를 모듈 내부에 순환", "증발잠열로 실외기 인입공기 프리쿨링", "응축부하 완화 · 압축기 운전 부담 감소", "냉방·저온제습 전력소비 절감 · 운전 안정화"]
      },
      {
        h: "기대 효과",
        paras: [
          "아래 수치는 표준 조건을 가정한 목표치로, 실제 효과는 외기 온도·습도·풍량·설치 조건 및 물 관리 상태에 따라 달라질 수 있습니다."
        ],
        bullets: [
          "실외기 인입공기 온도 최대 5℃ 저감 (목표)",
          "피크 전력부하 최대 12% 완화 (목표)",
          "일평균 전력소비 최대 7% 절감 (목표)",
          "고압트립 리스크 저감 및 운전 안정성 향상"
        ]
      },
      {
        h: "물과 에너지를 잇는 순환형 인프라",
        paras: [
          "알파팜은 물을 생산하고, 그 물은 다시 전력 절감 자원으로 활용됩니다. 식품 생산, 물 회수, 냉방 효율 개선을 하나로 연결하는 쎄슬프라이머스의 순환형 인프라 솔루션입니다."
        ],
        bullets: ["식품 생산", "물 회수", "냉방 효율 개선", "순환형 인프라"]
      }
    ],
    faq: [
      { q: "AlphaEnergy-AIS는 별도의 물을 공급해야 하나요?", a: "아니요. 알파팜이 저온제습 과정에서 스스로 회수한 저TDS 응축수를 순환 이용합니다. 외부 급수 없이 농장이 생산한 물을 냉방 전력 절감 자원으로 재활용하는 구조입니다." },
      { q: "전력은 실제로 얼마나 줄어드나요?", a: "표준 조건 기준으로 일평균 전력소비 최대 7%, 피크 전력부하 최대 12% 완화를 목표로 합니다. 다만 실제 절감폭은 외기 온도·습도·풍량·설치 조건·물 관리 상태에 따라 달라지므로, 현장 조건을 반영해 별도로 검토합니다." },
      { q: "어떤 원리로 전력을 줄이나요?", a: "회수수의 증발잠열로 실외기 인입공기를 미리 식혀(프리쿨링) 응축부하를 낮춥니다. 압축기 운전 부담이 줄어 냉방·저온제습 전력소비가 감소하고, 고압트립 리스크도 낮아져 운전이 안정화됩니다." }
    ],
    relatedKeywords: [
      "회수수 활용 / Recovered Water Utilization",
      "증발잠열 프리쿨링 / Evaporative Pre-cooling",
      "실외기 인입공기 냉각 / Outdoor-Unit Intake Cooling",
      "냉방 전력절감 / Cooling Power Saving",
      "저TDS 응축수 / Low-TDS Condensate",
      "순환형 인프라 / Circular Infrastructure"
    ],
    ctaTitle: "냉방 전력, 알파팜이 만든 물로 줄여보세요.",
    ctaBody: "설비 규모와 운전 조건을 알려주시면 AlphaEnergy-AIS 적용 효과를 현장 기준으로 검토해 회신드립니다.",
    lineupHref: "/alphafarm",
    lineupLabel: "알파팜 솔루션 보기",
    categoryEn: "AlphaFarm",
    en: {
      title: "How AlphaFarm Cuts Cooling Power Using the Water It Produces — AlphaEnergy-AIS",
      metaTitle: "AlphaEnergy-AIS — Cooling Power Saving with AlphaFarm Recovered Water | CESeL Primus",
      description:
        "AlphaFarm recovers low-TDS condensate during low-temperature dehumidification and circulates it through AlphaEnergy-AIS™ to pre-cool outdoor-unit intake air. How the latent heat of evaporation lowers condensing load and cuts cooling power in a strawberry vertical farm.",
      lead:
        "AlphaFarm recovers near-high-purity, low-TDS condensate during low-temperature dehumidification. That water is not only reused inside the farm — through AlphaEnergy-AIS™, it becomes an energy-saving resource that reduces cooling power.",
      sections: [
        {
          h: "AlphaFarm produces water",
          paras: [
            "AlphaFarm recovers near-high-purity, low-TDS condensate during low-temperature dehumidification. This recovered water is not merely reused inside the farm — it can be put back to work as an energy resource that lowers the cooling system's power draw."
          ],
          bullets: ["Condensate recovered during low-temperature dehumidification", "Near-high-purity, low-TDS water quality", "Beyond in-farm reuse — used as an energy resource"]
        },
        {
          h: "How AlphaEnergy-AIS™ works",
          paras: [
            "AlphaEnergy-AIS™ circulates the water produced by AlphaFarm through the module and uses the latent heat of evaporation to lower the temperature of the air entering the outdoor unit.",
            "When outdoor-unit intake air is cooler, the condensing load eases and compressor burden drops. This can reduce power consumption and improve operating stability across cooling and low-temperature dehumidification systems."
          ],
          bullets: ["Recovered water circulated through the module", "Latent heat of evaporation pre-cools outdoor-unit intake air", "Eased condensing load, lower compressor burden", "Reduced power use and more stable operation"]
        },
        {
          h: "Expected benefits",
          paras: [
            "The figures below are targets under standard assumptions. Actual effects may vary with outdoor temperature, humidity, airflow, installation conditions, and water management status."
          ],
          bullets: [
            "Up to 5°C reduction in outdoor-unit intake air temperature (target)",
            "Up to 12% mitigation in peak power load (target)",
            "Up to 7% reduction in average daily power consumption (target)",
            "Reduced high-pressure trip risk and improved operating stability"
          ]
        },
        {
          h: "Circular infrastructure linking water and energy",
          paras: [
            "AlphaFarm produces water, and that water is reused as a power-saving resource. It is CESeL Primus' circular infrastructure solution, connecting food production, water recovery, and cooling efficiency in one loop."
          ],
          bullets: ["Food production", "Water recovery", "Cooling efficiency", "Circular infrastructure"]
        }
      ],
      faq: [
        { q: "Does AlphaEnergy-AIS need a separate water supply?", a: "No. It circulates the low-TDS condensate that AlphaFarm recovers on its own during low-temperature dehumidification. The farm's own water is reused as a cooling power-saving resource, with no external water feed." },
        { q: "How much power does it actually save?", a: "Under standard conditions, it targets up to 7% lower average daily power consumption and up to 12% peak-load mitigation. Actual savings depend on outdoor temperature, humidity, airflow, installation conditions, and water management, so we review each site individually." },
        { q: "How does it reduce power?", a: "The latent heat of the recovered water pre-cools the outdoor-unit intake air, lowering the condensing load. Compressor burden drops, cutting cooling and dehumidification power, and high-pressure trip risk falls for more stable operation." }
      ],
      ctaTitle: "Cut cooling power with the water AlphaFarm produces.",
      ctaBody: "Tell us your equipment scale and operating conditions, and we'll review the AlphaEnergy-AIS impact for your site and reply directly.",
      lineupLabel: "Explore the AlphaFarm solution"
    }
  },
  {
    slug: "alphafarm-low-power-dehumidification",
    title: "왜 알파팜의 저전력 저온제습이 중요한가",
    metaTitle: "알파팜 저전력 저온제습 — 딸기수직농장 VPD 환경제어 | 쎄슬프라이머스",
    description:
      "딸기 수직농장의 품질과 수익성을 좌우하는 것은 온도와 습도의 정밀 제어입니다. 알파팜이 VPD를 관리하고 LED 현열로 제습 재열 전력을 줄이는 저전력 저온제습 기술을 정리했습니다.",
    keywords: ["알파팜 저온제습", "저전력 저온제습", "딸기수직농장 VPD", "딸기 수직농장 환경제어", "제습 재열", "LED 현열", "프리미엄 딸기"],
    date: "2026-07-06",
    category: "알파팜",
    readMin: 4,
    heroImage: "/media/series/series-11.webp",
    heroImageEn: "/media/series/series-11-en.webp",
    heroContain: true,
    heroWidth: 1122,
    heroHeight: 1402,
    heroAlt: "왜 알파팜의 저전력 저온제습이 중요한가 — VPD·저온제습 인포그래픽 / Why AlphaFarm low-power low-temperature dehumidification matters infographic",
    lead:
      "딸기 수직농장은 단순히 냉방을 잘한다고 좋은 품질이 만들어지지 않습니다. 핵심은 온도와 습도를 함께 제어해 작물에 맞는 VPD, 즉 Vapor Pressure Deficit를 안정적으로 유지하는 것입니다.",
    sections: [
      {
        h: "습도만 낮추는 것이 아니라, VPD를 관리",
        paras: [
          "작물 재배에서 습도 관리의 중요성은 아무리 강조해도 지나치지 않습니다. 그러나 중요한 것은 습도를 무조건 낮추는 것이 아니라, 온도와 함께 관리해 최적의 VPD를 만드는 것입니다.",
          "VPD는 쉽게 말하면 작물이 느끼는 공기 중 수분 환경입니다. 습도가 너무 높으면 병해와 생육 문제가 생기기 쉽고, 반대로 무조건 낮추기만 해도 작물에 부담이 됩니다. 예컨대 15℃·50%RH 조건은 VPD 약 0.9kPa로, 딸기 생육에 적합한 균형점입니다."
        ],
        bullets: ["온도(T) + 습도(RH) = 작물이 느끼는 VPD", "15℃ / 50%RH → VPD 약 0.9kPa", "VPD는 온도와 상대습도에 따라 달라짐"]
      },
      {
        h: "딸기는 저온성 작물",
        paras: [
          "딸기는 원래 저온에서 품질이 좋아지는 작물입니다. 특히 대형·고당도·우수한 식감을 가진 프리미엄 딸기를 식감 있게 키우려면 저온제습이 더욱 중요합니다."
        ],
        bullets: ["대형", "고당도", "우수한 식감", "프리미엄 품질"]
      },
      {
        h: "저전력의 비밀은 제습 재열",
        paras: [
          "일반 제습은 수분을 제거한 뒤 공기를 다시 데우는 재열 과정에서 많은 전력이 필요합니다. 알파팜은 딸기 수직농장의 LED 현열을 제습 재열에 활용해, 제습에 필요한 전력을 크게 절감합니다.",
          "습한 공기 유입(재배존) → 냉각·제습 코일(수분 제거) → LED 현열 활용 제습 재열 → 최적화된 저온·건조 공기를 재배존으로 공급하는 저전력 순환 구조입니다."
        ],
        bullets: ["습한 공기 유입 (재배존)", "냉각·제습 코일 (수분 제거)", "LED 현열 활용 제습 재열", "최적화된 저온·건조 공기 재공급"]
      },
      {
        h: "알파팜이 만드는 가치",
        paras: [
          "알파팜은 단순 냉방이 아니라, 저온·저습·VPD를 함께 설계하는 딸기 특화 환경제어 솔루션입니다."
        ],
        bullets: [
          "정밀 VPD 관리 — 온도와 습도를 함께 제어해 최적 생육 환경 유지",
          "저온성 작물에 최적 — 저온·저습 환경으로 딸기 본연의 품질 극대화",
          "프리미엄 딸기 품질 향상 — 대형·고당도·식감 우수",
          "제습 전력 절감 — LED 현열 재열로 제습 전력 비용 대폭 절감"
        ]
      }
    ],
    faq: [
      { q: "VPD가 왜 중요한가요?", a: "VPD는 작물이 느끼는 공기 중 수분 환경입니다. 습도만 낮추면 작물에 부담이 될 수 있어, 온도와 함께 관리해 최적 VPD(딸기는 15℃·50%RH에서 약 0.9kPa)를 유지하는 것이 품질과 수익성의 핵심입니다." },
      { q: "저온제습이 왜 전력을 많이 쓰나요?", a: "일반 제습은 수분 제거 후 공기를 다시 데우는 재열 과정에서 전력이 많이 듭니다. 알파팜은 수직농장 LED에서 발생하는 현열을 재열에 활용해 이 전력을 절감합니다." },
      { q: "알파팜 저온제습은 어디에 적용되나요?", a: "딸기 수직농장 재배존이 기본이며, 저온·저습·VPD 정밀 제어가 필요한 프리미엄 재배 환경에 적용합니다. 식품공정·저온저장 등으로도 확장 가능합니다." }
    ],
    relatedKeywords: [
      "VPD 관리 / VPD Management",
      "저온제습 / Low-Temperature Dehumidification",
      "제습 재열 / Dehumidification Reheat",
      "LED 현열 활용 / LED Sensible Heat Utilization",
      "딸기 환경제어 / Strawberry Climate Control",
      "프리미엄 딸기 / Premium Strawberry"
    ],
    ctaTitle: "저온·저습·VPD 환경, 재배 조건에 맞게 설계해 드립니다.",
    ctaBody: "재배 품목과 목표 환경을 알려주시면 알파팜 저전력 저온제습 설계를 직접 검토해 회신드립니다.",
    lineupHref: "/alphafarm",
    lineupLabel: "알파팜 솔루션 보기",
    categoryEn: "AlphaFarm",
    en: {
      title: "Why AlphaFarm's Low-Power Low-Temperature Dehumidification Matters",
      metaTitle: "AlphaFarm Low-Power Low-Temperature Dehumidification — VPD Climate Control | CESeL Primus",
      description:
        "In strawberry vertical farming, quality and profitability depend on precise control of temperature and humidity. How AlphaFarm manages VPD and cuts dehumidification reheat power using LED sensible heat.",
      lead:
        "Strawberry vertical farming is not just about cooling. The real challenge is managing temperature and humidity together to maintain the right VPD, or Vapor Pressure Deficit, for the crop.",
      sections: [
        {
          h: "Not just lower humidity — manage VPD",
          paras: [
            "Humidity control is essential in crop production. But simply lowering humidity is not enough. The key is to manage temperature and humidity together to maintain an optimal VPD.",
            "VPD is, in simple terms, the moisture environment a crop feels. Too much humidity invites disease and growth problems, while forcing it too low also stresses the plant. For example, 15°C / 50%RH gives a VPD of roughly 0.9 kPa — a balance point well suited to strawberry growth."
          ],
          bullets: ["Temperature (T) + Humidity (RH) = the VPD the crop feels", "15°C / 50%RH → VPD ≈ 0.9 kPa", "VPD varies with temperature and relative humidity"]
        },
        {
          h: "Strawberries prefer cool conditions",
          paras: [
            "Strawberry quality improves in cooler conditions. For large, sweet, premium fruit with excellent texture, low-temperature dehumidification is especially important."
          ],
          bullets: ["Large", "High Brix", "Excellent texture", "Premium quality"]
        },
        {
          h: "The secret to low power: reheat for dehumidification",
          paras: [
            "In conventional dehumidification, reheat uses significant energy after moisture removal. AlphaFarm reduces this load by using sensible heat from the vertical farm's LED lighting for reheat.",
            "Humid air inlet (grow zone) → cooling/dehumidifying coil (moisture removal) → reheat using LED sensible heat → optimized cool, dry air supplied back to the grow zone — a low-power circulation system."
          ],
          bullets: ["Humid air inlet (grow zone)", "Cooling / dehumidifying coil (moisture removal)", "Reheat using LED sensible heat", "Optimized cool, dry air re-supplied"]
        },
        {
          h: "Value created by AlphaFarm",
          paras: [
            "AlphaFarm is not simply a cooling system. It is a strawberry-specific climate-control solution designed around low temperature, low humidity, and VPD."
          ],
          bullets: [
            "Precise VPD control — manage temperature and humidity together for optimal growth",
            "Ideal for cool-climate crops — low-temp, low-humidity conditions maximize strawberry quality",
            "Better premium strawberry quality — large, sweet, excellent texture",
            "Lower dehumidification energy — reduce reheat power by using LED sensible heat"
          ]
        }
      ],
      faq: [
        { q: "Why does VPD matter?", a: "VPD is the moisture environment a crop feels. Lowering humidity alone can stress the plant, so managing it together with temperature to hold an optimal VPD (about 0.9 kPa at 15°C / 50%RH for strawberries) is central to both quality and profitability." },
        { q: "Why does low-temperature dehumidification use so much power?", a: "Conventional dehumidification spends significant energy reheating the air after moisture removal. AlphaFarm uses sensible heat from the vertical farm's LEDs for that reheat, cutting the power required." },
        { q: "Where does AlphaFarm dehumidification apply?", a: "Primarily to strawberry vertical-farm grow zones, and to any premium cultivation environment that needs precise low-temperature, low-humidity, VPD control. It can also extend to food processes and cold storage." }
      ],
      ctaTitle: "We'll design a low-temp, low-humidity, VPD environment for your conditions.",
      ctaBody: "Tell us your crop and target environment, and we'll review an AlphaFarm low-power dehumidification design and reply directly.",
      lineupLabel: "Explore the AlphaFarm solution"
    }
  },
  {
    slug: "knowledge-center-chp-strawberry-farm",
    title: "지식산업센터 유휴공간 재생형 열병합 연계 딸기수직농장 구축 모델",
    metaTitle: "지식산업센터 유휴공간 딸기수직농장 — 열병합 연계 사업모델 | 쎄슬프라이머스",
    description:
      "지식산업센터 공실·유휴공간을 프리미엄 딸기수직농장과 열병합(CHP) 연계로 전환하는 복합 사업모델. Core 5·Core 10 사업성 시뮬레이션과 폐열·CO₂ 자원화, 정책자금 검토까지.",
    keywords: ["지식산업센터 딸기수직농장", "유휴공간 재생", "열병합 연계", "CHP 딸기농장", "딸기수직농장 사업성", "공실 활용", "정책자금"],
    date: "2026-07-06",
    category: "알파팜",
    readMin: 5,
    heroImage: "/media/series/series-10.webp",
    heroImageEn: "/media/series/series-10-en.webp",
    heroContain: true,
    heroWidth: 1445,
    heroHeight: 1088,
    heroAlt: "지식산업센터 유휴공간 재생형 열병합 연계 딸기수직농장 구축 모델 인포그래픽 — Core 5·Core 10 사업성 시뮬레이션 / CHP-linked strawberry vertical farm model for underutilized spaces and buildings by AlphaFarm",
    lead:
      "지식산업센터의 유휴공간은 더 이상 단순 공실이 아니라, 새로운 수익모델로 전환할 수 있는 자산입니다. 쎄슬프라이머스는 유휴공간에 프리미엄 딸기수직농장과 열병합(CHP) 연계 모델을 적용해 생산·에너지·공간가치를 함께 높이는 방안을 제안합니다.",
    sections: [
      {
        h: "공실을 비용이 아닌 자산으로",
        paras: [
          "지식산업센터의 유휴공간은 시간이 지날수록 공실 부담과 자산가치 저하로 이어질 수 있습니다. 반대로, 같은 공간도 어떤 모델을 적용하느냐에 따라 생산기지이자 체험공간, 그리고 새로운 수익원으로 바뀔 수 있습니다.",
          "이 모델의 핵심은 단순한 농장 설치가 아닙니다. 유휴공간을 프리미엄 식품 생산기지로 전환하고, 카페·디저트·체험 연계까지 확장해 건물의 활용도와 차별성을 함께 높이는 복합 사업모델입니다."
        ]
      },
      {
        h: "핵심 수익 구조",
        paras: [
          "프리미엄 딸기 판매를 기반으로 알파카페·디저트·체험 연계까지 매출을 확장합니다. 생산한 딸기를 그대로 파는 것을 넘어, 방문형 콘텐츠와 리테일 접점으로 부가 매출 기회를 만드는 구조입니다."
        ],
        bullets: ["프리미엄 딸기 생산", "알파카페·디저트·체험 연계", "리테일·방문형 콘텐츠로 매출 확장"]
      },
      {
        h: "열병합(CHP) 도입의 의미",
        paras: [
          "열병합발전(CHP)의 폐열과 CO₂를 자원으로 활용해, 공조 안정화·재열·급탕 확보·폐열·CO₂ 활용 기반 운영을 함께 검토할 수 있습니다. 일반적인 공간 활용안보다 한 단계 높은 개발형 접근입니다.",
          "유휴공간 재생과 ESG 실현 측면에서도 차별화 포인트가 있으며, 스마트팜·에너지효율·유휴공간 재생 요소를 결합한 복합 투자모델로 정책자금 및 금융구조 검토도 가능합니다."
        ],
        bullets: ["공조 안정화, 재열·급탕 확보", "폐열·CO₂ 활용 기반 운영", "유휴공간 재생과 ESG 실현", "정책자금 연계 및 금융구조 검토 가능"]
      },
      {
        h: "Core 5 / Core 10 사업성 시뮬레이션",
        paras: [
          "규모별로 사업성을 아래와 같이 검토할 수 있습니다. 단, 아래 수치는 표준 가정에 따른 추정으로, 품종·재배 안정성·CO₂ 활용·판매채널·CHP 견적 및 건물별 공사조건에 따라 생산량·가격·투자비는 변동될 수 있습니다."
        ],
        bullets: [
          "연 생산량 — Core 5: 40.3톤 · Core 10: 80.6톤",
          "총 매출 — Core 5: 12.1억원 · Core 10: 24.2억원",
          "EBITDA — Core 5: 5.0억원 · Core 10: 9.9억원",
          "단순 회수기간(CHP 포함, 총투자비 기준) — Core 5: 약 7.9년 · Core 10: 약 7.3년",
          "단순 회수기간(CHP 비포함, 농장 CAPEX 기준) — Core 5·Core 10 모두 약 4.3년",
          "권장 CHP 규모 — Core 5: 50~60kWe · Core 10: 100~120kWe",
          "산출 기준 — Core 1 = 5,376주 × 1.5kg/주 = 약 8.1톤/년, 프리미엄 딸기 30,000원/kg(가락동 도매시장 기준)"
        ]
      },
      {
        h: "적용 판단과 컨설팅",
        paras: [
          "Core 5는 초기 상업 검증형, Core 10은 본격 사업 확장형에 적합합니다. 공실 해소, 자산가치 회복, 분양·임대 활성화, ESG 스토리까지 함께 고민하고 계시다면 검토할 만한 대안입니다.",
          "사업성 검토 시에는 생산량·판매단가·재배 안정성·CO₂ 활용 가능성·판매채널·CHP 견적 및 건물별 공사조건을 함께 검토해야 하며, 쎄슬프라이머스는 사업성 검토 및 정책자금 컨설팅도 함께 제안드립니다."
        ]
      }
    ],
    faq: [
      { q: "지식산업센터 유휴공간에 왜 딸기수직농장인가요?", a: "프리미엄 딸기수직농장은 좁은 면적에서도 고밀도 수직재배로 생산기지가 되고, 카페·디저트·체험 연계로 리테일 매출까지 만들 수 있어 공실을 복합 수익 자산으로 전환하기에 적합합니다." },
      { q: "열병합(CHP) 연계는 꼭 필요한가요?", a: "필수는 아닙니다. CHP를 연계하면 폐열·CO₂·전력을 자원으로 활용해 공조 안정화와 재열·급탕을 확보할 수 있지만, 농장 CAPEX 기준(CHP 비포함)으로도 사업성을 검토할 수 있습니다." },
      { q: "사업성 수치는 확정된 값인가요?", a: "아닙니다. Core 5·Core 10 수치는 표준 가정에 따른 추정으로, 품종·재배 안정성·CO₂ 활용·판매채널·CHP 견적·건물별 공사조건에 따라 생산량·가격·투자비가 달라집니다. 현장 조건으로 별도 검토가 필요합니다." }
    ],
    relatedKeywords: [
      "지식산업센터 유휴공간 / Knowledge Industrial Center Idle Space",
      "유휴공간 재생 / Idle Space Regeneration",
      "열병합 연계 / CHP Integration",
      "딸기수직농장 사업모델 / Strawberry Vertical Farm Business Model",
      "폐열·CO₂ 자원화 / Waste Heat & CO₂ Resource Use",
      "정책자금 연계 / Policy Fund Linkage"
    ],
    ctaTitle: "유휴공간, 딸기수직농장 복합 사업모델로 검토해 드립니다.",
    ctaBody: "건물 조건과 목표를 알려주시면 사업성 검토와 정책자금 컨설팅까지 사업개발 담당자가 직접 검토해 회신드립니다.",
    lineupHref: "/alphafarm",
    lineupLabel: "알파팜 솔루션 보기",
    categoryEn: "AlphaFarm",
    en: {
      title: "CHP-Linked Strawberry Vertical Farm for Underutilized Spaces & Buildings",
      metaTitle: "CHP-Linked Strawberry Vertical Farm for Underutilized Spaces & Buildings | AlphaFarm",
      description:
        "AlphaFarm provides a CHP-linked strawberry vertical farm model for underutilized indoor spaces and buildings, combining controlled-environment agriculture, energy integration, HVAC/FCU review, CO₂ utilization and AlphaCafe experience linkage.",
      lead:
        "AlphaFarm is developing a CHP-linked strawberry vertical farm model for underutilized indoor spaces and buildings. The model converts vacant or low-utilization areas in commercial buildings, business-park facilities, and mixed-use properties into controlled-environment strawberry farms.",
      sections: [
        {
          h: "Model overview",
          paras: [
            "The purpose is not simply to install a farm inside a building, but to examine how unused indoor space can be converted into a productive, energy-integrated and experience-oriented facility.",
            "It combines premium strawberry production with CHP-linked energy utilization — heat recovery, reheat, hot water supply and potential CO₂ utilization. Where existing building HVAC or FCU systems are available, their use can also be reviewed as part of the farm's cooling and air-circulation strategy."
          ]
        },
        {
          h: "Model structure",
          paras: ["The model connects space, production, energy and experience in one loop."],
          bullets: [
            "Underutilized space & building use — convert vacant indoor space into a productive strawberry vertical farm",
            "Premium strawberry production — controlled temperature, humidity, airflow, lighting, irrigation and CO₂ management",
            "CHP energy integration — heat recovery, reheat, hot water supply and potential CO₂ utilization",
            "Existing HVAC / FCU review — reuse available systems for cooling support and air circulation",
            "AlphaCafe & experience linkage — connect the farm with AlphaCafe, dessert and visitor experience programs"
          ]
        },
        {
          h: "Business review basis (Core 5 / Core 10)",
          paras: [
            "The model is reviewed on Core 5 and Core 10 configurations, with production capacity, energy use, CHP capacity, CAPEX and payback evaluated per site. The figures below are estimates under standard assumptions and may vary with cultivar, cultivation stability, CO₂ utilization, sales channel, CHP quotation, existing HVAC/FCU conditions and site-specific construction requirements."
          ],
          bullets: [
            "Annual production — Core 5: 40.3 tons · Core 10: 80.6 tons",
            "Total revenue — Core 5: SGD 1.21 m · Core 10: SGD 2.42 m",
            "EBITDA — Core 5: SGD 0.50 m · Core 10: SGD 0.99 m",
            "Simple payback (incl. CHP, total investment) — Core 5: ~7.9 yrs · Core 10: ~7.3 yrs",
            "Simple payback (excl. CHP, farm CAPEX) — both ~4.3 yrs",
            "Recommended CHP capacity — Core 5: 50–60 kWe · Core 10: 100–120 kWe",
            "Assumption — Core 1 = 5,376 plants × 1.5 kg/plant ≈ 8.1 tons/year, premium strawberry ≈ SGD 30/kg"
          ]
        },
        {
          h: "Application",
          paras: [
            "This model may suit building owners, developers, operators or local partners reviewing new uses for underutilized indoor spaces, vacant commercial buildings, business-park facilities or other large indoor assets.",
            "AlphaFarm provides feasibility review, system planning and project-structuring support based on the actual conditions of each site."
          ]
        }
      ],
      faq: [
        { q: "Why a strawberry vertical farm for underutilized building space?", a: "A premium strawberry vertical farm turns a small footprint into a production base through high-density cultivation, and can add retail revenue via AlphaCafe, dessert and experience linkage — making it well suited to converting vacant space into a mixed revenue asset." },
        { q: "Is CHP integration required?", a: "Not necessarily. CHP lets you use waste heat, CO₂ and power as resources for HVAC stability and reheat/hot water, but the model can also be reviewed on a farm-CAPEX basis (excluding CHP)." },
        { q: "Are the business figures fixed?", a: "No. The Core 5 / Core 10 figures are estimates under standard assumptions. Actual production, price, CAPEX and payback vary with cultivar, cultivation stability, CO₂ utilization, sales channel, CHP quotation, HVAC/FCU conditions and site-specific construction — a separate site review is required." }
      ],
      ctaTitle: "Let's review your underutilized space as a strawberry vertical farm model.",
      ctaBody: "Tell us your building conditions and goals, and our business-development team will review feasibility and project structuring and reply directly.",
      lineupLabel: "Explore the AlphaFarm solution"
    }
  },
  {
    slug: "alphafarm-water-recovery",
    title: "알파팜은 물을 생산합니다 — 응축수 회수·내부 재이용",
    metaTitle: "알파팜 물 회수·내부 재이용 — 저TDS 응축수 생산 | 쎄슬프라이머스",
    description:
      "딸기 수직농장의 저온제습 응축수와 배액수를 회수해 외부 보충수를 70~85% 줄이는 알파팜 물순환 모델. 데이터센터·반도체 유틸리티수·전처리수 활용 가능성까지.",
    keywords: ["알파팜 물 회수", "응축수 회수", "저TDS 응축수", "물순환 수직농장", "내부 재이용", "데이터센터 유틸리티수", "ESG"],
    date: "2026-07-02",
    category: "알파팜",
    readMin: 4,
    heroImage: "/media/series/series-8.webp",
    heroImageEn: "/media/series/series-8-en.webp",
    heroContain: true,
    heroWidth: 1672,
    heroHeight: 941,
    heroAlt: "알파팜 물 회수·내부 재이용 물수지 인포그래픽 / AlphaFarm water recovery and internal reuse infographic",
    lead:
      "수직농장은 물을 많이 쓰는 시설로만 보이기 쉽습니다. 하지만 알파팜은 저온제습 응축수와 배액수를 회수해, 물을 소비만 하는 것을 넘어 고순도에 가까운 저TDS 응축수를 '생산·재사용'하는 물순환형 인프라가 될 수 있습니다.",
    sections: [
      {
        h: "알파팜의 물 순환 구조",
        paras: ["알파팜의 물 흐름은 단순합니다. 회수된 응축수는 우선 자체 관수에 재사용해 외부 보충수 사용을 줄입니다."],
        bullets: ["관수수", "→ 식물 증산", "→ 저온제습 응축수 회수", "→ 여과·살균·수질보정", "→ 내부 재사용"]
      },
      {
        h: "숫자로 보는 물수지",
        paras: ["규모별로 물수지를 이렇게 검토할 수 있습니다."],
        bullets: [
          "코어 1 — 응축수 회수 0.4~0.6톤/일 · 필요 공급 0.8~1.1톤/일 · 외부 보충수 0.2~0.4톤/일",
          "코어 20 — 응축수 회수 9~13톤/일 · 필요 공급 16~22톤/일 · 외부 보충수 3~7톤/일",
          "외부 보충수 약 70~85% 절감 (최적 운영 시 최대 90% 목표)"
        ]
      },
      {
        h: "데이터센터·반도체 유틸리티수로도",
        paras: [
          "회수된 응축수는 자체 관수 재사용이 우선이고, 수질 조건이 확보되면 간단한 후처리를 거쳐 데이터센터나 반도체 공장의 비음용 유틸리티수 또는 전처리수로도 활용 가능성을 검토할 수 있습니다.",
          "알파팜이 프리미엄 딸기 생산을 넘어, 식품 생산·물 회수·내부 재이용을 잇는 자원순환 인프라로 확장되는 지점입니다."
        ]
      }
    ],
    faq: [
      { q: "정말 딸기 농장이 물을 '생산'하나요?", a: "저온제습 과정에서 발생하는 응축수를 회수하는 것입니다. 코어 20 기준 하루 약 9~13톤 회수가 가능해, 물을 소비만 하는 게 아니라 회수·재사용하는 구조입니다." },
      { q: "회수한 물을 데이터센터에 쓸 수 있나요?", a: "우선 자체 관수 재사용이 원칙이고, 수질 조건이 확보되면 간단한 후처리를 거쳐 데이터센터·반도체 공장의 비음용 유틸리티수·전처리수로 활용 가능성을 검토할 수 있습니다." },
      { q: "외부 물을 얼마나 줄이나요?", a: "약 70~85% 절감, 최적 운영 시 최대 90% 절감을 목표로 합니다. 단 실제 회수율·절감률은 배액률·운영조건·수질관리·회수시스템 구성에 따라 달라집니다." }
    ],
    relatedKeywords: [
      "응축수 회수 / Condensate Recovery",
      "저TDS 응축수 / Low-TDS Condensate",
      "물순환 수직농장 / Circular-Water Vertical Farm",
      "데이터센터 유틸리티수 / Data Center Utility Water",
      "내부 재이용 / Internal Reuse",
      "ESG 자원순환 / ESG Circularity"
    ],
    ctaTitle: "물 회수·재이용 모델, 조건에 맞게 검토해 드립니다.",
    ctaBody: "시설 규모·용수 조건을 알려주시면 알파팜 물 회수·내부 재이용 모델을 직접 검토해 회신드립니다.",
    lineupHref: "/alphafarm",
    lineupLabel: "알파팜 솔루션 보기",
    categoryEn: "AlphaFarm",
    en: {
      title: "AlphaFarm Produces Water — Condensate Recovery & Internal Reuse",
      metaTitle: "AlphaFarm Water Recovery & Internal Reuse — Low-TDS Condensate | CESeL Primus",
      description:
        "AlphaFarm recovers condensate and drainage water from strawberry vertical farming to cut external fresh water make-up by 70–85%, with potential utility/pretreatment water for data centers and semiconductor plants.",
      lead:
        "Vertical farms are often seen as water consumers. AlphaFarm takes a different approach — by combining low-temperature dehumidification, condensate recovery, and drainage reuse, it can produce low-TDS condensate water close to high-purity water and reuse it internally.",
      sections: [
        {
          h: "AlphaFarm's circular water pathway",
          paras: ["AlphaFarm's water flow is simple. Recovered condensate is first prioritized for internal irrigation reuse, cutting external make-up."],
          bullets: ["Irrigation water", "→ plant transpiration", "→ low-temperature dehumidification & condensate recovery", "→ filtration, sterilization, water quality adjustment", "→ internal reuse"]
        },
        {
          h: "Water balance, by the numbers",
          paras: ["The water balance can be reviewed by scale as follows."],
          bullets: [
            "Core-1 — recovery 0.4–0.6 t/day · required supply 0.8–1.1 t/day · external make-up 0.2–0.4 t/day",
            "Core-20 — recovery 9–13 t/day · required supply 16–22 t/day · external make-up 3–7 t/day",
            "~70–85% reduction in external fresh-water make-up (target up to 90% under optimized operation)"
          ]
        },
        {
          h: "Also as utility water for data centers and semiconductor plants",
          paras: [
            "Recovered condensate is first prioritized for internal irrigation reuse. Subject to water-quality verification and simple post-treatment, it may also be considered as non-potable utility water or pretreatment water for adjacent data centers or semiconductor facilities.",
            "This is where AlphaFarm expands beyond premium strawberry production into a resource-circularity platform connecting food production, water recovery, and internal reuse."
          ]
        }
      ],
      faq: [
        { q: "Does a strawberry farm really 'produce' water?", a: "It recovers condensate generated during low-temperature dehumidification. At the Core-20 scale, roughly 9–13 tons/day can be recovered — so it recovers and reuses water rather than only consuming it." },
        { q: "Can the recovered water be used by data centers?", a: "Internal irrigation reuse comes first. Subject to water-quality verification and simple post-treatment, it may be considered as non-potable utility or pretreatment water for data centers and semiconductor plants." },
        { q: "How much external water does it save?", a: "About 70–85%, targeting up to 90% under optimized operation. Actual recovery and reduction vary with drainage ratio, operating conditions, water-quality management, and recovery-system configuration." }
      ],
      ctaTitle: "We'll review a water recovery & reuse model for your conditions.",
      ctaBody: "Tell us your facility scale and water conditions, and we'll review an AlphaFarm water recovery & internal reuse model and reply directly.",
      lineupLabel: "Explore the AlphaFarm solution"
    }
  },
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
    lineupLabel: "알파쿨링 솔루션 보기",
    categoryEn: "AlphaCooling",
    en: {
      title: "Why Condensation Forms in Food Factories — and How to Stop It",
      metaTitle: "Food Factory Condensation — Causes & Low-Temp Dehumidification Fix | CESeL Primus",
      description:
        "The causes of condensation in food factories and packing rooms — dew point, surface condensation, supply air — and how low-temperature dehumidification solves it, and why cooling and ventilation alone fail.",
      lead:
        "Every summer, water droplets form across food factories and packing rooms. Condensation dripping from the ceiling onto products and packaging leads straight to hygiene incidents and claims. Condensation isn't fixed by 'just cooling more' — you have to understand the cause.",
      sections: [
        {
          h: "Why condensation forms — dew point and surfaces",
          paras: [
            "The colder air gets, the less moisture it can hold; that threshold is the 'dew point.' When a cold surface — ceiling, wall, pipe, floor — drops below the surrounding air's dew point, moisture condenses on it as droplets.",
            "It's worst in summer for a clear reason: hot, humid outdoor air entering through doors and loading bays spikes indoor humidity, and meeting cold cooling surfaces makes condensation surge. So condensation is really a problem of surface temperature, air dew point, and supply-air humidity."
          ],
          bullets: ["Surface temperature: cold ceilings, pipes, etc.", "Dew point: the temperature at which air begins to condense", "Supply-air humidity: raised by incoming outdoor air"]
        },
        {
          h: "The real cost of condensation",
          paras: ["Condensation isn't a minor nuisance — it becomes direct loss."],
          bullets: [
            "Hygiene: dripping ceiling condensation contaminates products, HACCP non-conformance risk",
            "Mold & bacteria: constantly wet surfaces breed mold → odor and re-work costs",
            "Quality: wet packaging, label defects, product moisture uptake",
            "Safety: slippery floors and worker accidents"
          ]
        },
        {
          h: "Why cooling and ventilation alone fail",
          paras: [
            "Common fixes miss condensation for a reason. Cooling harder makes surfaces colder and can worsen condensation. Ventilation backfires in seasons when outdoor air is more humid than indoors. Ordinary dehumidifiers lose efficiency and frost up in cold spaces.",
            "The key is an integrated design that lowers the supply air's humidity (dew point) while keeping the space cold. Temperature and humidity must be controlled together — not separately — to prevent condensation from forming at all."
          ]
        },
        {
          h: "The low-temperature dehumidification fix — AlphaCooling",
          paras: [
            "AlphaCooling designs cooling, dehumidification, reheat, and airflow as one, lowering the supply air's dew point while maintaining low temperature. For food processes and packing rooms, an inline hot-gas-reheat (HGR) unit removes humidity without overcooling.",
            "By integrating coolers, circulation fans, airflow, and sensors to even out humidity and surface temperature across the whole space, the very conditions that create condensation disappear — from vertical-farm grow rooms to food packing rooms, cold storage, and cold-chain spaces."
          ]
        }
      ],
      faq: [
        { q: "Why is condensation so bad in summer?", a: "In summer both outdoor temperature and humidity are high, so humid air entering through doorways meets cold cooling surfaces and condensation surges — the gap between surface temperature and supply-air dew point widens." },
        { q: "Won't more ventilation solve it?", a: "When outdoor air is more humid than indoor air, ventilation actually pulls in moisture and worsens condensation. Dehumidification that lowers the dew point must go with it." },
        { q: "How much does it cost to adopt?", a: "It varies greatly by space size, target temperature/humidity, and existing equipment, so it can't be stated uniformly. We assess on site and propose to fit your conditions." }
      ],
      ctaTitle: "We'll diagnose your condensation problem to fit your site.",
      ctaBody: "Tell us your facility type and the condensation/humidity issues you face, and our low-temp dehumidification HVAC team will review and reply directly.",
      lineupLabel: "Explore the AlphaCooling solution"
    }
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
    lineupLabel: "알파쿨링 솔루션 보기",
    categoryEn: "AlphaCooling",
    en: {
      title: "Condensation and Mold in Cold Storage — Root Causes and Fixes",
      metaTitle: "Cold Storage & Food Warehouse Condensation and Mold — Low-Temp Dehumidification | CESeL Primus",
      description:
        "Why condensation and black mold form on the walls and ceilings of cold storage and underground food warehouses, why ventilation and drainage aren't enough, and the low-temperature dehumidification fix.",
      lead:
        "Condensation and black mold on the walls and ceilings of cold storage or underground food warehouses directly threaten stored-product quality and hygiene. Here's why more exhaust fans don't fix it — and how to solve it at the root.",
      sections: [
        {
          h: "How condensation and mold form in cold, underground spaces",
          paras: [
            "Cold storage has low surface temperatures, so air reaches its dew point easily. Add an underground location — outside moisture ingress, ground moisture, and poor ventilation — and humidity stays high. Condensation becomes constant, and wet surfaces are the ideal environment for mold.",
            "Once mold takes hold, odor and spores transfer to stored products and won't disappear without re-surfacing the walls. So the approach must be to prevent it forming, not wipe it after."
          ]
        },
        {
          h: "Why ventilation and drainage aren't enough",
          paras: [
            "Ventilation only helps when outdoor air is drier than indoors. In a rainy season, when it's more humid outside, ventilation brings moisture in. Drainage only carries away water that already formed — it doesn't lower the humidity (dew point) in the air. So with ventilation and drainage alone, condensation and mold keep coming back."
          ]
        },
        {
          h: "Storage quality and hygiene risks",
          paras: ["Left unaddressed, condensation and mold lead to the following losses."],
          bullets: ["Mold odor and spores transferring to stored goods", "Packaging damage, label defects, surface icing", "Hygiene-inspection and HACCP risk", "Inventory loss and claims"]
        },
        {
          h: "How to fix it — AlphaCooling low-temp dehumidification",
          paras: [
            "AlphaCooling blocks surface condensation and mold at the root with a low-temperature dehumidification cooler and airflow design that lowers the supply air's dew point while keeping the space cold — applied to food warehouses, cold storage, refrigerated/frozen warehouses, and cold-chain facilities.",
            "The same principle applies to businesses that use underground space, such as underground strawberry vertical farms: condensation, ventilation, drainage, and dehumidification are bound into one design to stabilize the whole space."
          ]
        }
      ],
      faq: [
        { q: "I added exhaust fans but mold keeps forming.", a: "If you don't lower the humidity (dew point) in the air, condensation and mold recur. In more humid seasons ventilation can backfire, so low-temperature dehumidification that keeps the space cold while removing moisture is key." },
        { q: "Can it be applied to underground spaces?", a: "Yes. Underground hinges on condensation, ventilation, and drainage conditions, which we manage together in one integrated design — including cases that use underground space for production and storage, such as underground strawberry vertical farms." },
        { q: "Can I keep my existing refrigeration unit and just add to it?", a: "After assessing your equipment capacity and operating method, we propose to fit your conditions, including making use of existing equipment." }
      ],
      ctaTitle: "We solve cold storage and warehouse condensation at the root.",
      ctaBody: "Tell us your storage type and mold/condensation situation, and our low-temp dehumidification HVAC team will review and reply directly.",
      lineupLabel: "Explore the AlphaCooling solution"
    }
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
    lineupLabel: "알파팜 솔루션 보기",
    categoryEn: "AlphaFarm",
    en: {
      title: "How Year-Round Strawberry Farming Works with a Vertical Farm",
      metaTitle: "Year-Round Strawberry Business with a Vertical Farm — AlphaFarm | CESeL Primus",
      description:
        "How to produce and sell premium strawberries all year regardless of season, and how AlphaFarm delivers cultivation, operations, and sales as a year-round strawberry business solution.",
      lead:
        "Strawberries have a short, weather-sensitive season, so supply concentrates in spring while summer and autumn prices climb. A strawberry vertical farm removes this 'season,' producing uniform premium strawberries year-round by precisely controlling the indoor environment.",
      sections: [
        {
          h: "A vertical farm removes the season",
          paras: [
            "A strawberry vertical farm grows strawberries at high density on stacked racks indoors. Because temperature, humidity, CO₂, light, and nutrients are precisely controlled, it harvests a stable, uniform crop year-round regardless of weather or season.",
            "Where open-field and greenhouse farming depend on climate, pests, and sunlight, a vertical farm 'designs the growing environment itself' — keeping sweetness, size, and shipping timing consistent, which suits the premium market."
          ]
        },
        {
          h: "Why 'year-round' is the core of the business",
          paras: [
            "Strawberry profit depends heavily on 'when you sell.' Prices are low when supply floods in season and premium when volume is scarce off-season. Year-round production gives pricing power through off-season supply and lets you deliver a consistent quality to fixed buyers — cafés, hotels, bakeries — all year.",
            "Not being tied to a season means revenue isn't concentrated in one period. Stable year-round supply raises both business predictability and buyer trust."
          ]
        },
        {
          h: "Key variables of the business",
          paras: ["A vertical-farm strawberry business isn't just about equipment — these four have to work together."],
          bullets: [
            "Environment control: temperature/humidity/CO₂/light tuned for strawberries, run stably",
            "Cultivation know-how: cultivar, nutrient, and growth management for sweetness and yield",
            "Operational continuity: an operating system that runs power, equipment, and data reliably",
            "Sales channels: retail and wholesale outlets that can command premium prices"
          ]
        },
        {
          h: "AlphaFarm — a year-round strawberry business solution",
          paras: [
            "CESeL Primus AlphaFarm doesn't just sell equipment — it takes responsibility for cultivation, operations, and sales as one package. Once a client decides to invest, it designs everything from the production base to operations and sales as one flow. Contracts start at one year and renew annually.",
            "It comprises AlphaCore (a modular vertical-farm production base), AlphaCafe (a farm-to-retail store model), an experience portfolio (hotels, showrooms, bakeries), and Alpha ContainerFarm (a compact validation model) — lowering the barrier so you can start even without growing experience."
          ]
        }
      ],
      faq: [
        { q: "Do vertical-farm strawberries taste worse than open-field?", a: "Because the environment is precisely controlled, sweetness and quality can be kept consistent — an advantage for uniform premium quality. Cultivar and nutrient/growth management drive the taste." },
        { q: "Can I start with no farming experience?", a: "AlphaFarm provides cultivation, operations, and sales as a package, so you can start even without experience, receiving operating know-how and systems. Operating training and protocols are provided." },
        { q: "How much is the initial investment and return?", a: "It varies widely by space, target output, sales channels, and region, so it can't be stated uniformly. Rather than guaranteeing returns, we assess on site and propose a fitting model and phased expansion plan." }
      ],
      ctaTitle: "We'll design your strawberry vertical farm business to fit your conditions.",
      ctaBody: "Tell us your space, target output, and sales channels, and the AlphaFarm team will review a year-round strawberry business model and reply directly.",
      lineupLabel: "Explore the AlphaFarm solution"
    }
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
    lineupLabel: "알파팜 솔루션 보기",
    categoryEn: "AlphaFarm",
    en: {
      title: "Turn Waste Heat and CO₂ into Premium Strawberry Revenue",
      metaTitle: "Waste Heat & CO₂ Circular Infrastructure — AlphaFarm Core | CESeL Primus",
      description:
        "How to convert waste heat and CO₂ from data centers, power plants, breweries, biogas, and industrial sites into productive resources for premium strawberry vertical farming — the AlphaFarm Core circular model.",
      lead:
        "Waste heat and CO₂ from data centers, power plants, breweries, biogas facilities, and industrial campuses have long been treated as burdens — permitting risk, ESG pressure, disposal cost. Under the right conditions, they can become productive inputs for premium strawberry vertical farming.",
      sections: [
        {
          h: "The AlphaFarm Core model turns burdens into assets",
          paras: [
            "CESeL Primus introduces the AlphaFarm Core Model — a circular infrastructure model that converts waste heat, conditioned CO₂, stable power, and idle land into high-value premium strawberry production. It is not a conventional smart-farm install, but a business model that solves several corporate challenges at once."
          ],
          bullets: [
            "Waste heat → thermal input for cooling and dehumidification support",
            "Conditioned CO₂ → growth input for premium strawberries",
            "Idle land → high-value food production space",
            "ESG pressure → a visible resource-circularity showcase",
            "Byproducts → premium strawberry revenue"
          ]
        },
        {
          h: "Where it can apply",
          paras: ["Each AlphaFarm Core module is designed to target more than 10 tons of premium strawberries a year, depending on cultivar and operating conditions."],
          bullets: ["SOFC-powered data centers", "CHP / CCGT power plants", "Breweries and fermentation plants", "Biogas and resource-recovery facilities", "Petrochemical and hydrogen production sites"]
        }
      ],
      faq: [
        { q: "Do you use raw flue gas directly?", a: "No. The model reviews whether captured, purified, and controlled CO₂ can be used as an agricultural input, and waste heat is separately checked for temperature and volume." },
        { q: "What kind of facilities are a good fit?", a: "Facilities with waste heat, purifiable CO₂, stable power, and available land are worth reviewing. We assess feasibility for your specific conditions." }
      ],
      ctaTitle: "We'll review feasibility for facilities with waste heat and CO₂.",
      ctaBody: "Tell us your waste heat, CO₂, power, and idle-land conditions, and we'll review AlphaFarm Core feasibility and reply directly.",
      lineupLabel: "Explore the AlphaFarm solution"
    }
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
    lineupLabel: "알파팜 솔루션 보기",
    categoryEn: "AlphaFarm",
    en: {
      title: "AlphaFarm Core-20 for SOFC Data Centers — By the Numbers",
      metaTitle: "AlphaFarm Core-20 × SOFC Data Center — The Business Case | CESeL Primus",
      description:
        "The AlphaFarm Core-20 model linked with SOFC data centers, by the numbers — a large-scale premium strawberry vertical farm with strong CAPEX and OPEX improvements.",
      lead:
        "Among the AlphaFarm Core models that convert waste heat and CO₂ into productive resources, here is the Core-20 model linked with SOFC data centers — a large-scale premium strawberry vertical farm of roughly 3,300 ㎡.",
      sections: [
        {
          h: "Core-20, by the numbers",
          paras: ["The point isn't an ESG image — it's a business model that can improve both CAPEX and OPEX structure."],
          bullets: [
            "Estimated annual output: 200–240 tons",
            "Benchmark price KRW 30,000/kg · est. annual revenue ~KRW 6.0–7.2 billion",
            "CAPEX reduction ~35% by sharing utility infrastructure",
            "Power cost up to 45% cut · heat-rejection power 60%+ reduction target",
            "Zero external CO₂ purchase · ~438 tons/year CO₂ reuse potential"
          ]
        },
        {
          h: "Not a farm next to a data center — an infrastructure that closes the loop",
          paras: ["AlphaFarm Core-20 is a resource-circularity layer that closes the power, heat, and CO₂ loop of an SOFC data center. For the operator, waste heat and CO₂ turn from burdens into ERE performance, ESG value, and premium food production."]
        }
      ],
      faq: [
        { q: "Are the stated revenue and returns guaranteed?", a: "They are review estimates that vary by operating conditions, cultivar, and region. Rather than guaranteeing returns, we assess business viability for your site." },
        { q: "How is it different from a standard Core-20?", a: "By sharing the data center's heat-rejection, piping, and metering utility infrastructure, installation CAPEX can be reduced by about 35%." }
      ],
      ctaTitle: "We'll review the data-center-linked model for your conditions.",
      ctaBody: "Tell us your power, waste heat, CO₂, and site conditions, and we'll assess the Core-20 linked model's viability and reply directly.",
      lineupLabel: "Explore the AlphaFarm solution"
    }
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
    lineupLabel: "알파팜 솔루션 보기",
    categoryEn: "AlphaFarm",
    en: {
      title: "AlphaCafe — A Farm-to-Retail Model Linking Production and Retail",
      metaTitle: "AlphaCafe Farm-to-Retail Model — Premium Strawberries | CESeL Primus",
      description:
        "The AlphaFarm + AlphaCafe model that combines a premium strawberry production base with café retail — selling strawberries directly as cakes, desserts, drinks, fresh packs, and gifts.",
      lead:
        "AlphaCafe can be configured in several formats, including a store-only model with an Alpha grow unit and an integrated AlphaFarm + AlphaCafe model. This post introduces the AlphaFarm + AlphaCafe model that combines production and retail.",
      sections: [
        {
          h: "Production, sales, and customer experience as one",
          paras: [
            "It combines a premium strawberry production base with café retail, selling freshly grown strawberries directly as cakes, desserts, drinks, fresh packs, and premium gift items. Connecting the grow room, work room, and store into one business space links production, retail, and customer experience.",
            "AlphaCafe is not just a café. It is a new commercialization model that combines premium strawberry production with retail."
          ]
        }
      ],
      faq: [
        { q: "How is it different from a regular café?", a: "It isn't just a sales store — it combines premium strawberry 'production' and 'retail' in one space as a commercialization model, configured from a store-only format to a production-base-integrated format to fit your conditions." }
      ],
      ctaTitle: "We'll design the AlphaCafe model to fit your space and channels.",
      ctaBody: "Tell us your available space and sales channels, and we'll review an AlphaCafe farm-to-retail model and reply directly.",
      lineupLabel: "Explore the AlphaFarm solution"
    }
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
    lineupLabel: "알파팜 솔루션 보기",
    categoryEn: "AlphaFarm",
    en: {
      title: "AlphaFarm High-Density Cultivation Rack Technology",
      metaTitle: "AlphaFarm High-Density Strawberry Cultivation Rack | CESeL Primus",
      description:
        "AlphaFarm's high-density strawberry vertical cultivation rack — a wide 1.8 m internal design delivering even light, nutrients, and airflow — and the DSRP year-round production protocol.",
      lead:
        "The AlphaFarm rack isn't just a structure for planting more strawberries. With a wide 1.8 m internal design, it delivers light, nutrients, and airflow evenly across the rack while keeping good workability — a high-density strawberry vertical cultivation system.",
      sections: [
        {
          h: "High-density rack + core technologies",
          paras: ["The standard model supports 7 tiers / 224 plants, and the dense model up to 14 tiers / 448 plants, with technologies for optimized lighting, layered airflow, metered nutrients, and growing-media trays."],
          bullets: [
            "Standard 7 tiers / 224 plants · dense 14 tiers / 448 plants",
            "FlexiLight, AirSpine, DualFlow-Loop, and SmartTray-4 technologies",
            "Combined with 15°C / 50%RH low-temperature dehumidification (AlphaCooling)",
            "Combined with power-saving technology (AlphaEnergy)",
            "Uniform growth · lower disease risk · better work efficiency"
          ]
        },
        {
          h: "DSRP year-round production protocol",
          paras: ["DSRP, the seedling-replacement year-round production protocol, combines quarterly 25% seedling replacement with vertical-farm seedling raising and flowering-seedling cultivation to minimize harvest gaps and support stable year-round production."]
        }
      ],
      faq: [
        { q: "How many plants fit on one rack?", a: "The standard model supports 7 tiers / 224 plants and the dense model up to 14 tiers / 448 plants, configured to your ceiling height and operating conditions." }
      ],
      ctaTitle: "We'll design a high-density rack to fit your site.",
      ctaBody: "Tell us your ceiling height and target output, and we'll review rack configuration and operation and reply directly.",
      lineupLabel: "Explore the AlphaFarm solution"
    }
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
    lineupLabel: "알파팜 솔루션 보기",
    categoryEn: "AlphaFarm",
    en: {
      title: "AlphaFarm Core Model for Breweries and Fermentation Plants",
      metaTitle: "AlphaFarm Core × Breweries and Fermentation Plants | CESeL Primus",
      description:
        "The AlphaFarm Core 1–3 model that connects fermentation CO₂, waste heat, power, idle space, and sales channels with premium strawberry production for breweries and fermentation plants.",
      lead:
        "Breweries and fermentation plants generate CO₂ during fermentation and often have idle space, existing power infrastructure, and direct retail channels. This Core 1–3 model connects those resources with premium strawberry production.",
      sections: [
        {
          h: "New revenue from existing resources",
          paras: [
            "AlphaFarm Core 1–3 uses fermentation CO₂, usable waste heat, existing power, idle space, and sales channels to grow premium strawberries, then links them to desserts, beverages, direct retail, and visitor-based content — a practical small-to-mid model.",
            "The point isn't a large-scale infrastructure project. It's a realistic Core model that builds a premium food production base and new revenue from the space and channels you already have."
          ]
        }
      ],
      faq: [
        { q: "What should be reviewed before applying?", a: "Fermentation CO₂ quality, waste-heat temperature and volume, available power capacity, installation space, and sales channels are reviewed together before we propose a fitting model." }
      ],
      ctaTitle: "We'll review a brewery/fermentation link with your resources.",
      ctaBody: "Tell us your fermentation CO₂, waste heat, space, and channels, and we'll review a Core link model and reply directly.",
      lineupLabel: "Explore the AlphaFarm solution"
    }
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
    lineupLabel: "알파팜 솔루션 보기",
    categoryEn: "AlphaFarm",
    en: {
      title: "AlphaFarm Core CHP & Combined-Cycle Power Plant Integration Model",
      metaTitle: "AlphaFarm Core × CHP / CCPP Power Plant Integration | CESeL Primus",
      description:
        "The AlphaFarm Core 5 pilot model that connects a power plant's captured and purified CO₂, waste heat, power, and idle land with premium strawberry production.",
      lead:
        "Power plants often have capturable, purifiable CO₂, usable waste heat, power infrastructure, and available land. The AlphaFarm Core 5 model connects these resources with premium strawberry production as a pilot-scale integration model.",
      sections: [
        {
          h: "A Core 5 pilot model",
          paras: [
            "Based on Core 5, the model can be reviewed for annual production of 50 tons or more and revenue potential of roughly KRW 1.5 billion. Importantly, it does not use raw flue gas directly — CO₂ must be captured, purified, and controlled before agricultural use is considered, and waste heat is separately checked for temperature and volume.",
            "It is not a large-scale carbon-reduction facility, but a practical resource-utilization model that creates premium food production, food-and-beverage linkage, visitor content, and visible circular-resource value from a power plant's resources."
          ]
        }
      ],
      faq: [
        { q: "Do you use the power plant's flue gas directly?", a: "No. It reviews the agricultural use of captured, purified, and controlled CO₂, and waste heat is separately checked for temperature and volume conditions." }
      ],
      ctaTitle: "We'll review a power-plant link based on your resources.",
      ctaBody: "Tell us your CO₂, waste heat, power, and site conditions, and we'll review a power-plant integration pilot and reply directly.",
      lineupLabel: "Explore the AlphaFarm solution"
    }
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
    lineupLabel: "알파팜 솔루션 보기",
    categoryEn: "AlphaFarm",
    en: {
      title: "AlphaFarm Core Petrochemical / Hydrogen Production Integration Model",
      metaTitle: "AlphaFarm Core × Petrochemical / Hydrogen Production | CESeL Primus",
      description:
        "The AlphaFarm Core 3–10 strategic model that connects captured and purified CO₂, waste heat, power, and land from petrochemical complexes and hydrogen production sites with premium strawberry production.",
      lead:
        "Petrochemical complexes and hydrogen production sites hold valuable industrial resources — CO₂, waste heat, power infrastructure, and land. The AlphaFarm Core 3–10 model connects these with premium strawberry production.",
      sections: [
        {
          h: "A premium food-production showcase inside industrial sites",
          paras: [
            "The model can be reviewed around Core 3–10; based on Core 10, it targets annual production of more than 100 tons and revenue potential of roughly KRW 3 billion.",
            "By linking captured, purified, and controlled CO₂ and usable waste heat with high-value food production, it can build a visible showcase for carbon utilization, food security, and premium food production inside or near industrial sites."
          ]
        }
      ],
      faq: [
        { q: "What is checked when reviewing?", a: "CO₂ quality, waste-heat temperature and volume, available power capacity, site conditions, safety and permitting, operating structure, and sales channels are reviewed together to assess feasibility." }
      ],
      ctaTitle: "We'll review a petrochemical/hydrogen link strategically.",
      ctaBody: "Tell us your CO₂, waste heat, power, site, and permitting conditions, and we'll review a Core 3–10 link model and reply directly.",
      lineupLabel: "Explore the AlphaFarm solution"
    }
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

// 예약 발행: publishAt(없으면 date)이 오늘 이하인 글만 공개.
export function isLive(a: Article, today: string = new Date().toISOString().slice(0, 10)): boolean {
  return (a.publishAt ?? a.date) <= today;
}
export const liveArticles = (today?: string) => articles.filter((a) => isLive(a, today));

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
