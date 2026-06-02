import { EducationSection } from "../interfaces/education.interface";
import { ExternalSite } from "../interfaces/external-site.interface"
import { ProjectSection } from "../interfaces/project.interface";
import { SkillSection } from "../interfaces/skill-section.interface";
import { ExperienceSection } from "../interfaces/work-experience.interface";
import { ContactInfo } from "../interfaces/contact.interface";
import { AssetPaths } from "./asset-paths.enum";
import { CertificateSection } from "../interfaces/certificate.interface";

// Social media links to show
const SocialMediaLinks: ExternalSite[] = [
    {
        name: "Github",
        link: "https://github.com/bajpaipraveen0",
        simpleIconName: "github",
        backgroundColor: "#181717",
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/bajpaipraveen0/",
        simpleIconName: "linkedin", // this icon is not available in simple icon v14
        backgroundColor: "#0066c8", // manually checked
    },
    {
        name: "Gmail",
        link: "mailto:bajpaipraveen2026@gmail.com",
        simpleIconName: "gmail",
        backgroundColor: "#EA4335",
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/bajpaipraveen0/",
        simpleIconName: "instagram",
        backgroundColor: "#FF0069",
    }
]

// Fullstack skills
const FullstackSkills: ExternalSite[] = [
    {
        name: "Angular",
        link: "https://angular.dev/",
        simpleIconName: "angular",
        backgroundColor: "#ea2848",
    },
    {
        name: "HTML5",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        simpleIconName: "html5",
        backgroundColor: "#E34F26",
    },
    {
        name: "CSS3",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        simpleIconName: "css3",
        backgroundColor: "#1572B6",
    },
    {
        name: "Sass",
        link: "https://sass-lang.com/",
        simpleIconName: "sass",
        backgroundColor: "#CC6699",
    },
    {
        name: "Typescript",
        link: "https://nodejs.org/",
        simpleIconName: "typescript",
        backgroundColor: "#5FA04E",
    },
    {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        simpleIconName: "javascript",
        backgroundColor: "#F7DF1E",
    },
    {
        name: "Kendo UI",
        link: "https://www.telerik.com/kendo-ui",
        simpleIconName: "kendo",
        backgroundColor: "#06B6D4",
    },
    {
        name: "Bootstrap",
        link: "https://getbootstrap.com/",
        simpleIconName: "bootstrap",
        backgroundColor: "#7952B3",
    },
    {
        name: "PrimeNG",
        link: "https://primeng.org/",
        simpleIconName: "primeng",
        backgroundColor: "#DD0031",
    },
];

// Fullstack section
const FullstackSection: SkillSection = {
    sectionTitle: "Frontend Engineering",
    imagePath: AssetPaths.FULL_STACK_DEVELOPMENT_SVG,
    skillLinks: FullstackSkills,
    skillsList: [
        "Building scalable enterprise web applications using Angular, TypeScript, JavaScript, HTML5, SCSS, and RxJS",
        "Developing reusable UI modules with Angular Material, Kendo UI, and Bootstrap for consistent design systems",
        "Implementing state management and reactive programming using NgRx and RxJS",
        "Optimizing application performance with lazy loading, standalone components, signals, and change detection strategies",
    ]
}


// Could skills
const APISkills: ExternalSite[] = [
    {
        name: "API",
        link: "https://aws.amazon.com/",
        simpleIconName: "API",
        backgroundColor: "#81b9ff",
    },
    {
        name: "JWT",
        link: "https://www.jwt.io/",
        simpleIconName: "jwt",
        backgroundColor: "#232F3E",
    },
    {
        name: "SQL Servers",
        link: "https://www.mysql.com/",
        simpleIconName: "mysql",
        backgroundColor: "#47A248",
    },
    {
        name: "Git",
        link: "https://github.com/",
        simpleIconName: "github",
        backgroundColor: "#FF2BC2",
    },
    {
        name: "Postman",
        link: "https://postman.com/",
        simpleIconName: "postman",
        backgroundColor: "#F24E1E",
    },
    {
        name: "RxJs",
        link: "https://rxjs.dev/",
        simpleIconName: "rxjs",
        backgroundColor: "#43322d",
    },
    {
        name: "NgRx",
        link: "https://ngrx.io/",
        simpleIconName: "ngrx",
        backgroundColor: "#F24E1E",
    },
];

