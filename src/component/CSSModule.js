import styles from "../styles/CSSModule.module.css";

const CSSModule = () => {
  return (
    <div>
      <h1>14. CSSModule</h1>
      <div className={`${styles.wrapper} ${styles.inverted}`}>
        안녕하세요, 저는 <span className="something">CSS Module!</span>
      </div>
    </div>
  );
};

export default CSSModule;
