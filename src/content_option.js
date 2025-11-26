const logotext = "ANDREA";
const meta = {
    title: "Andrea Castillo",
    description: "Andrea Nadine Castillo — UC Santa Cruz CS (Dec 2024). Software developer focused on AR, HCI, and data analysis.",
};

const introdata = {
    title: "I’m Andrea Castillo",
    animated: {
        first: "AR & game developer",
        second: "Data analysis & visualization",
        third: "HCI researcher",
    },
    description: "Software developer with experience in AR/Unity, data pipelines, multi-agent AI, and HCI research. Comfortable across full-stack web, C/C++ systems, and data tooling.",
    your_img_url: require("./assets/images/profile2.JPG"),
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "Recent UC Santa Cruz Computer Science graduate (BS, Dec 2024) with experience in AR game development, data analysis, and HCI research. Strong foundation in algorithms, concurrent systems, and human-centered design. Passionate about building interactive experiences that combine data and immersive technologies.",
};

const worktimeline = [
    {
        jobtitle: "HCI Research Assistant",
        where: "UCSC SETs Research Lab",
        date: "Apr 2024 - Present",
    },
    {
        jobtitle: "Website Content Assistant",
        where: "Goldilocks USA",
        date: "Jul 2024 - Aug 2024",
    },
    // {
    //     jobtitle: "B.S. Computer Science (Graduated with Honors)",
    //     where: "University of California, Santa Cruz",
    //     date: "Dec 2024",
    // },
];

const skills = [
    { name: "Python", value: 90 },
    { name: "C", value: 90 },
    { name: "JavaScript", value: 70},
    { name: "C#", value:  60},
    { name: "React", value: 40 },
    { name: "Unity / AR Foundation", value: 70 },
    { name: "SQL", value: 75 },
    { name: "Tableau", value: 60 },
    { name: "Git / GitHub", value: 85 },
    { name: "HTML/CSS", value: 60 },
];

const services = [
    {
        title: "AR & Game Development",
        description: "Mobile AR experiences and game mechanics built in Unity + AR Foundation; playable prototypes and usability-driven iteration.",
    },
    {
        title: "Data Analysis & Visualization",
        description: "End-to-end data workflows: ingestion, SQL cleaning, Python analysis, and dashboards in Tableau/Excel.",
    },
    {
        title: "HCI & Usability Research",
        description: "User-centered design, running usability sessions, interview analysis, and translating findings into product improvements.",
    },
];

const dataportfolio = [
    // {
    //     img: "https://picsum.photos/600/400?random=1",
    //     description: "Health Tracker — nutrition & exercise analytics pipeline with SQL, Python, and Tableau dashboards.",
    //     link: "https://github.com/andreancastillo/health-tracker",
    // },
    {
        img: "https://picsum.photos/600/400?random=2",
        description: "Saving Fin — mobile AR climate-resilience game built with Unity + AR Foundation; playtesting-informed UI.",
        link: "https://github.com/SET-Lab-UCSC/cccr_ar_river",
    },
    // {
    //     img: "https://picsum.photos/600/400?random=3",
    //     description: "Pac-Man CTF AI Agents — multi-agent AI using A*, BFS, DFS, and Q-learning with competitive tuning.",
    //     link: "https://github.com/andreancastillo/pacman-ctf-agents",
    // },
    {
        img: "https://picsum.photos/600/400?random=4",
        description: "Multi-threaded HTTP/1.0 Server — concurrent C server using POSIX threads, custom read-write locks, and stress-tested optimizations.",
        link: "https://github.com/andreanadinecasti/multi-threaded-http-server",
    },
];

const contactConfig = {
    YOUR_EMAIL: "andreanadine.castillo@gmail.com",
    YOUR_FONE: "650-556-4962",
    description: "Open to opportunities in AR/Unity, HCI research, and data-focused roles. Available for collaborations and contract work.",
    // create an account at emailjs.com and populate the values below
    YOUR_SERVICE_ID: "service_n11iyax",
    YOUR_TEMPLATE_ID: "template_v4nut3q",
    YOUR_USER_ID: "HI2OvYcA8xteVtWtP",
};

const socialprofils = {
    github: "https://github.com/andreanadinecasti",
    linkedin: "https://linkedin.com/in/andrea-nadine-castillo",
    //facebook: "https://facebook.com",
    //twitter: "https://twitter.com",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
