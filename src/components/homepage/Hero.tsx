import clsx from "clsx";
import React, { FunctionComponent } from "react";

import styles from "./Hero.module.scss";

export const Hero: FunctionComponent = () => {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title", styles.title)}>
          Привет. Я <span className={styles.highlighted}>Роман Грудов</span>,
          <br />
          редактор LIVE GAMING.
        </h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          SMMщик-программист, интересующийся всем подряд.
        </p>
      </div>
    </header>
  );
};
