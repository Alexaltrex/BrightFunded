import * as React from "react";
import {HashLink} from "react-router-hash-link";
import style from "./topics.module.scss";

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

                    <div className={style.list}>
                        <p className={style.list_item}>
                            1. Go to the "Choose your destination" section on the <HashLink to="/#home-top"
                                                                                            smooth>homepage</HashLink>.
                        </p>
                        <p className={style.list_item}>
                            2. Configure your desired challenge and click on "Buy challenge."
                        </p>
                        <p className={style.list_item}>
                            3. Fill in your personal details and proceed with the payment.
                        </p>
                    </div>

                    <p className={style.text}>
                        Afterward, you will receive your account credentials via email. You can also log in to
                        the trader dashboard to view your account
                        credentials and stay informed about your trade results and
                        statistics.
                    </p>

                </>,
            },
            {
                question: "Why should I join BrightFunded?",
                answer: <>
                    <p>
                        At BrightFunded, we understand the challenges faced by traders – from managing small accounts
                        and dealing with psychological pressures to the fear of losing money and grappling with growth
                        limitations. That's why we've designed our platform to address these issues directly:
                    </p>

                    <div className={style.list}>
                        <p className={style.list_item}>
                            1. <span>Overcoming Small Capital</span>: BrightFunded provides you the opportunity to trade
                            an account with
                            a substantial initial balance. This eliminates the problem of small capital and offers you
                            the chance to trade more freely without concerns about the size of your account.
                        </p>
                        <p className={style.list_item}>
                            2. <span>Risk-Free Trading</span>: With BrightFunded, you're not risking your own money. We
                            take on the
                            risk, allowing you to trade fearlessly. If things don't go as planned, BrightFunded covers
                            the losses.
                        </p>
                        <p className={style.list_item}>
                            3. <span>Educational Resources and Support</span>: We provide extensive resources, including
                            performance
                            coaching and innovative trading applications, to help you enhance your trading skills and
                            develop discipline.
                        </p>
                        <p className={style.list_item}>
                            4. <span>Trade2Earn Program</span>: We are the world's first firm to reward traders for
                            their performance
                            directly through our innovative <HashLink to="/trade#trade-top" smooth>Trade2Earn
                            program</HashLink>. This means you're rewarded not just for
                            your profits but also for your trading activity.
                        </p>
                        <p className={style.list_item}>
                            5. <span>Exclusive Trading Perks</span>: BrightFunded offers unique trading perks such as
                            commission-free trading, lower profit targets, and daily payouts that can be unlocked with
                            BrightFunded Tokens. These perks give you an extra edge in the market.
                        </p>
                        <p className={style.list_item}>
                            6. <span>Generous Scaling Plan</span>: BrightFunded believes in rewarding consistent
                            success. That's why
                            our <HashLink to="/scaling-plan#top-scaling-plan" smooth>scaling plan</HashLink> increases
                            your trading
                            account's size as you continuously generate profit.
                            You'll enjoy both the growth of your account and your earnings.
                        </p>
                        <p className={style.list_item}>
                            7. <span>Access Forex and Crypto Markets</span>: With BrightFunded, you can trade a wide
                            range of both
                            Forex and Cryptocurrencies. Diversify your trading portfolio by capitalizing on the most
                            dynamic and liquid markets in the world.
                        </p>
                        <p className={style.list_item}>
                            8. <span>Development Roadmap</span>: BrightFunded is committed to constant innovation and
                            transparency.
                            Our <HashLink to="/roadmap#roadmap-top" smooth>Development Roadmap</HashLink> gives you a
                            clear
                            overview of our planned improvements, features,
                            and milestones, aligning you with our vision and letting you partake in our journey towards
                            revolutionizing the trading space.
                        </p>
                        <p className={style.list_item}>
                            9. <span>Initial Fee Reimbursement</span>: Like FTMO, we refund your initial fee with your
                            first profit split, making your journey with us even more rewarding.
                        </p>
                    </div>
                </>,
            },
            {
                question: "What is BrightFunded?",
                answer: <>
                    <p className={style.text}>
                        At BrightFunded, we understand the challenges faced by traders – from managing small accounts
                        and dealing with psychological pressures to the fear of losing money and grappling with growth
                        limitations. That's why we've designed our platform to address these issues directly:
                    </p>
                    <p className={style.text}>
                        At BrightFunded, traders receive BrightFunded Tokens based on their trading volume, both on
                        Challenge and Funded accounts. Traders can use these BrightFunded Tokens for various trading
                        perks that provide them with an additional edge in the market.
                    </p>
                    <p className={style.text}>
                        Traders have the opportunity to initially manage a capital of up to 400,000 USD at BrightFunded,
                        and they have the potential to continue scaling their capital indefinitely through the
                        generous <HashLink to="/scaling-plan#top-scaling-plan" smooth>scaling plan</HashLink>.
                    </p>
                    <p className={style.text}>
                        BrightFunded covers all losses, if they occur.
                    </p>
                </>,
            },
            {
                question: "Who can join BrightFunded?",
                answer: <>
                    <p className={style.text}>
                        BrightFunded is open to traders from various backgrounds and experience levels. Both aspiring
                        traders and experienced professionals are welcome to join. <span>All clients must be at least 18 years
                    old</span>. BrightFunded caters to retail traders worldwide who are looking to showcase their
                        trading
                        skills, improve their performance, and potentially earn profits through the Funded program.
                        BrightFunded provides an opportunity for individuals with a passion for trading to participate,
                        regardless of their previous trading experience.
                    </p>

                </>,
            },
            {
                question: "Is BrightFunded a serious company?",
                answer: <>
                    BrightFunded is as serious as it gets. We are an online trading evaluation firm that offers traders
                    the opportunity to showcase their trading skills and potentially earn profits through our Funded
                    program. We provide a structured evaluation process, profit sharing for successful traders,
                    professional coaching, and advanced trading tools. BrightFunded aims to support and empower traders
                    worldwide in their pursuit of success in the financial markets.
                </>,
            },
        ]
    },
    {
        topic: "Evaluation Process",
        list: [
            {
                question: "How do I get funded?",
                answer: <>
                    <div className={style.text}>
                        In order to become funded, you must successfully complete our two-step Evaluation Process:
                    </div>
                    <div className={style.text}>
                        <p className={style.text_title}>
                            Step 1: The Challenge
                        </p>
                        <p>
                            To become a funded trader at BrightFunded, you'll have to successfully complete our
                            Evaluation Process, comprising two distinct stages:
                        </p>
                    </div>
                    <div className={style.text}>
                        <p className={style.text_title}>
                            Stage 1: BrightFunded Challenge
                        </p>
                        <p>
                            This is a 30-day trial in a demo trading environment where you're expected to demonstrate
                            your trading skills by meeting our defined profit targets and respecting our risk management
                            rules. During this phase and the one that follows, you trade in a simulated trading
                            environment that is barely distinguishable from the real-time market. Additionally, you'll
                            start earning BrightFunded Tokens based on your trading volume. These tokens can be utilized
                            for unlocking various trading perks, providing you with an additional edge in the market.
                            Once you successfully complete the Challenge, you proceed to the next stage.
                        </p>
                    </div>
                    <div className={style.text}>
                        <p className={style.text_title}>
                            Stage 2: Verification
                        </p>
                        <p>
                            <p>
                                This stage lasts for 60 days and is designed to verify the consistency of your
                                performance.
                                The rules here are more relaxed compared to the Challenge stage, but it still requires
                                prudent trading discipline. Here too, your trading volume earns you BrightFunded Tokens,
                                extending your ability to utilize more trading perks. For a comprehensive understanding
                                of
                                the rules, please visit our Trading Objectives section on the homepage.
                            </p>
                            <br/>
                            <p>
                                After passing the Verification stage, and our review of your trading, you're set to
                                become a
                                BrightFunded Trader. To finalize your contract for your BrightFunded Account, we'll
                                require
                                an ID document (passport, national ID card, or driving license) to complete your
                                identification process.
                            </p>
                            <br/>
                            <p>
                                Note that BrightFunded does not offer services to individuals below 18 years of age,
                                those
                                listed on sanction lists, persons with criminal records related to financial crime or
                                terrorism, and persons previously excluded due to a breach of the BrightFunded Account
                                Agreement. If any of the aforementioned conditions are detected after the conclusion of
                                a
                                BrightFunded Account Agreement, we reserve the right to terminate the agreement.
                            </p>
                            <br/>
                            <p>
                                At BrightFunded, we don't base your qualification on past track records but on your
                                ability
                                to consistently meet our trading objectives. Additionally, the initial fee you pay for
                                the
                                evaluation will be reimbursed with your first profit split, making your journey with us
                                even
                                more rewarding. BrightFunded's unique Trade2Earn program ensures you're rewarded not
                                only
                                for your profits but also for your trading activity. Your path to trading success starts
                                here!
                            </p>
                        </p>
                    </div>
                </>
            },
            {
                question: "How long does the evaluation process take?",
                answer: <>
                    <p className={style.text}>
                        The evaluation process at BrightFunded consists of two stages and its duration is primarily
                        determined by the trader's performance:
                    </p>
                    <p className={style.text}>
                        <span>Stage 1: BrightFunded Challenge</span> - This stage lasts for 30 calendar days. However,
                        if you reach
                        the profit target and comply with all other rules earlier, you can complete this stage in a
                        shorter time frame. The minimum required number of trading days is 5 days. These do not have to
                        be consecutive.
                    </p>
                    <p className={style.text}>
                        <span>Stage 2: Verification</span> - This is a 60-day stage designed to verify the consistency
                        of your
                        trading performance. Similar to the Challenge stage, if you meet all trading objectives earlier,
                        you can complete this stage in less time. The minimum required number of trading days is 5 days.
                        These do not have to be consecutive.
                    </p>
                    <p className={style.text}>
                        So in essence, you can complete the evaluation in as little as 10 days. Please note that while
                        the trading periods are defined, we emphasize the importance of patience and consistent trading.
                        Trying to rush the process can lead to unnecessary risk-taking.
                    </p>
                </>
            },
            {
                question: "What are the criteria for the evaluation process?",
                answer: <>
                    <p className={style.text}>
                        The evaluation process at BrightFunded is based on a series of criteria designed to assess your
                        trading skills, discipline, and consistency. Here are the main requirements that you will need
                        to meet:
                    </p>
                    <div className={style.list}>
                        <p className={style.list_item}>
                            1. <span>Trading Period</span>: This is the maximum number of calendar days you have to get
                            through the phase.
                        </p>
                        <p className={style.list_item}>
                            2. <span>Minimum Trading Days</span>: You must trade for at least 5 days during the
                            Challenge as well as the Verification. These do not need to be consecutive.
                        </p>
                        <p className={style.list_item}>
                            3. <span>Maximum Daily Loss</span>: This is the maximum allowed loss in a single day. If you
                            exceed this limit, the account will be terminated. For each phase, this is 5% from the
                            initial balance.
                        </p>
                        <p className={style.list_item}>
                            4. <span>Maximum Loss</span>: This is the absolute maximum loss allowed on your account. If
                            your account balance hits this level at any point, the account will be terminated. For each
                            phase, this is 10%.
                        </p>
                        <p className={style.list_item}>
                            5. <span>Profit Target</span>: You must reach a set profit target within the trading period.
                            For the Challenge phase this is 8%, for the Evaluation 5%.
                        </p>
                    </div>
                    <p className={style.text}>
                        After passing the Verification stage, and our review of your trading, you're set to become a
                        BrightFunded Trader. To finalize your contract for your BrightFunded Account, we'll require an
                        ID document (passport, national ID card, or driving license) to complete your identification
                        process.
                    </p>
                    <p className={style.text}>
                        Note that BrightFunded does not offer services to individuals below 18 years of age, those
                        listed on sanction lists, persons with criminal records related to financial crime or terrorism,
                        and persons previously excluded due to a breach of the BrightFunded Account Agreement. If any of
                        the aforementioned conditions are detected after the conclusion of a BrightFunded account.
                    </p>
                    <p className={style.text}>
                        For a comprehensive understanding of the rules, please visit our Trading Objectives section on
                        the homepage.
                    </p>
                </>
            },
            {
                question: "What happens if I breach the rules, is there a possibility for a second chance?",
                answer: <>
                    <div className={style.text}>
                        <p>
                            If you breach any of the Trading Rules, that particular account will automatically become
                            invalid and can't continue in The Evaluation. If you breach the rules on your Funded
                            Account,
                            that account will be closed. You can start over and apply for a new Challenge if you want to
                            try
                            again to become a Funded Trader. If you breach the Trading Rules, you lose your initial fee
                            paid
                            for The Challenge, so it's very important to follow the rules.
                        </p>
                        <br/>
                        <p>
                            However, there's one special case. If you follow all the Trading Rules, make a profit at the
                            end
                            of the trading period with all positions closed, but have not fully met the profit target,
                            we
                            will let you start a new Challenge for free. We understand that sometimes market conditions
                            are
                            tough, and we appreciate your good trading skills and careful risk management.
                        </p>
                        <br/>
                        <p>
                            Also, you can get a free extension of 14 days for your Challenge if you didn't go over the
                            loss
                            limits and you made more than a 4% profit (balance & equity) on your Challenge, 3 days
                            before
                            the trading period ends.
                        </p>
                        <br/>
                        <p>
                            You need to ask for this extension on the 28th or 29th day of your trading period. The
                            chance to
                            extend the trading period won't be there on the last day. In other words, you can't use this
                            extension on the last day [CE(S)T] of your Challenge.
                        </p>
                        <br/>
                        <p>
                            With the extra 14 days, you can keep trading calmly without having to make rushed decisions
                            instead of starting over from the beginning.
                        </p>
                        <br/>
                        <p>
                            And even better, if you don't meet the Profit Target even with the extra 14 days, you can
                            still
                            wait for your Free Repeat if the usual conditions are met.
                        </p>
                    </div>
                </>
            },
            {
                question: "What capital will I trade at BrightFunded?",
                answer: <>
                    <div className={style.text}>
                        <p>
                            At BrightFunded, you will be trading with the same account balance that you traded in The
                            Challenge. If you traded with $200,000 in the The Challenge, you will also manage $200,000
                            in your Funded Account.
                        </p>
                        <br/>
                        <p>
                            For clarity, it's essential to understand that all the accounts we offer our clients are
                            demo accounts equipped with virtual capital. Once a client becomes a Funded Trader (Funded
                            Star), they receive login details for a demo account. The difference between an Evaluation
                            Account and a Funded Account is that the trades on a Funded Account are linked to our
                            sophisticated rule engine that constantly analyzes the risk, reward, and executed trades on
                            our funded traders’ accounts. Clients are entitled to up to 100% of profits made on their
                            Funded Account. This method is administratively simpler and provides us greater flexibility
                            in active risk management.
                        </p>
                        <br/>
                        <p>
                            If you wish to trade with a larger account balance, you can apply for an additional
                            Challenge and manage more accounts. Every Challenge must be traded from the beginning,
                            irrespective of the progress on your other accounts. As we strive to diversify our risk and
                            exposure, we permit a maximum capital allocation of $400,000 per trader or per strategy, at
                            any given moment. This can be interpreted as two accounts - each with $200k, or four
                            accounts - each with $100k, and so on. Be cautious to avoid multiple accounts via various
                            registrations. If we detect identically traded strategies across multiple accounts and
                            surpassing $400,000 in allocated capital, we reserve the right to suspend those accounts as
                            per our Terms and Conditions.
                        </p>
                        <br/>
                        <p>
                            Conversely, if you demonstrate consistent profitability on your BrightFunded Account, we
                            would be pleased to assign additional capital in line with our Scaling Plan.
                        </p>
                    </div>
                </>
            },
        ]
    },
    {
        topic: "Trade2Earn",
        list: [
            {
                question: "What is Trade2Earn?",
                answer: <>
                    <div className={style.text}>
                        <p>
                            Trade2Earn is a groundbreaking program designed by BrightFunded to reward traders for their
                            performance and trading activity directly. This sets us apart from traditional prop trading
                            firms that reward traders solely based on their profits. With the Trade2Earn program, your
                            trading volume is valued, regardless of whether your trades are profitable or not.
                        </p>
                        <br/>
                        <p>
                            As part of the Trade2Earn program, traders receive BrightFunded Tokens based on their
                            trading volume, both on Challenge and Funded accounts. These BrightFunded Tokens can be used
                            to unlock a range of unique trading perks that provide an additional edge in the market.
                        </p>
                        <br/>
                        <p>
                            These perks may include, but are not limited to:
                        </p>
                    </div>
                    <div className={style.list}>
                        <p className={style.list_item}>
                            1. <span>Commission-Free Trading</span>: Lower your trading costs by eliminating commission
                            fees. This can significantly enhance your profit potential over time.
                        </p>
                        <p className={style.list_item}>
                            2. <span>Lower Profit Targets</span>: Reduce the profit target you need to achieve during
                            your evaluation process, increasing your chances of passing and getting funded.

                        </p>
                        <p className={style.list_item}>
                            3. <span>Unlimited Trading Days</span>: Unlock the ability pass your challenge with
                            unlimited trading days.
                        </p>
                    </div>
                    <div className={style.text}>
                        Through the Trade2Earn program, we aim to empower traders by rewarding their consistent trading
                        activity and providing them with advantages that elevate their trading experience and
                        profitability potential. We believe in recognizing the hard work of our traders, and Trade2Earn
                        is our way of saying 'Thank you' for their dedication and efforts.
                    </div>
                </>,
            },
            {
                question: "Do I earn with every trade I make?",
                answer: <>
                    <p>
                        Yes. At BrightFunded, your earnings are determined by the profitability of your trades, but you
                        also receive additional benefits with every trade through our innovative Trade2Earn program.
                    </p>
                    <br/>
                    <p>
                        If your trade is profitable, you earn money directly from the trade. The amount you earn depends
                        on the size and profitability of the trade, and, of course, this is the primary method of income
                        for our traders.
                    </p>
                    <br/>
                    <p>
                        In addition, regardless of the profitability of your trades, every trade you make earns you
                        BrightFunded Tokens through our Trade2Earn program. The number of Tokens you earn is
                        proportional to your trading volume.
                    </p>
                    <br/>
                    <p>
                        However, please note that while every trade contributes to your earning potential, it's crucial
                        to make informed and strategic trading decisions to ensure overall account profitability and to
                        successfully pass the evaluation process. The goal is not just to trade frequently, but to trade
                        wisely.
                    </p>
                </>,
            },
            {
                question: "How many BrightFunded tokens do I receive per lot?",
                answer: <>
                    In the BrightFunded Trade2Earn program, you earn one BrightFunded Token for every lot you trade.
                    This applies to both your Challenge and Funded accounts, meaning that each lot traded contributes to
                    your token balance, regardless of the profitability of the trade. These tokens can then be used to
                    unlock unique trading perks to further enhance your trading experience and profitability. Remember
                    to regularly check your account dashboard to monitor your token balance and see the available
                    trading perks.
                </>,
            },
            {
                question: "How do I receive the BrightFunded Token?",
                answer: <>
                    <p>
                        When you trade on a BrightFunded account, you earn BrightFunded Tokens which are automatically
                        credited to your BrightFunded account, once a qualifying trade is completed. These tokens are
                        initially usable only within the BrightFunded ecosystem.
                    </p>
                    <br/>
                    <p>
                        However, following the launch of the BrightFunded Token, you will also have the option to
                        transfer these tokens to your personal crypto wallet. You can view, manage, and transfer your
                        BrightFunded Tokens from your account dashboard, where you can also monitor your token balance
                        and see your transaction history.
                    </p>
                    <br/>
                    <p>
                        If there are any delays or issues with the reception of your Tokens, we recommend reaching out
                        to our customer support for assistance.
                    </p>
                </>,
            },
            {
                question: "Will the value of the BrightFunded Token increase overtime?",
                answer: <>
                    <p>
                        The value of the BrightFunded Token, like other digital assets, is influenced by various factors
                        such as supply, demand, and overall market conditions. We have designed our tokenomics with the
                        aim of creating sustainable demand for the BrightFunded Token and to incentivize its use within
                        our platform, which could positively impact its value over time.
                    </p>
                    <br/>
                    <p>
                        Please also take a look at the <HashLink to="/trade#trade-top" smooth>Trade2Earn
                        page</HashLink> to learn more about the compounding benefits of
                        holding the BrightFunded Token.
                    </p>
                </>,
            },
        ]
    },
    {
        topic: "Trading Perks",
        list: [
            {
                question: "What are BrightFunded's Trading Perks?",
                answer: <>
                    BrightFunded's Trading Perks are special advantages offered to our traders which can enhance their
                    trading experience. These perks can be unlocked using BrightFunded Tokens. They are designed to
                    provide additional flexibility and benefits to our traders, such as improving their trading
                    conditions, allowing for more convenience in trading activities, and potentially boosting their
                    profits. The specific perks available may vary, so it's recommended to regularly check the Trading
                    Perks page on the BrightFunded website for the most current offerings.
                </>,
            },
            {
                question: "How do I obtain trading perks?",
                answer: <>
                    <p>
                        Obtaining trading perks at BrightFunded is a straightforward process:
                    </p>
                    <div className={style.list}>
                        <p className={style.list_item}>
                            1. <span>Earn BrightFunded Tokens</span>: As a trader at BrightFunded, you earn BrightFunded
                            Tokens based on your trading volume. Every lot you trade on the platform earns you a certain
                            number of BrightFunded Tokens.
                        </p>
                        <p className={style.list_item}>
                            2. <span>Check Available Perks</span>: In the BrightFunded dashboard, you can see all the
                            trading perks that are currently available. The dashboard provides details about each perk,
                            including the number of BrightFunded Tokens required to unlock it.
                        </p>
                        <p className={style.list_item}>
                            3. <span>Unlock Perks</span>: If you have enough BrightFunded Tokens and wish to use a
                            particular trading perk, you can purchase it using your BrightFunded Tokens. Once you've
                            done that, you’ll receive an email explaining how to deploy this trading perk.
                        </p>
                    </div>
                    <p className={style.text}>
                        Remember, the more you trade, the more BrightFunded Tokens you accumulate, and the more trading
                        perks you can unlock to enhance your trading experience.
                    </p>
                </>,
            },
            {
                question: "What trading perks are available?",
                answer: <>
                    BrightFunded offers an array of unique Trading Perks to its traders. These perks are designed to
                    provide an edge in your trading, enhance your experience, and improve your profitability. They range
                    from trading condition improvements to discount codes and more. The current trading perks available
                    are subject to change and will be periodically updated. To see the current list of available trading
                    perks, you can take a look at the 'Trading Perks' section in the BrightFunded dashboard.
                </>,
            },
            {
                question: "Can I use multiple Trading Perks at once?",
                answer: <>
                    Yes, at BrightFunded you can use multiple trading perks simultaneously. It's part of our flexible
                    approach designed to support your trading strategy and progress. Please note, however, that certain
                    trading perks may have specific conditions or requirements, so be sure to understand these before
                    application. Always feel free to reach out to our support team if you have any questions about using
                    multiple trading perks.
                </>,
            },
        ]
    },
    {
        topic: "Billing and Payouts",
        list: [
            {
                question: "Can I only get paid in BrightFunded Tokens?",
                answer: <>
                    No, BrightFunded does not pay profits solely in BrightFunded Tokens. We understand the importance of
                    monetary profits for traders, so our primary method of profit payout is in cash. BrightFunded Tokens
                    are an additional reward you earn based on your trading volume and can be used to unlock special
                    trading perks on our platform. These tokens are a unique part of our Trade2Earn program and are
                    meant to enhance your trading experience with BrightFunded, not to replace your monetary earnings.
                    The tokens and your profit payout are separate components of our rewarding system.
                </>,
            },
            {
                question: "Do I need to pay taxes on my payouts?",
                answer: <>
                    <p>
                        The answer to this question can vary greatly depending on your local jurisdiction and tax laws.
                        In
                        many countries, any earnings from trading or profits received from a company like BrightFunded
                        may
                        be considered taxable income. Therefore, it is highly recommended that you consult with a
                        qualified
                        tax advisor or accountant who is familiar with the specific tax laws and regulations in your
                        country.
                    </p>
                    <br/>
                    <p>
                        BrightFunded does not withhold taxes from your payouts. It is the responsibility of each
                        individual
                        trader to report their earnings and comply with their local tax laws.
                    </p>
                </>,
            },
            {
                question: "Do I need to pay charges with the payouts?",
                answer: <>
                    At BrightFunded, we don't charge any additional fees on your payouts. Once we've completed the
                    profit split, the remaining profit is entirely yours. We believe in a transparent business model
                    where you get to keep what you earn without any hidden charges or surprises. However, it's important
                    to remember that while we don't charge extra, your bank or payment processor might have fees
                    associated with incoming transfers. We recommend checking with them to ensure you're aware of any
                    potential costs. With BrightFunded, you can rest assured that your profits remain your own.
                </>,
            },
            {
                question: "What other fees do I need to pay? Is the fee recurrent?",
                answer: <>
                    <p>
                        As a trader with BrightFunded, the primary fee you need to pay is the initial evaluation fee
                        when
                        you choose your challenge. This fee depends on the account size you select for your challenge.
                        It's
                        a one-time payment that you make at the start of your evaluation process and it's not recurrent.
                    </p>
                    <br/>
                    <p>
                        However, we understand the value of your initial payment. Hence, BrightFunded reimburses your
                        evaluation fee with the first Profit Split on the BrightFunded Account. This means that once you
                        become a funded trader and make your first profits, we'll return your initial fee as part of
                        your
                        first profit split.
                    </p>
                    <br/>
                    <p>
                        Apart from this, there are no other mandatory recurring fees. Once you become a funded trader
                        with
                        BrightFunded, we do not charge monthly or annual subscription fees. The profits you make are
                        split
                        according to the agreed percentage and we cover any losses, if they occur.
                    </p>
                </>,
            },
        ]
    },
    {
        topic: "Rules",
        list: [
            {
                question: "Can I trade news?",
                answer: <>
                    <p>
                        At BrightFunded, we believe in empowering our traders with the freedom to utilize their
                        preferred
                        trading strategies. This means that you are absolutely allowed to trade during news events.
                    </p>
                    <br/>
                    <p>
                        However, it's crucial to remember that news trading often involves substantial volatility and
                        can
                        present higher risks compared to regular trading conditions. We encourage traders to exercise
                        prudent risk management strategies and remain informed about the potential impact of news events
                        on
                        market dynamics.
                    </p>
                    <br/>
                    <p>
                        Whether you decide to engage in news trading or not, BrightFunded supports you with the
                        resources
                        and trading environment to perform at your best. Always make sure your trading decisions align
                        with
                        your risk tolerance and overall trading plan.
                    </p>
                </>,
            },
            {
                question: "Can I use an EA?",
                answer: <>
                    <p>
                        Absolutely, at BrightFunded, we allow the use of Expert Advisors (EAs). We understand that
                        different traders have different strategies, and automated trading systems or EAs are an
                        integral part of many traders' toolkits.
                    </p>
                    <br/>
                    <p>
                        However, while we permit the use of EAs, it's crucial to ensure that your use of them aligns
                        with our trading conditions and rules. For instance, you still need to adhere to our daily and
                        total loss limits even when using an EA. Also please note that if you use a third-party EA,
                        there may be other traders who are already using the same EA and hence, the exact same strategy.
                    </p>
                    <br/>
                    <p>
                        As with all trading strategies, we encourage you to apply sound risk management principles and
                        regularly review the performance of your EAs to ensure they are functioning as expected and not
                        putting your account at undue risk. Remember, while EAs can automate trading, they still require
                        oversight to ensure they are operating correctly.
                    </p>
                </>,
            },
            {
                question: "Can I hold my positions over the weekend?",
                answer: <>
                    Yes, at BrightFunded, we allow traders to hold positions over the weekend. We understand that some
                    trading strategies involve holding positions for longer periods, and we want to provide the
                    flexibility necessary for various trading styles. However, we advise you to be aware of the
                    potential risks associated with holding positions over the weekend. Events that occur when the
                    markets are closed could result in significant price gaps when they reopen, which could impact your
                    positions. As always, sound risk management is crucial to successful trading.
                </>,
            },
            {
                question: "Do I need to close my positions overnight?",
                answer: <>
                    No, at BrightFunded, we do not require traders to close their positions overnight. We appreciate
                    that traders use a variety of strategies, some of which involve holding positions for extended
                    periods. Therefore, we allow for this flexibility. However, please keep in mind that holding
                    positions overnight can expose you to potential risks such as overnight fees or swap charges and
                    unpredictable market fluctuations. Always ensure your trading strategy and risk management protocols
                    account for these factors.
                </>,
            },
            {
                question: "What strategies am I allowed to use?",
                answer: <>
                    At BrightFunded, we encourage a wide range of trading strategies. As long as your trading is in line
                    with our rules and guidelines, corresponds with real market conditions, and we can replicate your
                    trades on our live accounts, there are no restrictions on your trading style or strategy. This means
                    you can use technical analysis, fundamental analysis, scalping, swing trading, or long-term trading.
                    However, always ensure your trading aligns with the risk parameters set by BrightFunded, and respect
                    the trading conditions of our platform. It's your skill and strategy that matter, not how you choose
                    to apply them.
                </>,
            },
        ]
    },
    {
        topic: "Other",
        list: [
            {
                question: "What are the trading account specifications?",
                answer: <>
                    <p>
                        We understand how important these specifics are in informing your trading strategy and
                        preparations. To ensure that our traders have the most efficient and conducive trading
                        environment, we are taking a deliberate approach in designing the account specifications, which
                        will be based on direct feeds from our prime liquidity providers and the functionalities of our
                        trading platform.
                    </p>
                    <br/>
                    <p>
                        The specific trading account specifications for BrightFunded will be announced after we have
                        unveiled our trading platform.
                    </p>
                </>,
            },
            {
                question: "What assets can I trade at BrightFunded?",
                answer: <>
                    <p>
                        At BrightFunded, we offer an extensive selection of tradable assets to cater to every trader's
                        needs and preferences. Our offerings include but are not limited to:
                    </p>
                    <div className={style.list}>
                        <p className={style.list_item}>
                            1. Cryptocurrencies: In addition to traditional assets, we offer a wide range of the most
                            popular and latest cryptocurrency instruments.
                        </p>
                        <p className={style.list_item}>
                            2. Forex: We provide access to major, minor, and exotic forex pairs.
                        </p>
                        <p className={style.list_item}>
                            3. Indices: You will be able to trade a variety of global indices.
                        </p>
                        <p className={style.list_item}>
                            4. Commodities: This includes hard commodities like metals, and soft commodities such as
                            agricultural goods.
                        </p>
                        <p className={style.list_item}>
                            5. Stocks: We provide a platform to trade shares from various markets worldwide.
                        </p>
                    </div>
                    <div className={style.text}>
                        <p>
                            The specific list of tradable assets will be announced after the unveiling of our trading
                            platform.
                        </p>
                        <br/>
                        <p>
                            We recommend that you stay tuned to our updates for the announcement of our comprehensive
                            list of tradable assets.
                        </p>
                    </div>
                </>,
            },
            {
                question: "How can I connect with the trading community?",
                answer: <>
                    <p>
                        At BrightFunded, we highly encourage our traders to become a part of our dynamic trading
                        community. The easiest way to do this is by joining our Discord and Telegram groups. These
                        platforms facilitate instant communication and provide a space for you to connect, share, and
                        learn from other traders around the globe.
                    </p>
                    <br/>
                    <p>
                        In addition, we recommend following our social media channels, such as Twitter, Instagram, and
                        Youtube. Here, we post regular updates, news, tips, and insights that can significantly enhance
                        your trading journey.
                    </p>
                    <br/>
                    <p>
                        Remember, trading doesn't have to be a solitary activity. Join the BrightFunded community today
                        and experience the collective growth!
                    </p>
                </>,
            },
            {
                question: "Are you teaching people to trade?",
                answer: <>
                    <p>
                        BrightFunded's primary goal is twofold: to educate traders and provide them with funded trading
                        opportunities. We firmly believe in the synergy between education and practical application,
                        which is why we offer both educational resources and a platform for trading.
                    </p>
                    <br/>
                    <p>
                        Our Trading Academy, accessible directly from the Dashboard, offers a wide range of educational
                        resources. These include basic and advanced video tutorials, as well as a wealth of other
                        educational content related to trading. This means that whether you're a beginner or an
                        experienced trader, you can continuously learn and refine your trading skills.
                    </p>
                    <br/>
                    <p>
                        Alongside this, we provide funded trading opportunities where traders can apply their knowledge
                        in real-world scenarios. This combination of education and practical application is designed to
                        help you become a successful and consistent trader. Remember, trading involves risk and it's
                        always important to manage this carefully.
                    </p>
                </>,
            },
            {
                question: "Is BrightFunded the best trading solution that I can find?",
                answer: <>
                    <p>
                        At BrightFunded, we believe in providing a unique blend of educational resources, funded trading
                        opportunities, and a supportive community, which we feel offers a comprehensive solution for
                        traders at all stages of their journey.
                    </p>
                    <br/>
                    <p>
                        Here are a few reasons why many traders find BrightFunded to be an excellent choice:
                    </p>
                    <div className={style.list}>
                        <p className={style.list_item}>
                            1. <span>Educational Resources</span>: We offer a comprehensive Trading Academy with basic
                            and advanced video tutorials, along with a wide range of educational content related to
                            trading.
                        </p>
                        <p className={style.list_item}>
                            2. <span>Funded Trading Opportunities</span>: BrightFunded provides a platform for traders
                            to prove their skills and get access to funded trading accounts. This means you can trade
                            without risking your own capital.
                        </p>
                        <p className={style.list_item}>
                            3. <span>Transparency and Trust</span>: BrightFunded operates with full transparency,
                            maintaining clear communication and support throughout your trading journey.
                        </p>
                        <p className={style.list_item}>
                            4. <span>Trade2Earn Program</span>: With our unique Trade2Earn program, traders can earn
                            BrightFunded Tokens for every trade they make, unlocking exclusive trading perks and
                            potential future rewards.
                        </p>
                        <p className={style.list_item}>
                            5. <span>Supportive Community</span>: BrightFunded fosters a thriving trading community via
                            Discord and Telegram where traders can connect, share insights, and learn from each other.
                        </p>
                    </div>
                </>,
            },
        ]
    },
]