// Could section
const APISection: SkillSection = {
    sectionTitle: "API Integration & Application Logic",
    imagePath: AssetPaths.CLOUD_INFRASTRUCTURE_SVG,
    skillLinks: APISkills,
    skillsList: [
        "Integrating secure REST APIs using Angular HttpClient, JWT authentication, and role-based access control",
        "Managing complex business workflows, dynamic forms, validations, and real-time data handling",
        "Building scalable frontend architecture with reusable services, guards, interceptors, and shared modules",
        "Handling asynchronous operations, API caching, and error management for enterprise-grade applications"
    ]

}


// Design skills
const DesignSkills: ExternalSite[] = [
    {
        name: "Jira",
        link: "https://www.atlassian.com/",
        simpleIconName: "jira",
        backgroundColor: "#FF7C00",
    },
    {
        name: "Jasmin",
        link: "https://jasmine.github.io/",
        simpleIconName: "jasmin",
        backgroundColor: "#001e36",
    },
    {
        name: "Docker",
        link: "https://www.docker.com/",
        simpleIconName: "docker",
        backgroundColor: "#1488C6",
    },
    {
        name: "Heroku",
        link: "https://www.heroku.com/",
        simpleIconName: "heroku",
        backgroundColor: "#430098",
    },
    {
        name: "Firebase",
        link: "https://firebase.google.com/",
        simpleIconName: "firebase",
        backgroundColor: "#FFCA28",
    },
    {
        name: "Jenkins",
        link: "https://www.jenkins.io/",
        simpleIconName: "jenkins",
        backgroundColor: "hsl(1.88deg 64.52% 51.37%)",
    },
];

// Design section
const DesignSection: SkillSection = {
    sectionTitle: "DevOps & Development Tools",
    imagePath: AssetPaths.UI_UX_DESIGN_SVG,
    skillLinks: DesignSkills,
    skillsList: [
        "Managing source code and collaboration workflows using Git, SVN, and Agile sprint methodologies",
        "Working with Jenkins CI/CD pipelines, Firebase services, Docker basics, and deployment workflows",
        "Debugging applications and testing APIs using Postman, browser developer tools, Jasmine, and Karma",
        "Tracking project delivery, sprint planning, and issue management through JIRA and Agile practices",
    ]
}

// Design skills
const PerformanceSkills: ExternalSite[] = [
    {
        name: "Chat GPT",
        link: "https://chatgpt.com/",
        simpleIconName: "chat-gpt",
        backgroundColor: "#FFffff",
    },
    {
        name: "Claude",
        link: "https://claude.ai/",
        simpleIconName: "claude",
        backgroundColor: "#001e36",
    },
    {
        name: "Clean Code",
        link: "#",
        simpleIconName: "clean-code",
        backgroundColor: "#7546f9",
    },
    {
        name: "Responsive Design",
        link: "#",
        simpleIconName: "responsive",
        backgroundColor: "#eee8ff",
    },
];

// Design section
const DigitalSolutionSection: SkillSection = {
    sectionTitle: "Performance & User Experience",
    imagePath: AssetPaths.DIGITAL_SOLUTIONS_SVG,
    skillLinks: PerformanceSkills,
    skillsList: [
        "Creating responsive and cross-browser compatible interfaces focused on accessibility and usability",
        "Converting Figma and PSD designs into pixel-perfect web applications with optimized user interactions",
        "Enhancing application scalability and maintainability through modular architecture and clean coding practices",
        "Leveraging AI tools like ChatGPT and Claude to accelerate development, debugging, and code optimization",
    ]
}

