// Real company facts shown on the live site. Fill these in with REAL values only:
// an empty field simply hides its section. Never put invented figures here.
//
// To preview the finished layout with obvious placeholder data (never deployed):
//   PUBLIC_DUMMY=1 npm run dev

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
}
export interface Testimonial {
  name: string;
  detail?: string; // e.g. "Dealer, California"
  text: string;
}
export interface Row {
  label: string;
  value: string;
}
export interface Profile {
  licenseAuthority?: string; // e.g. the prefectural public safety commission named on your licence
  licenseNumber?: string;
  founded?: string; // e.g. "2024"
  team: TeamMember[];
  testimonials: Testimonial[];
  transit: Row[]; // region -> typical duration, e.g. { label: 'US West Coast', value: '3-5 weeks' }
  fees: Row[]; // fee name -> amount or rule
  contacts: { whatsapp?: string; instagram?: string; youtube?: string }; // full URLs
}

const real: Profile = {
  licenseAuthority: undefined,
  licenseNumber: undefined,
  founded: undefined,
  team: [],
  testimonials: [],
  transit: [],
  fees: [],
  contacts: {},
};

// Obvious placeholders, used only in the local preview.
const dummy: Profile = {
  licenseAuthority: 'DUMMY Prefectural Public Safety Commission',
  licenseNumber: 'No. 000000000000',
  founded: '2000 (dummy)',
  team: [
    { name: 'DUMMY Name A', role: 'Representative', bio: 'Dummy profile text. Replace with a real introduction.' },
    { name: 'DUMMY Name B', role: 'Inspection', bio: 'Dummy profile text. Replace with a real introduction.' },
  ],
  testimonials: [
    { name: 'DUMMY Customer', detail: 'Dealer, dummy country', text: 'Dummy comment. Replace with a real customer comment that you have permission to publish.' },
  ],
  transit: [
    { label: 'DUMMY Region A', value: 'x–y weeks' },
    { label: 'DUMMY Region B', value: 'x–y weeks' },
  ],
  fees: [
    { label: 'DUMMY service fee', value: 'JPY 000,000' },
    { label: 'DUMMY deposit', value: '00% of budget' },
  ],
  contacts: { whatsapp: 'https://wa.me/0000000000', instagram: 'https://instagram.com/dummy', youtube: 'https://youtube.com/@dummy' },
};

export const isDummy = import.meta.env.PUBLIC_DUMMY === '1';
export const profile: Profile = isDummy ? dummy : real;
