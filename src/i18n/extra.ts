import type { Lang } from './config';

// Copy added after the main translations. Kept per language in one place.
export interface ExtraCopy {
  stockTitle: string;
  stockLede: string;
  illustrative: string;
  years: string;
  status: string;
  stockNote: string;
  representative: string;
  representativeName: string;
  workAlt: string;
}

const REP_EN = 'Kosei Kato (加藤 光成)';

export const extra: Record<Lang, ExtraCopy> = {
  en: {
    stockTitle: 'Models we source.',
    stockLede: 'Models dealers ask us for most often. We source each vehicle to your specification and quote it individually.',
    illustrative: 'Illustrative image',
    years: 'Model years',
    status: 'Sourced to order',
    stockNote: 'Images show the model type, not a specific vehicle. We send photos, video and the auction sheet of the actual vehicle with every quote.',
    representative: 'Representative',
    representativeName: REP_EN,
    workAlt: 'Export documents, car keys and an auction sheet on a desk',
  },
  pt: {
    stockTitle: 'Modelos que buscamos.',
    stockLede: 'Os modelos mais pedidos pelos revendedores. Buscamos cada veículo conforme a sua especificação e cotamos individualmente.',
    illustrative: 'Imagem ilustrativa',
    years: 'Anos do modelo',
    status: 'Sob encomenda',
    stockNote: 'As imagens mostram o tipo de modelo, não um veículo específico. Enviamos fotos, vídeo e a ficha de leilão do veículo real com cada cotação.',
    representative: 'Representante',
    representativeName: REP_EN,
    workAlt: 'Documentos de exportação, chaves e uma ficha de leilão sobre a mesa',
  },
  zh: {
    stockTitle: '常见采购车型。',
    stockLede: '经销商最常询问的车型。我们按您的规格逐台采购，并单独报价。',
    illustrative: '示意图',
    years: '年款',
    status: '按需采购',
    stockNote: '图片仅示意车型，并非具体车辆。每次报价我们都会提供实车照片、视频及拍卖检查表。',
    representative: '代表人',
    representativeName: REP_EN,
    workAlt: '桌上的出口文件、车钥匙和拍卖检查表',
  },
  ko: {
    stockTitle: '주요 취급 차종.',
    stockLede: '딜러분들이 가장 많이 문의하는 차종입니다. 요청하신 사양에 맞춰 차량을 찾고 개별 견적을 드립니다.',
    illustrative: '이미지 예시',
    years: '연식',
    status: '주문 조달',
    stockNote: '이미지는 차종 예시이며 특정 차량이 아닙니다. 견적 시 실제 차량의 사진, 영상, 경매 평가표를 함께 보내 드립니다.',
    representative: '대표자',
    representativeName: REP_EN,
    workAlt: '책상 위의 수출 서류, 차 키, 경매 평가표',
  },
  ja: {
    stockTitle: '主な取扱車種。',
    stockLede: 'お問い合わせの多い車種です。ご希望の仕様に合わせて一台ずつお探しし、個別にお見積もりいたします。',
    illustrative: 'イメージ画像',
    years: '年式',
    status: 'ご注文に応じて仕入れ',
    stockNote: '画像は車種のイメージで、特定の車両ではありません。お見積もりの際に、実車の写真・動画・オークション評価書をお送りいたします。',
    representative: '代表者',
    representativeName: '加藤 光成',
    workAlt: '机の上の輸出書類、車のキー、オークション評価書',
  },
};
