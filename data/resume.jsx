import { GitHubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import ProfileImage from "@/public/image/profile.jpg";

// import { AmityLogo, HitachiLogo, OmdenaLogo, ScalerLogo } from "@/images/logos";

export const RESUME_DATA = {
    name: "Amit Singh",
    initials: "AS",
    location: "Gwalior, India",
    locationLink: "https://maps.app.goo.gl/Gwalior",
    about: "Aspring Data Scientist",
    summary:
        "Experienced in designing and implementing machine learning models and web applications with a focus on data-driven problem-solving. Passionate about leveraging my technical skills in Python, NLP, and various ML frameworks to drive impactful solutions.",
    avatarUrl: ProfileImage,
    personalWebsiteUrl: "https://github.com/amitsgh",
    contact: {
        email: "amitsingh1911nov@gmail.com",
        social: [
            {
                name: "GitHub",
                url: "https://github.com/amitsgh",
                icon: GitHubIcon,
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/amitsgh1911",
                icon: LinkedinIcon,
            },
        ],
    },
    education: [
        {
            school: "Scaler",
            logo: "ScalerLogo" || "SC",
            degree: "Specialized in Data Science & Machine Learning",
            start: "2023",
            end: "2025",
        },
        {
            school: "Amity University, Gwalior",
            logo: "AmityLogo" || "AU",
            degree: "BE/B.Tech/BS in Computer Science, 8 CGPA",
            start: "2019",
            end: "2023",
        },
    ],
    work: [
        {
            company: "Omdena",
            link: "https://omdena.com",
            badges: ["Remote"],
            title: "Junior ML Engineer",
            logo: "OmdenaLogo" || "OM",
            start: "Mar 2024",
            end: "Present",
            description: [
                "Designed and implemented an AI model for climate and credit risk scoring with 93% accuracy.",
                "Enhanced data quality through extensive preprocessing, web scraping, and API integration.",
                "Optimized BERT for text classification and reported performance metrics using matplotlib and pandas.",
            ],
            media: {
                videos: [],
                images: [],
                linkPreviews: [
                    "https://github.com/amitsgh/jamboree_admission",
                    "https://github.com/amitsgh/jamboree_admission/blob/main/images/correlation_heatmap.png",
                ],
            },
        },
        {
            company: "Omdena",
            link: "https://omdena.com",
            badges: ["Remote"],
            title: "Junior ML Engineer",
            logo: "OmdenaLogo" || "OM",
            start: "Mar 2024",
            end: "Present",
            description: [
                "Designed and implemented an AI model for climate and credit risk scoring with 93% accuracy.",
                "Enhanced data quality through extensive preprocessing, web scraping, and API integration.",
                "Optimized BERT for text classification and reported performance metrics using matplotlib and pandas.",
            ],
            media: {
                videos: [],
                images: [],
                linkPreviews: [
                    "https://github.com/Stanford-Health/wearipedia",
                    "https://github.com/Stanford-Health/wearable-notebooks",
                ],
            },
        },
    ],
    project: [
        {
            name: "Jamboree Admission Analysis",
            link: "https://github.com/amitsgh/jamboree_admission",
            description: [
                "Designed and implemented an AI model for climate and credit risk scoring with 93% accuracy.",
                "Enhanced data quality through extensive preprocessing, web scraping, and API integration.",
                "Optimized BERT for text classification and reported performance metrics using matplotlib and pandas.",
                "Tech: Python, Pandas, Scikit-learn, Statistical Analysis, Matplotlib, GridSearchCV",
            ],
            media: {
                linkPreviews: ["https://github.com/amitsgh/jamboree_admission"],
                videos: [],
                // images: [],
                images: [
                    "https://raw.githubusercontent.com/amitsgh/jamboree_admission/main/images/correlation_heatmap.png",
                ],
            },
            techStack: [
                "Python",
                "Pandas",
                "Scikit-learn",
                "Statistical Analysis",
                "Matplotlib",
                "GridSearchCV",
            ],
        },
        {
            name: "Jamboree Admission Analysis",
            link: "https://github.com/amitsgh/jamboree_admission",
            description: [
                "Designed and implemented an AI model for climate and credit risk scoring with 93% accuracy.",
                "Enhanced data quality through extensive preprocessing, web scraping, and API integration.",
                "Optimized BERT for text classification and reported performance metrics using matplotlib and pandas.",
            ],
            media: {
                videos: [],
                images: [],
                linkPreviews: [
                    "https://github.com/Stanford-Health/wearipedia",
                    "https://github.com/Stanford-Health/wearable-notebooks",
                ],
            },
            techStack: [
                "Python",
                "Pandas",
                "Scikit-learn",
                "Statistical Analysis",
                "Matplotlib",
                "GridSearchCV",
            ],
        },
    ],
    skills: [
        "Python",
        "C++",
        "SQL",
        "Django",
        "Flask",
        "Power BI",
        "Streamlit",
        "MongoDB",
        "AWS",
        "Docker",
        "Kafka",
        "MLOps",
        "Hadoop",
        "LLM",
        "RAG",
        "Computer Vision",
        "NLP",
        "Tableau",
    ],
    extraCurricular: [
        {
            role: "Part-Time Tuition Teacher",
            description:
                "Provided personalized tutoring in math, science, and computer fundamentals to 9th and 10th graders, boosting their academic performance.",
        },
        {
            role: "Freelance Data Analyst",
            description:
                "Handled data analysis projects, focusing on data cleaning, visualization, and generating insights to support client decisions.",
        },
    ],
};