// Personal projects
const PersonalProjects: ProjectSection = {
    sectionTitle: "My Projects",
    sectionSubtitle: "🚀 Showcasing innovative solutions and real-world applications built with cutting-edge technologies.",
    entities: [
        {
            title: "MHK (Healthcare – Medicare Plans)",
            coverImagePath: AssetPaths.WORK_MHK_LOGO,
            liveLink: "https://mhk.com/",
            githubLink: "",
            description: "🧱 We are guided by a vision of simplifying healthcare through technology. By streamlining processes and improving care experiences, we help health plans reduce administrative burdens and focus more on serving their members. This approach enables us to support tens of millions of lives through many of the most prominent players in healthcare. Unlike fragmented solutions, MHK unifies every care moment. Our technology seamlessly integrates with core systems, consolidates vital information, streamlines complicated processes and automates workflows based on industry-best practices. By removing complexity, we empower our clients to thrive in today’s rapidly evolving healthcare environment.",
            techStack: ["Angular", "HTML5", "CSS3", "NgRx", "RxJS", "Kendo-UI", "TypeScript"],
            year: 2026
        },
        {
            title: "Ejaro – Peer-to-Peer Vehicle Sharing",
            coverImagePath: AssetPaths.WORK_EJARO_LOGO,
            githubLink: "",
            description: "🌲 Ejaro is the first licensed peer-to-peer vehicle sharing marketplace in Saudi Arabia. We connect local vehicle owners with individuals who are looking to rent vehicles whenever and wherever they want. It empowers owners to earn extra income from their depreciating private vehicles (assets) by sharing it with ejaro’s trusted community. Our services provide the ease and convenience of locating the nearest vehicles at competitive prices.",
            techStack: ["Angular", "HTML5", "SCSS", "Socket.io", "RxJS", "Google API", "TypeScript"],
            year: 2021,
            branch: ""
        },
        {
            title: "Ambiview Learning – Real State (US)",
            coverImagePath: AssetPaths.WORK_AMBIVIEW_LOGO,
            liveLink: "https://www.ambiview.com/",
            githubLink: "",
            description: "📚 Ambiview is a modern platform for real estate continuing education and real estate license renewal. Our approved real estate courses are ARELLO certified and are delivered through engaging, podcast-like conversations with real estate industry experts. With Ambiview, you can watch or listen to courses through on-demand video or audio podcasts, making learning easy and convenient, even on the go. With features like multistate certificates, premium navigation, PDF guides, we aim to deliver superior value to you.",
            techStack: ["React", "Redux", "HTML", "SCSS", "ES6"],
            year: 2020
        },
        {
            title: "JobsHola – Job Portal (Singapore)",
            coverImagePath: AssetPaths.WORK_JOBSHOLA_LOGO,
            liveLink: "https://jobshola.com/",
            githubLink: "",
            description: "📚 Ambiview is a modern platform for real estate continuing education and real estate license renewal. Our approved real estate courses are ARELLO certified and are delivered through engaging, podcast-like conversations with real estate industry experts. With Ambiview, you can watch or listen to courses through on-demand video or audio podcasts, making learning easy and convenient, even on the go. With features like multistate certificates, premium navigation, PDF guides, we aim to deliver superior value to you.",
            techStack: ["HTML5", "SCSS", "GraphJs", "SCSS", "JavaScript"],
            year: 2019
        },
        {
            title: "Forfixer Admin – On-Demand Technician Platform (Oman)",
            coverImagePath: AssetPaths.WORK_FORFIXER_LOGO,
            githubLink: "",
            description: "🛠️ Developed admin workflows for Forfixer, an on-demand technician service platform in Oman, enabling efficient request handling and real-time technician assignment. Built and enhanced features to manage user requests and assign nearby technicians, reducing manual dispatch time.",
            techStack: ["Angular","HTML", "RxJs", "chartJs", "Google API", "JavaScript"],
            year: 2019
        },
        {
            title: "MovieFinder – Movie Recommendation App",
            coverImagePath: AssetPaths.WORK_MOVIEFINDER_LOGO,
            githubLink: "",
            description: "🏥 React Movie Finder is a modern movie discovery web application built with React and powered by the TMDB API. Users can explore trending, popular, top-rated, and upcoming movies, search for their favorite titles, view detailed movie information, browse cast members, save movies to a personal watchlist, and discover similar movie recommendations through an interactive and responsive user interface.",
            techStack: ["React 19", "HTML5", "JavaScript (ES6+)", "Swiper.js", "TMDB API", "Vite"],
            year: 2024
        },
        // {
        //     title: "Cross-Platform Music Player",
        //     coverImagePath: AssetPaths.PROJECT_MUSIC_PLAYER,
        //     githubLink: "",
        //     description: "🎵 Developed with Angular and NestJS, this music player evolved into a fullstack app and was wrapped with ElectronJS for a seamless desktop experience.",
        //     techStack: ["Angular", "NestJS", "ElectronJS", "ExpressJS"],
        //     year: 2023
        // }
    ]
}

