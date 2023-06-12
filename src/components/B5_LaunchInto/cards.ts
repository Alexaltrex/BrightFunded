import src0 from "../../assets/png/launch_0.png";
import src1 from "../../assets/png/launch_1.png";
import src2 from "../../assets/png/launch_2.png";
import src3 from "../../assets/png/launch_3.png";
import src4 from "../../assets/png/launch_4.png";
import src0m from "../../assets/png/launch_0_m.png";
import src1m from "../../assets/png/launch_1_m.png";
import src2m from "../../assets/png/launch_2_m.png";
import src3m from "../../assets/png/launch_3_m.png";
import src4m from "../../assets/png/launch_4_m.png";

export interface ICard {
    title: string
    text: string
    src: string
    src_m: string
    background: string
}

export const cards: ICard[] = [
    {
        title: "Trade2Earn",
        text: "Get instantly rewarded in both phases of The Evaluation and on Funded Accounts with the world's first Trade2Earn program. Trade. Earn. Spend.",
        src_m: src0m,
        src: src0,
        background: "#ECF3FF",
    },
    {
        title: "Scaling Plan",
        text: "Scale your Funded Accounts to limitless heights and up to a 100% profit split with the generous Scaling Plan, by consistently generating profits on your funded account.",
        src_m: src1m,
        src: src1,
        background: "#EFF1F4",
    },
    {
        title: "Trading Perks",
        text: "Gain an extra edge in the market by exchanging your BrightFunded Tokens for Trading Perks. Commission-free trading, lower profit targets, daily payouts and more!",
        src_m: src2m,
        src: src2,
        background: "#E8F7F8",
    },
    {
        title: "NFT’s",
        text: "Withstand The Evaluation, acquire payouts, and overcome challenges to earn unique NFT certificates. Grow your NFT collection and become the brightest rising star!",
        src_m: src3m,
        src: src3,
        background: "#EFF1F4",
    },
    {
        title: "Community",
        text: "Join our Discord and Telegram, and follow our Social Media. Gather insights, trading tips, and connect with the community to raise your trading game!",
        src_m: src4m,
        src: src4,
        background: "#ECF3FF",
    },
];
