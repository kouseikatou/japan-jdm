// Source of truth for all site copy. Other languages override any subset of these keys.
// Vehicle names, model names, chassis codes and proper nouns stay in English in every language.
// Copy rules: short factual sentences, describe the process not outcomes, no superlatives, no invented numbers.

const company = {
  name: 'Japan JDM',
  address: 'Lions Mansion Room 1065, 50-5 Nankin-dori, Nagoya, Aichi, Japan',
  phone: '050-1785-7272',
  email: 'info@japan-jdm.com',
};

export const en = {
  company,

  meta: {
    siteName: 'Japan JDM',
    defaultDescription:
      'Japan JDM exports used Japanese vehicles from Nagoya. Auction sourcing, inspection, export documents and shipping for dealers and importers.',
    home: {
      title: 'Japan JDM | Used Japanese vehicle export from Nagoya',
      description:
        'Japan JDM exports used Japanese vehicles from Nagoya. Auction sourcing, inspection, export documents and shipping for dealers and importers.',
    },
    inventory: {
      title: 'Stock | Japan JDM',
      description: 'Featured JDM vehicles available for export from Nagoya, Japan, with chassis codes and specifications.',
    },
    services: {
      title: 'How to buy | Japan JDM',
      description: 'Five steps from your request to delivery: how Japan JDM sources, inspects and ships vehicles from Nagoya.',
    },
    shipping: {
      title: 'Shipping & payment | Japan JDM',
      description: 'Trade terms, payment method, shipping and export documents for vehicles exported from Nagoya.',
    },
    about: {
      title: 'About | Japan JDM',
      description: 'About Japan JDM, a vehicle export company based in Nagoya, Aichi.',
    },
    contact: {
      title: 'Request a vehicle | Japan JDM',
      description: 'Tell us the vehicle you need. We source, verify and quote from Nagoya, Japan.',
    },
  },

  nav: {
    label: 'Main navigation',
    stock: 'Stock',
    howToBuy: 'How to buy',
    shipping: 'Shipping & payment',
    about: 'About',
    quote: 'Request a vehicle',
    language: 'Language',
  },

  footer: {
    explore: 'Explore',
    contact: 'Contact',
    note: 'Vehicles are sold for export from Japan. Prices exclude ocean freight, marine insurance, import duties and local registration unless quoted otherwise.',
    phoneLabel: 'Tel',
    privacy: 'Privacy policy',
    skip: 'Skip to content',
  },

  home: {
    eyebrow: 'Nagoya, Japan',
    headline: ['Japanese vehicles,', 'sourced and documented', 'in Nagoya.'],
    lede: 'We find the vehicle, check its condition, prepare the export documents and ship from Nagoya port.',
    search: {
      label: 'Tell us what you need',
      make: 'Make / model',
      makePlaceholder: 'e.g. Skyline GT-R',
      year: 'Year from',
      yearOptions: [
        { value: '', label: 'Any year' },
        { value: '1990', label: '1990' },
        { value: '1995', label: '1995' },
        { value: '2000', label: '2000' },
        { value: '2005', label: '2005' },
      ],
      submit: 'Request this vehicle',
    },
    browseStock: 'Browse stock',
    proof: [
      { title: 'Nagoya, Aichi', text: 'Office and port access in central Japan.' },
      { title: 'FOB or CFR', text: 'Trade terms are written into every quote.' },
      { title: 'Auction sheets shared', text: 'Original sheets with translation.' },
      { title: 'Export documents', text: 'Prepared for each vehicle we ship.' },
    ],
    featured: {
      eyebrow: 'Stock',
      title: 'Featured vehicles.',
      lede: 'A selection of what we can supply. Most vehicles are sourced to order.',
      viewAll: 'View all stock',
    },
    categories: {
      eyebrow: 'Browse',
      title: 'By type.',
      // value pre-fills the request form (kept in English); label is what visitors see.
      items: [
        { value: 'Sports coupe', label: 'Sports & coupes' },
        { value: 'Kei truck / van', label: 'Kei trucks & vans' },
        { value: 'SUV / 4x4', label: 'SUV & 4x4' },
        { value: 'Sedan / wagon', label: 'Sedans & wagons' },
        { value: 'Classic (25 years+)', label: 'Classics, 25 years and older' },
      ],
    },
    whatWeDo: {
      eyebrow: 'What we do',
      title: ['Sourcing, inspection,', 'export.'],
      illustrationAlt: 'Technical line drawing of a Japanese sports coupe',
      services: [
        {
          title: 'Sourcing',
          text: 'We search Japanese auctions and our dealer contacts for the chassis, grade and budget you specify.',
        },
        {
          title: 'Inspection',
          text: 'We translate the auction sheet and check the shortlisted vehicles. You receive photos and video before you decide.',
        },
        {
          title: 'Export',
          text: 'We handle deregistration, export documents and loading at Nagoya port by RoRo or container.',
        },
      ],
    },
    buy: {
      eyebrow: 'How to buy',
      title: 'Five steps, in writing.',
      link: 'Read the full process',
    },
    terms: {
      eyebrow: 'Terms',
      title: 'Clear terms, before you pay.',
      link: 'Shipping & payment details',
      rows: [
        { label: 'Trade terms', value: 'FOB or CFR Nagoya. Quoted per vehicle.' },
        { label: 'Payment', value: 'Bank transfer (T/T). Bank details are issued on the invoice.' },
        { label: 'Shipping', value: 'RoRo or container from Nagoya port.' },
        { label: 'Documents', value: 'Export Certificate, Commercial Invoice, Bill of Lading.' },
        { label: 'Not included', value: 'Ocean freight and marine insurance unless quoted. Import duties and local registration.' },
      ],
    },
    dealers: {
      eyebrow: 'For dealers and importers',
      title: 'Sourcing built around your order.',
      items: [
        { title: 'Sourcing to specification', text: 'Send a list of models, grades and a budget. We search auctions and dealers against it.' },
        { title: 'Documents in your format', text: 'We prepare the export documents and can adapt them to what your customs broker needs.' },
        { title: 'Combined shipments', text: 'For several vehicles we can arrange shipping together, by RoRo or in a container.' },
      ],
      cta: 'Discuss an order',
    },
    port: {
      eyebrow: 'Nagoya port',
      title: ['From our office', 'to your yard.'],
      text: 'Vehicles ship from Nagoya port, one of the main vehicle export ports in central Japan. We confirm the route and schedule for each shipment in your quote.',
      photoAlt: 'Cars lined up on the quay beside a car carrier at a Japanese port',
    },
    company: {
      eyebrow: 'Company',
      title: 'Japan JDM',
      more: 'About us',
      rows: [
        { label: 'Business', value: 'Export of used vehicles from Japan' },
        { label: 'Address', value: company.address },
        { label: 'Phone', value: company.phone },
        { label: 'Email', value: company.email },
      ],
    },
    safety: {
      eyebrow: 'Payment safety',
      title: 'Verify before you pay.',
      items: [
        { title: 'Confirm by email', text: 'Before any transfer, confirm the invoice and bank details with us at info@japan-jdm.com.' },
        { title: 'Check the company', text: 'Ask for our company details and verify them independently.' },
        { title: 'Be careful with low prices', text: 'A price far below the market is a warning sign, on any website.' },
      ],
    },
    faqTitle: 'Common questions.',
    faqEyebrow: 'FAQ',
    cta: {
      eyebrow: 'Request a vehicle',
      title: ['Tell us the specification.', 'We source, verify and quote.'],
      text: 'Send the model, year range, grade and budget. We reply by email with options and the estimated landed cost.',
      button: 'Request a vehicle',
    },
  },

  inventory: {
    eyebrow: 'Stock',
    title: 'Available and sourceable.',
    lede: 'A selection of what we can supply. Stock changes often and most vehicles are sourced to order. Ask about anything not listed.',
    photoSoon: 'Photos on request',
    sample: 'Sample listing',
    fields: {
      chassis: 'Chassis',
      year: 'Year',
      mileage: 'Mileage',
      trans: 'Trans.',
      drive: 'Drive',
      steering: 'Steering',
      location: 'Location',
      price: 'Price',
    },
    steeringRight: 'RHD',
    price: 'Ask for quote',
    priceNote: 'FOB Nagoya, quoted per vehicle',
    request: 'Request quote',
    note: 'These are sample listings that show the layout. Real stock with photos, auction sheets and prices will replace them.',
    cta: 'Request a vehicle',
  },

  services: {
    eyebrow: 'How to buy',
    title: 'Five steps, in writing.',
    lede: 'From your request to delivery. Exact fees and timelines are confirmed per vehicle in your quote.',
    steps: [
      { title: 'Send your request', text: 'Tell us the model, year range, grade and budget. We reply with options and an estimated landed cost.' },
      { title: 'We source and inspect', text: 'We search auctions and dealer contacts, translate the auction sheet and check the shortlisted vehicles.' },
      { title: 'You approve the vehicle', text: 'You review photos, video and the condition report, then approve one specific vehicle. Terms are confirmed before payment.' },
      { title: 'Payment and export', text: 'You pay against our invoice. We handle deregistration and prepare the export documents.' },
      { title: 'Shipping and delivery', text: 'We load at Nagoya port and send you the shipping documents. You clear customs and take delivery.' },
    ],
    documentsTitle: 'Documents you receive',
    documents: [
      'Auction sheet with translation, where the vehicle came from an auction',
      'Photos and video of the vehicle',
      'Commercial Invoice',
      'Export Certificate',
      'Bill of Lading',
    ],
    startQuote: 'Request a vehicle',
    faqEyebrow: 'FAQ',
    faqTitle: 'Common questions.',
    faqs: [
      {
        q: 'What is the US 25-year rule?',
        a: 'In general, vehicles that are at least 25 years old can be imported into the US without meeting current federal safety and emissions standards. Rules also vary by state, so check requirements for your state before buying.',
      },
      {
        q: 'What does the quote include?',
        a: 'Your quote lists the vehicle price, our fees, export costs and shipping to your port, so you can see the estimated landed cost before you commit. Customs duties and local registration are handled on your side.',
      },
      {
        q: 'Can I see the vehicle before I pay?',
        a: 'You receive photos, video and the translated auction sheet or condition report, and you approve a specific vehicle before we purchase it.',
      },
      {
        q: 'How long does it take?',
        a: 'It depends on the vehicle, the auction schedule and the shipping route. We give you an expected timeline in your quote.',
      },
      {
        q: 'Can you find a vehicle that is not in your stock list?',
        a: 'Yes. Most of our work is sourcing to order. Tell us the model, year range, grade and budget.',
      },
      {
        q: 'How do I read the grade on an auction sheet?',
        a: 'Each vehicle receives an overall grade, such as 4 or 4.5, and an interior grade, such as A or B. Grade R or RA means accident repair history. We translate the sheet and explain it for your vehicle.',
      },
      {
        q: 'Can I import the vehicle into my country?',
        a: 'Import rules differ by country and sometimes by state. Please check the rules for your country first. Tell us where the vehicle will go and we will confirm what we can before you buy.',
      },
      {
        q: 'Is shipping insured?',
        a: 'Marine insurance can be added to your quote. It is not included unless the quote says so.',
      },
    ],
    faqCta: 'Ask a question',
    inspect: {
      eyebrow: 'Inspection',
      title: 'What we check.',
      intro: 'For the vehicles we shortlist, we check these areas and record them in photos and video.',
      items: [
        { title: 'Exterior and paint', text: 'Panel gaps, repainted areas, dents, rust and glass.' },
        { title: 'Wheels and brakes', text: 'Wheel condition, tyres, discs and visible brake wear.' },
        { title: 'Interior', text: 'Seats, dashboard, switches, smell, and wear compared with the stated mileage.' },
        { title: 'Engine bay', text: 'Leaks, modifications, belts, hoses and general condition.' },
        { title: 'Underbody', text: 'Rust, damage and repairs, checked from underneath where possible.' },
      ],
    },
    costs: {
      eyebrow: 'Costs',
      title: 'What the quote includes.',
      intro: 'Your quote itemises each cost, so you can see the total before you commit.',
      items: [
        { title: 'Vehicle price', text: 'The purchase price from the auction or dealer.' },
        { title: 'Our service fee', text: 'Stated in the quote, in writing, before you approve the vehicle.' },
        { title: 'Export and shipping', text: 'Deregistration, export paperwork, port handling, and freight if the terms are CFR.' },
        { title: 'Not included', text: 'Import duties, taxes, and registration and inspection in your country. Marine insurance unless quoted.' },
      ],
    },
    auctionGrades: {
      eyebrow: 'Auction sheets',
      title: 'How to read the grade.',
      intro: 'Japanese auctions grade each vehicle. The scale varies a little between auction houses, so treat this as a guide. We translate the sheet and explain it for your vehicle.',
      head: { grade: 'Grade', meaning: 'Meaning' },
      rows: [
        { grade: 'S / 6', meaning: 'Near new, very low mileage.' },
        { grade: '5', meaning: 'Excellent, almost no flaws.' },
        { grade: '4.5', meaning: 'Very good, minor marks.' },
        { grade: '4', meaning: 'Good, normal wear for its age.' },
        { grade: '3.5 / 3', meaning: 'Average to fair, visible wear or repairs.' },
        { grade: '2 / 1', meaning: 'Poor, significant wear or damage.' },
        { grade: 'R / RA', meaning: 'Accident repair history (RA is a minor repair).' },
      ],
      interior: 'The interior is graded separately, from A (best) downward.',
    },
  },

  shipping: {
    eyebrow: 'Shipping & payment',
    title: 'Terms, written before you pay.',
    lede: 'The main terms for vehicles exported from Nagoya. Your quote and invoice state the exact terms for each vehicle.',
    sections: [
      {
        title: 'Trade terms',
        text: 'We quote FOB or CFR Nagoya. FOB covers the vehicle and export handling up to loading at the port. CFR adds ocean freight to your destination port. The quote states which one applies.',
      },
      {
        title: 'Payment',
        text: 'Payment is by bank transfer (T/T) against our invoice. Bank details are issued on the invoice. Please confirm them with us by email before you transfer.',
      },
      {
        title: 'Shipping',
        text: 'Vehicles ship from Nagoya port by RoRo or container. We confirm the route and the expected schedule for each shipment in the quote.',
      },
      {
        title: 'Documents',
        text: 'For each vehicle we prepare the Commercial Invoice, the Export Certificate and the Bill of Lading. Other documents can be added on request, where the destination requires them.',
      },
      {
        title: 'Not included',
        text: 'Unless the quote says otherwise, the price does not include ocean freight, marine insurance, import duties, taxes or local registration and inspection in your country.',
      },
      {
        title: 'RoRo or container',
        text: 'With RoRo the vehicle is driven onto the ship. It is the economical choice and sailings are frequent. A container gives the vehicle more protection and lets us ship parts, or several vehicles, together. We recommend one for your order.',
      },
    ],
    safetyTitle: 'Payment safety',
    safety: [
      'Confirm the invoice and bank details with us by email at info@japan-jdm.com before you transfer.',
      'Keep all correspondence and invoices in writing.',
      'Treat a price far below the market as a warning sign, on any website.',
    ],
    cta: 'Request a vehicle',
  },

  about: {
    eyebrow: 'About',
    title: ['A vehicle export', 'company in Nagoya.'],
    paragraphs: [
      "Japan JDM exports used Japanese vehicles from Nagoya, in the centre of Japan's automotive industry and close to Nagoya port. We work directly with dealers and importers overseas.",
      'Our work is simple: find the right vehicle, check and document its condition, prepare the export paperwork and ship it to you.',
    ],
    companyTitle: 'Company details',
    rows: [
      { label: 'Trade name', value: 'Japan JDM' },
      { label: 'Business', value: 'Export of used vehicles from Japan' },
      { label: 'Address', value: company.address },
      { label: 'Phone', value: company.phone },
      { label: 'Email', value: company.email },
    ],
    principlesTitle: 'How we work',
    principles: [
      { title: 'In writing', text: 'Terms, prices and vehicle details are confirmed in writing before payment.' },
      { title: 'Documented', text: 'Photos, video and translated auction sheets are shared with you.' },
      { title: 'Specific', text: 'We use chassis codes and honest condition notes, so you know what you are buying.' },
    ],
    cta: 'Request a vehicle',
  },

  privacy: {
    title: 'Privacy policy',
    metaTitle: 'Privacy policy | Japan JDM',
    updated: 'Last updated: October 2026',
    intro: 'This page explains what information japan-jdm.com collects, why, and how it is handled.',
    sections: [
      {
        title: 'Information we collect',
        text: 'When you send a request through the contact form we receive the details you enter: name, email address, company, country or state, the vehicle you need, your budget and your message. We also record the IP address of the request to prevent spam.',
      },
      {
        title: 'How we use it',
        text: 'We use this information only to reply to your request, to prepare quotes and to manage the sale. We do not sell your information and we do not use it for advertising.',
      },
      {
        title: 'Where it is stored',
        text: 'Requests are stored in our database on Cloudflare and are sent to us by email. Cloudflare also processes website traffic as our hosting and security provider.',
      },
      {
        title: 'Cookies',
        text: 'The site sets one functional cookie, called lang, that remembers the language you choose. It contains no personal information. We do not use advertising cookies.',
      },
      {
        title: 'Analytics',
        text: 'We use Cloudflare Web Analytics to count visits. It does not use cookies and does not track individual visitors across websites.',
      },
      {
        title: 'Your requests',
        text: 'To ask about, correct or delete the information you sent us, email info@japan-jdm.com.',
      },
    ],
    contactTitle: 'Contact',
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Request a vehicle.',
    lede: 'Tell us what you need. Every request is read by a person in Nagoya and answered by email.',
    form: {
      name: 'Name',
      email: 'Email',
      car: 'Vehicle you need',
      carPlaceholder: 'e.g. R34 Skyline GT-R, 1999-2002, 6MT',
      budget: 'Budget (per vehicle)',
      budgetOptions: [
        { value: '', label: 'Not sure yet' },
        { value: 'Under $15,000', label: 'Under $15,000' },
        { value: '$15,000 - $30,000', label: '$15,000 - $30,000' },
        { value: '$30,000 - $60,000', label: '$30,000 - $60,000' },
        { value: '$60,000+', label: '$60,000+' },
      ],
      region: 'Country / State',
      regionPlaceholder: 'e.g. USA / California',
      company: 'Company (optional)',
      message: 'Anything else? (optional)',
      submit: 'Send request',
      sending: 'Sending...',
      success: 'Thank you. We received your request and will reply by email.',
      error: 'Something went wrong. Please email info@japan-jdm.com directly.',
    },
    next: {
      title: 'What happens next',
      steps: [
        { strong: 'We read your request', text: 'and check auctions and our dealer contacts.' },
        { strong: 'You receive options', text: 'with photos, grades and an estimated landed cost.' },
        { strong: 'You decide.', text: 'There is no obligation until you approve a specific vehicle.' },
      ],
      emailPrefix: 'Prefer email?',
    },
    detailsTitle: 'Our details',
  },
};