// Job experience
const JobExperience: ExperienceSection = {
    experienceSectionTitle: "Work Experience",
    experiences: [
        {
            orgLink: "https://www.happiestminds.com/",
            orgLogoPath: AssetPaths.WORK_HM_LOGO,
            orgName: "Happiest Minds Technologies",
            positions: [
                {
                    positionName: "Senior Software Engineer",
                    duration: "Apr 2026 - Present",
                    location: "Noida",
                    locationType: "On-Site",
                    jobType: "Full-time",
                    workPoints: [
                        "Developed enterprise healthcare applications using Angular, TypeScript, RxJS, and NgRx.",
                        "Built reusable UI components and integrated REST APIs for enrollment, billing, and member management modules.",
                        "Collaborated with stakeholders to gather requirements and deliver features in an Agile environment.",
                        "Managed application deployments through CI/CD pipelines and ensured high-quality, scalable solutions.",
                    ]
                }
            ]
        },
        {
            orgLink: "https://www.happiestminds.com/",
            orgLogoPath: AssetPaths.WORK_PS_LOGO,
            orgName: "Puresoftware Technologies",
            positions: [
                {
                    positionName: "Software Engineer",
                    duration: "Jun 2021 - Mar 2026",
                    location: "Noida, India",
                    locationType: "Remote",
                    jobType: "Full-time",
                    workPoints: [
                        "Developed enterprise healthcare applications using Angular, TypeScript, RxJS, and NgRx.",
                        "Built reusable UI components and integrated REST APIs for enrollment, billing, and member management modules.",
                        "Collaborated with stakeholders to gather requirements and deliver features in an Agile environment.",
                        "Managed application deployments through CI/CD pipelines and ensured high-quality, scalable solutions.",
                    ]
                }
            ]
        },
        {
            orgLink: "https://www.tecorb.com/",
            orgLogoPath: AssetPaths.WORK_TECORB_LOGO,
            orgName: "Tecorb Technologies",
            positions: [
                {
                    positionName: "Frontend Developer",
                    duration: "May 2019 - June 2021",
                    location: "Noida, India",
                    locationType: "On-Site",
                    jobType: "Full-time",
                    workPoints: [
                        "Developed responsive Angular, React applications for vehicle-sharing, job portal, and on-demand service platforms across GCC and Singapore markets. 🚀📋",
                        "Integrated Firebase, Socket.io, Google Maps, and REST APIs to enable real-time tracking, notifications, and communication features. 📂",
                        "Improved application performance through lazy loading, optimized change detection, and reusable component development. 🐞✅",
                        "Worked closely with clients and cross-functional teams in Agile projects, handling requirement analysis, development, and delivery. 🔍"
                    ]
                }
            ]
        }
    ]
}

