import style from './newsContent.module.scss';
import img_1_0 from './imgs/1_0.jpg';
import img_1_1 from './imgs/1_1.jpg';
import img_2_0 from './imgs/2_0.jpg';
import img_3_0 from './imgs/3_0.jpg';
import img_3_1 from './imgs/3_1.jpg';
import * as React from 'react';

export interface ICard {
  id: number;
  tab: number;
  img: string;
  title: string;
  text: string;
  fullText: JSX.Element;
  date: string;
  similar: number[];
}

export const news: ICard[] = [
  {
    id: 1,
    tab: 6,
    img: img_1_0,
    title: 'Navigating the Landscape of Modern Prop Firm Trading',
    text: "In the world of finance and trading, proprietary firms or 'prop firms' have long held an undeniable allure...",
    date: '11 Mar, 2023',
    fullText: (
      <>
        <div className={style.block}>
          <div className={style.block_text}>
            <p>
              In the world of finance and trading, proprietary firms or 'prop
              firms' have long held an undeniable allure. Traditionally, they
              offered the opportunity for exceptional traders to maximize their
              earnings using the firm's capital. However, the landscape of prop
              firm trading has dramatically evolved in recent years, with new
              models opening up exciting opportunities for retail traders.
            </p>
          </div>
        </div>
        <div className={style.block}>
          <img src={img_1_0} alt='' className={style.img} />
        </div>
        <div className={style.block}>
          <p className={style.block_title}>
            The Transformation of Proprietary Trading
          </p>
          <div className={style.block_text}>
            <p>
              Proprietary trading was once an arena reserved for experienced,
              institutional traders who engaged in high-frequency trades,
              harnessing advanced algorithms and techniques beyond the reach of
              the average retail trader. Profits were made predominantly from
              the firm's own money rather than on behalf of clients.
            </p>
            <p>
              But the rise of technology brought with it a new breed of prop
              firms. BrightFunded stands at the forefront of this change,
              driving an approach that makes proprietary trading accessible to a
              wider audience.
            </p>
          </div>
        </div>

        <div className={style.block}>
          <p className={style.block_title}>
            The Emergence of Challenge-Based Prop Firms
          </p>
          <div className={style.block_text}>
            <p>
              BrightFunded, among a handful of other modern prop firms, has
              adopted a distinctive model that democratizes the trading
              landscape, making it more inclusive and accessible to a broader
              spectrum of traders. The heart of this new model is a
              challenge-based approach.
            </p>
            <p>
              The challenge, consisting of two phases, tests the trading skills
              of prospective traders in a thorough and rigorous manner. Those
              who navigate these stages successfully are awarded the privilege
              to trade using BrightFunded's capital.
            </p>
          </div>
        </div>

        <div className={style.block}>
          <p className={style.block_title}>
            Trade with Our Capital, Keep Your Profits
          </p>
          <div className={style.block_text}>
            <p>
              One of the standout features of firms like BrightFunded is the
              chance to trade using the firm's capital. This arrangement
              eliminates personal financial risk and opens up the possibility of
              earning far beyond what most traders could achieve using their own
              resources.
            </p>
            <p>
              Successful traders keep a significant portion of their profits,
              80-100%. It’s a win-win situation, with BrightFunded benefiting
              from the traders' skills and experience without taking on
              significant risks, as the trading guidelines ensure access to the
              firm's capital is given only to the most disciplined and
              competent.
            </p>
          </div>
        </div>

        <div className={style.block}>
          <img src={img_1_1} alt='' className={style.img} />
        </div>

        <div className={style.block}>
          <p className={style.block_title}>A Risk-Mitigated Environment</p>
          <div className={style.block_text}>
            <p>
              A strong emphasis on risk management is another hallmark of firms
              like BrightFunded. The firm's capital is protected through
              stringent risk management rules, while traders are afforded the
              chance to benefit from the volatility of financial markets. These
              guidelines are designed to prevent substantial losses and
              encourage traders to employ disciplined and consistent trading
              strategies.
            </p>
          </div>
        </div>

        <div className={style.block}>
          <p className={style.block_title}>Wrapping Up</p>
          <div className={style.block_text}>
            <p>
              The rise of challenge-based prop firms like BrightFunded signals a
              significant shift in the trading world. By opening up the
              traditionally exclusive domain of proprietary trading to a wider
              pool of talent, BrightFunded empowers retail traders, fostering a
              new era in the trading landscape.
            </p>
          </div>
        </div>
      </>
    ),
    similar: [2],
  },
  {
    id: 2,
    tab: 6,
    img: img_2_0,
    title:
      'Broker Trading vs. Prop Trading Firms: An Ideal Path for Every Trader',
    text: 'Aspiring traders have a critical decision to make when beginning their journey in the financial markets - to...',
    date: '12 Mar, 2023',
    fullText: (
      <>
        <div className={style.block}>
          <div className={style.block_text}>
            <p>
              Aspiring traders have a critical decision to make when beginning
              their journey in the financial markets - to trade through brokers
              or to join a Prop Trading Firm? Both pathways offer unique
              opportunities and come with their own set of rewards, risks, and
              requirements. Let's dive into these differences and understand why
              a growing number of traders are leaning towards prop trading
              firms.
            </p>
          </div>
        </div>

        <div className={style.block}>
          <img src={img_2_0} alt='' className={style.img} />
        </div>

        <div className={style.block}>
          <p className={style.block_title}>
            Broker Trading: The Traditional Way
          </p>
          <div className={style.block_text}>
            <p>
              Traditionally, most traders transact through brokers. Traders
              deposit their funds into a trading account and use this capital to
              trade various financial instruments. This straightforward method,
              however, exposes the trader to full financial risk. A rough
              trading day can lead to significant losses, often a deterrent for
              many, particularly beginners.
            </p>
          </div>
        </div>

        <div className={style.block}>
          <p className={style.block_title}>
            Prop Trading Firms: A Modern Approach
          </p>
          <div className={style.block_text}>
            <p>
              An alternative avenue introduced by Prop Trading Firms such as
              BrightFunded evolves this model. Instead of traders risking their
              personal funds, they are provided an opportunity to prove their
              trading skills through an evaluation process. Once they've proven
              their trading skills in the evaluation, they're granted the
              opportunity to trade using the firm’s resources.
            </p>
            <p>
              This innovative model distributes the risk between the trader and
              the firm, dramatically lowering the entry barriers and stress
              associated with potential loss of personal capital. It offers an
              attractive alternative for traders at all skill levels, from those
              making their first foray into trading to seasoned traders
              confident in their strategies.
            </p>
          </div>
        </div>

        <div className={style.block}>
          <p className={style.block_title}>The Crucial Differences</p>
          <div className={style.block_text}>
            <p>
              The main differences between broker trading and prop trading firms
              come down to risk involvement and entry requirements. With
              brokers, you risk your capital. With prop trading firms, you
              verify your trading skills to gain access to the firm’s capital,
              essentially transferring the risk onto the firm.
            </p>
          </div>
        </div>

        <div className={style.block}>
          <p className={style.block_title}>Conclusion</p>
          <div className={style.block_text}>
            <p>
              The choice between broker trading and prop trading firms is
              heavily influenced by individual circumstances, risk tolerance,
              and trading competency. Prop trading firms such as BrightFunded
              present a unique opportunity for traders of all skill levels to
              leverage their abilities without the constant threat of personal
              financial risk. No matter your chosen path, remember that
              financial trading always involves risk, and thorough due diligence
              is a crucial part of your trading journey.
            </p>
          </div>
        </div>
      </>
    ),
    similar: [1],
  },
  {
    id: 3,
    tab: 4,
    img: img_3_0,
    title: "BrightFunded's Trade2Earn: Transforming the Prop Trading Landscape",
    text: 'The prop trading world is ripe for innovation, and BrightFunded is at the forefront of this revolution. With...',
    date: '13 Mar, 2023',
    fullText: (
      <>
        <div className={style.block}>
          <div className={style.block_text}>
            <p>
              The prop trading world is ripe for innovation, and BrightFunded is
              at the forefront of this revolution. With the launch of its
              revolutionary Trade2Earn program, BrightFunded is challenging
              traditional prop trading norms.
            </p>
          </div>
        </div>

        <div className={style.block}>
          <img src={img_3_0} alt='' className={style.img} />
        </div>

        <div className={style.block}>
          <p className={style.block_title}>
            Reimagining Prop Trading with BrightFunded
          </p>
          <div className={style.block_text}>
            <p>
              At its core, BrightFunded is challenging the norm with a unique
              model of prop trading. Recognizing the diversity of traders, the
              firm uses a challenge-based approach to evaluate each trader's
              skills in real-world market scenarios, without the trader having
              to risk their own capital.
            </p>
          </div>
        </div>

        <div className={style.block}>
          <p className={style.block_title}>The Trade2Earn Difference</p>
          <div className={style.block_text}>
            <p>
              However, it's the groundbreaking Trade2Earn program that sets
              BrightFunded apart from other prop trading firms. This program is
              designed to reward traders for their activity and performance,
              instead of just their profits. With Trade2Earn, your trading
              volume counts, irrespective of the profitability of your trades.
            </p>
          </div>
        </div>

        <div className={style.block}>
          <p className={style.block_title}>
            BrightFunded Tokens: The Reward System
          </p>
          <div className={style.block_text}>
            <p>
              As part of the Trade2Earn program, BrightFunded issues tokens
              based on trading volume. These tokens, known as BrightFunded
              Tokens, can be earned during both the Challenge and Funded stages.
              Traders can then redeem these tokens for exclusive trading perks,
              providing a distinct edge in the market.
            </p>
          </div>
        </div>

        <div className={style.block}>
          <img src={img_3_1} alt='' className={style.img} />
        </div>

        <div className={style.block}>
          <p className={style.block_title}>
            Unlocking Trading Perks with BrightFunded
          </p>
          <div className={style.block_text}>
            <p>
              The perks of BrightFunded's Trade2Earn program are manifold. They
              include commission-free trading, lower profit targets during the
              Challenge phase, and unlimited trading days. These rewards,
              unlocked by BrightFunded Tokens, significantly enhance a trader's
              potential for success in the prop trading field.
            </p>
          </div>
        </div>

        <div className={style.block}>
          <p className={style.block_title}>
            BrightFunded: Building a Trading Community
          </p>
          <div className={style.block_text}>
            <p>
              Beyond Trade2Earn, BrightFunded fosters a strong trading
              community. This network comprises traders from diverse
              backgrounds, encouraging a culture of collaboration, learning, and
              mutual success in prop trading.
            </p>
          </div>
        </div>

        <div className={style.block}>
          <p className={style.block_title}>Conclusion</p>
          <div className={style.block_text}>
            <p>
              With its Trade2Earn program, BrightFunded is redefining the prop
              trading industry. By valuing consistent trading activity and
              offering unique benefits, BrightFunded is setting new standards in
              prop trading. The future of prop trading is here, and it's Bright!
            </p>
          </div>
        </div>
      </>
    ),
    similar: [],
  },
];

export const tabs = [
  {
    // 0
    label: 'View All',
    color: '',
    background: '',
  },
  {
    // 1
    label: 'Trading Psychology',
    color: '#C11574',
    background: 'rgba(193, 21, 116, 0.1)',
  },
  {
    // 2
    label: 'Trading Systems',
    color: '#3538CD',
    background: 'rgba(53, 56, 205, 0.1)',
  },
  {
    // 3
    label: 'Markets Weekly',
    color: '#C6430A',
    background: 'rgba(198, 67, 10, 0.1)',
  },
  {
    // 4
    label: 'Trading Updates',
    color: '#1A8CC9',
    background: 'rgba(26, 140, 201, 0.1)',
  },
  {
    // 5
    label: 'Instruments',
    color: '#DE8500',
    background: 'rgba(222, 133, 0, 0.1)',
  },
  {
    // 6
    label: 'Other',
    color: '#008B7D',
    background: 'rgba(0, 139, 125, 0.1)',
  },
];
