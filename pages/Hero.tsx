import styles from "./hero.module.css";

const Hero = () => {
  return (
    <main className={styles.hero}>
      <div className={styles.left}>
        <p className={styles.subHeading}>Hi, Folks!</p>
        <h1 className={styles.heading}>
          Inovation Dedication and Sustainable Solution
        </h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur. Nisl donec tortor volutpat id
          pharetra ultricies mauris. Eget augue at egestas et consequat quis
          ultricies. At vel aenean posuere neque a fermentum donec eros ut.
          Nullam mi egestas sed facilisis.
        </p>
        <a href="#" className={styles.cta}>
          View Details
        </a>
      </div>
    </main>
  );
};

export default Hero;
