import { useCallback, useState } from 'react';
import style from './CookiesModal.module.scss';
import { HashLink } from 'react-router-hash-link';

const CookiesModal = () => {
  const getCookie = (name: string) => {
    var matches = document.cookie.match(
      new RegExp(
        '(?:^|; )' +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
          '=([^;]*)'
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };

  const [isCookiesAccepted, setCookiesAccepted] = useState(
    getCookie('isCookieAccepted')
  );

  const acceptCookie = useCallback(() => {
    document.cookie = 'isCookieAccepted=true';
    setCookiesAccepted('true');
  }, []);
  if (isCookiesAccepted !== 'true') {
    return (
      <div className={style.cookies}>
        <div className={style.cookies__text}>
          We use
          <HashLink
            to='/cookies'
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            smooth
          >
            cookies
          </HashLink>
          on this website to optimize your online experience.
        </div>
        <button onClick={acceptCookie} className={style.cookies__btn}>
          Accept
        </button>
      </div>
    );
  } else {
    return <></>;
  }
};

export default CookiesModal;