// Internships Experience
const InternshipExperience: ExperienceSection = {
    experienceSectionTitle: "Internships",
    experiences: [
        {
            orgLink: "https://www.hestabit.com/",
            orgLogoPath: AssetPaths.WORK_HB_LOGO,
            orgName: "Hestabit Technologies",
            positions: [
                {
                    positionName: "UI Intern",
                    duration: "Jan 2018 - June 2018",
                    location: "Noida, India",
                    locationType: "On-Site",
                    jobType: "Full-time",
                    workPoints: [
                        "Learned core frontend development concepts including HTML, CSS, SCSS, JavaScript, and React. 📋",
                        "Developed responsive and user-friendly UI layouts following modern web design principles. 📂",
                        "Built a small college submission project, focusing on UI structure, component design, and responsive web pages. ✅",
                        "Gained hands-on experience in debugging, code optimization, and frontend development best practices."
                    ]
                }
            ]
        }
    ]
}

// Award Involvement
const AwardInvolvement: CertificateSection = {
    entities: [
        {
            coverImagePath: AssetPaths.AWARD_JUNE_2022,
            title: "BRAVO Award",
            description: "Award for Excellence in Software Development and outstanding Performance in delivering high-quality software solutions.",
            issueDate: "June 2022",
            issuer: "Puresoftware Technologies"
        },
        {
            coverImagePath: AssetPaths.AWARD_OCTOBER_2023,
            title: "BRAVO Award",
            description: "Award for Excellence in Software Development and outstanding Performance in delivering the 2023 module and successfull deployment.",
            issueDate: "October 2023",
            issuer: "Puresoftware Technologies"
        },
        {
            coverImagePath: AssetPaths.AWARD_NOVEMBER_2025,
            title: "BRAVO Award",
            description: "Award for Excellence in Software Development and outstanding Performance demonstrating exceptional technical skills, and consistently exceeding project goals. ",
            issueDate: "November 2025",
            issuer: "Puresoftware Technologies"
        },
        {
            coverImagePath: AssetPaths.AWARD_APRIL_2026,
            title: "ARJUNA Award",
            description: "Honored to receive the **Arjuna Award for Breakthrough Performance** for the quarter JFM–2026 for completing the new development phase with new HRA fro client and successfully deploying it within the stipulated timeline.",
            issueDate: "April 2026",
            issuer: "Puresoftware Technologies"
        },
    ]
}

// Achievement
const AchievementInvolvement: CertificateSection = {
    entities:[
        {
            coverImagePath: AssetPaths.ACHIEVEMENT_MTA_PIC,
            title: "Microsoft Technology Associate certification",
            description: "🏆 Successfully completed the requirements to be recognized as a Microsoft Technology Associate for Software Development Fundamentals.",
            issueDate: "25/10/2017",
            issuer: "Microsoft Corporation"
        },
        {
            coverImagePath: AssetPaths.ACHIEVEMENT_HEARST_PIC,
            title: "Protecting Patient Health Information under HIPAA",
            description: "🏆 successfully completed Protecting Patient Health Information under HIPAA course from the Legal Compliance and Ethics Center on June 26, 2021.",
            issueDate: "26/06/2021",
            issuer: "LRN inspiring principled performance"
        },
        {
            coverImagePath: AssetPaths.ACHIEVEMENT_PM_PIC,
            title: "Project Management Assessment Certification",
            description: "🏆 Successfully completed the requirements to be recognized as a Microsoft Technology Associate for Software Development Fundamentals.",
            issueDate: "07/04/2026",
            issuer: "LearnTube.ai"
        },
    ]
}

