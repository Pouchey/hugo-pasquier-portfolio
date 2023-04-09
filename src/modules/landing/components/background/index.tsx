import './style.css';

export default () => {
  return (
    <div className="landing__background">
      <div
        className="landing__background__image"
        style={{
          backgroundImage: `url(
            './assets/background.png')`,
        }}
      />
    </div>
  );
};
