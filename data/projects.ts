export const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "Project 1",
    description:
      "Kelebogile Doctor Modisane Tutor and Mentor Organization provides a wide range of modules to cater to the diverse needs of students.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "Next.js" },
      { name: "React" },
      { name: "Firebase" },
      { name: "React Chart.js 2" },
      { name: "TypeScript" },
      { name: "PWA (Next PWA)" },
    ],
    image: "/projects/d-n-mentors.png",
    live: "https://d-n-mentors.vercel.app/",
    github: "https://github.com/NelsonMALGAS/D-N-Mentors.git",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "Project 2",
    description:
      "Foodies Delight is a web application built with React and Next.js, designed to cater to culinary enthusiasts who love exploring and sharing delicious recipes. Whether you're a seasoned chef or a home cook, Foodies Delight provides a platform to discover and contribute to a diverse collection of recipes.",
    stack: [
      { name: "HTML 5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "Next.js" },
      { name: "React" },
      { name: "MUI (Material UI)" },
      { name: "MongoDB" },
    ],
    image: "/projects/recipe.png",
    live: "https://foodiesdelight.vercel.app/",
    github: "https://github.com/NelsonMALGAS/Foodies_Delight_Recipe_App.git",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Project 3",
    description:
      "This is a simple web development blog created using React and Next.js. It features a homepage with a hero section and a list of featured blog posts. The blog is designed to showcase articles related to programming and web development.",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "React DOM" },
      { name: "Gray Matter" },
      { name: "React Markdown" },
      { name: "React Syntax Highlighter" },
    ],
    image: "/projects/blog.png",
    live: "https://my-blog-ten-sandy.vercel.app/",
    github: "https://github.com/NelsonMALGAS/my-blog.git",
  },
];

export interface Project {
  id: string;
  num: string;
  title: string;
  liveDemo: string;
  image: string;
  description: string;
  stack: { name: string }[];
  github: string;
}

export const freelanceProjects: Project[] = [
  {
    id: "proj1234",
    num: "01",
    title: "Developer Portfolio",
    liveDemo: "https://portfolio-blue-mu-82.vercel.app/",
    image: "/images/portfolio.png",
    description:
      "A personal portfolio showcasing my skills, projects, and experience.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "Next.js" },
      { name: "GitHub" },
    ],
    github: "https://github.com/NelsonMALGAS/portfolio",
  },
  {
    id: "proj5678",
    num: "02",
    title: "Podcast App",
    liveDemo: "https://echo-cast-app.vercel.app/podcasts",
    image: "/images/echo-cast.png",
    description:
      "EchoCast is a modern, minimalistic, and fully responsive podcast streaming application built with Next.js, ShadCN, TypeScript, and Tailwind CSS. It allows users to explore, favorite, and listen to their favorite podcasts in a seamless and user-friendly environment.",
    stack: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "Tailwind CSS" },
    ],
    github: "https://github.com/NelsonMALGAS/echo-cast-app",
  },
  {
    id: "proj9101",
    num: "03",
    title: "Blog Platform",
    liveDemo: "my-blog-ten-sandy.vercel.app",
    image: "/images/blog.png",
    description:
      "A blog platform with user authentication, posting, and comment features.",
    stack: [{ name: "Next.js" }, { name: "MongoDB" }, { name: "Tailwind CSS" }],
    github: "https://github.com/NelsonMALGAS/my-blog",
  },
  {
    id: "proj1122",
    num: "04",
    title: "Foodies_Delight_Recipe_App",
    liveDemo: "https://foodiesdelight.vercel.app/",
    image: "/images/recipe-app.png",
    description:
      "Foodies Delight is a web application built with React and Next.js, designed to cater to culinary enthusiasts who love exploring and sharing delicious recipes. Whether you're a seasoned chef or a home cook, Foodies Delight provides a platform to discover and contribute to a diverse collection of recipes.",
    stack: [
      { name: "React.js" },
      { name: "MongoDB" },
      { name: "Tailwind CSS" },
      { name: "GitHub" },
    ],
    github: "https://github.com/NelsonMALGAS/Foodies_Delight_Recipe_App",
  },
  {
    id: "proj3344",
    num: "05",
    title: "Events App",
    liveDemo: "https://next-app-rose-three.vercel.app/",
    image: "/images/events-app.png",
    description:
      "This is a simple Next.js application that displays a list of events. It allows users to view upcoming events, event details, and more. This README will provide you with instructions on how to set up and run the application.",
    stack: [
      { name: "React.js" },
      { name: "MongoDB" },
      { name: "Tailwind CSS" },
    ],
    github: "https://github.com/NelsonMALGAS/next-app",
  },
  {
    id: "proj5566",
    num: "06",
    title: "D & N Tutor,Mentor Org",
    liveDemo: "https://d-n-mentors.vercel.app/",
    image: "/images/d-n-mentors.png",
    description:
      "We are a comprehensive educational service provider specializing in tutoring and mentoring services for students across various subjects, including business, finance, economics, public administration, and project management.",
    stack: [
      { name: "React.js" },
      { name: "Firebase" },
      { name: "Tailwind CSS" },
      { name: "Next.js" },
    ],
    github: "https://github.com/NelsonMALGAS/D-N-Mentors",
  },
];
