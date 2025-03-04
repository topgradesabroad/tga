// components/TestimonialSectionServer.tsx
import TestimonialClient from './TestimonialClient';

export type Testimonial = {
  name: string;
  university: string;
  course: string;
  year: string;
  quote: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Maya Patel",
    university: "Stanford University",
    course: "MSc Computer Science",
    year: "2023",
    quote:
      "The advanced algorithms course completely transformed my understanding of problem-solving. The project-based learning approach helped me land my dream internship at Google!",
    image:
      "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=400&h=400&fit=crop",
  },
  {
    name: "James Wilson",
    university: "MIT",
    course: "BSc Artificial Intelligence",
    year: "2024",
    quote:
      "The practical assignments and real-world projects gave me hands-on experience that truly matters. The mentorship program was incredibly valuable for my professional growth.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  },
  {
    name: "Sarah Chen",
    university: "UC Berkeley",
    course: "BSc Data Science",
    year: "2023",
    quote:
      "The collaborative environment and cutting-edge curriculum helped me develop both technical skills and leadership abilities. I'm now confidently leading data science projects!",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop",
  },
  {
    name: "Alex Thompson",
    university: "Georgia Tech",
    course: "BSc Machine Learning",
    year: "2024",
    quote:
      "The hands-on approach to machine learning concepts made complex topics accessible. I particularly enjoyed the collaborative projects and industry partnerships.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Emma Davis",
    university: "CMU",
    course: "BSc Software Engineering",
    year: "2023",
    quote:
      "The mentorship program and industry partnerships opened doors I never thought possible. I've grown both technically and professionally.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
  },
];

export default function TestimonialSection() {
  return <TestimonialClient testimonials={testimonials} />;
}
