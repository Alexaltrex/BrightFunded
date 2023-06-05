import src from "../../assets/jpeg/card.jpg";

export interface ICard {
    title: string
    text: string
    src: string
}

export const cards: ICard[] = [
    {
        title: "Trade2Earn",
        text: "Get instantly rewarded in both phases of The Evaluation and on Funded Accounts with the world's first Trade2Earn program. Trade. Earn. Spend.",
        src: src,
    },
    {
        title: "Scaling Plan",
        text: "Scale your Funded Accounts to limitless heights and up to a 100% profit split with the generous Scaling Plan, by consistently generating profits on your funded account.",
        src: src,
    },
    {
        title: "Trading Perks",
        text: "Gain an extra edge in the market by exchanging your BrightFunded Tokens for Trading Perks. Commission-free trading, lower profit targets, daily payouts and more!",
        src: src,
    },
    {
        title: "NFT’s",
        text: "Withstand The Evaluation, acquire payouts, and overcome challenges to earn unique NFT certificates. Grow your NFT collection and become the brightest rising star!",
        src: src,
    },
    {
        title: "Community",
        text: "Join our Discord and Telegram, and follow our Social Media. Gather insights, trading tips, and connect with the community to raise your trading game!",
        src: src,
    },
];
