import * as React from 'react';
import style from './Texts.module.scss';

export const Texts = () => {
  return (
    <div className={style.texts}>
      <div className={`container ${style.inner}`}>
        <div className={style.block}>
          <h3 className={style.title}>Our Mission</h3>
          <div className={style.textsWrapper}>
            <p className={style.description}>
              Welcome to <span>BrightFunded</span>, a leading prop trading firm
              that is revolutionizing the way traders engage in financial
              markets through the likes of <span>Trade2Earn</span>.
            </p>
            <div className={style.text}>
              <p>
                We are dedicated to creating a transparent and sustainable
                trading environment, empowering both aspiring and experienced
                traders to achieve their financial goals.
              </p>
              <br />
              <p>
                To ensure that we only onboard successful traders, we have
                implemented a fee based challenge model. Traders interested in
                joining our prop trading firm participate in a challenge,
                demonstrating their skills and potential for success. By
                charging challenge fees, we can carefully select and onboard
                traders who have proven their abilities, reducing the risk for
                both parties involved.
              </p>
              <br />
              <p>
                At BrightFunded, our vision is to democratize trading and
                provide equal opportunities for traders to succeed in the
                dynamic world of finance. We believe in transparency,
                innovation, and fostering a community of traders who share a
                passion for the markets. To this end, BrightFunded offers
                in-house educational trading content to ensure every trader gets
                the opportunity to excel in the financial markets.
              </p>
            </div>
          </div>
        </div>

        <div className={style.block}>
          <h3 className={style.title}>
            Meet <span>BrightFunded</span>
          </h3>
          <div className={style.textsWrapper}>
            <p className={style.description}>
              With a wealth of knowledge and a commitment to excellence, our
              team is dedicated to delivering the best trading experience for
              our clients.
            </p>
            <div className={style.text}>
              <p>
                Our team consists of seasoned professionals with diverse
                backgrounds. Our developers bring years of experience from
                renowned global tech companies such as Dell and IBM, as well as
                multinational banks. They possess a deep understanding of
                cutting-edge technologies and implement innovative solutions to
                optimize our trading infrastructure.
              </p>
              <br />
              <p>
                Additionally, our Board includes industry veterans who have
                worked with leading prop firms and central banks. Their
                expertise in the financial sector gives us a competitive edge in
                the market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
