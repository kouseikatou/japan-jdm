// SAMPLE DATA: replace with real stock before launch. Names and chassis codes stay in English in every language.
export interface Vehicle {
  name: string;
  chassis: string;
  year: number;
  km: string;
  trans: string;
  drive: string;
  type: string;
}

export const vehicles: Vehicle[] = [
  { name: 'Nissan Skyline GT-R', chassis: 'BNR34', year: 1999, km: '62,000', trans: '6MT', drive: 'AWD', type: 'Sports coupe' },
  { name: 'Toyota Supra RZ', chassis: 'JZA80', year: 1996, km: '88,000', trans: '6MT', drive: 'RWD', type: 'Sports coupe' },
  { name: 'Mazda RX-7 Type R', chassis: 'FD3S', year: 1998, km: '71,000', trans: '5MT', drive: 'RWD', type: 'Sports coupe' },
  { name: 'Honda NSX Type R', chassis: 'NA2', year: 2002, km: '54,000', trans: '6MT', drive: 'MR', type: 'Sports coupe' },
  { name: 'Nissan Silvia Spec-R', chassis: 'S15', year: 2001, km: '96,000', trans: '6MT', drive: 'RWD', type: 'Sports coupe' },
  { name: 'Suzuki Carry', chassis: 'DA52T', year: 1997, km: '48,000', trans: '5MT', drive: 'RWD', type: 'Kei truck / van' },
];
