
export const RESUME_DATA = {
  name: "Harsh Pratap Singh",
  title: "Creative Developer & UI/UX Designer",
  initials: "HS",
  location: "Ranchi, India",
  locationLink: "https://www.google.com/maps/place/Ranchi",
  about:
    "I'm a Final Year B.Tech CSE student with a passion for building high-performance, design-driven web applications. Specializing in Next.js, React, and backend systems, I craft digital experiences that are not just functional but visually immersive.",
  summary:
    "I craft minimalist, high-performance web experiences. With a strong background in full-stack development and a keen eye for design, I bridge the gap between technical complexity and visual elegance.",
  avatarUrl: "https://avatars.githubusercontent.com/u/12345678?v=4", // Placeholder
  personalWebsiteUrl: "https://harsh.dev",
  contact: {
    email: "prataph229@gmail.com",
    tel: "+918630989515",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/harshu0001",
        icon: "Github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/harsh-pratap-singh-62b831257/",
        icon: "Linkedin",
      },
      {
        name: "X",
        url: "https://x.com/prataph229",
        icon: "Twitter",
      },
    ],
  },
  education: [
    {
      school: "Indian Institute of Information Technology, Ranchi",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      start: "2022",
      end: "2026",
      grade: "CGPA: 8.35",
    },
  ],
  work: [
    {
      company: "Einstein's Square",
      link: "https://einsteinssquare.com",
      badges: ["Remote"],
      title: "Python Instructor",
      start: "Mar 2025",
      end: "Present",
      description:
        "Empowering the next generation of developers. I curate comprehensive computer science curricula and provide personalized mentorship to US-based students, ensuring mastery of core programming concepts.",
    },
    {
      company: "Codingal",
      link: "https://codingal.com",
      badges: ["Remote"],
      title: "Backend Developer",
      start: "Apr 2024",
      end: "Mar 2025",
      description:
        "Architected the Learning Management System (LMS) core. Implemented a real-time Teacher Dashboard, intuitive scheduling interfaces, and scalable backend services that power thousands of daily active users.",
    },
    {
      company: "CodePen.io",
      link: "https://codepen.io",
      badges: ["Remote"],
      title: "Front-End Developer (CSS Specialist)",
      start: "Aug 2023",
      end: "Dec 2024",
      description:
        "Pushed the boundaries of web animation and layout. Developed extensive CSS libraries and UI components, focusing on performance, accessibility, and visual fidelity.",
    },
  ],
  skills: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "C++",
    "Git",
  ],
  projects: [
    {
      title: "EduTech LMS",
      techStack: [
        "Full Stack",
        "Next.js",
        "MongoDB",
        "Express",
        "Framer Motion",
      ],
      description:
        "A reimaged digital learning platform. Features real-time collaboration, role-based dashboards, and a seamless flow for course delivery. Built for scale and responsiveness.",
      link: {
        label: "GitHub",
        href: "https://github.com/Start-Harsh/edutech",
      },
      imageUrl: "/images/project_lms_cover.png",
    },
    {
      title: "Airline Reservation Backend",
      techStack: ["Backend", "Node.js", "Express", "MongoDB", "REST API"],
      description:
        "The engine of global travel. A robust backend architecture handling complex booking logic, real-time seat availability, and secure payment processing with millisecond latency.",
      link: {
        label: "GitHub",
        href: "https://github.com/Start-Harsh/airline-backend",
      },
      imageUrl: "/images/project_airline_cover.png",
    },
    {
      title: "Mega Blog WebApp",
      techStack: ["Frontend", "React", "Appwrite", "Redux", "Tailwind CSS"],
      description:
        "Content creation meets modern design. A rich text editorial platform featuring dynamic routing, real-time content updates, and a glassmorphic UI that puts content first.",
      link: {
        label: "GitHub",
        href: "https://github.com/Start-Harsh/mega-blog",
      },
      imageUrl: "/images/project_blog_cover.png",
    },
  ],
} as const;
