import './style.css';

export default () => {
  return (
    <div className="landing__background">
      <div
        className="landing__background__image"
        style={{
          backgroundImage: `url(
            './assets/test.png')`,
        }}
      />
    </div>
  );
};
