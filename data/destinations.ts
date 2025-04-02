// data/destinations.ts
export interface Destination {
    id: string;
    name: string;
    flagImage: string;
    description: string;
    universities: number;
    internationalStudents: number;
    highlights: string[];
    topUniversities: string[];
    costOfLiving: string;
  }
  
  export const destinations: Destination[] = [
    {
      id: "usa",
      name: "United States",
      flagImage: "/Flags/us.png",
      description:
        "Experience cutting-edge research, diverse campus life, and a wide range of academic opportunities.",
      universities: 4500,
      internationalStudents: 1000000,
      highlights: [
        "Ivy League Institutions",
        "Silicon Valley Innovation",
        "Diverse Campus Life"
      ],
      topUniversities: [
        "Harvard University",
        "Stanford University",
        "MIT"
      ],
      costOfLiving:
        "Approximately $1,500 - $2,500 per month, depending on the city."
    },
    {
      id: "uk",
      name: "United Kingdom",
      flagImage: "/Flags/uk.png",
      description:
        "Discover rich academic heritage, historic institutions, and a strong research tradition.",
      universities: 130,
      internationalStudents: 485000,
      highlights: [
        "Oxford & Cambridge",
        "World-Class Research",
        "Global Networking"
      ],
      topUniversities: [
        "University of Oxford",
        "University of Cambridge",
        "Imperial College London"
      ],
      costOfLiving:
        "Approximately £1,000 - £1,500 per month, depending on the location."
    },
    {
      id: "canada",
      name: "Canada",
      flagImage: "/Flags/ca.png",
      description:
        "Enjoy high-quality education in a welcoming, multicultural environment.",
      universities: 98,
      internationalStudents: 250000,
      highlights: [
        "High Quality of Life",
        "Inclusive Campuses",
        "Innovative Research"
      ],
      topUniversities: [
        "University of Toronto",
        "McGill University",
        "University of British Columbia"
      ],
      costOfLiving:
        "Approximately CAD 1,200 - CAD 2,000 per month, depending on the city."
    },
    {
      id: "australia",
      name: "Australia",
      flagImage: "/Flags/au.png",
      description:
        "Study in a vibrant, innovative environment with top-ranked universities and a relaxed lifestyle.",
      universities: 43,
      internationalStudents: 320000,
      highlights: [
        "Research & Innovation",
        "Great Quality of Life",
        "Multicultural Community"
      ],
      topUniversities: [
        "University of Melbourne",
        "Australian National University",
        "University of Sydney"
      ],
      costOfLiving:
        "Approximately AUD 1,500 - AUD 2,500 per month, depending on the city."
    },
    {
      id: "germany",
      name: "Germany",
      flagImage: "/Flags/ge.png",
      description:
        "Renowned for engineering and technology, with many tuition-free public universities.",
      universities: 380,
      internationalStudents: 400000,
      highlights: [
        "Engineering Excellence",
        "No Tuition Fees",
        "Strong Economy"
      ],
      topUniversities: [
        "Technical University of Munich",
        "Heidelberg University",
        "Humboldt University of Berlin"
      ],
      costOfLiving:
        "Approximately €800 - €1,200 per month, depending on the city."
    },
    {
      id: "france",
      name: "France",
      flagImage: "/Flags/fr.svg",
      description:
        "A cultural hub offering world-class education and a vibrant artistic heritage.",
      universities: 71,
      internationalStudents: 325000,
      highlights: [
        "Art & Culture",
        "Fashion & Design",
        "Gastronomy"
      ],
      topUniversities: [
        "Sorbonne University",
        "École Normale Supérieure",
        "Paris Sciences et Lettres University"
      ],
      costOfLiving:
        "Approximately €1,000 - €1,500 per month, depending on the city."
    },
    {
      id: "new-zealand",
      name: "New Zealand",
      flagImage: "/Flags/nz.png",
      description:
        "Study amidst breathtaking natural landscapes with a safe, friendly atmosphere.",
      universities: 8,
      internationalStudents: 65000,
      highlights: [
        "Stunning Landscapes",
        "Safe & Welcoming",
        "Innovative Research"
      ],
      topUniversities: [
        "University of Auckland",
        "University of Otago",
        "Victoria University of Wellington"
      ],
      costOfLiving:
        "Approximately NZD 1,500 - NZD 2,000 per month, depending on the city."
    }
  ];
  