export const site = {
    name: '2Glaciares Pressure Washing',
    shortName: '2Glaciares',
    tagline: 'Powerful cleaning. Fresher surfaces.',
    description:
        'Professional pressure washing for homes, businesses and communities across South Florida — with results you can see from the street.',
    phone: '954-297-8695',
    phoneHref: 'tel:+19542978695',
    phoneDisplay: '(954) 297-8695',
    region: 'South Florida',
    url: 'https://2glaciares.com',
    hours: 'Mon – Sat · 7am – 7pm',
    serviceAreas: [
        'Fort Lauderdale',
        'Pembroke Pines',
        'Hollywood',
        'Miramar',
        'Davie',
        'Plantation',
        'Weston',
        'Coral Springs',
        'Pompano Beach',
        'Boca Raton',
    ],
};

export const nav = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services', hasMenu: true },
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
] as const;
