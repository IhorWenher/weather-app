import Styles from './Container.module.css';

const Container = ({ children }) => {
  return (
    <div className={Styles.container}>
      <header className={Styles.header}>
        <span className={Styles.logo}>Weather header</span>
      </header>
      <main className={Styles.main}>{children}</main>
      <footer className={Styles.footer}>Weather footer</footer>
    </div>
  );
};

export default Container;
