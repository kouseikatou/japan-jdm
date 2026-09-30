import type { PartialDict } from './index';

const address = 'Lions Mansion Room 1065, 50-5 Nankin-dori, Nagoya, Aichi, Japan';
const phone = '050-1785-7272';
const email = 'info@japan-jdm.com';

export const ko: PartialDict = {
  meta: {
    defaultDescription:
      'Japan JDM은 나고야에서 일본 중고차를 수출합니다. 딜러와 수입업체를 위한 경매 매입, 점검, 수출 서류, 운송.',
    home: {
      title: 'Japan JDM | 나고야 일본 중고차 수출',
      description: '나고야에서 일본 중고차를 수출합니다. 경매 매입, 점검, 수출 서류, 운송을 진행합니다.',
    },
    inventory: {
      title: '재고 | Japan JDM',
      description: '나고야에서 수출 가능한 JDM 차량을 차대 번호와 사양과 함께 소개합니다.',
    },
    services: {
      title: '구매 절차 | Japan JDM',
      description: '문의부터 인도까지 다섯 단계. 나고야에서 차량을 매입, 점검, 선적하는 절차입니다.',
    },
    shipping: {
      title: '운송 및 결제 | Japan JDM',
      description: '나고야 출발 수출 차량의 거래 조건, 결제 방법, 운송, 수출 서류를 안내합니다.',
    },
    about: {
      title: '회사 소개 | Japan JDM',
      description: '아이치현 나고야에 있는 차량 수출 회사 Japan JDM을 소개합니다.',
    },
    contact: {
      title: '차량 문의 | Japan JDM',
      description: '필요한 차량을 알려 주시면 나고야에서 매입하고 확인한 뒤 견적을 보내 드립니다.',
    },
  },

  nav: {
    label: '주 메뉴',
    stock: '재고',
    howToBuy: '구매 절차',
    shipping: '운송 및 결제',
    about: '회사 소개',
    quote: '차량 문의',
    language: '언어',
  },

  footer: {
    explore: '둘러보기',
    contact: '연락처',
    note: '차량은 일본 수출용으로 판매합니다. 별도 견적이 없는 한 가격에는 해상 운임, 해상 보험, 수입 관세, 현지 등록 비용이 포함되지 않습니다.',
    phoneLabel: '전화',
  },

  home: {
    eyebrow: '일본 나고야',
    headline: ['일본 차량을,', '나고야에서 매입하고', '서류까지 갖춥니다.'],
    lede: '차량을 찾고, 상태를 점검하고, 수출 서류를 준비한 뒤 나고야항에서 선적합니다.',
    search: {
      label: '필요한 차량을 알려 주시기 바랍니다',
      make: '제조사 / 모델',
      makePlaceholder: '예: Skyline GT-R',
      year: '연식 (시작)',
      yearOptions: [
        { value: '', label: '연식 무관' },
        { value: '1990', label: '1990' },
        { value: '1995', label: '1995' },
        { value: '2000', label: '2000' },
        { value: '2005', label: '2005' },
      ],
      submit: '이 차량 문의하기',
    },
    browseStock: '재고 보기',
    proof: [
      { title: '아이치현 나고야', text: '일본 중부에서 사무실과 항구를 가까이 두고 있습니다.' },
      { title: 'FOB 또는 CFR', text: '모든 견적에 거래 조건을 명시합니다.' },
      { title: '경매 시트 공유', text: '원본 시트와 번역본을 함께 제공합니다.' },
      { title: '수출 서류', text: '선적하는 모든 차량에 대해 준비합니다.' },
    ],
    featured: {
      eyebrow: '재고',
      title: '주요 차량',
      lede: '공급 가능한 차량 중 일부입니다. 대부분은 주문에 맞춰 매입합니다.',
      viewAll: '전체 재고 보기',
    },
    categories: {
      eyebrow: '둘러보기',
      title: '차종별',
      items: [
        { value: 'Sports coupe', label: '스포츠카 및 쿠페' },
        { value: 'Kei truck / van', label: '경트럭 및 경밴' },
        { value: 'SUV / 4x4', label: 'SUV 및 4x4' },
        { value: 'Sedan / wagon', label: '세단 및 왜건' },
        { value: 'Classic (25 years+)', label: '클래식 (25년 이상)' },
      ],
    },
    whatWeDo: {
      eyebrow: '업무 내용',
      title: ['매입, 점검,', '수출.'],
      illustrationAlt: '일본 스포츠 쿠페의 기술 선화',
      services: [
        {
          title: '매입',
          text: '지정하신 차대, 등급, 예산에 맞춰 일본 경매와 딜러 네트워크에서 차량을 찾습니다.',
        },
        {
          title: '점검',
          text: '경매 시트를 번역하고 후보 차량을 확인합니다. 결정 전에 사진과 영상을 보내 드립니다.',
        },
        {
          title: '수출',
          text: '말소 등록, 수출 서류, 나고야항에서의 선적(로로선(RoRo) 또는 컨테이너)을 처리합니다.',
        },
      ],
    },
    buy: {
      eyebrow: '구매 절차',
      title: '다섯 단계, 서면으로 진행합니다.',
      link: '전체 절차 보기',
    },
    terms: {
      eyebrow: '거래 조건',
      title: '결제 전에 조건을 명확히 합니다.',
      link: '운송 및 결제 상세',
      rows: [
        { label: '거래 조건', value: 'FOB 또는 CFR 나고야. 차량별로 견적합니다.' },
        { label: '결제', value: '은행 송금(T/T). 은행 정보는 인보이스에 기재합니다.' },
        { label: '운송', value: '나고야항 출발, 로로선(RoRo) 또는 컨테이너.' },
        { label: '서류', value: 'Export Certificate, Commercial Invoice, Bill of Lading.' },
        { label: '포함되지 않는 항목', value: '별도 견적이 없는 한 해상 운임과 해상 보험. 수입 관세와 현지 등록.' },
      ],
    },
    port: {
      eyebrow: '나고야항',
      title: ['사무실에서', '고객의 야적장까지.'],
      text: '차량은 일본 중부의 주요 차량 수출항 중 하나인 나고야항에서 선적합니다. 항로와 일정은 견적에서 선적별로 확인해 드립니다.',
      photoAlt: '일본의 항구에서 car carrier 옆 부두에 줄지어 선 차량들',
    },
    company: {
      eyebrow: '회사',
      title: 'Japan JDM',
      more: '회사 소개',
      rows: [
        { label: '사업 내용', value: '일본 중고차 수출' },
        { label: '주소', value: address },
        { label: '전화', value: phone },
        { label: '이메일', value: email },
      ],
    },
    safety: {
      eyebrow: '결제 안전',
      title: '결제 전에 확인해야 합니다.',
      items: [
        { title: '이메일로 확인', text: '송금 전에 인보이스와 은행 정보를 info@japan-jdm.com으로 문의해 확인해야 합니다.' },
        { title: '회사 확인', text: '당사의 회사 정보를 요청하여 별도로 검증해야 합니다.' },
        { title: '낮은 가격에 유의', text: '시세보다 크게 낮은 가격은 어느 웹사이트에서든 경고 신호입니다.' },
      ],
    },
    faqTitle: '자주 묻는 질문',
    faqEyebrow: 'FAQ',
    cta: {
      eyebrow: '차량 문의',
      title: ['사양을 알려 주시기 바랍니다.', '매입, 확인 후 견적드립니다.'],
      text: '모델, 연식 범위, 등급, 예산을 보내 주시면 이메일로 후보 차량과 도착 총비용 예상액을 회신합니다.',
      button: '차량 문의',
    },
  },

  inventory: {
    eyebrow: '재고',
    title: '보유 및 매입 가능 차량',
    lede: '공급 가능한 차량 중 일부입니다. 재고는 자주 바뀌며 대부분 주문에 맞춰 매입합니다. 목록에 없는 차량도 문의해 주시기 바랍니다.',
    photoSoon: '사진은 요청 시 제공',
    sample: '샘플 목록',
    fields: {
      chassis: '차대',
      year: '연식',
      mileage: '주행거리',
      trans: '변속기',
      drive: '구동',
      steering: '핸들',
      location: '위치',
      price: '가격',
    },
    steeringRight: '우핸들',
    price: '견적 문의',
    priceNote: 'FOB 나고야, 차량별 견적',
    request: '견적 요청',
    note: '레이아웃을 보여 주는 샘플 목록입니다. 사진, 경매 시트, 가격이 포함된 실제 재고로 교체될 예정입니다.',
    cta: '차량 문의',
  },

  services: {
    eyebrow: '구매 절차',
    title: '다섯 단계, 서면으로 진행합니다.',
    lede: '문의부터 인도까지의 절차입니다. 정확한 비용과 일정은 차량별 견적에서 확인해 드립니다.',
    steps: [
      { title: '문의 접수', text: '모델, 연식 범위, 등급, 예산을 알려 주시면 후보 차량과 도착 총비용 예상액을 회신합니다.' },
      { title: '매입 및 점검', text: '경매와 딜러 네트워크에서 차량을 찾고, 경매 시트를 번역하고, 후보 차량을 확인합니다.' },
      { title: '차량 승인', text: '사진, 영상, 상태 점검 보고서를 검토하신 뒤 특정 차량 한 대를 승인합니다. 결제 전에 조건을 확인합니다.' },
      { title: '결제 및 수출', text: '당사 인보이스에 따라 결제합니다. 당사가 말소 등록을 처리하고 수출 서류를 준비합니다.' },
      { title: '운송 및 인도', text: '나고야항에서 선적하고 선적 서류를 보내 드립니다. 통관과 인수는 고객께서 진행합니다.' },
    ],
    documentsTitle: '제공하는 서류',
    documents: [
      '경매 시트와 번역본 (경매 출품 차량의 경우)',
      '차량 사진 및 영상',
      'Commercial Invoice',
      'Export Certificate',
      'Bill of Lading',
    ],
    startQuote: '차량 문의',
    faqEyebrow: 'FAQ',
    faqTitle: '자주 묻는 질문',
    faqs: [
      {
        q: '미국의 25년 규정이란 무엇입니까?',
        a: '일반적으로 25년 이상 된 차량은 현행 연방 안전 및 배출가스 기준을 충족하지 않아도 미국에 수입할 수 있습니다. 주별로도 규정이 다르므로 구매 전에 해당 주의 요건을 확인해야 합니다.',
      },
      {
        q: '견적에는 무엇이 포함됩니까?',
        a: '견적서에 차량 가격, 당사 수수료, 수출 비용, 고객 항구까지의 운송비를 기재합니다. 계약 전에 도착 총비용 예상액을 확인하실 수 있습니다. 관세와 현지 등록은 고객 측에서 처리합니다.',
      },
      {
        q: '결제 전에 차량을 확인할 수 있습니까?',
        a: '사진, 영상, 번역한 경매 시트 또는 상태 점검 보고서를 보내 드립니다. 당사가 매입하기 전에 고객께서 특정 차량을 승인합니다.',
      },
      {
        q: '기간은 얼마나 걸립니까?',
        a: '차량, 경매 일정, 운송 경로에 따라 다릅니다. 예상 일정은 견적에 기재합니다.',
      },
      {
        q: '재고 목록에 없는 차량도 찾을 수 있습니까?',
        a: '가능합니다. 대부분의 업무가 주문 매입입니다. 모델, 연식 범위, 등급, 예산을 알려 주시기 바랍니다.',
      },
    ],
    faqCta: '질문하기',
  },

  shipping: {
    eyebrow: '운송 및 결제',
    title: '결제 전에 조건을 서면으로 안내합니다.',
    lede: '나고야 출발 수출 차량의 주요 조건입니다. 차량별 정확한 조건은 견적서와 인보이스에 기재합니다.',
    sections: [
      {
        title: '거래 조건',
        text: 'FOB 또는 CFR 나고야로 견적합니다. FOB는 차량 가격과 항구 선적까지의 수출 처리 비용을 포함합니다. CFR은 도착 항구까지의 해상 운임이 추가됩니다. 어느 조건이 적용되는지 견적에 명시합니다.',
      },
      {
        title: '결제',
        text: '당사 인보이스에 따라 은행 송금(T/T)으로 결제합니다. 은행 정보는 인보이스에 기재합니다. 송금 전에 이메일로 당사에 확인해 주시기 바랍니다.',
      },
      {
        title: '운송',
        text: '차량은 나고야항에서 로로선(RoRo) 또는 컨테이너로 선적합니다. 항로와 예상 일정은 견적에서 선적별로 확인해 드립니다.',
      },
      {
        title: '서류',
        text: '차량마다 Commercial Invoice, Export Certificate, Bill of Lading을 준비합니다. 도착 국가에서 요구하는 경우 다른 서류도 요청에 따라 추가할 수 있습니다.',
      },
      {
        title: '포함되지 않는 항목',
        text: '견적에 별도 기재가 없는 한 가격에는 해상 운임, 해상 보험, 수입 관세, 세금, 고객 국가의 현지 등록 및 검사 비용이 포함되지 않습니다.',
      },
    ],
    safetyTitle: '결제 안전',
    safety: [
      '송금 전에 인보이스와 은행 정보를 info@japan-jdm.com으로 문의해 확인해야 합니다.',
      '모든 연락 내용과 인보이스를 서면으로 보관해 두시기 바랍니다.',
      '시세보다 크게 낮은 가격은 어느 웹사이트에서든 경고 신호로 봐야 합니다.',
    ],
    cta: '차량 문의',
  },

  about: {
    eyebrow: '회사 소개',
    title: ['나고야의', '차량 수출 회사.'],
    paragraphs: [
      'Japan JDM은 일본 자동차 산업의 중심지이자 나고야항과 가까운 나고야에서 일본 중고차를 수출합니다. 해외 딜러와 수입업체와 직접 거래합니다.',
      '업무는 단순합니다. 적합한 차량을 찾고, 상태를 확인하고 기록하고, 수출 서류를 준비해 선적합니다.',
    ],
    companyTitle: '회사 정보',
    rows: [
      { label: '상호', value: 'Japan JDM' },
      { label: '사업 내용', value: '일본 중고차 수출' },
      { label: '주소', value: address },
      { label: '전화', value: phone },
      { label: '이메일', value: email },
    ],
    principlesTitle: '업무 방식',
    principles: [
      { title: '서면 확인', text: '조건, 가격, 차량 정보는 결제 전에 서면으로 확인합니다.' },
      { title: '기록 공유', text: '사진, 영상, 번역한 경매 시트를 공유합니다.' },
      { title: '구체적 표기', text: '차대 번호와 정확한 상태 설명을 사용하여 구매하시는 차량을 분명히 알 수 있게 합니다.' },
    ],
    cta: '차량 문의',
  },

  contact: {
    eyebrow: '연락처',
    title: '차량 문의',
    lede: '필요한 차량을 알려 주시기 바랍니다. 모든 문의는 나고야의 담당자가 직접 읽고 이메일로 회신합니다.',
    form: {
      name: '이름',
      email: '이메일',
      car: '필요한 차량',
      carPlaceholder: '예: R34 Skyline GT-R, 1999-2002, 6MT',
      budget: '예산 (차량 1대당)',
      budgetOptions: [
        { value: '', label: '미정' },
        { value: 'Under $15,000', label: '$15,000 미만' },
        { value: '$15,000 - $30,000', label: '$15,000 - $30,000' },
        { value: '$30,000 - $60,000', label: '$30,000 - $60,000' },
        { value: '$60,000+', label: '$60,000 이상' },
      ],
      region: '국가 / 지역',
      regionPlaceholder: '예: USA / California',
      company: '회사명 (선택)',
      message: '기타 문의 사항 (선택)',
      submit: '문의 보내기',
      sending: '전송 중...',
      success: '감사합니다. 문의를 접수했으며 이메일로 회신하겠습니다.',
      error: '오류가 발생했습니다. info@japan-jdm.com으로 직접 이메일을 보내 주시기 바랍니다.',
    },
    next: {
      title: '이후 진행 순서',
      steps: [
        { strong: '문의 내용을 확인합니다.', text: '경매와 딜러 네트워크를 조사합니다.' },
        { strong: '후보 차량을 보내 드립니다.', text: '사진, 등급, 도착 총비용 예상액을 함께 보내 드립니다.' },
        { strong: '결정은 고객께서 합니다.', text: '특정 차량을 승인하기 전까지 구속력은 없습니다.' },
      ],
      emailPrefix: '이메일로 문의하시겠습니까?',
    },
    detailsTitle: '당사 정보',
  },
};
