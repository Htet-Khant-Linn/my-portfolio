export interface Social {
  name: string;
  url?: string;
  icon: string;
}

export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
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
  url?: string;
}

export interface Award {
  title: string;
  url?: string;
}

export interface Volunteering {
  role: string;
  organization: string;
  url?: string;
  period: string;
  description: string;
}

export interface Link {
  title: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  url?: string;
  tags?: string[];
  image?: string;
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
  projects: Project[];
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
      { name: "GitHub", url: "https://github.com/Htet-Khant-Linn", icon: "github" },
      { name: "Website", icon: "globe" }, // TODO: Add the website destination when available.
    ],
  },
  experience: [
    {
      role: "Business Analyst",
      company: "ThitsaWorks",
      companyUrl: "https://www.thitsaworks.com/",
      period: "September 2026 - Present",
      description: [
        "Contribute to financial technology projects, focusing on:",
        "Fraud Management System Integration: Analyze business requirements, design workflows, and support fraud detection system integration.",
        "IISP Integration Processes: Coordinate API integration, system testing, and issue resolution across financial service providers.",
        "Automation Pipelines: Develop and optimize automated workflows to improve operational efficiency.",
        "Data Analysis & Reporting: Analyze transaction data, monitor system performance, and prepare reports to support data-driven decisions."
      ]
    },
    {
      role: "Business Analyst Associate Intern",
      company: "ThitsaWorks",
      companyUrl: "https://www.thitsaworks.com/",
      period: "June - August 2026",
      description: [
        "Supported the integration of a Fraud Management System (FMS), focusing on business requirements analysis, technical documentation, system workflows, and coordination between stakeholders and technical teams."
      ]
    },
    {
      role: "M&E Assistant",
      company: "Impact Hub Yangon",
      companyUrl: "https://mm.linkedin.com/company/impact-hub-yangon-myanmar",
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
      companyUrl: "https://www.parami.edu.mm/",
      period: "November 2023 - June 2024",
      description: [
        "Coordinated program activities and managed participant data to track progress and enhance operational efficiencies.",
        "Implemented data-driven strategies to improve participant retention, resulting in an outstanding 90% program completion rate."
      ]
    },
    {
      role: "Freelance Computer Trainer",
      company: "Independent",
      // No company destination supplied for independent work.
      period: "December 2021 - November 2024",
      description: [
        "Trained individuals in technical tools including Microsoft Excel (functions, pivot tables, data prep) and Google Workspace to improve digital data literacy."
      ]
    }
  ],
  education: [
    {
      institution: "Parami University - Bard College",
      degree: "Bachelor of Arts in Statistics and Data Science (SDS) - Bard Global Degree",
      period: "Expected Graduation: June 2027",
      subDegree: "New York, United States | GPA: 3.92/4.0"
    },
    {
      institution: "Parami University - Bard College",
      degree: "Associate of Arts in Statistics and Data Science (SDS) - Bard Global Degree",
      period: "Completed: June 2025",
      subDegree: "New York, United States | GPA: 3.91/4.0"
    },
    {
      institution: "University of the People",
      degree: "Bachelor of Science in Business Administration",
      period: "Completed: June 2026",
      subDegree: "Pasadena, California, United States | CGPA: 3.86/4.0 | Summa Cum Laude (Highest Honors)"
    },
    {
      institution: "University of the People",
      degree: "Associate of Science in Business Administration",
      period: "Completed: December 2024",
      subDegree: "Pasadena, California, United States | CGPA: 3.75/4.0 | Magna Cum Laude (High Honors)"
    }
  ],
  skills: {
    tools: [
      { name: "Python", icon: "code" },
      { name: "SQL", icon: "database" },
      { name: "R", icon: "terminal" },
      { name: "Machine Learning", icon: "cpu" },
      { name: "Tableau", icon: "chart-bar-big" },
      { name: "Excel/Sheets", icon: "table" },
      { name: "Google Workspace", icon: "layers" },
      { name: "Office 365", icon: "briefcase" },
      { name: "KoboToolbox", icon: "clipboard-type" }
    ],
    languages: ["Burmese (Native)", "English (C1 Advanced)", "Japanese (N4)"],
    certifications: [
      { name: "Artificial Intelligence in a Human World: Skills, Ethics & Impact | GHEA21 (June 2026)", url: "https://www.dropbox.com/scl/fi/bidcwvnhawacnitsfu06d/GHEA21_Online_Course_Artificial_Intelligence_in_a_Human_World_Skills-_Ethics_-_Impact_Linn.pdf?rlkey=5w84mqhtbebuz1zgrg9j612oz&st=hhyqwbbf&dl=0" },
      { name: "Certificate in Mathematical Introduction to Data Analysis | Smolny Beyond Borders (June 2026)", url: "https://www.dropbox.com/scl/fi/d3odyhoamu6etin4fbn7z/SBB_Certificate_Mathematical_Introduction_to_Data_Analysis_Linn.pdf?rlkey=oi390an9hxf6k058h3re9kdy6&st=4e2wz0k9&dl=0" },
      { name: "Undergraduate Certificate in Entrepreneurship | University of the People (February 2026)", url: "https://www.dropbox.com/scl/fi/1qhfc8iebc62fl591mjdf/2026-02_Certificate-in-Entrepreneurship.pdf?rlkey=32vwtdy9uyjqwd1tot5c26fzd&st=7rs0bf79&dl=0" },
      { name: "Building Applications with OOP | DataCamp (January 2026) ", url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/03128911d81fa3bee27870407d531400abab2f4b" },
      { name: "GIS Application in Environmental Management | Open Society University Network (August 2025)", url: "https://www.dropbox.com/scl/fi/xl49vkebfelavq6w1klb3/OSUN_Course_GIS_Application_in_Environmental_Management_Linn.pdf?rlkey=cb305h2zzp02o9nypd6hzaxsp&st=wjy38ro4&dl=0" },
      { name: "Undergraduate Certificate in Marketing | University of the People (June 2025)", url: "https://www.dropbox.com/scl/fi/dmchxuixepd9e5ivm8o7d/2025-06_Certificate-in-Marketing.pdf?rlkey=h2jl8abgpg3w02yefbmxo3w06&st=ft0k1als&dl=0" },
      { name: "Undergraduate Certificate in Accounting | University of the People (June 2025)", url: "https://www.dropbox.com/scl/fi/r7l0ftgr8w2ei9hl43aoc/2025-06_Certificate-in-Accounting.pdf?rlkey=5wd2435wztt6l795if7pw4hbc&st=q96nhex5&dl=0" },
      { name: "Storytelling with Statistics Course | Open Society University Network (June 2025)", url: "https://www.dropbox.com/scl/fi/koxw3rifzvh76u5exqyls/OSUN_Course_Storytelling_with_Statistics_Linn.pdf?rlkey=erghowdg7sats87a9bw4temti&st=17oarlrx&dl=0" },
      { name: "Microsoft Business Analyst Professional Certificate | Coursera (May 2025)", url: "https://www.coursera.org/account/accomplishments/professional-cert/JD8GB0LH6SS1?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof" },      
      { name: "European Union Law and Human Rights Course | Open Society University Network (March 2025)", url: "https://www.dropbox.com/scl/fi/piqg85ozlatz6pnqu0da3/OSUN_Course_European_Union_Law_and_Human_Rights_Linn.pdf?rlkey=jd3jk65pdsjp3tjljv7lhy4yf&st=b96az2gi&dl=0" },
      { name: "Google Advanced Data Analysis Certificate | Coursera (January 2025)", url: "https://coursera.org/share/8104de0c21fecc3b4317f38021631794" },
      { name: "Associate Data Engineering | DataCamp (December 2024) ", url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/a797d14fd3cb56f41fb0fbc71e3aba5e954966d9" },
      { name: "Data Literacy Certification | DataCamp (August 2024)", url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/edfffbceccf8ba6c4c00845fb1849d2120050132" },
      { name: "Google Project Management Professional Certificate | Coursera (July 2024)", url: "https://coursera.org/share/40425f8c7d1c2cb37e7700097947d44f" },
      { name: "Academic and Research Skills Workshop | Parami University (June – August 2024)" }, // TODO: Add certificate URL.
      { name: "Ethical Leadership Network Collaborative Course | Open Society University Network (June 2024)" }, // TODO: Add certificate URL.
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
      role: "Project Advisor",
      organization: "The SDS Bridge Workshop Series at Parami University",
      url: "https://www.linkedin.com/posts/htet-khant-linn_datascience-stemeducation-paramiuniversity-share-7455235327411134464-ddqy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADJTN7IBuH4Uz3To_1ZDGZZyC474lrtpNkU",
      period: "April 2026",
      description: "The SDS Bridge Workshop Series at Parami University was a three-session program designed to help students overcome initial fears about Data Science and build confidence in their first steps into the field. As Project Advisor & Tech Support, I managed registration, Zoom coordination, participant communications, and live session support, working alongside expert facilitators to make the series a success."
    },
    {
      role: "Data & Database Administrator",
      organization: "'Sar Phart Win' Civic Engagement Project",
      // TODO: Add the project destination when available.
      period: "March 2026",
      description: "Designed and built a relational student database in spreadsheets to accurately monitor attendance and track participant progress, accelerating administrative workflows."
    },
    {
      role: "Data Specialist",
      organization: "African NGO - Inkululeko | Parami University's Service-Learning Program",
      url: "https://www.inkululeko.org/",
      period: "February 2025 - April 2025",
      description: "Designed and administered comprehensive student information databases in Google Sheets to track and manage participant data. Utilized advanced Excel functions to analyze datasets and formulate data-driven reports."
    },
    {
      role: "Mentor",
      organization: "Higher Education Access Program (HEAP) | USAID",
      url: "https://www.parami.edu.mm/post/introducing-new-program-higher-education-access-program",
      period: "January 2025 - May 2025",
      description: "Oversaw student progress data to provide targeted guidance and support to mentees navigating the higher education application process. Facilitated workshops on essay writing and time management."
    },
    {
      role: "Project Manager & Graphic Designer",
      organization: "Yoe Yar | Civic Engagement Project",
      // TODO: Add the project destination when available.
      period: "April 2024",
      description: "Managed project timelines, deliverables, and team execution for cultural exchange initiatives, ensuring alignment with data-driven goals and objectives."
    }
  ],
  projects: [
    {
      title: "Spaceship Titanic Prediction",
      description: "A machine learning project using Kaggle's Spaceship Titanic dataset to predict whether passengers were transported to another dimension. Compared Logistic Regression and K-Nearest Neighbors using stratified 5-fold cross-validation, with pipelines for missing-value imputation, scaling, one-hot encoding, and feature selection. The tuned KNN model achieved 79.38% mean cross-validation accuracy. An interactive Streamlit app lets users enter passenger details for predictions and explore the training dataset.",
      url: "https://github.com/Htet-Khant-Linn/spaceship-titanic-ml-app",
      tags: ["Machine Learning", "Streamlit", "KNN", "Logistic Regression", "Data Preprocessing", "Feature Selection", "Cross-Validation"]
    },
    {
      title: "Cisco Packet Tracer Campus Network Simulation",
      description: "Designed and configured a campus network in Cisco Packet Tracer connecting three departmental LANs through two routers, switches, and Ethernet hubs. Implemented IPv4 addressing, /24 departmental subnets, a /30 router-to-router link, and static routing to enable communication across departments. The project demonstrates network topology design, Cisco IOS configuration, and connectivity troubleshooting.",
      url: "https://github.com/Htet-Khant-Linn/cisco-packet-tracer-campus-network",
      tags: ["Cisco Packet Tracer", "Cisco IOS CLI", "Networking", "IPv4", "Subnetting", "Static Routing", "Network Troubleshooting"]
    },
    {
      title: "Gemini-Powered YouTube Summarizer",
      description: "A web-based application that leverages the power of Google's Gemini AI to generate comprehensive, well-formatted summaries of any YouTube video instantly.",
      url: "https://github.com/Htet-Khant-Linn/gemini-powered-youtube-summarizer.git",
      tags: ["HTML", "Python", "CSS", "Dockerfile", "Google Cloud Run", "Flask", "Google GenAI SDK"]
    },
    {
      title: " Cat-Dog Image Segmentation using U-Net with MobileNet Backbone",
      description: "This project was developed as the final submission for the WAI Practical Machine Learning course by Team ML_Heros. It focuses on semantic segmentation to distinguish between cats and dogs in images. A U-Net model with a MobileNet encoder is trained on a custom dataset annotated using LabelMe. The trained model is served via a FastAPI REST API, allowing users to upload images and receive segmentation masks overlaid on the original image. The project emphasizes the complete pipeline from data annotation and preprocessing to model training, inference, and deployment.",
      url: "https://github.com/ML-Summer-School-by-WAI/Practical-ML-by-WAI/tree/main/8_final_proj/ML_Heros",
      tags: ["Python", "FastAPI", "TensorFlow", "U-Net", "MobileNet", "Segmentation", "Computer Vision", "LabelMe", "Docker", "Google Cloud Run", "OpenCV", "REST API"]
    },
    {
      title: "Benchmarking RNN, LSTM, and GRU for Oil Price Forecasting",
      description: "A STAT 303 final project at Parami University comparing recurrent neural networks for next-day Brent and WTI crude oil price forecasting. Combined historical prices with financial and geopolitical indicators, prepared chronological training and test sets, and evaluated RNN, LSTM, and GRU models using RMSE, MAE, and MAPE. The Simple RNN performed best under the tested experimental setup.",
      url: "https://github.com/Htet-Khant-Linn/STAT-303-Final-Project",
      tags: ["Python", "TensorFlow", "Keras", "Time Series", "RNN", "LSTM", "GRU", "Data Visualization"]
    },
    {
      title: "CareerPath AI",
      description: "A personalized tech career roadmap generator powered by Google's Agent Development Kit and Gemini 2.5 Flash. Coordinates specialist agents to research skills, learning resources, portfolio projects, and market insights, then organizes the results into a tailored learning timeline. Uses a Google Cloud Run backend and an HTML frontend hosted on GitHub Pages.",
      url: "https://github.com/Htet-Khant-Linn/careerpath-ai",
      tags: ["Google ADK", "Gemini", "Multi-Agent Systems", "Google Vertex AI", "Google Cloud Run", "HTML", "GitHub Pages"]
    },
    {
      title: "Analyzing the Popularity of Programming Languages",
      description: "Analyzed Stack Overflow question data in R to explore programming language popularity. Used dplyr to identify the five most frequently discussed language tags from 2015 to 2020, calculated their shares of annual questions, and visualized trends with ggplot2.",
      url: "https://github.com/Htet-Khant-Linn/Project-Analyze-the-Popularity-of-Programming-Languages",
      tags: ["R", "dplyr", "ggplot2", "readr", "Data Analysis", "Data Visualization"]
    },
    {
      title: "Visualizing the History of Nobel Prize Winners",
      description: "A DataCamp project exploring Nobel Prize winners from 1901 to 2023 using Nobel Prize API data. Used Python, pandas, matplotlib, and seaborn to analyze and visualize historical trends across prize categories, including Chemistry, Literature, Physics, Physiology or Medicine, Economics, and Peace.",
      url: "https://github.com/Htet-Khant-Linn/Project_Visualizing-the-History-of-Nobel-Prize-Winners",
      tags: ["Python", "pandas", "Matplotlib", "seaborn", "Data Analysis", "Data Visualization"]
    },
    {
      title: "Exploring London's Travel Network",
      description: "A DataCamp SQL project exploring public transport usage in Greater London using Transport for London journey volume data. Analyzed monthly travel trends across transport modes, including the Underground, buses, trams, and DLR.",
      url: "https://github.com/Htet-Khant-Linn/Project-Exploring-London-s-Travel-Network",
      tags: ["SQL", "Data Analysis", "Public Transport", "Transport for London"]
    },
    {
      title: "Exploring NYC Public School Test Result Scores",
      description: "A DataCamp project analyzing SAT performance across New York City public high schools using Python and pandas. Identified schools with strong math scores, ranked the top ten schools by combined SAT results, and compared borough-level averages and score variation.",
      url: "https://github.com/Htet-Khant-Linn/Project-Exploring-NYC-Public-School-Test-Result-Scores",
      tags: ["Python", "pandas", "Data Analysis", "Education", "Descriptive Statistics"]
    },
    {
      title: "Investigating Netflix Movies",
      description: "A DataCamp exploratory data analysis project investigating movies released in the 1990s using Netflix catalog data. Filtered and analyzed records with pandas, visualized movie duration distributions with matplotlib, and counted action movies shorter than 90 minutes.",
      url: "https://github.com/Htet-Khant-Linn/Project_Investigating_Netflix_Movies",
      tags: ["Python", "pandas", "Matplotlib", "Exploratory Data Analysis", "Data Visualization"]
    }
  ],
  blogs: [],
  interviews: []
};
