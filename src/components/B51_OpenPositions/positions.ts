export const categories = [
    { // 0
        label: "View All",
        color: "",
        background: "",
    },
    { // 1
        label: "Data & Trading",
        color: "#C11574",
        background: "rgba(193, 21, 116, 0.1)",
    },
    { // 2
        label: "IT Development",
        color: "rgba(53, 56, 205, 1)",
        background: "rgba(53, 56, 205, 0.1)",
    },
    { // 3
        label: "Marketing",
        color: "rgba(185, 56, 21, 1)",
        background: "rgba(185, 56, 21, 0.1)",
    },
    { // 4
        label: "Customer Success",
        color: "rgba(26, 140, 201, 1)",
        background: "rgba(26, 140, 201, 0.1)",
    },
    { // 5
        label: "Human Resources",
        color: "rgba(222, 133, 0, 1)",
        background: "rgba(222, 133, 0, 0.1)",
    },
    { // 6
        label: "Finance",
        color: "rgba(2, 122, 72, 1)",
        background: "rgba(2, 122, 72, 0.1)",
    },
];

export interface IPosition {
    id: string
    category: number
    title: string
    text: string
    address: string
    time: string
    responsibilities: string[]
    talents: string[]
}

export const positions = [
    {
        id: "0",
        category: 3,
        title: "Affiliate Manager",
        text: "Join BrightFunded as an Affiliate Manager and drive our growth story by building, managing, and optimizing our global affiliate network.",
        address: "Amsterdam, The Netherlands or Remote",
        time: "Full-time",
        responsibilities: [
            "Develop and maintain strong relationships with current and prospective affiliates.",
            "Plan and execute an affiliate marketing strategy to drive user growth.",
            "Continually optimize and grow the affiliate program and exceed KPIs.",
            "Collaborate with other teams to improve our services based on affiliate feedback.",
            "Stay updated on industry trends and adjust the affiliate marketing strategy accordingly.",
        ],
        talents: [
            "Proven experience in affiliate marketing or similar roles.",
            "Exceptional communication, negotiation, and relationship-building skills.",
            "Ability to analyze data and identify trends to maximize affiliate performance.",
            "Knowledge of the financial trading landscape is a plus.",
            "Driven, self-motivated and able to work in a fast-paced environment.",
        ],
    },
    {
        id: "1",
        category: 4,
        title: "Community Manager",
        text: "Join BrightFunded as a Community Manager and shape the future of retail by fostering our dynamic community.",
        address: "Amsterdam, The Netherlands or Remote",
        time: "Full-time",
        responsibilities: [
            "Manage and moderate our Discord and Telegram communities.",
            "Foster a positive and inclusive environment, addressing community concerns and providing timely responses to queries.",
            "Coordinate and schedule interviews with our traders.",
            "Analyze community engagement metrics to help optimize our approach.",
            "Work closely with cross-functional teams to ensure consistent messaging across platforms.",
        ],
        talents: [
            "Proven experience as a Community Manager or similar role.",
            "Excellent communication skills with the ability to engage with online communities.",
            "Experience coordinating and scheduling interviews or similar events.",
            "Knowledge of the financial trading landscape is a plus.",
            "Self-driven and comfortable in a fast-paced startup environment.",
        ],
    },
    {
        id: "2",
        category: 3,
        title: "Content Writer",
        text: "Join BrightFunded as a Content Writer and shape our brand narrative through engaging and informative content.",
        address: "Amsterdam, The Netherlands or Remote",
        time: "Full-time",
        responsibilities: [
            "Write compelling and high-quality content across various platforms, including blog posts, social media updates, newsletters, and more.",
            "Collaborate with our marketing and product teams to create engaging and SEO-friendly content.",
            "Help shape the voice of BrightFunded, ensuring brand consistency throughout all our content.",
            "Monitor trends in the financial industry and trading community to identify content opportunities.",
            "Contribute to our content strategy and calendar, ensuring a steady flow of fresh and relevant content.",
        ],
        talents: [
            "Proven experience in content writing, ideally within the financial sector or FinTech industry.",
            "Excellent writing and editing skills, with a keen eye for detail and a flair for storytelling.",
            "Familiarity with SEO principles and content marketing best practices.",
            "Ability to translate complex topics into clear, engaging content.",
            "Passion for financial markets and trading would be a plus.",
        ],
    },
    {
        id: "3",
        category: 4,
        title: "Customer Success Manager",
        text: "Step into the role of Customer Success Manager at BrightFunded and play a pivotal role in driving our traders' success journey.",
        address: "Amsterdam, The Netherlands or Remote",
        time: "Full-time",
        responsibilities: [
            "Lead and manage our Customer Support team, driving excellence in customer service.",
            "Devise and implement strategies aimed at enhancing customer success.",
            "Liaise with various teams to align customer service strategy and operations.",
            "Analyse customer success metrics, deriving insights that can drive strategy.",
            "Stay abreast of updates to our platform, services, and the financial trading landscape.",
        ],
        talents: [
            "A track record of success as a Customer Success Manager or similar leadership role.",
            "Outstanding communication and leadership skills.",
            "Robust analytical skills and a penchant for data-driven decision making.",
            "Experience within the financial trading landscape is a plus.",
            "Ability to thrive in a fast-paced startup environment.",
        ],
    },
    {
        id: "4",
        category: 4,
        title: "Customer Support Specialist",
        text: "Join BrightFunded as a Customer Support Specialist and be the guiding force for our trading community's journey to success.",
        address: "Amsterdam, The Netherlands or Remote",
        time: "Full-time",
        responsibilities: [
            "Respond promptly and professionally to customer inquiries via email, chat, and social media.",
            "Resolve customer issues and communicate complex concepts in a clear, understandable way.",
            "Collaborate with other teams to resolve complex issues and provide user feedback to enhance our services.",
            "Monitor and report on customer feedback and insights to improve our platform and services.",
            "Stay updated about our platform, services, and the financial trading landscape.",
        ],
        talents: [
            "Respond promptly and professionally to customer inquiries via email, chat, and social media.",
            "Resolve customer issues and communicate complex concepts in a clear, understandable way.",
            "Collaborate with other teams to resolve complex issues and provide user feedback to enhance our services.",
            "Monitor and report on customer feedback and insights to improve our platform and services.",
            "Stay updated about our platform, services, and the financial trading landscape.",
        ],
    },
]