const skills = [
    {
        name: 'Angular',
        simpleIconName: 'angular',
        backgroundColor: '#ea2848',
    },
    {
        name: 'TypeScript',
        simpleIconName: 'typescript',
        backgroundColor: '#3178c6',     
    },
    {
        name: 'JavaScript',
        simpleIconName: 'javascript',
        backgroundColor: '#f7df1e'
    },
    {
        name: 'RxJS',
        simpleIconName: 'rxjs',
        backgroundColor: '#f0e040'
    },
    {
        name: 'NgRx',
        simpleIconName: 'ngrx',
        backgroundColor: '#3178c6'
    },
    {
        name: 'HTML5',
        simpleIconName: 'html5',
        backgroundColor: '#e34c26'
    },
    {
        name: 'Scss',
        simpleIconName: 'sass',
        backgroundColor: '#c69'
    },
    {
        name: 'React',
        simpleIconName: 'react',
        backgroundColor: '#61dafb'
    },
    {
        name: "Github",
        simpleIconName: "github",
        backgroundColor: "#181717",
    },
    {
        name: "Kendo UI",
        simpleIconName: "kendo",
        backgroundColor: "#06B6D4",
    },
    {
        name: "Bootstrap",
        simpleIconName: "bootstrap",
        backgroundColor: "#7952B3",
    },
    {
        name: "PrimeNG",
        simpleIconName: "primeng",
        backgroundColor: "#DD0031",
    },{
        name: "API",
        simpleIconName: "API",
        backgroundColor: "#81b9ff",
    },
    {
        name: "JWT",
        simpleIconName: "jwt",
        backgroundColor: "#232F3E",
    },
    {
        name: "SQL Servers",
        simpleIconName: "mysql",
        backgroundColor: "#47A248",
    },
    {
        name: "Postman",
        simpleIconName: "postman",
        backgroundColor: "#F24E1E",
    },
    {
        name: "Jira",
        simpleIconName: "jira",
        backgroundColor: "#FF7C00",
    },
    {
        name: "Jasmin",
        simpleIconName: "jasmin",
        backgroundColor: "#001e36",
    },
    {
        name: "Docker",
        simpleIconName: "docker",
        backgroundColor: "#1488C6",
    },
    {
        name: "Heroku",
        simpleIconName: "heroku",
        backgroundColor: "#430098",
    },
    {
        name: "Firebase",
        simpleIconName: "firebase",
        backgroundColor: "#FFCA28",
    },
    {
        name: "Jenkins",
        simpleIconName: "jenkins",
        backgroundColor: "hsl(1.88deg 64.52% 51.37%)",
    },
];


// Degrees
const BachelorsDegree: EducationSection = {
    degreeName: "Bachelor of Computer Applications",
    majorName: "Information Technology",
    duration: "Jul 2012 - May 2015",
    universityName: "Mahatma Jyotiba Phule Rohilkhand University, Bareilly",
    campusName: "Swami Sukhdevanand PG College, Shahjahanpur",
    logoImagePath: AssetPaths.EDUCATION_MJP_LOGO,
    gpa: "6.5",
    websiteLink: "https://mjpru.ac.in/index.aspx",
    studyPoints: [
        "Studied core computer science subjects including Data Structures, Database Management Systems, Operating Systems, and Software Engineering.",

        "Built foundational programming knowledge using C, C++, Java, HTML, CSS, and JavaScript.",

        "Learned database concepts, SQL queries, normalization, and backend data management techniques.",

        "Worked on academic projects focused on web application development and problem-solving approaches.",

        "Developed understanding of software development lifecycle, object-oriented programming, and system analysis.",

        "Strengthened analytical thinking, logical reasoning, and technical troubleshooting skills through practical assignments."
    ]
}

const MastersDegree: EducationSection = {
    degreeName: "Master of Computer Applications",
    majorName: "Information Technology",
    duration: "Feb 2015 - Dec 2018",
    universityName: "Dr. A. P. J. Abdul Kalam Technical University, Lucknow",
    campusName: "IMS, Ghaziabad",
    logoImagePath: AssetPaths.EDUCATION_AKTU_LOGO,
    gpa: "7.4",
    websiteLink: "https://aktu.ac.in/",
    studyPoints: [
        "Advanced knowledge of software engineering, web technologies, database systems, and enterprise application development.",

        "Strengthened expertise in object-oriented programming, data structures, algorithms, and application architecture concepts.",

        "Gained practical exposure to software project management, system design, and Agile development methodologies.",

        "Improved analytical problem-solving, debugging, and application optimization skills through academic and practical assignments.",

        "Focused on industry-oriented technologies and real-world application development to align with modern software engineering practices."
    ]
}

