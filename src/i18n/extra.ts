import type { Lang } from './config';

// Copy for the model catalogue and a few later additions, one block per language.
export interface ExtraCopy {
  stockTitle: string;
  stockLede: string;
  stockNote: string;
  years: string;
  drive: string;
  gradesTitle: string;
  engine: string;
  noGrades: string;
  filterLabel: string;
  filterAll: string;
  filterTurbo: string;
  filterNa: string;
  turbo: string;
  twin: string;
  na: string;
  alsoTitle: string;
  request: string;
  representative: string;
  representativeName: string;
  workAlt: string;
  licence: string;
  founded: string;
  teamTitle: string;
  testimonialsTitle: string;
  transitTitle: string;
  transitNote: string;
  feesTitle: string;
  followUs: string;
}

const REP_EN = 'Kosei Kato (加藤 光成)';

export const extra: Record<Lang, ExtraCopy> = {
  en: {
    stockTitle: 'Models we source.',
    stockLede: 'The models dealers ask us for most often, with their main factory grades. We source each vehicle to your specification and quote it individually.',
    stockNote: 'Grades and engines are the main factory specifications. Availability depends on auctions and dealers. We send photos, video and the auction sheet of the actual vehicle with every quote.',
    years: 'Model years',
    drive: 'Drive',
    gradesTitle: 'Grades',
    engine: 'Engine',
    noGrades: 'Grades on request',
    filterLabel: 'Engine type',
    filterAll: 'All',
    filterTurbo: 'Turbo',
    filterNa: 'Naturally aspirated',
    turbo: 'Turbo',
    twin: 'Twin turbo',
    na: 'NA',
    alsoTitle: 'Also available on request',
    request: 'Request this model',
    representative: 'Representative',
    representativeName: REP_EN,
    workAlt: 'Export documents, car keys and an auction sheet on a desk',
    licence: 'Dealer licence',
    founded: 'Established',
    teamTitle: 'Our team',
    testimonialsTitle: 'Customer comments',
    transitTitle: 'Typical transit times',
    transitNote: 'Estimates only. The actual schedule is confirmed for each shipment.',
    feesTitle: 'Fees',
    followUs: 'Follow us',
  },
  pt: {
    stockTitle: 'Modelos que buscamos.',
    stockLede: 'Os modelos mais pedidos pelos revendedores, com as principais versões de fábrica. Buscamos cada veículo conforme a sua especificação e cotamos individualmente.',
    stockNote: 'Versões e motores são as especificações principais de fábrica. A disponibilidade depende de leilões e revendedores. Enviamos fotos, vídeo e a ficha de leilão do veículo real com cada cotação.',
    years: 'Anos do modelo',
    drive: 'Tração',
    gradesTitle: 'Versões',
    engine: 'Motor',
    noGrades: 'Versões sob consulta',
    filterLabel: 'Tipo de motor',
    filterAll: 'Todos',
    filterTurbo: 'Turbo',
    filterNa: 'Aspirado',
    turbo: 'Turbo',
    twin: 'Biturbo',
    na: 'Aspirado',
    alsoTitle: 'Também disponíveis sob consulta',
    request: 'Solicitar este modelo',
    representative: 'Representante',
    representativeName: REP_EN,
    workAlt: 'Documentos de exportação, chaves e uma ficha de leilão sobre a mesa',
    licence: 'Licença de comerciante',
    founded: 'Fundação',
    teamTitle: 'Nossa equipe',
    testimonialsTitle: 'Comentários de clientes',
    transitTitle: 'Prazos de trânsito típicos',
    transitNote: 'Estimativas. O cronograma real é confirmado a cada embarque.',
    feesTitle: 'Taxas',
    followUs: 'Siga-nos',
  },
  zh: {
    stockTitle: '常见采购车型。',
    stockLede: '经销商最常询问的车型及其主要原厂车型级别。我们按您的规格逐台采购，并单独报价。',
    stockNote: '级别与发动机为原厂主要规格。能否采购取决于拍卖和经销商的实际车源。每次报价我们都会提供实车照片、视频及拍卖检查表。',
    years: '年款',
    drive: '驱动',
    gradesTitle: '车型级别',
    engine: '发动机',
    noGrades: '级别请咨询',
    filterLabel: '发动机类型',
    filterAll: '全部',
    filterTurbo: '涡轮增压',
    filterNa: '自然吸气',
    turbo: '涡轮增压',
    twin: '双涡轮增压',
    na: '自然吸气',
    alsoTitle: '其他可按需采购的车型',
    request: '询价此车型',
    representative: '代表人',
    representativeName: REP_EN,
    workAlt: '桌上的出口文件、车钥匙和拍卖检查表',
    licence: '古物商许可证',
    founded: '成立',
    teamTitle: '团队',
    testimonialsTitle: '客户评价',
    transitTitle: '常见运输时间',
    transitNote: '仅为估计。实际时间按每次出运确认。',
    feesTitle: '费用',
    followUs: '关注我们',
  },
  ko: {
    stockTitle: '주요 취급 차종.',
    stockLede: '딜러분들이 가장 많이 문의하시는 차종과 주요 공식 등급입니다. 요청하신 사양에 맞춰 차량을 찾고 개별 견적을 드립니다.',
    stockNote: '등급과 엔진은 공식 주요 사양입니다. 구입 가능 여부는 경매와 딜러 매물에 따라 달라집니다. 견적 시 실제 차량의 사진, 영상, 경매 평가표를 함께 보내 드립니다.',
    years: '연식',
    drive: '구동',
    gradesTitle: '등급',
    engine: '엔진',
    noGrades: '등급은 문의 바랍니다',
    filterLabel: '엔진 유형',
    filterAll: '전체',
    filterTurbo: '터보',
    filterNa: '자연흡기',
    turbo: '터보',
    twin: '트윈터보',
    na: '자연흡기',
    alsoTitle: '그 외 문의 시 조달 가능한 차종',
    request: '이 차종 문의',
    representative: '대표자',
    representativeName: REP_EN,
    workAlt: '책상 위의 수출 서류, 차 키, 경매 평가표',
    licence: '고물상 허가',
    founded: '설립',
    teamTitle: '팀',
    testimonialsTitle: '고객 후기',
    transitTitle: '일반적인 운송 기간',
    transitNote: '추정치입니다. 실제 일정은 선적마다 확인해 드립니다.',
    feesTitle: '수수료',
    followUs: '팔로우',
  },
  ja: {
    stockTitle: '主な取扱車種。',
    stockLede: 'お問い合わせの多い車種と、主な純正グレードです。ご希望の仕様に合わせて一台ずつお探しし、個別にお見積もりいたします。',
    stockNote: 'グレードとエンジンは、主な純正仕様です。仕入れの可否は、オークションや業者の在庫状況によります。お見積もりの際に、実車の写真・動画・オークション評価書をお送りいたします。',
    years: '年式',
    drive: '駆動',
    gradesTitle: 'グレード',
    engine: 'エンジン',
    noGrades: 'グレードはお問い合わせください',
    filterLabel: 'エンジン形式',
    filterAll: 'すべて',
    filterTurbo: 'ターボ',
    filterNa: '自然吸気',
    turbo: 'ターボ',
    twin: 'ツインターボ',
    na: '自然吸気',
    alsoTitle: 'ご相談いただければ仕入れ可能な車種',
    request: 'この車種を問い合わせる',
    representative: '代表者',
    representativeName: '加藤 光成',
    workAlt: '机の上の輸出書類、車のキー、オークション評価書',
    licence: '古物商許可',
    founded: '設立',
    teamTitle: 'スタッフ',
    testimonialsTitle: 'お客様の声',
    transitTitle: '輸送期間の目安',
    transitNote: 'あくまで目安です。実際の日程は、出荷ごとにご案内いたします。',
    feesTitle: '手数料',
    followUs: 'SNS・動画',
  },
};
