import './style.css';

export default () => {
  return (
    <div className="resume__common__container">
      <h1>Diplômes</h1>
      <div className="resume__school__container">
        <div className="resume__school__list">
          <div className="wrapper">
            <p>2022/2023</p>
            <div className="content">
              <p>Master 2 Informatique - Ingénierie du Jeu Vidéo</p>
              <p>Gamagora - Université Lyon 2</p>
            </div>
          </div>

          <div className="wrapper">
            <p>2021/2022</p>
            <div className="content">
              <p>Master 1 Informatique - Informatique pour l'image et son</p>
              <p>
                Université de Bordeaux <span>Rang 19/122</span>
              </p>
            </div>
          </div>

          <div className="wrapper">
            <p>2018/2021</p>
            <div className="content">
              <p>Licence Informatique - Mention Bien</p>
              <p>
                Université de Poitiers <span>Rang 7/72</span>
              </p>
            </div>
          </div>

          <div className="wrapper">
            <p>2018</p>
            <div className="content">
              <p>Baccalauréat Scientifique - Mention Assez Bien</p>
              <p>
                Lycée Camille Guérin, Poitiers <span>Spé Maths</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
