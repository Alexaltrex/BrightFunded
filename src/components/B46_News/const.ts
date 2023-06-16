import img from "./test.png";
import fullImg from "./full.png";

export interface ICard {
    id: number
    tab: number
    title: string
    text: string
    date: string
    img: string
    fullImg: string
    similar: number[]
}

export const news: ICard[] = [
    {
        id: 1,
        tab: 1,
        title: "FTMO Traders Analysis: focused on consistency 1",
        text: "In the next part of our irregular series, in which we evaluate successful FTMO Traders, we will take a look...",
        date: "11 Mar, 2023",
        img,
        fullImg,
        similar: [7, 8, 9],
    },
    {
        id: 2,
        tab: 2,
        title: "FTMO Traders Analysis: focused on consistency 2",
        text: "In the next part of our irregular series, in which we evaluate successful FTMO Traders, we will take a look...",
        date: "12 Mar, 2023",
        img,
        fullImg,
        similar: [7, 8, 9],
    },
    {
        id: 3,
        tab: 3,
        title: "FTMO Traders Analysis: focused on consistency 3",
        text: "In the next part of our irregular series, in which we evaluate successful FTMO Traders, we will take a look...",
        date: "13 Mar, 2023",
        img,
        fullImg,
        similar: [7, 8, 9],
    },
    {
        id: 4,
        tab: 4,
        title: "FTMO Traders Analysis: focused on consistency 4",
        text: "In the next part of our irregular series, in which we evaluate successful FTMO Traders, we will take a look...",
        date: "14 Mar, 2023",
        img,
        fullImg,
        similar: [7, 8, 9],
    },
    {
        id: 5,
        tab: 5,
        title: "FTMO Traders Analysis: focused on consistency 5",
        text: "In the next part of our irregular series, in which we evaluate successful FTMO Traders, we will take a look...",
        date: "15 Mar, 2023",
        img,
        fullImg,
        similar: [7, 8, 9],
    },
    {
        id: 6,
        tab: 6,
        title: "FTMO Traders Analysis: focused on consistency 6",
        text: "In the next part of our irregular series, in which we evaluate successful FTMO Traders, we will take a look...",
        date: "16 Mar, 2023",
        img,
        fullImg,
        similar: [7, 8, 9],
    },
    {
        id: 7,
        tab: 4,
        title: "FTMO Traders Analysis: focused on consistency 7",
        text: "In the next part of our irregular series, in which we evaluate successful FTMO Traders, we will take a look...",
        date: "17 Mar, 2023",
        img,
        fullImg,
        similar: [1, 2, 3],
    },
    {
        id: 8,
        tab: 5,
        title: "FTMO Traders Analysis: focused on consistency 8",
        text: "In the next part of our irregular series, in which we evaluate successful FTMO Traders, we will take a look...",
        date: "18 Mar, 2023",
        img,
        fullImg,
        similar: [1, 2, 3],
    },
    {
        id: 9,
        tab: 6,
        title: "FTMO Traders Analysis: focused on consistency 9",
        text: "In the next part of our irregular series, in which we evaluate successful FTMO Traders, we will take a look...",
        date: "19 Mar, 2023",
        img,
        fullImg,
        similar: [1, 2, 3],
    },
]

export const tabs = [
    { // 0
        label: "View All",
        color: "",
        background: "",
    },
    { // 1
        label: "Trading Psychology",
        color: "#C11574",
        background: "rgba(193, 21, 116, 0.1)",
    },
    { // 2
        label: "Trading Systems",
        color: "#3538CD",
        background: "rgba(53, 56, 205, 0.1)",
    },
    { // 3
        label: "Markets Weekly",
        color: "#C6430A",
        background: "rgba(198, 67, 10, 0.1)",
    },
    { // 4
        label: "Trading Updates",
        color: "#1A8CC9",
        background: "rgba(26, 140, 201, 0.1)",
    },
    { // 5
        label: "Instruments",
        color: "#DE8500",
        background: "rgba(222, 133, 0, 0.1)",
    },
    { // 6
        label: "Other",
        color: "#008B7D",
        background: "rgba(0, 139, 125, 0.1)",
    },
];
