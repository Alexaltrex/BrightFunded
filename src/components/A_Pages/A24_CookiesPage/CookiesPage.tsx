import * as React from 'react';
import style from './CookiesPage.module.scss';
import { content } from './content';
import clsx from 'clsx';

const CookiesPage = () => {
  return (
    <div className={style.privacyPolicyPage} id='policy-top'>
      <h2 className={style.title}>
        <div className={`container ${style.inner}`}>
          <p>Cookies Policy</p>
        </div>
      </h2>

      <div className={style.card}>
        <div className={`container ${style.inner}`}>
          <div className={style.updated}>Last updated: June 23, 2023</div>
          {content.map(({ title, text, list }, key) => (
            <div className={style.block} key={key}>
              <div className={style.block_title}>
                {/* <p>{`${key + 1}.`}</p> */}
                <p></p>
                <p>{title}</p>
              </div>

              <div className={style.block_text}>{text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CookiesPage;
