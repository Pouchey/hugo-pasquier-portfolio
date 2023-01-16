import Icon from '_components/icon';
import Reveal from '_components/reveal';

import './style.css';

export default () => {
  return (
    <Reveal type="fadeInUp" threshold={0.5} className="landing-footer">
      <a
        href="https://www.github.com/hugopasquier"
        target="_blank"
        rel="noreferrer"
        className="landing-footer-link"
      >
        <Icon iconName="github" size={32} color="#fff" />
      </a>
      <a href="mailto:hugo.pasquier6@gmail.com" className="landing-footer-link">
        <Icon iconName="mail" size={40} color="#fff" />
      </a>
      <a
        href="https://www.linkedin.com/in/hugo-pasquier-7b6353202/"
        target="_blank"
        rel="noreferrer"
        className="landing-footer-link"
      >
        <Icon iconName="linkedin" size={32} color="#fff" />
      </a>



    </Reveal>
  );
};
