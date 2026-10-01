import type { PartialDict } from './index';

// Brazilian Portuguese. Missing keys fall back to English.
export const pt: PartialDict = {
  meta: {
    defaultDescription:
      'A Japan JDM exporta veículos japoneses usados a partir de Nagoya. Compra em leilões, inspeção, documentos de exportação e frete para revendedores e importadores.',
    home: {
      title: 'Japan JDM | Exportação de veículos japoneses usados a partir de Nagoya',
      description:
        'A Japan JDM exporta veículos japoneses usados a partir de Nagoya. Compra em leilões, inspeção, documentos de exportação e frete para revendedores e importadores.',
    },
    inventory: {
      title: 'Estoque | Japan JDM',
      description: 'Veículos JDM selecionados, disponíveis para exportação a partir de Nagoya, Japão, com códigos de chassi e especificações.',
    },
    services: {
      title: 'Como comprar | Japan JDM',
      description: 'Cinco etapas, do pedido à entrega: como a Japan JDM localiza, inspeciona e embarca veículos a partir de Nagoya.',
    },
    shipping: {
      title: 'Frete e pagamento | Japan JDM',
      description: 'Condições comerciais, forma de pagamento, frete e documentos de exportação para veículos exportados de Nagoya.',
    },
    about: {
      title: 'Sobre | Japan JDM',
      description: 'Sobre a Japan JDM, empresa de exportação de veículos com sede em Nagoya, Aichi.',
    },
    contact: {
      title: 'Solicitar veículo | Japan JDM',
      description: 'Informe o veículo que você procura. Localizamos, verificamos e cotamos a partir de Nagoya, Japão.',
    },
  },

  nav: {
    label: 'Navegação principal',
    stock: 'Estoque',
    howToBuy: 'Como comprar',
    shipping: 'Frete e pagamento',
    about: 'Sobre',
    quote: 'Solicitar veículo',
    language: 'Idioma',
  },

  footer: {
    explore: 'Explorar',
    contact: 'Contato',
    note: 'Os veículos são vendidos para exportação do Japão. Os preços não incluem frete marítimo, seguro marítimo, impostos de importação nem registro local, salvo indicação na cotação.',
    phoneLabel: 'Tel.',
  },

  home: {
    eyebrow: 'Nagoya, Japão',
    headline: ['Veículos japoneses,', 'localizados e documentados', 'em Nagoya.'],
    lede: 'Encontramos o veículo, verificamos suas condições, preparamos os documentos de exportação e embarcamos no porto de Nagoya.',
    search: {
      label: 'Diga o que você precisa',
      make: 'Marca / modelo',
      makePlaceholder: 'ex.: Skyline GT-R',
      year: 'Ano a partir de',
      yearOptions: [
        { label: 'Qualquer ano' },
        { label: '1990' },
        { label: '1995' },
        { label: '2000' },
        { label: '2005' },
      ],
      submit: 'Solicitar este veículo',
    },
    browseStock: 'Ver estoque',
    proof: [
      { title: 'Nagoya, Aichi', text: 'Escritório e acesso ao porto no centro do Japão.' },
      { title: 'FOB ou CFR', text: 'As condições comerciais constam em todas as cotações.' },
      { title: 'Fichas de leilão compartilhadas', text: 'Fichas originais com tradução.' },
      { title: 'Documentos de exportação', text: 'Preparados para cada veículo embarcado.' },
    ],
    featured: {
      eyebrow: 'Estoque',
      title: 'Veículos em destaque.',
      lede: 'Uma seleção do que podemos fornecer. A maioria dos veículos é localizada sob encomenda.',
      viewAll: 'Ver todo o estoque',
    },
    categories: {
      eyebrow: 'Explorar',
      title: 'Por tipo.',
      items: [
        { label: 'Esportivos e cupês' },
        { label: 'Caminhonetes e vans kei' },
        { label: 'SUV e 4x4' },
        { label: 'Sedãs e peruas' },
        { label: 'Clássicos, com 25 anos ou mais' },
      ],
    },
    whatWeDo: {
      eyebrow: 'O que fazemos',
      title: ['Compra, inspeção,', 'exportação.'],
      illustrationAlt: 'Desenho técnico em linhas de um cupê esportivo japonês',
      services: [
        {
          title: 'Compra',
          text: 'Pesquisamos leilões japoneses e nossos contatos entre revendedores pelo chassi, grau e orçamento que você indicar.',
        },
        {
          title: 'Inspeção',
          text: 'Traduzimos a ficha de leilão e verificamos os veículos pré-selecionados. Você recebe fotos e vídeo antes de decidir.',
        },
        {
          title: 'Exportação',
          text: 'Cuidamos do cancelamento do registro, dos documentos de exportação e do embarque no porto de Nagoya, em RoRo ou contêiner.',
        },
      ],
    },
    buy: {
      eyebrow: 'Como comprar',
      title: 'Cinco etapas, por escrito.',
      link: 'Ler o processo completo',
    },
    terms: {
      eyebrow: 'Condições',
      title: 'Condições claras, antes do pagamento.',
      link: 'Detalhes de frete e pagamento',
      rows: [
        { label: 'Condições comerciais', value: 'FOB ou CFR Nagoya. Cotado por veículo.' },
        { label: 'Pagamento', value: 'Transferência bancária (T/T). Os dados bancários constam na fatura.' },
        { label: 'Frete', value: 'RoRo ou contêiner, a partir do porto de Nagoya.' },
        { label: 'Documentos', value: 'Export Certificate, Commercial Invoice, Bill of Lading.' },
        { label: 'Não incluído', value: 'Frete marítimo e seguro marítimo, salvo indicação na cotação. Impostos de importação e registro local.' },
      ],
    },
    dealers: {
      eyebrow: 'Para revendedores e importadores',
      title: 'Compras estruturadas em torno do seu pedido.',
      items: [
        { title: 'Compra conforme a especificação', text: 'Envie uma lista de modelos, graus e um orçamento. Pesquisamos leilões e revendedores com base nela.' },
        { title: 'Documentos no seu formato', text: 'Preparamos os documentos de exportação e podemos adaptá-los ao que o seu despachante aduaneiro precisa.' },
        { title: 'Embarques combinados', text: 'Para vários veículos, podemos organizar o frete em conjunto, em RoRo ou em contêiner.' },
      ],
      cta: 'Discutir um pedido',
    },
    port: {
      eyebrow: 'Porto de Nagoya',
      title: ['Do nosso escritório', 'ao seu pátio.'],
      text: 'Os veículos são embarcados no porto de Nagoya, um dos principais portos de exportação de veículos do centro do Japão. Confirmamos a rota e o cronograma de cada embarque na cotação.',
      photoAlt: 'Carros alinhados no cais ao lado de um navio transportador de veículos em um porto japonês',
    },
    company: {
      eyebrow: 'Empresa',
      more: 'Sobre nós',
      rows: [
        { label: 'Atividade', value: 'Exportação de veículos usados do Japão' },
        { label: 'Endereço' },
        { label: 'Telefone' },
        { label: 'E-mail' },
      ],
    },
    safety: {
      eyebrow: 'Segurança no pagamento',
      title: 'Verifique antes de pagar.',
      items: [
        { title: 'Confirme por e-mail', text: 'Antes de qualquer transferência, confirme a fatura e os dados bancários conosco em info@japan-jdm.com.' },
        { title: 'Verifique a empresa', text: 'Peça os dados da nossa empresa e confira-os de forma independente.' },
        { title: 'Cuidado com preços baixos', text: 'Um preço muito abaixo do mercado é sinal de alerta, em qualquer site.' },
      ],
    },
    faqTitle: 'Perguntas frequentes.',
    faqEyebrow: 'FAQ',
    cta: {
      eyebrow: 'Solicitar veículo',
      title: ['Informe a especificação.', 'Localizamos, verificamos e cotamos.'],
      text: 'Envie o modelo, a faixa de anos, o grau e o orçamento. Respondemos por e-mail com opções e o custo estimado de chegada (landed cost).',
      button: 'Solicitar veículo',
    },
  },

  inventory: {
    eyebrow: 'Estoque',
    title: 'Disponíveis e sob encomenda.',
    lede: 'Uma seleção do que podemos fornecer. O estoque muda com frequência e a maioria dos veículos é localizada sob encomenda. Pergunte sobre qualquer item que não esteja listado.',
    photoSoon: 'Fotos sob consulta',
    sample: 'Anúncio de exemplo',
    fields: {
      chassis: 'Chassi',
      year: 'Ano',
      mileage: 'Quilometragem',
      trans: 'Câmbio',
      drive: 'Tração',
      steering: 'Direção',
      location: 'Localização',
      price: 'Preço',
    },
    steeringRight: 'RHD (direita)',
    price: 'Consulte a cotação',
    priceNote: 'FOB Nagoya, cotado por veículo',
    request: 'Solicitar cotação',
    note: 'Estes são anúncios de exemplo, que mostram o layout. O estoque real, com fotos, fichas de leilão e preços, os substituirá.',
    cta: 'Solicitar veículo',
  },

  services: {
    eyebrow: 'Como comprar',
    title: 'Cinco etapas, por escrito.',
    lede: 'Do pedido à entrega. Tarifas e prazos exatos são confirmados por veículo na cotação.',
    steps: [
      { title: 'Envie seu pedido', text: 'Informe o modelo, a faixa de anos, o grau e o orçamento. Respondemos com opções e uma estimativa do custo de chegada (landed cost).' },
      { title: 'Localizamos e inspecionamos', text: 'Pesquisamos leilões e contatos entre revendedores, traduzimos a ficha de leilão e verificamos os veículos pré-selecionados.' },
      { title: 'Você aprova o veículo', text: 'Você analisa fotos, vídeo e o laudo de condição e aprova um veículo específico. As condições são confirmadas antes do pagamento.' },
      { title: 'Pagamento e exportação', text: 'Você paga conforme a nossa fatura. Cuidamos do cancelamento do registro e preparamos os documentos de exportação.' },
      { title: 'Embarque e entrega', text: 'Embarcamos no porto de Nagoya e enviamos os documentos de embarque. Você faz o desembaraço aduaneiro e recebe o veículo.' },
    ],
    documentsTitle: 'Documentos que você recebe',
    documents: [
      'Ficha de leilão com tradução, quando o veículo vem de leilão',
      'Fotos e vídeo do veículo',
      'Commercial Invoice (fatura comercial)',
      'Export Certificate (certificado de exportação)',
      'Bill of Lading (conhecimento de embarque)',
    ],
    startQuote: 'Solicitar veículo',
    faqEyebrow: 'FAQ',
    faqTitle: 'Perguntas frequentes.',
    faqs: [
      {
        q: 'O que é a regra dos 25 anos dos EUA?',
        a: 'Em geral, veículos com pelo menos 25 anos podem ser importados para os EUA sem atender aos padrões federais atuais de segurança e emissões. As regras também variam por estado; verifique os requisitos do seu estado antes de comprar.',
      },
      {
        q: 'O que a cotação inclui?',
        a: 'A cotação lista o preço do veículo, nossas tarifas, os custos de exportação e o frete até o seu porto, para que você veja o custo estimado de chegada antes de se comprometer. Impostos aduaneiros e registro local ficam por sua conta.',
      },
      {
        q: 'Posso ver o veículo antes de pagar?',
        a: 'Você recebe fotos, vídeo e a ficha de leilão traduzida ou o laudo de condição, e aprova um veículo específico antes de o comprarmos.',
      },
      {
        q: 'Quanto tempo leva?',
        a: 'Depende do veículo, do calendário de leilões e da rota de frete. Informamos o prazo previsto na cotação.',
      },
      {
        q: 'Vocês encontram um veículo que não está na lista de estoque?',
        a: 'Sim. A maior parte do nosso trabalho é a compra sob encomenda. Informe o modelo, a faixa de anos, o grau e o orçamento.',
      },
      {
        q: 'Como leio o grau na ficha de leilão?',
        a: 'Cada veículo recebe um grau geral, como 4 ou 4.5, e um grau do interior, como A ou B. O grau R ou RA indica histórico de reparo por acidente. Traduzimos a ficha e a explicamos para o seu veículo.',
      },
      {
        q: 'Posso importar o veículo para o meu país?',
        a: 'As regras de importação variam por país e, às vezes, por estado. Verifique primeiro as regras do seu país. Informe o destino do veículo e confirmaremos o que for possível antes da compra.',
      },
      {
        q: 'O frete tem seguro?',
        a: 'O seguro marítimo pode ser incluído na cotação. Não está incluído, salvo indicação na cotação.',
      },
    ],
    faqCta: 'Fazer uma pergunta',
    inspect: {
      eyebrow: 'Inspeção',
      title: 'O que verificamos.',
      intro: 'Nos veículos pré-selecionados, verificamos estes pontos e os registramos em fotos e vídeo.',
      items: [
        { title: 'Exterior e pintura', text: 'Folgas entre painéis, áreas repintadas, amassados, ferrugem e vidros.' },
        { title: 'Rodas e freios', text: 'Estado das rodas, pneus, discos e desgaste visível dos freios.' },
        { title: 'Interior', text: 'Bancos, painel, comandos, odor e desgaste em relação à quilometragem informada.' },
        { title: 'Cofre do motor', text: 'Vazamentos, modificações, correias, mangueiras e estado geral.' },
        { title: 'Parte inferior', text: 'Ferrugem, danos e reparos, verificados por baixo sempre que possível.' },
      ],
    },
    costs: {
      eyebrow: 'Custos',
      title: 'O que a cotação inclui.',
      intro: 'A cotação detalha cada custo, para que você veja o total antes de se comprometer.',
      items: [
        { title: 'Preço do veículo', text: 'O preço de compra no leilão ou no revendedor.' },
        { title: 'Nossa tarifa de serviço', text: 'Informada por escrito na cotação, antes de você aprovar o veículo.' },
        { title: 'Exportação e frete', text: 'Cancelamento do registro, documentos de exportação, manuseio no porto e frete, se as condições forem CFR.' },
        { title: 'Não incluído', text: 'Impostos de importação, tributos e registro e vistoria no seu país. Seguro marítimo, salvo indicação na cotação.' },
      ],
    },
    auctionGrades: {
      eyebrow: 'Fichas de leilão',
      title: 'Como ler o grau.',
      intro: 'Os leilões japoneses atribuem um grau a cada veículo. A escala varia um pouco entre as casas de leilão, portanto use-a como referência. Traduzimos a ficha e a explicamos para o seu veículo.',
      head: { grade: 'Grau', meaning: 'Significado' },
      rows: [
        { grade: 'S / 6', meaning: 'Quase novo, quilometragem muito baixa.' },
        { grade: '5', meaning: 'Excelente, quase sem defeitos.' },
        { grade: '4.5', meaning: 'Muito bom, pequenas marcas.' },
        { grade: '4', meaning: 'Bom, desgaste normal para a idade.' },
        { grade: '3.5 / 3', meaning: 'Regular a razoável, desgaste ou reparos visíveis.' },
        { grade: '2 / 1', meaning: 'Ruim, desgaste ou danos significativos.' },
        { grade: 'R / RA', meaning: 'Histórico de reparo por acidente (RA é um reparo leve).' },
      ],
      interior: 'O interior é avaliado separadamente, de A (melhor) em diante.',
    },
  },

  shipping: {
    eyebrow: 'Frete e pagamento',
    title: 'Condições, por escrito antes do pagamento.',
    lede: 'As principais condições para veículos exportados de Nagoya. A cotação e a fatura indicam as condições exatas de cada veículo.',
    sections: [
      {
        title: 'Condições comerciais',
        text: 'Cotamos FOB ou CFR Nagoya. O FOB cobre o veículo e o manuseio de exportação até o embarque no porto. O CFR acrescenta o frete marítimo até o porto de destino. A cotação indica qual se aplica.',
      },
      {
        title: 'Pagamento',
        text: 'O pagamento é feito por transferência bancária (T/T), conforme a nossa fatura. Os dados bancários constam na fatura. Confirme-os conosco por e-mail antes de transferir.',
      },
      {
        title: 'Frete',
        text: 'Os veículos são embarcados no porto de Nagoya, em RoRo ou contêiner. Confirmamos a rota e o cronograma previsto de cada embarque na cotação.',
      },      {
        title: 'Documentos',
        text: 'Para cada veículo preparamos a Commercial Invoice, o Export Certificate e o Bill of Lading. Outros documentos podem ser incluídos sob solicitação, quando o destino os exigir.',
      },
      {
        title: 'Não incluído',
        text: 'Salvo indicação em contrário na cotação, o preço não inclui frete marítimo, seguro marítimo, impostos de importação, tributos nem registro e vistoria locais no seu país.',
      },
      {
        title: 'RoRo ou contêiner',
        text: 'No RoRo, o veículo é conduzido até o navio. É a opção econômica e as saídas são frequentes. O contêiner oferece mais proteção ao veículo e permite embarcar peças, ou vários veículos, juntos. Recomendamos uma das opções para o seu pedido.',
      },
    ],
    safetyTitle: 'Segurança no pagamento',
    safety: [
      'Confirme a fatura e os dados bancários conosco por e-mail, em info@japan-jdm.com, antes de transferir.',
      'Mantenha toda a correspondência e as faturas por escrito.',
      'Trate um preço muito abaixo do mercado como sinal de alerta, em qualquer site.',
    ],
    cta: 'Solicitar veículo',
  },

  about: {
    eyebrow: 'Sobre',
    title: ['Uma empresa de exportação', 'de veículos em Nagoya.'],
    paragraphs: [
      'A Japan JDM exporta veículos japoneses usados a partir de Nagoya, no centro da indústria automotiva do Japão e próxima ao porto de Nagoya. Trabalhamos diretamente com revendedores e importadores no exterior.',
      'Nosso trabalho é simples: encontrar o veículo certo, verificar e documentar suas condições, preparar a documentação de exportação e embarcá-lo até você.',
    ],
    companyTitle: 'Dados da empresa',
    rows: [
      { label: 'Nome comercial' },
      { label: 'Atividade', value: 'Exportação de veículos usados do Japão' },
      { label: 'Endereço' },
      { label: 'Telefone' },
      { label: 'E-mail' },
    ],
    principlesTitle: 'Como trabalhamos',
    principles: [
      { title: 'Por escrito', text: 'Condições, preços e detalhes do veículo são confirmados por escrito antes do pagamento.' },
      { title: 'Documentado', text: 'Fotos, vídeo e fichas de leilão traduzidas são compartilhados com você.' },
      { title: 'Específico', text: 'Usamos códigos de chassi e descrições honestas das condições, para que você saiba o que está comprando.' },
    ],
    cta: 'Solicitar veículo',
  },

  contact: {
    eyebrow: 'Contato',
    title: 'Solicitar veículo.',
    lede: 'Diga o que você precisa. Cada solicitação é lida por uma pessoa em Nagoya e respondida por e-mail.',
    form: {
      name: 'Nome',
      email: 'E-mail',
      car: 'Veículo desejado',
      carPlaceholder: 'ex.: R34 Skyline GT-R, 1999-2002, 6MT',
      budget: 'Orçamento (por veículo)',
      budgetOptions: [
        { label: 'Ainda não sei' },
        { label: 'Abaixo de US$ 15.000' },
        { label: 'US$ 15.000 - US$ 30.000' },
        { label: 'US$ 30.000 - US$ 60.000' },
        { label: 'Acima de US$ 60.000' },
      ],
      region: 'País / Estado',
      regionPlaceholder: 'ex.: Brasil / São Paulo',
      company: 'Empresa (opcional)',
      message: 'Mais alguma informação? (opcional)',
      submit: 'Enviar solicitação',
      sending: 'Enviando...',
      success: 'Obrigado. Recebemos sua solicitação e responderemos por e-mail.',
      error: 'Algo deu errado. Escreva diretamente para info@japan-jdm.com.',
    },
    next: {
      title: 'O que acontece depois',
      steps: [
        { strong: 'Lemos sua solicitação', text: 'e consultamos leilões e nossos contatos entre revendedores.' },
        { strong: 'Você recebe opções', text: 'com fotos, graus e uma estimativa do custo de chegada (landed cost).' },
        { strong: 'Você decide.', text: 'Não há obrigação até que você aprove um veículo específico.' },
      ],
      emailPrefix: 'Prefere e-mail?',
    },
    detailsTitle: 'Nossos dados',
  },
};
