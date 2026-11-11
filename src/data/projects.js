// Add new work here. Optional case-study fields can be left out until they are true.
export const projects = [
  {
    slug: "auren",
    title: "AUREN",
    description:
      "A premium fashion e-commerce concept for a considered edit of watches, bags, eyewear, jewellery and accessories.",
    longDescription:
      "AUREN is an evolving digital storefront concept built around modern luxury and carefully selected fashion accessories. It is an ongoing project, so this case study separates the direction explored so far from functionality that has not yet been verified.",
    category: "E-commerce concept",
    status: "In progress",
    featured: true,
    technologies: ["HTML", "CSS", "JavaScript"],
    thumbnail: {
      src: "/images/projects/auren-preview.png",
      alt: "Homepage screenshot of the AUREN fashion e-commerce website",
    },
    gallery: [
      {
        src: "/images/projects/auren-gallery-shop.png",
        alt: "Shop screenshot of the AUREN fashion e-commerce website",
        caption: "Editorial reference · Shop",
      },
      {
        src: "/images/projects/auren-gallery-product.png",
        alt: "Product screenshot of the AUREN fashion e-commerce website",
        caption: "Editorial reference · Product",
      },
    ],
    overview:
      "AUREN explores how a focused accessories store can present watches, bags, eyewear, jewellery and related pieces with a modern-luxury point of view.",
    purpose:
      "The concept is a practical space to learn by building: shaping a storefront idea, translating it into interface work, and extending the implementation as new skills are learned.",
    role: "Personal concept project. I have practised an earlier version with HTML and CSS while gradually introducing JavaScript, and explored a more polished visual iteration. The work remains in progress.",
    projectDirection: [
      "An accessories-led product concept spanning watches, bags, eyewear, jewellery and related fashion pieces.",
      "An evolving visual and technical exploration rather than a finished or production-ready store.",
      "Editorial product references are used in this portfolio until authentic screenshots from the implementation are available.",
    ],
    lessonsLearned: [
      "A concept can be presented clearly without claiming features that have not been built or tested.",
      "Keeping the product direction and the implementation status distinct makes the next development steps easier to plan.",
    ],
    liveUrl: "https://auren-accessories.vercel.app/",
    repoUrl: "",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}
