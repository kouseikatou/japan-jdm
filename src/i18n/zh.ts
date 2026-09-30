import type { PartialDict } from './index';

// Simplified Chinese (mainland). Vehicle names, chassis codes and form `value` fields stay in English.
// The `company` block is omitted on purpose so it falls back to English.
const address = 'Lions Mansion Room 1065, 50-5 Nankin-dori, Nagoya, Aichi, Japan';
const phone = '050-1785-7272';
const email = 'info@japan-jdm.com';

export const zh: PartialDict = {
  meta: {
    defaultDescription: 'Japan JDM 从名古屋出口日本二手车，为经销商和进口商提供拍卖采购、验车、出口手续与海运服务。',
    home: {
      title: 'Japan JDM | 名古屋日本二手车出口',
      description: 'Japan JDM 从名古屋出口日本二手车，为经销商和进口商提供拍卖采购、验车、出口手续与海运服务。',
    },
    inventory: {
      title: '库存 | Japan JDM',
      description: '可从日本名古屋出口的 JDM 精选车辆，附车型代码与规格。',
    },
    services: {
      title: '购买流程 | Japan JDM',
      description: '从询价到交付的五个步骤：Japan JDM 如何在名古屋采购、验车并装运车辆。',
    },
    shipping: {
      title: '运输与付款 | Japan JDM',
      description: '名古屋出口车辆的贸易条款、付款方式、运输及出口文件。',
    },
    about: {
      title: '关于我们 | Japan JDM',
      description: '关于 Japan JDM：一家位于爱知县名古屋的车辆出口公司。',
    },
    contact: {
      title: '车辆询价 | Japan JDM',
      description: '告诉我们您需要的车辆，我们在日本名古屋为您采购、核实并报价。',
    },
  },

  nav: {
    label: '主导航',
    stock: '库存',
    howToBuy: '购买流程',
    shipping: '运输与付款',
    about: '关于我们',
    quote: '车辆询价',
    language: '语言',
  },

  footer: {
    explore: '浏览',
    contact: '联系方式',
    note: '车辆为日本出口销售。除另有报价外，价格不含海运费、海运保险、进口关税及当地注册费用。',
    phoneLabel: '电话',
  },

  home: {
    eyebrow: '日本 名古屋',
    headline: ['日本车辆，', '在名古屋采购、', '备齐文件。'],
    lede: '我们负责寻找车辆、检查车况、准备出口文件，并从名古屋港装运。',
    search: {
      label: '告诉我们您的需求',
      make: '品牌 / 车型',
      makePlaceholder: '例如 Skyline GT-R',
      year: '起始年份',
      yearOptions: [
        { value: '', label: '不限年份' },
        { value: '1990', label: '1990' },
        { value: '1995', label: '1995' },
        { value: '2000', label: '2000' },
        { value: '2005', label: '2005' },
      ],
      submit: '询价此车',
    },
    browseStock: '浏览库存',
    proof: [
      { title: '爱知县 名古屋', text: '办公室位于日本中部，毗邻港口。' },
      { title: 'FOB 或 CFR', text: '每份报价均写明贸易条款。' },
      { title: '提供拍卖单', text: '附原始拍卖单及翻译。' },
      { title: '出口文件', text: '每台出口车辆均备齐文件。' },
    ],
    featured: {
      eyebrow: '库存',
      title: '精选车辆。',
      lede: '以下为部分可供车辆。大多数车辆按订单采购。',
      viewAll: '查看全部库存',
    },
    categories: {
      eyebrow: '浏览',
      title: '按类型。',
      items: [
        { value: 'Sports coupe', label: '跑车与双门轿跑' },
        { value: 'Kei truck / van', label: '轻型卡车与厢式车（Kei）' },
        { value: 'SUV / 4x4', label: 'SUV 与四驱车' },
        { value: 'Sedan / wagon', label: '轿车与旅行车' },
        { value: 'Classic (25 years+)', label: '经典车（车龄 25 年以上）' },
      ],
    },
    whatWeDo: {
      eyebrow: '我们的业务',
      title: ['采购、验车、', '出口。'],
      illustrationAlt: '日本跑车的技术线稿',
      services: [
        {
          title: '采购',
          text: '我们在日本拍卖会和经销商渠道中，按您指定的车型代码、评级和预算寻找车辆。',
        },
        {
          title: '验车',
          text: '我们翻译拍卖单并检查入围车辆。在您决定之前，会提供照片和视频。',
        },
        {
          title: '出口',
          text: '我们办理注销登记和出口文件，并在名古屋港以滚装船（RoRo）或集装箱方式装运。',
        },
      ],
    },
    buy: {
      eyebrow: '购买流程',
      title: '五个步骤，书面确认。',
      link: '查看完整流程',
    },
    terms: {
      eyebrow: '条款',
      title: '付款之前，条款清晰。',
      link: '运输与付款详情',
      rows: [
        { label: '贸易条款', value: 'FOB 或 CFR 名古屋，按车辆逐台报价。' },
        { label: '付款', value: '银行电汇（T/T）。银行信息见发票。' },
        { label: '运输', value: '从名古屋港以滚装船（RoRo）或集装箱运输。' },
        { label: '文件', value: '出口证明（Export Certificate）、商业发票（Commercial Invoice）、提单（Bill of Lading）。' },
        { label: '不含项目', value: '除非报价另有说明，不含海运费和海运保险。不含进口关税及当地注册费用。' },
      ],
    },
    port: {
      eyebrow: '名古屋港',
      title: ['从我们的办公室', '到您的场地。'],
      text: '车辆从名古屋港装运，该港是日本中部主要的车辆出口港之一。我们会在报价中确认每批货物的航线和船期。',
      photoAlt: '日本港口码头上，车辆整齐排列在汽车运输船旁',
    },
    company: {
      eyebrow: '公司',
      title: 'Japan JDM',
      more: '关于我们',
      rows: [
        { label: '业务', value: '日本二手车出口' },
        { label: '地址', value: address },
        { label: '电话', value: phone },
        { label: '邮箱', value: email },
      ],
    },
    safety: {
      eyebrow: '付款安全',
      title: '付款前请先核实。',
      items: [
        { title: '邮件确认', text: '汇款前，请通过 info@japan-jdm.com 与我们确认发票和银行信息。' },
        { title: '核实公司', text: '请向我们索取公司资料，并自行独立核实。' },
        { title: '警惕过低价格', text: '价格远低于市场水平是危险信号，任何网站都一样。' },
      ],
    },
    faqTitle: '常见问题。',
    faqEyebrow: '常见问题',
    cta: {
      eyebrow: '车辆询价',
      title: ['告诉我们您的规格。', '我们采购、核实并报价。'],
      text: '请发送车型、年份范围、评级和预算。我们将通过邮件回复可选车辆及预估到岸成本。',
      button: '车辆询价',
    },
  },

  inventory: {
    eyebrow: '库存',
    title: '现车与可采购车辆。',
    lede: '以下为部分可供车辆。库存经常变动，大多数车辆按订单采购。未列出的车辆也欢迎询问。',
    photoSoon: '照片可按需提供',
    sample: '示例列表',
    fields: {
      chassis: '车型代码',
      year: '年份',
      mileage: '里程',
      trans: '变速箱',
      drive: '驱动',
      steering: '方向盘',
      location: '所在地',
      price: '价格',
    },
    steeringRight: '右舵',
    price: '询价',
    priceNote: 'FOB 名古屋，按车辆逐台报价',
    request: '获取报价',
    note: '以下为展示版式的示例列表。带照片、拍卖单和价格的真实库存将替换这些内容。',
    cta: '车辆询价',
  },

  services: {
    eyebrow: '购买流程',
    title: '五个步骤，书面确认。',
    lede: '从询价到交付。具体费用和时间以每台车辆的报价为准。',
    steps: [
      { title: '提交需求', text: '告诉我们车型、年份范围、评级和预算。我们回复可选车辆及预估到岸成本。' },
      { title: '采购与验车', text: '我们搜索拍卖会和经销商渠道，翻译拍卖单，并检查入围车辆。' },
      { title: '确认车辆', text: '您查看照片、视频和车况报告后，确认一台具体车辆。付款前双方确认条款。' },
      { title: '付款与出口', text: '您按我们的发票付款。我们办理注销登记并准备出口文件。' },
      { title: '装运与交付', text: '我们在名古屋港装船，并向您发送运输文件。您办理清关并提车。' },
    ],
    documentsTitle: '您将收到的文件',
    documents: [
      '带翻译的拍卖单（适用于来自拍卖会的车辆）',
      '车辆照片和视频',
      '商业发票（Commercial Invoice）',
      '出口证明（Export Certificate）',
      '提单（Bill of Lading）',
    ],
    startQuote: '车辆询价',
    faqEyebrow: '常见问题',
    faqTitle: '常见问题。',
    faqs: [
      {
        q: '什么是美国 25 年规则？',
        a: '一般而言，车龄满 25 年的车辆可以进口美国，无需符合现行联邦安全和排放标准。各州规定也有差异，购买前请确认您所在州的要求。',
      },
      {
        q: '报价包含哪些内容？',
        a: '报价列明车价、我们的费用、出口费用以及运至您指定港口的运费，让您在决定前了解预估到岸成本。关税和当地注册由您方办理。',
      },
      {
        q: '付款前可以看车吗？',
        a: '您会收到照片、视频以及翻译后的拍卖单或车况报告，并在我们采购之前确认一台具体车辆。',
      },
      {
        q: '需要多长时间？',
        a: '取决于车辆、拍卖日程和航线。我们会在报价中给出预计时间。',
      },
      {
        q: '能找到库存列表以外的车辆吗？',
        a: '可以。我们的大部分业务是按订单采购。请告诉我们车型、年份范围、评级和预算。',
      },
    ],
    faqCta: '提出问题',
  },

  shipping: {
    eyebrow: '运输与付款',
    title: '付款之前，条款写明。',
    lede: '名古屋出口车辆的主要条款。每台车辆的具体条款以报价和发票为准。',
    sections: [
      {
        title: '贸易条款',
        text: '我们按 FOB 或 CFR 名古屋报价。FOB 包含车辆及至港口装船为止的出口手续。CFR 另含至您目的港的海运费。报价中会注明适用哪一种。',
      },
      {
        title: '付款',
        text: '付款方式为按我们的发票银行电汇（T/T）。银行信息见发票。汇款前请通过邮件与我们确认。',
      },
      {
        title: '运输',
        text: '车辆从名古屋港以滚装船（RoRo）或集装箱装运。我们会在报价中确认每批货物的航线和预计船期。',
      },
      {
        title: '文件',
        text: '我们为每台车辆准备商业发票（Commercial Invoice）、出口证明（Export Certificate）和提单（Bill of Lading）。目的地要求的其他文件可按需增加。',
      },
      {
        title: '不含项目',
        text: '除非报价另有说明，价格不含海运费、海运保险、进口关税、税费，以及您所在国家的当地注册和检验费用。',
      },
    ],
    safetyTitle: '付款安全',
    safety: [
      '汇款前，请通过邮件 info@japan-jdm.com 与我们确认发票和银行信息。',
      '所有往来沟通和发票请保留书面记录。',
      '价格远低于市场水平是危险信号，任何网站都一样。',
    ],
    cta: '车辆询价',
  },

  about: {
    eyebrow: '关于我们',
    title: ['名古屋的', '车辆出口公司。'],
    paragraphs: [
      'Japan JDM 从名古屋出口日本二手车。名古屋位于日本汽车产业中心，临近名古屋港。我们直接与海外经销商和进口商合作。',
      '我们的工作很简单：找到合适的车辆，检查并记录车况，准备出口文件，然后运送给您。',
    ],
    companyTitle: '公司资料',
    rows: [
      { label: '商号', value: 'Japan JDM' },
      { label: '业务', value: '日本二手车出口' },
      { label: '地址', value: address },
      { label: '电话', value: phone },
      { label: '邮箱', value: email },
    ],
    principlesTitle: '我们的做法',
    principles: [
      { title: '书面确认', text: '条款、价格和车辆信息在付款前均以书面确认。' },
      { title: '资料齐全', text: '向您提供照片、视频和翻译后的拍卖单。' },
      { title: '具体明确', text: '我们使用车型代码和如实的车况说明，让您清楚所购车辆。' },
    ],
    cta: '车辆询价',
  },

  contact: {
    eyebrow: '联系方式',
    title: '车辆询价。',
    lede: '告诉我们您的需求。每份询价都由名古屋的专人阅读，并通过邮件回复。',
    form: {
      name: '姓名',
      email: '邮箱',
      car: '所需车辆',
      carPlaceholder: '例如 R34 Skyline GT-R，1999-2002，6MT',
      budget: '预算（每台）',
      budgetOptions: [
        { value: '', label: '暂不确定' },
        { value: 'Under $15,000', label: '15,000 美元以下' },
        { value: '$15,000 - $30,000', label: '15,000 - 30,000 美元' },
        { value: '$30,000 - $60,000', label: '30,000 - 60,000 美元' },
        { value: '$60,000+', label: '60,000 美元以上' },
      ],
      region: '国家 / 州',
      regionPlaceholder: '例如 美国 / 加利福尼亚州',
      company: '公司（选填）',
      message: '其他说明（选填）',
      submit: '发送询价',
      sending: '发送中……',
      success: '谢谢。我们已收到您的询价，将通过邮件回复。',
      error: '出现问题。请直接发送邮件至 info@japan-jdm.com。',
    },
    next: {
      title: '后续流程',
      steps: [
        { strong: '我们阅读您的询价，', text: '并查询拍卖会和经销商渠道。' },
        { strong: '您收到可选车辆，', text: '附照片、评级和预估到岸成本。' },
        { strong: '由您决定。', text: '在您确认具体车辆之前，无任何义务。' },
      ],
      emailPrefix: '更习惯用邮件？',
    },
    detailsTitle: '我们的联系信息',
  },
};
