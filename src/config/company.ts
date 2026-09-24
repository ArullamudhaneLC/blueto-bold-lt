// Single source of truth for company facts shown on the site.
// Mirrors tryout/app/src/lib/company.ts. Empty strings are hidden automatically —
// only fill in what is real and verifiable.

export const company = {
  brand: 'Blueto Tech',
  legalName: 'Blueto Tech Pvt Ltd',
  tagline: 'A small software company from Tamil Nadu, building products for local businesses.',
  email: 'contact@myblueto.com',
  // Business line — calls only. Keep personal numbers off the public site.
  phoneDisplay: '+91 63835 64217',
  phoneTel: '+916383564217',
  hours: 'Every day, 9 AM – 10 PM IST',
  // Registered office, as on the Certificate of Incorporation.
  registeredAddress: [
    '4/1044, Block B, Flat D',
    'Poorni Homes, Mela Agraharam',
    'Bikshandar Koil',
    'Tiruchirappalli 621216',
    'Tamil Nadu, India',
  ],
  state: 'Tamil Nadu',
  linkedin: 'https://www.linkedin.com/company/blueto-tech-pvt-ltd/posts/',

  // Public records — verifiable on the MCA and GST portals.
  cin: 'U72900TN2022PTC153012',
  gstin: '33AAKCB8300P1ZG',
  dpiit: '', // Startup India recognition number, if any
  founded: '2022', // year of incorporation, per the CIN

  founder: {
    name: 'Loganathan',
    role: 'Founder',
    photo: '', // e.g. '/images/founder.jpg'
    note: 'Most people only find out what a job really feels like after they’ve committed to it. I wanted there to be an easier way to find out — one afternoon, at a real shop, with the person who runs it.',
  },
};

// Web3Forms public access key — delivers every site form to the inbox it was registered with.
// Public by design (it can only send *to* that inbox), so it is safe in client code.
export const formsAccessKey = '38a8c766-9be5-439b-be5f-30b36241efb4';

export const fliproles = {
  name: 'FlipRoles',
  city: 'Chennai',
  email: 'hello@fliproles.com',
  phoneDisplay: '+91 63835 64217',
  phoneTel: '+916383564217',
  // Official FlipRoles profiles — each icon appears once its link is filled in.
  social: {
    instagram: '', // e.g. 'https://www.instagram.com/fliproles'
    linkedin: '', // e.g. 'https://www.linkedin.com/company/fliproles'
    facebook: '', // e.g. 'https://www.facebook.com/fliproles'
  },
  // The live product. Linked from the FlipRoles page, the seeker signup and the footer.
  appUrl: 'https://fliproles.com',
  appDomain: 'fliproles.com',
};
