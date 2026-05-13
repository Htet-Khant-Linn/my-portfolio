export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  subDegree?: string;
  url?: string;
}

export interface Tool {
  name: string;
  icon: string;
}

export interface Certification {
  name: string;
  url: string;
}

export interface Award {
  title: string;
  url?: string;
}

export interface Volunteering {
  role: string;
  organization: string;
  url: string;
  period: string;
  description: string;
}

export interface Link {
  title: string;
  url: string;
}

export interface PortfolioData {
  profile: {
    firstName: string;
    lastName: string;
    title: string;
    email: string;
    profileImage: string;
    about: string;
    socials: Social[];
  };
  experience: Experience[];
  education: Education[];
  skills: {
    tools: Tool[];
    languages: string[];
    certifications: Certification[];
  };
  interests: string;
  awards: Award[];
  volunteering: Volunteering[];
  blogs: Link[];
  interviews: Link[];
}

export const portfolioData: PortfolioData = {
  profile: {
    firstName: "Htet Khant",
    lastName: "Linn",
    title: "Data Analyst",
    email: "htetkhantlinn123@gmail.com",
    profileImage: "my-photo-1.jpg",
    about: "Dedicated Data Analyst and Statistics & Data Science student with a strong track record of transforming complex datasets into actionable insights. Proficient in statistical programming (Python, R), SQL, and advanced data visualization techniques. Proven experience building automated data pipelines, developing database solutions, and creating dashboards to optimize operational workflows, reduce errors, and drive data-driven decision-making for stakeholders.",
    socials: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/htet-khant-linn/", icon: "linkedin" },
      { name: "GitHub", url: "https://github.com/htetkhantlinn", icon: "github" },
      { name: "Website", url: "#", icon: "globe" },
    ],
  },
  experience: [
    {
      role: "M&E Assistant",
      company: "Impact Hub Yangon",
      companyUrl: "#",
      period: "June 2025 - April 2026",
      description: [
        "Analyzed complex project datasets using statistical methods to prepare comprehensive reports and visual data insights, directly informing stakeholder decision-making.",
        "Engineered and maintained automated data pipelines within Google Sheets, accelerating workflow efficiency by 300% and significantly reducing manual data entry errors.",
        "Developed integrated project monitoring templates and workflow trackers to streamline data governance and cross-departmental collaboration.",
        "Designed and deployed digital survey forms (Google Forms, KoBo Toolbox) to capture, clean, and structure high-quality monitoring data from beneficiaries.",
        "Translated raw data into impactful presentations and actionable visual insights for external stakeholders, including UNDP partners."
      ]
    },
    {
      role: "Program Assistant",
      company: "Google Career Certificate Program | Parami University",
      companyUrl: "#",
      period: "November 2023 - June 2024",
      description: [
        "Coordinated program activities and managed participant data to track progress and enhance operational efficiencies.",
        "Implemented data-driven strategies to improve participant retention, resulting in an outstanding 90% program completion rate."
      ]
    },
    {
      role: "Freelance Computer Trainer",
      company: "Independent",
      companyUrl: "#",
      period: "December 2021 - November 2024",
      description: [
        "Trained individuals in technical tools including Microsoft Excel (functions, pivot tables, data prep) and Google Workspace to improve digital data literacy."
      ]
    }
  ],
  education: [
    {
      institution: "Parami University - Bard College",
      degree: "Bachelor of Arts in Statistics and Data Science (SDS) - Dual Degrees",
      period: "Expected Graduation: June 2027",
      subDegree: "New York, United States | GPA: 3.92/4.0"
    },
    {
      institution: "University of the People",
      degree: "Bachelor's Degree in Business Administration",
      period: "Expected Graduation: July 2026",
      subDegree: "Pasadena, California, United States | Current CGPA: 3.85/4.0"
    }
  ],
  skills: {
    tools: [
      { name: "SQL", icon: "database" },
      { name: "Python", icon: "code" },
      { name: "R", icon: "terminal" },
      { name: "Machine Learning", icon: "cpu" },
      { name: "Power BI", icon: "bar-chart" },
      { name: "Excel/Sheets", icon: "table" },
      { name: "Google Workspace", icon: "layers" },
      { name: "Office 365", icon: "briefcase" },
    ],
    languages: ["Burmese (Native)", "English (C1 Advanced)", "Japanese (N4)"],
    certifications: [
      { name: "Microsoft Business Analyst Professional Certificate", url: "#" },
      { name: "Storytelling with Statistics Course | Open Society University Network", url: "#" },
      { name: "Google Advanced Data Analysis Certificate | Coursera", url: "#" },
      { name: "Associate Data Engineering | DataCamp", url: "#" },
      { name: "Data Literacy Certification | DataCamp", url: "#" },
      { name: "Google Project Management Professional Certificate | Coursera", url: "#" }
    ]
  },
  interests: "Playing guitar and watching YouTube to learn new things. Proficient in computer literacy.",
  awards: [
    { title: "5-Time Consecutive Dean's List Award, Parami University (2023 – Present)" },
    { title: "Dean's List Award (Every Term), University of the People (2023 – Present)" },
    { title: "Winner of the 2024 Citizen Science Program ('Climate Change and Environment'), Parami University (February 2024)" }
  ],
  volunteering: [
    {
      role: "Data & Database Administrator",
      organization: "'Sar Phart Win' Civic Engagement Project",
      url: "#",
      period: "Recent",
      description: "Designed and built a relational student database in spreadsheets to accurately monitor attendance and track participant progress, accelerating administrative workflows."
    },
    {
      role: "Data Specialist",
      organization: "African NGO - Inkululeko | Parami University's Service-Learning Program",
      url: "#",
      period: "February 2025 - April 2025",
      description: "Designed and administered comprehensive student information databases in Google Sheets to track and manage participant data. Utilized advanced Excel functions to analyze datasets and formulate data-driven reports."
    },
    {
      role: "Mentor",
      organization: "Higher Education Access Program (HEAP) | USAID",
      url: "#",
      period: "January 2025 - May 2025",
      description: "Oversaw student progress data to provide targeted guidance and support to mentees navigating the higher education application process. Facilitated workshops on essay writing and time management."
    },
    {
      role: "Project Manager & Graphic Designer",
      organization: "Yoe Yar | Civic Engagement Project",
      url: "#",
      period: "April 2024",
      description: "Managed project timelines, deliverables, and team execution for cultural exchange initiatives, ensuring alignment with data-driven goals and objectives."
    }
  ],
  blogs: [],
  interviews: []
};
