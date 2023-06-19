import {svgIcons} from "../../assets/svgIcons";
import src0 from "../../assets/png/board_0.png";
import src1 from "../../assets/png/board_1.png";
import src2 from "../../assets/png/board_2.png";

export const cards = [
    // 0
    {
        name: "Lex Hoogduin",
        text: "Lex Hoogduin serves as a Board Advisor at BrightFunded, focusing on managing uncertainty and complexity, risk management, and addressing economic issues.",
        img: src0,
        fullText: (
            <>
                <p>
                    Lex Hoogduin is an economics professor at the University of Groningen, specializing in uncertainty
                    handling, macroeconomics, risk management, monetary policy, financial markets, and governance.
                </p>
                <br/>
                <p>
                    His extensive career spans multiple notable positions such as serving as an advisor to President Wim
                    Duisenberg at the European Central Bank (ECB), and working at the Dutch Central Bank, where he
                    completed
                    four terms, the final one as an executive board member. Hoogduin also held the role of Chief
                    Economist
                    at Robeco, a renowned Dutch asset manager. In addition to these roles, he served as a non-executive
                    board member at the London Stock Exchange Group and chaired the LCH Group and its subsidiary boards.
                </p>
                <br/>
                <p>
                    Currently, Hoogduin holds various advisory and supervisory board positions within the financial
                    sector,
                    with a particular focus on asset management. He also operates his own company, Lex Hoogduin B.V.,
                    offering advice on managing uncertainty and complexity, risk management, and addressing economic
                    issues.
                </p>
            </>
        ),
        socials: [
            {
                icon: svgIcons.instagram_blue,
                href: "https://www.linkedin.com/in/lex-hoogduin-95a2502b/"
            },
            {
                icon: svgIcons.twitter_blue,
                href: "https://twitter.com/lexhoogduin"
            },
        ]
    },
    // 1
    {
        name: "Willem Sprenkeler",
        text: "Willem Sprenkeler (formerly of Optiver) serves as a Board Advisor at BrightFunded, focusing on regulation and compliance.",
        img: src1,
        fullText: (
            <>
                <p>
                    Willem Sprenkeler is the founder of Lex Mercatus, a boutique consultancy firm specializing in EU and
                    Dutch financial markets regulations. His clientele includes trading firms, brokers, and trading
                    platforms. In addition, Willem presides as the chairman of the board for the Association of Proprietary
                    Traders (APT).
                </p>
                <br/>
                <p>
                    Prior to establishing Lex Mercatus, Willem accrued over 12 years of experience in various compliance and
                    regulatory roles at Optiver, one of the largest derivatives trading firms globally, including a tenure
                    as the firm's Head of Public Affairs in Brussels.
                </p>
                <br/>
                <p>
                    Willem initiated his career in 2000 as a financial journalist. From 2005 to 2010, he was part of the
                    capital markets team at the Dutch Authority for Financial Markets (AFM).
                </p>
                <br/>
                <p>
                    Academically, Willem holds an MSc in Political Sciences from Leiden University and an MSc in Corporate
                    Compliance & Integrity from VU University in Amsterdam. Furthermore, he has attended executive education
                    at the European School of Management and Technology (ESMT) in Berlin and SDA Bocconi in Milan.
                </p>
            </>
        ),
        socials: [
            {
                icon: svgIcons.instagram_blue,
                href: "https://www.linkedin.com/in/willemsprenkeler/"
            },
        ]
    },
    // 2
    {
        name: "To Be Announced",
        text: "Before the official launch, the 3rd Board Advisor will be announced. Stay in the loop by joining us on Discord and Telegram, and following our Instagram and Twitter.",
        img: src2,
        fullText: (
            <>
            </>
        ),
        socials: [
            {
                icon: svgIcons.instagram_blue,
                href: "#"
            },
            {
                icon: svgIcons.twitter_blue,
                href: "#"
            },
        ]
    },
];