const ContactDetails: ContactInfo[] = [
        {
            title: "Phone",
            value: "+91 7011792747",
            link: "tel:+917011792747",
            icon: "fa-phone-alt"
        },
        {
            title: "Email",
            value: "bajpaipraveen2026@gmail.com",
            link: "mailto:bajpaipraveen2026@gmail.com",
            icon: "fa-envelope"
        },
        {
            title: "LinkedIn",
            value: "linkedin.com/in/bajpaipraveen0",
            link: "https://linkedin.com/in/bajpaipraveen0",
            icon: "fa-linkedin-in"
        },
        {
            title: "Github",
            value: "github.com/bajpaipraveen0",
            link: "https://github.com/bajpaipraveen0",
            icon: "fa-github"
        },
        {
            title: "Instagram",
            value: "instagram.com/bajpaipraveen0",
            link: "https://instagram.com/bajpaipraveen0",
            icon: "fa-instagram"
        },
        {
            title: "X (Twitter)",
            value: "x.com/bajpaipraveen0",
            link: "https://x.com/bajpaipraveen0",
            icon: "fa-x-twitter"
        }
    ];



export const AppConfig = {
    loaderSplashAnimation: true,        // enable or disable splash screen at the initialization of website
    logoName: "Praveen Bajpai",         // Signature font logo name in header
    name: "Praveen Bajpai",             // your name
    emailId: "bajpaipraveen2026@gmail.com",  // your email id

    // Google Form Contact Link
    googleFormContactLink: "https://docs.google.com/forms/d/e/1FAIpQLSfMOsQhl_Lci5s_qrYN-LEWlJ3NoBag-Uyf17IGktExA5KDpw/viewform?usp=header",

    // Home page
    professionalTitle: "Development | Web Design",
    professionalSummary: "Results-driven Frontend Engineer with 7 years of experience building scalable enterprise web applications using Angular, TypeScript, ReactJS, RxJS, and NgRx, Vite, Github, Docker, Jenkins. Specialized in healthcare, vehicle-sharing, and enterprise platforms with strong expertise in performance optimization, reusable architecture, and modern frontend development.",
    githubProfile: "https://github.com/bajpaipraveen0",              // Your github profile link
    portfolioRepository: "https://github.com/bajpaipraveen0/praveen-bajpai-portfolio",        // Your portfolio repository link
    socialMedia: SocialMediaLinks,      // use from above
    aboutMe: [                          // all the sections you want to show under "What I do?". 
        FullstackSection,
        APISection,
        DesignSection,
        DigitalSolutionSection,
    ],

    // Projects page
    projectsPageTitle: "Projects",    // Title of projects page
    projectsPageDescription: "My projects leverage a diverse range of cutting-edge technology tools. I specialize in building data science solutions and seamlessly deploying them as web applications using robust cloud infrastructure.",
    projectSections: [
        PersonalProjects,
    ],

    // Experience page
    experiencePageTitle: "My Works, Experiance",
    experiencePageDescription: "💼 From Corporate Giants to Creative Freelance Projects: A journey through internships, corporate, and helping local businesses.",
    experienceSections: [               // Define and add a custom section if needed
        JobExperience,
        InternshipExperience,
    ],

    // Education page
    educationPageTitle: "Degrees and Qualifications",
    educationPageDescription: "🎓 A Journey of Continuous Learning: Building Skills, Solving Problems, and Shaping the Future 🌟",
    educationSections: [
        MastersDegree,
        BachelorsDegree,
    ],


    // Achievements Page
    achievementsPageTitle: "Achievements, Awards and Community Involvement",
    achievementsPageDescription: "🚀 Milestones, Contributions & Impact: Driving Innovation, Engaging Communities, and Making a Difference 🌍",
    achievementsSections: [
        AchievementInvolvement
    ],
    awardsSection :[
        AwardInvolvement,
    ],

    // Contact page info
    contactSectionTitle: "Contact Me",

    contactSectionDescription:
        "Feel free to connect with me for opportunities, collaborations, freelance projects, or technical discussions.",

    contactDetails: ContactDetails,
    skillSet: skills,

}