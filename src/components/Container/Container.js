import { useState, useEffect } from 'react';
import Styles from './Container.module.css';

const Container = ({ children, temp }) => {
  const [className, setClassName] = useState(Styles.normal);
  console.log(className);

  useEffect(() => {
    if (temp <= -10) {
      setClassName(Styles.cold);
    } else if (temp > -10 && temp < 30) {
      setClassName(Styles.normal);
    } else if (temp >= 30) {
      setClassName(Styles.hot);
    }
  }, [temp]);

  return (
    <div className={`${className} ${Styles.container}`}>
      <header className={Styles.header}>
        <span className={Styles.logo}>WeatherOK</span>
      </header>
      <main className={Styles.main}>{children}</main>
      <footer className={Styles.footer}>
        <span className={Styles.footerText}>© 2021 🌤</span>
      </footer>
    </div>
  );
};

export default Container;
