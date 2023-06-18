import * as React from "react";
import {HashLink} from "react-router-hash-link";

export interface IListItem {
    question: string
    answer: JSX.Element
}

export interface ITopic {
    topic: string
    list: IListItem[]
}

export const topics = [
    {
        topic: "Getting Started",
        list: [
            {
                question: "How to start?",
                answer: <>
                    <p>
                        Getting started with BrightFunded is a simple and straightforward process. Here, we will explain
                        it step by step:
                    </p>
                    <br/>
                    <p>
                        1. Go to the "Choose your destination" section on the <HashLink to="/#home-top"
                                                                                        smooth>homepage</HashLink>.
                    </p>
                    <p>
                        2. Configure your desired challenge and click on "Buy challenge."
                    </p>
                    <p>
                        3. Fill in your personal details and proceed with the payment.
                    </p>
                    <br/>
                    <p>
                        Afterward, you will receive your account credentials via email. You can also log in to
                        the <HashLink to="/" smooth>trader dashboard</HashLink> to view your account
                        credentials and stay informed about your trade results and
                        statistics.
                    </p>

                </>,
            },

        ]
    },
    // {
    //     topic: "Evaluation Process",
    //     list: [
    //         {
    //             question: "Is there a free trial available?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //         {
    //             question: "Can I change my plan later?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //         {
    //             question: "What is your cancellation policy?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //         {
    //             question: "Can other info be added to an invoice?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //         {
    //             question: "How do I change my account email?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //     ]
    // },
    // {
    //     topic: "Trade2Earn",
    //     list: [
    //         {
    //             question: "Is there a free trial available?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //         {
    //             question: "Can I change my plan later?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //         {
    //             question: "What is your cancellation policy?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //         {
    //             question: "Can other info be added to an invoice?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //         {
    //             question: "How do I change my account email?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //     ]
    // },
    // {
    //     topic: "Trading Perks",
    //     list: [
    //         {
    //             question: "Is there a free trial available?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //         {
    //             question: "Can I change my plan later?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //         {
    //             question: "What is your cancellation policy?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //         {
    //             question: "Can other info be added to an invoice?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //         {
    //             question: "How do I change my account email?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //     ]
    // },
    // {
    //     topic: "Billing and Payouts",
    //     list: [
    //         {
    //             question: "Is there a free trial available?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //         {
    //             question: "Can I change my plan later?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //         {
    //             question: "What is your cancellation policy?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //         {
    //             question: "Can other info be added to an invoice?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //         {
    //             question: "How do I change my account email?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //     ]
    // },
    // {
    //     topic: "Rules",
    //     list: [
    //         {
    //             question: "Is there a free trial available?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //         {
    //             question: "Can I change my plan later?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //         {
    //             question: "What is your cancellation policy?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //         {
    //             question: "Can other info be added to an invoice?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //         {
    //             question: "How do I change my account email?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //     ]
    // },
    // {
    //     topic: "Other",
    //     list: [
    //         {
    //             question: "Is there a free trial available?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //         {
    //             question: "Can I change my plan later?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //         {
    //             question: "What is your cancellation policy?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //         {
    //             question: "Can other info be added to an invoice?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //         {
    //             question: "How do I change my account email?",
    //             answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    //         },
    //     ]
    // },
]
