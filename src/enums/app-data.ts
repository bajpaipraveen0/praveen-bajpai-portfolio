import { EducationSection } from "../interfaces/education.interface";
import { ExternalSite } from "../interfaces/external-site.interface"
import { ProjectSection } from "../interfaces/project.interface";
import { SkillSection } from "../interfaces/skill-section.interface";
import { ExperienceSection } from "../interfaces/work-experience.interface";
import { ContactInfo } from "../interfaces/contact.interface";
import { AssetPaths } from "./asset-paths.enum";

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
        link: "mailto:bajpaipraveen0@gmail.com",
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
        backgroundColor: "#001e36",
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
            title: "Web-Based 3D IFC File Viewer",
            coverImagePath: AssetPaths.PROJECT_THREEJS_IFC_VIEWER,
            liveLink: "",
            githubLink: "",
            description: "🧱 This tool enables seamless visualization of IFC files in your browser. Toggle elements, explore real-time details by hovering, search and highlight elements, and interact with ease for a dynamic 3D experience.",
            techStack: ["Angular", "ThreeJS", "ExpressJS", "Heroku"],
            year: 2022
        },
        {
            title: "Customizable Multi-Select Dropdown",
            coverImagePath: AssetPaths.PROJECT_CUSTOM_DROPDOWN,
            githubLink: "",
            description: "🌲 An Angular-based, asynchronous multi-select dropdown designed for tree-structured data with custom validation. It's a powerful replacement for jQuery's Select2.",
            techStack: ["Angular", "TypeScript", "SCSS"],
            year: 2023,
            branch: "resource-tree-utility"
        },
        {
            title: "Learning Management System",
            coverImagePath: AssetPaths.PROJECT_LMS_APP,
            githubLink: "",
            description: "📚 A production-grade frontend for a Learning Management System, designed with scalability in mind to deliver a seamless and efficient user experience.",
            techStack: ["Angular", "PrimeNG", "Tailwind", "Figma"],
            year: 2023
        },
        {
            title: "Angular + NestJS Boilerplate",
            coverImagePath: AssetPaths.PROJECT_ANGULAR_NEST_DOCKER,
            githubLink: "",
            description: "🛠️ A production-grade boilerplate integrating Angular, NestJS, and Nginx for seamless frontend development. Perfect for kickstarting robust and scalable web applications.",
            techStack: ["Angular", "NestJS", "NgINX", "Docker"],
            year: 2023
        },
        {
            title: "Hospital Management System Dashboard",
            coverImagePath: AssetPaths.PROJECT_HMS_APP,
            githubLink: "",
            description: "🏥 Transformed Figma designs into a fully functional, user-friendly dashboard for a Hospital Management System, ensuring precision and intuitive interface.",
            techStack: ["Angular", "PrimeNG", "PrimeFlex", "Figma"],
            year: 2024
        },
        {
            title: "Cross-Platform Music Player",
            coverImagePath: AssetPaths.PROJECT_MUSIC_PLAYER,
            githubLink: "",
            description: "🎵 Developed with Angular and NestJS, this music player evolved into a fullstack app and was wrapped with ElectronJS for a seamless desktop experience.",
            techStack: ["Angular", "NestJS", "ElectronJS", "ExpressJS"],
            year: 2023
        }
    ]
}

