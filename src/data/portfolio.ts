// এই file-এ website-এর সব editable information এক জায়গায় রাখা হয়েছে।
// ফলে নাম, skill, project বা experience change করতে component-এর design code edit করতে হবে না।

export const portfolio = {
  // Website-এর বিভিন্ন জায়গায় আমার নাম দেখানোর জন্য
  name: "Niloy Chandra Datta",

  // Hero section-এ আমার current role আর এক লাইনের intro
  role: "Aspiring Software Engineer",
  tagline: "I build fast, scalable, and responsive web applications.",

  // Social links - Navbar বা Footer-এ click করলে এই link-গুলোতে যাবে
  socials: {
    github: "https://github.com/niloy-datta",
    linkedin: "https://www.linkedin.com/in/niloy-d-9897473a8/",
    email: "niloy.datta.dev@gmail.com",
    location: "Tilagar, Sylhet",
    mapsUrl: "https://maps.app.goo.gl/NUU8nJGRc6JVbMVS9"
  },

  // About section-এর detail text
  about: "I’m a third-year Computer Science student, currently in the final semester of my third year, with a strong passion for software engineering, web development, and building meaningful digital products. I enjoy solving challenging problems, designing scalable solutions, and transforming ideas into clean, efficient, and user-focused applications. I’m continuously exploring modern technologies, AI, and emerging software trends to strengthen my skills and build impactful solutions. My goal is to create reliable, scalable, and intuitive software that combines strong engineering with an excellent user experience.",

  // Skills - category অনুযায়ী ভাগ করা। UI-তে এগুলো আলাদা আলাদা block হিসেবে দেখাবে।
  skills: {
    languages: ["C", "C++", "Python", "Java"],
    frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
    backend: [],
    tools: ["IntelliJ IDEA", "WebStorm", "Android Studio", "GitHub", "Canva"]
  },

  // Projects - object-এর array. Map করে project card বানানো হবে।
  projects: [
    {
      title: "Job Search Site",
      description: "A worldwide job search platform designed to help users discover and explore job opportunities across non-corporate sectors.",
      techStack: ["Flutter", "SQL", "Firebase"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "SSC & HSC Quiz Application",
      description: "An educational quiz application for SSC and HSC students, featuring practice questions and subject-based learning support.",
      techStack: ["Flutter", "SQL", "Firebase"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Expense Tracker App",
      description: "A Flutter-based expense tracking application for recording, organizing, and monitoring personal expenses.",
      techStack: ["Flutter", "SQL", "Firebase"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Java Learning App",
      description: "An educational application designed to help learners study Java programming concepts through structured lessons and practice content.",
      techStack: ["Flutter", "SQL", "Firebase"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ],

  academicProjects: [
    {
      title: "Smart Attendance System",
      course: "Microprocessor & Interfacing (MPI)",
      description: "An RFID-based smart attendance system developed using Arduino to automate student attendance tracking, reduce manual effort, and improve attendance record accuracy.",
      techStack: ["Arduino", "RFID"]
    },
    {
      title: "Online Job Portal",
      course: "Database Management Systems (DBMS)",
      description: "A database-driven job portal designed to manage users, employers, job postings, applications, and recruitment-related data efficiently.",
      techStack: ["Database", "SQL"]
    },
    {
      title: "University Management System",
      course: "Object-Oriented Programming (OOP)",
      description: "An object-oriented university management system developed to manage students, faculty, courses, departments, and academic information using core OOP principles.",
      techStack: ["Java", "OOP"]
    }
  ],

  // Experience বা Education history
  experience: [
    {
      role: "Business Development",
      company: "SHL Group China",
      duration: "Present",
      description: "Contributing to international business operations through supplier coordination, strategic sourcing, commercial research, negotiation support, and cross-border communication."
    }
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science and Engineering",
      institution: "Metropolitan University",
      duration: "2024 - 2027",
      result: ""
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Moulvibazar Government College",
      duration: "Completed",
      result: "GPA: 4.92"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Nayabazar Krishna Chandra High School & College",
      duration: "Completed",
      result: "GPA: 5.00"
    },
    {
      degree: "Junior School Certificate (JSC)",
      institution: "Nayabazar Krishna Chandra High School & College",
      duration: "Completed",
      result: "GPA: 5.00"
    },
    {
      degree: "Primary School Certificate (PSC)",
      institution: "Government Primary School — Kobitra Abirirty",
      duration: "Completed",
      result: "GPA: 5.00"
    }
  ],

  // Current focus area - Currently learning, focus, research interest
  currentFocus: {
    title: "Currently Focusing On",
    description: "Currently learning Artificial Intelligence, Machine Learning, and Distributed Systems, with a focus on understanding intelligent technologies, scalable architectures, and real-world software systems."
  },
  
  currentlyLearning: [
    "Artificial Intelligence",
    "Machine Learning",
    "Distributed Systems"
  ],

  researchInterest: "Human-Computer Interaction (HCI) and the impact of AI-driven UI design on user productivity."
};
