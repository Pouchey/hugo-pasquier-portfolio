import Icon from '_components/icon';

import './style.css';

export default () => {
  return (
    <div className="resume__info__card">
      <div className="resume__info__card__header">
        <img src="./assets/sylvain.png" />
      </div>
      <div className="resume__info__card__content">
        <h1>Hugo Pasquier</h1>
        <h2>Game Developer</h2>
        <p>📍 Lyon</p>
        <p>✈️ Français / Anglais </p>
        <p>🚗 Permis B</p>
        <p>✉️ hugo.pasquier6@gmail.com</p>
      </div>
      <div className="resume__info__card__networks">
        <a href="https://www.linkedin.com/in/hugo-pasquier-7b6353202/">
          <Icon iconName="linkedin" size={32} color="#1e1e1e" />
        </a>
        <a href="mailto:hugo.pasquier6@gmail.com">
          <Icon iconName="mail" size={40} color="#1e1e1e" />
        </a>
        <a href="https://www.github.com/hugopasquier">
          <Icon iconName="github" size={32} color="#1e1e1e" />
        </a>
      </div>
    </div>
  );
};