// Job experience
const JobExperience: ExperienceSection = {
    experienceSectionTitle: "Work Experience",
    experiences: [
        {
            orgLink: "https://acquireconveyancing.com.au/",
            orgLogoPath: AssetPaths.WORK_ACQUIRE_LOGO,
            orgName: "Acquire Conveyancing",
            positions: [
                {
                    positionName: "Conveyancing Assistant",
                    duration: "Apr 2024 - Present",
                    location: "Adelaide, SA",
                    locationType: "On-Site",
                    jobType: "Part-time",
                    workPoints: [
                        "Ensured secure management of sensitive data with top-notch IT support. 🔒",
                        "Streamlined property searches by liaising with government agencies. 🏡",
                        "Prepared legal documents like Cooling Off Forms, Nominations, and Addendums. 📝",
                        "Optimized software workflows with precise data entry and customized templates in CATS and PEXA. ⚙️",
                    ]
                }
            ]
        },
        {
            orgLink: "https://www.asite.com/",
            orgLogoPath: AssetPaths.WORK_ASITE_LOGO,
            orgName: "Asite Solution",
            positions: [
                {
                    positionName: "Jr Software Engineer",
                    duration: "Jun 2023 - Mar 2024",
                    location: "Ahmedabad, India",
                    locationType: "Hybrid",
                    jobType: "Full-time",
                    workPoints: [
                        "Built the Issue Tracker feature for the cBIM unit, integrating 30+ Angular components like side pane, image carousel, and quill editor. 🚀📋",
                        "Designed a robust Angular reactive form and a customizable async dropdown for efficient file-folder tree searches, enhancing Record Retention Policy. 📂🔍",
                        "Debugged and unit-tested code using Karma & Jasmine, achieving an impressive 96% coverage. 🐞✅",
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
            orgLink: "https://asite.com/",
            orgLogoPath: AssetPaths.WORK_ASITE_LOGO,
            orgName: "Asite Solution",
            positions: [
                {
                    positionName: "UI Developer Intern",
                    duration: "Feb 2023 - May 2023",
                    location: "Ahmedabad, India",
                    locationType: "Hybrid",
                    jobType: "Full-time",
                    workPoints: [
                        "Led an 11-member team to design and implement the frontend architecture of an LMS using Angular, following the latest methodologies and best practices. 🚀💻",
                        "Gained expertise in Angular, jQuery, SCSS, and DSA through personalized training and hands-on assignments during the internship. 🌟📊✨",
                    ]
                },
                {
                    positionName: "Software Engineering Intern",
                    duration: "Jun 2022 — Jul 2022",
                    location: "Ahmedabad, India",
                    locationType: "On-Site",
                    jobType: "Full-time",
                    workPoints: [
                        "Developed an innovative 3D IFC file viewer using Three.js, applying DSA concepts to create a tree-like structure for exploring model internals. 🌐🌳📐",
                        "Deployed the Node.js backend on Heroku and hosted the frontend on GitHub Pages for seamless accessibility. 🚀💻✨",
                    ]
                }
            ]
        },
        {
            orgLink: "https://workxmate.com/",
            orgLogoPath: AssetPaths.WORK_WORKXMATE_LOGO,
            orgName: "WorkXMate Technologies Pvt. Ltd.",
            positions: [
                {
                    positionName: "Angular Developer Internship",
                    duration: "Feb 2022 — Mar 2022",
                    location: "Noida, India",
                    locationType: "Remote",
                    jobType: "Part-time",
                    workPoints: [
                        "Designed and implemented an optimized, cross-browser-compatible Attendance Management Module. 🌐✔️",
                        "Built a RESTful Node.js server integrated with Oracle DB for seamless code migration. 🚀📊",
                        "Developed intuitive web forms with robust validation and error handling for a smooth user experience. 🖋️⚙️✨",
                    ]
                }
            ]
        },
    ]
}

// Community Involvement
const CommunityInvolvement: ProjectSection = {
    sectionTitle: "Community Involvement",
    entities: [
        {
            liveLink: "https://adventofcode.com/",
            coverImagePath: AssetPaths.ACHIEVEMENT_AOC_PIC,
            techStack: ["Python"],
            title: "Advent of Code 2024",
            description: "📅 Completed all Advent of Code 2024 problems within a personal deadline of 1 day each, showcasing strong DSA and problem-solving skills.🎯",
            year: 2024,
            githubLink: "",
        },
    ]
}

// Achievement
const AchievementInvolvement: ProjectSection = {
    sectionTitle: "Achievements",
    entities: [
        {
            liveLink: "",
            coverImagePath: AssetPaths.ACHIEVEMENT_CPC_RSP_WIN_PIC,
            techStack: ["C++", "Python"],
            title: "CPC X RSP 2025",
            description: "🏆 Secured 3rd place in a high-stakes coding competition, tackling complex algorithms under pressure! Grateful for an incredible team and experience at CPC X RSP competition.",
            year: 2025,
        },
        {
            coverImagePath: AssetPaths.ACHIEVEMENT_UNISA_CHANCELLORS_LETTER_2024_PIC,
            liveLink: "unisa-chancellors-letter-of-commandation-2024.html",
            // liveLink: "public/unisa-chancellors-letter-of-commandation-2024.html",
            techStack: ["Cisco", "FortiGate", "ISO 270001"],
            title: "Chancellor's Commendation Letter (2024)",
            description: "🚀 Awarded for academic excellence with a cumulative program GPA in the TOP 5% of all students, and invited to join the Golden Key International Honour Society.",
            year: 2024,
        },
    ]
}

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
            value: "bajpaipraveen0@gmail.com",
            link: "mailto:bajpaipraveen0@gmail.com",
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
    emailId: "bajpaipraveen0@gmail.com",  // your email id

    // Google Form Contact Link
    googleFormContactLink: "https://docs.google.com/forms/d/e/1FAIpQLSfMOsQhl_Lci5s_qrYN-LEWlJ3NoBag-Uyf17IGktExA5KDpw/viewform?usp=header",

    // Home page
    professionalTitle: "Development | Web Design",
    professionalSummary: "Results-driven Frontend Engineer with 6+ years of experience building scalable enterprise web applications using Angular, TypeScript, RxJS, and NgRx. Specialized in healthcare, vehicle-sharing, and enterprise platforms with strong expertise in performance optimization, reusable architecture, and modern frontend development.",
    githubProfile: "https://github.com/bajpaipraveen0",              // Your github profile link
    portfolioRepository: "https://github.com/bajpaipraveen0/Angular-Master-Portfolio",        // Your portfolio repository link
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
        AchievementInvolvement,
        CommunityInvolvement,
    ],

    // Contact page info
    contactSectionTitle: "Contact Me",

    contactSectionDescription:
        "Feel free to connect with me for opportunities, collaborations, freelance projects, or technical discussions.",

    contactDetails: ContactDetails,

}