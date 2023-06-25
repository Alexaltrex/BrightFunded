import * as React from 'react';
import style from './Footer.module.scss';
import { svgIcons } from '../../assets/svgIcons';
import { Link } from 'react-router-dom';
import { socialLinks } from '../A0_App/socialLinks';
import { texts } from './texts';
import clsx from 'clsx';
import { useRef, useState } from 'react';
import { Collapse } from '@mui/material';
import { HashLink } from 'react-router-hash-link';

const links = [
  { label: 'Privacy Policy', to: '/policy#policy-top' },
  { label: 'Terms & Conditions', to: '/terms#terms-top' },
  { label: 'Affiliate Program', to: '/affiliate#top' },
  { label: 'FAQ', to: '/faq#faq-top' },
  { label: 'Contact', to: '/contact#contact-top' },
  { label: 'Careers', to: '/career#career-top' },
  { label: 'Blog', to: '/blog#blog-top' },
];

export const Footer = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null!);

  const onExpand = () => {
    setOpen(!open);
    //ref.current.scrollIntoView({ behavior: "smooth" });
    if (!open) {
      setTimeout(() => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <>
      <footer className={style.footer}>
        <div className={style.top}>
          <div className={`container ${style.inner}`}>
            <Link className={style.logo} to='/'>
              {svgIcons.logo}
            </Link>

            <nav className={style.linksMobile}>
              <div className={style.column}>
                {[links[0], links[1], links[2], links[3]].map(
                  ({ label, to }, key) => (
                    <HashLink key={key} to={to} className={style.link} smooth>
                      {label}
                    </HashLink>
                  )
                )}
              </div>
              <div className={style.column}>
                {[links[4], links[5], links[6]].map(({ label, to }, key) => (
                  <HashLink key={key} to={to} className={style.link} smooth>
                    {label}
                  </HashLink>
                ))}
              </div>
            </nav>

            <nav className={style.linksDesktop}>
              {links.map(({ label, to }, key) => (
                <HashLink key={key} to={to} className={style.link} smooth>
                  {label}
                </HashLink>
              ))}
            </nav>
          </div>
        </div>

        <div className={style.bottom}>
          <div className={`container ${style.inner}`}>
            <nav className={style.socialLinks}>
              {socialLinks.map(({ icon, href }, key) => (
                <a
                  key={key}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer nofollow'
                  className={style.link}
                >
                  {icon}
                </a>
              ))}
            </nav>

            <p className={style.text}>© 2023 BrightFunded</p>
          </div>
        </div>

        <div className={style.rightsBlock}>
          <div className={`container ${style.inner}`}>
            <div className={style.rightsBlock_top}>
              <p className={style.text}>{texts[0]}</p>
              <button
                className={clsx({
                  [style.expandBtn]: true,
                  [style.expandBtn_open]: open,
                })}
                onClick={onExpand}
              >
                {svgIcons.arrow_down2}
              </button>
            </div>

            <Collapse in={open} timeout={300}>
              <p className={clsx(style.text, style.text_1)}>{texts[1]}</p>
            </Collapse>
          </div>
        </div>
      </footer>

      <div ref={ref} />
    </>
  );
};
