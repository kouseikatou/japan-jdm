// Models we regularly source. These are model examples, not specific units in stock.
// Names and chassis codes stay in English in every language.
export interface Vehicle {
  name: string;
  chassis: string;
  years: string;
  trans: string;
  drive: string;
  type: string;
  image: string;
}

export const vehicles: Vehicle[] = [
  { name: 'Nissan Skyline GT-R', chassis: 'BNR34', years: '1999–2002', trans: '6MT', drive: 'AWD', type: 'Sports coupe', image: '/img/models/skyline.jpg' },
  { name: 'Toyota Supra', chassis: 'JZA80', years: '1993–2002', trans: '6MT / AT', drive: 'RWD', type: 'Sports coupe', image: '/img/models/supra.jpg' },
  { name: 'Mazda RX-7', chassis: 'FD3S', years: '1991–2002', trans: '5MT / AT', drive: 'RWD', type: 'Sports coupe', image: '/img/models/rx7.jpg' },
  { name: 'Honda NSX', chassis: 'NA1 / NA2', years: '1990–2005', trans: '5MT / 6MT', drive: 'MR', type: 'Sports coupe', image: '/img/models/nsx.jpg' },
  { name: 'Nissan Silvia', chassis: 'S15', years: '1999–2002', trans: '6MT / AT', drive: 'RWD', type: 'Sports coupe', image: '/img/models/silvia.jpg' },
  { name: 'Suzuki Carry', chassis: 'DA52T / DA63T', years: '1999–2013', trans: '5MT / AT', drive: 'RWD / 4WD', type: 'Kei truck / van', image: '/img/models/carry.jpg' },
];
