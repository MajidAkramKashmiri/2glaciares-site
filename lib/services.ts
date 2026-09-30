import type { LucideIcon } from 'lucide-react';
import {
    Building2,
    Car,
    Droplets,
    Footprints,
    Home,
    Layers,
    ParkingSquare,
    Sparkles,
    Sun,
    Wind,
} from 'lucide-react';

export type ServiceCategory = 'residential' | 'commercial' | 'both';

export interface Service {
    slug: string;
    legacyPath: string;
    name: string;
    shortName: string;
    tagline: string;
    summary: string;
    description: string;
    category: ServiceCategory;
    icon: LucideIcon;
    accent: string;
    includes: string[];
    idealFor: string[];
    featured?: boolean;
    image?: string;
}

export const services: Service[] = [
    {
        slug: 'residential-pressure-washing',
        image: '/images/residential.jpg',
        legacyPath: '/residential',
        name: 'Residential Pressure Washing',
        shortName: 'Residential',
        tagline: 'Your home, back to bright.',
        summary: 'Refresh driveways, patios, walls and outdoor surfaces around your home.',
        description:
            'Sun, rain and salt air leave a film on every outdoor surface. Our residential wash lifts years of dirt, mildew and staining from driveways, pavers, patios, pool decks and exterior walls so your home looks cared for from the curb.',
        category: 'residential',
        icon: Home,
        accent: 'from-ice-300 to-ice-500',
        includes: [
            'Driveways, walkways and pavers',
            'Patios, lanais and pool decks',
            'Exterior walls and stucco',
            'Fences, screens and entryways',
        ],
        idealFor: ['Single-family homes', 'Townhomes', 'Pre-sale refreshes', 'Seasonal maintenance'],
        featured: true,
    },
    {
        slug: 'commercial-pressure-washing',
        image: '/images/commercial.jpg',
        legacyPath: '/commercial',
        name: 'Commercial Pressure Washing',
        shortName: 'Commercial',
        tagline: 'Ready for business, every morning.',
        summary: 'Keep customer-facing properties crisp, safe and ready for business.',
        description:
            'First impressions start in the parking lot. We keep storefronts, plazas, office parks and hospitality properties looking sharp with scheduled or one-time exterior cleaning, worked around your operating hours.',
        category: 'commercial',
        icon: Building2,
        accent: 'from-navy-600 to-ice-500',
        includes: [
            'Storefronts and entrances',
            'Sidewalks and dumpster pads',
            'Building exteriors and awnings',
            'Recurring maintenance schedules',
        ],
        idealFor: ['Retail plazas', 'Offices', 'Restaurants', 'Property managers'],
        featured: true,
    },
    {
        slug: 'community-condo-cleaning',
        image: '/images/community-condo.jpg',
        legacyPath: '/community-condo',
        name: 'Community & Condo Cleaning',
        shortName: 'Communities & Condos',
        tagline: 'Shared spaces, polished.',
        summary: 'A polished clean for shared spaces, common areas and community exteriors.',
        description:
            'HOAs and condo associations trust us for consistent, board-ready results across common areas, walkways, pool decks, clubhouses and building exteriors. One team, one point of contact, clear reporting.',
        category: 'both',
        icon: Layers,
        accent: 'from-ice-400 to-navy-600',
        includes: [
            'Common areas and clubhouses',
            'Walkways, stairwells and breezeways',
            'Pool decks and amenity spaces',
            'Building exteriors and signage',
        ],
        idealFor: ['HOAs', 'Condo associations', 'Apartment communities', 'Gated communities'],
    },
    {
        slug: 'roof-cleaning',
        image: '/images/roof.jpg',
        legacyPath: '/roof-cleaning',
        name: 'Roof Cleaning',
        shortName: 'Roof',
        tagline: 'Lift the stains, keep the shingles.',
        summary: 'Lift away stains, algae and buildup with thoughtful exterior care.',
        description:
            'Black streaks and algae do more than look tired — they hold moisture against your roof. We use low-pressure soft washing to remove buildup safely, without the damage high pressure can cause to tile and shingle.',
        category: 'both',
        icon: Sun,
        accent: 'from-ice-200 to-ice-400',
        includes: [
            'Soft-wash algae and streak removal',
            'Tile, shingle and metal roofs',
            'Gutter-line and fascia rinse',
            'Landscape protection',
        ],
        idealFor: ['Homes', 'Condo buildings', 'Insurance inspections', 'Pre-sale prep'],
    },
    {
        slug: 'sidewalk-cleaning',
        image: '/images/sidewalk.jpg',
        legacyPath: '/sidewalk-cleaning',
        name: 'Sidewalk Cleaning',
        shortName: 'Sidewalks',
        tagline: 'Brighter, safer, more welcoming.',
        summary: 'Make walkways brighter, safer and more welcoming from the curb.',
        description:
            'Gum, grease, mildew and grime make sidewalks slippery and dull. Surface cleaning with hot water and rotary equipment brings concrete back to a uniform, bright finish and reduces slip hazards.',
        category: 'both',
        icon: Footprints,
        accent: 'from-frost-200 to-ice-400',
        includes: [
            'Concrete and paver walkways',
            'Gum and grease removal',
            'Storefront frontage',
            'Curb and edge detailing',
        ],
        idealFor: ['Retail frontage', 'Communities', 'Homes', 'Municipal paths'],
    },
    {
        slug: 'gutter-cleaning',
        image: '/images/gutter.jpg',
        legacyPath: '/gutter-cleaning',
        name: 'Gutter Cleaning',
        shortName: 'Gutters',
        tagline: 'Clear flow, clean lines.',
        summary: 'Clear accumulated leaves and debris so gutters look and perform better.',
        description:
            'Clogged gutters overflow onto walls and foundations. We clear leaves and debris, flush downspouts and brighten the exterior face of the gutter so the whole roofline looks finished.',
        category: 'both',
        icon: Wind,
        accent: 'from-ice-300 to-navy-600',
        includes: [
            'Debris removal and bagging',
            'Downspout flushing',
            'Exterior gutter brightening',
            'Flow check and report',
        ],
        idealFor: ['Homes', 'Townhomes', 'Small commercial', 'Seasonal maintenance'],
    },
    {
        slug: 'window-cleaning',
        image: '/images/window.jpg',
        legacyPath: '/window-cleaning',
        name: 'Window Cleaning',
        shortName: 'Windows',
        tagline: 'See clearly again.',
        summary: 'Streak-free glass that lets the light back in.',
        description:
            'Purified-water and hand-finished window cleaning for ground-level and multi-storey glass, frames and screens. Pairs perfectly with an exterior wash for a complete refresh.',
        category: 'both',
        icon: Sparkles,
        accent: 'from-ice-100 to-ice-400',
        includes: [
            'Exterior glass and frames',
            'Screens and sills',
            'Storefront glass',
            'Water-fed pole for upper floors',
        ],
        idealFor: ['Homes', 'Storefronts', 'Offices', 'Condos'],
    },
    {
        slug: 'exterior-wall-cleaning',
        image: '/images/exterior-wall.jpg',
        legacyPath: '/exterior-wall-cleaning',
        name: 'Exterior Wall Cleaning',
        shortName: 'Exterior Walls',
        tagline: 'Fresh paint, without the paint.',
        summary: 'Remove mildew, dirt and staining from stucco, block and siding.',
        description:
            'Soft washing restores the true color of stucco, painted block and siding without stripping paint or forcing water behind the surface. Most homes look freshly painted when we are done.',
        category: 'both',
        icon: Droplets,
        accent: 'from-navy-700 to-ice-400',
        includes: [
            'Stucco and painted block',
            'Vinyl and fiber-cement siding',
            'Mildew and rust stain treatment',
            'Fascia, soffits and trim',
        ],
        idealFor: ['Homes', 'Condo buildings', 'Retail', 'Warehouses'],
    },
    {
        slug: 'parking-lot-garage-cleaning',
        image: '/images/parking.jpg',
        legacyPath: '/parking-garage',
        name: 'Parking Lot & Garage Cleaning',
        shortName: 'Parking & Garages',
        tagline: 'Big spaces, handled.',
        summary: 'Degrease, brighten and refresh parking areas and garages.',
        description:
            'Oil, tire marks and grime build up fast in high-traffic areas. Our surface cleaners and degreasers handle lots, decks and garages at scale, with water recovery where required and scheduling around your tenants.',
        category: 'commercial',
        icon: ParkingSquare,
        accent: 'from-navy-800 to-navy-600',
        includes: [
            'Surface lots and decks',
            'Oil and tire mark treatment',
            'Stairwells and elevator lobbies',
            'Off-hours scheduling',
        ],
        idealFor: ['Property managers', 'Retail centers', 'Condo garages', 'Hospitals and campuses'],
    },
    {
        slug: 'car-washing',
        image: '/images/car-washing.jpg',
        legacyPath: '/car-washing',
        name: 'Car Washing',
        shortName: 'Car Washing',
        tagline: 'Fleet fresh.',
        summary: 'Detail-level exterior washing for vehicles and small fleets.',
        description:
            'A careful exterior wash for personal vehicles, work trucks and small fleets — done on site at your home, community or business alongside your property clean.',
        category: 'both',
        icon: Car,
        accent: 'from-ice-400 to-ice-600',
        includes: ['Exterior hand wash', 'Wheels and tires', 'Work trucks and vans', 'On-site fleet service'],
        idealFor: ['Homeowners', 'Small fleets', 'Communities', 'Dealership lots'],
    },
];

export const featuredServices = services.slice(0, 6);

export function getService(slug: string) {
    return services.find((service) => service.slug === slug);
}

export function relatedServices(current: Service, count = 3) {
    return services.filter((service) => service.slug !== current.slug).slice(0, count);
}
