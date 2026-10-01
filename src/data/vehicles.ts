// Models we regularly source, with their main factory grades. Availability depends on auctions and dealers.
// Names, chassis codes, grades and engine codes are proper nouns and stay in English in every language.
export type Aspiration = 'twin' | 'turbo' | 'na';

export interface Grade {
  name: string;
  engine: string;
  aspiration: Aspiration;
}

export interface Model {
  name: string;
  chassis: string;
  years: string;
  drive: string;
  grades: Grade[];
}

export const models: Model[] = [
  {
    name: 'Nissan Skyline GT-R',
    chassis: 'BNR34',
    years: '1999–2002',
    drive: 'AWD',
    grades: [
      { name: 'V-Spec', engine: 'RB26DETT', aspiration: 'twin' },
      { name: 'V-Spec II', engine: 'RB26DETT', aspiration: 'twin' },
      { name: 'M-Spec', engine: 'RB26DETT', aspiration: 'twin' },
      { name: 'V-Spec II Nür / M-Spec Nür', engine: 'RB26DETT', aspiration: 'twin' },
    ],
  },
  {
    name: 'Nissan Skyline GT-T',
    chassis: 'ER34',
    years: '1998–2001',
    drive: 'RWD',
    grades: [
      { name: '25GT-T', engine: 'RB25DET', aspiration: 'turbo' },
      { name: '25GT-X', engine: 'RB25DE', aspiration: 'na' },
    ],
  },
  {
    name: 'Toyota Supra',
    chassis: 'JZA80',
    years: '1993–2002',
    drive: 'RWD',
    grades: [
      { name: 'RZ / RZ-S', engine: '2JZ-GTE', aspiration: 'twin' },
      { name: 'SZ-R / SZ', engine: '2JZ-GE', aspiration: 'na' },
    ],
  },
  {
    name: 'Mazda RX-7',
    chassis: 'FD3S',
    years: '1991–2002',
    drive: 'RWD',
    grades: [
      { name: 'Type R / Type RB / Type RS', engine: '13B-REW', aspiration: 'twin' },
      { name: 'Type RZ / Spirit R', engine: '13B-REW', aspiration: 'twin' },
    ],
  },
  {
    name: 'Nissan Silvia',
    chassis: 'S15',
    years: '1999–2002',
    drive: 'RWD',
    grades: [
      { name: 'Spec-R', engine: 'SR20DET', aspiration: 'turbo' },
      { name: 'Spec-S', engine: 'SR20DE', aspiration: 'na' },
    ],
  },
  {
    name: 'Mitsubishi Lancer Evolution',
    chassis: 'CP9A / CT9A',
    years: '1996–2007',
    drive: 'AWD',
    grades: [
      { name: 'GSR', engine: '4G63', aspiration: 'turbo' },
      { name: 'RS', engine: '4G63', aspiration: 'turbo' },
    ],
  },
  {
    name: 'Subaru Impreza WRX STI',
    chassis: 'GC8 / GDB',
    years: '1994–2007',
    drive: 'AWD',
    grades: [{ name: 'WRX STI', engine: 'EJ20', aspiration: 'turbo' }],
  },
  {
    name: 'Honda NSX',
    chassis: 'NA1 / NA2',
    years: '1990–2005',
    drive: 'MR',
    grades: [
      { name: 'Type R', engine: 'C30A / C32B', aspiration: 'na' },
      { name: 'Type S / Type S-Zero', engine: 'C30A / C32B', aspiration: 'na' },
    ],
  },
  {
    name: 'Suzuki Carry',
    chassis: 'DA52T / DA63T',
    years: '1999–2013',
    drive: 'RWD / 4WD',
    grades: [],
  },
];

// Other models we are regularly asked for.
export const alsoAvailable = [
  'Toyota Chaser (JZX100)',
  'Toyota Land Cruiser',
  'Honda S2000',
  'Mazda Roadster',
  'Nissan Skyline GT-R (BNR32 / BCNR33)',
  'Kei vans and trucks',
];
