import React, { FunctionComponent } from "react";

import NewsIcon from "./assets/icon-news.svg";

import styles from "./Newsletter.module.scss";

export interface NewsletterProps {
  data: NewsletterData;
}

export interface NewsletterData {
  action: string;
  method: "get" | "post";
  emailFieldName: string;
  firstNameFieldName: string;
  submitButtonName: string;
  serviceName: string;
  tosURL: string;
  privacyPolicyURL: string;
}

export const Newsletter: FunctionComponent<NewsletterProps> = ({ data }) => {
  const {
    action,
    method,
    emailFieldName,
    firstNameFieldName,
    submitButtonName,
    tosURL,
    privacyPolicyURL,
    serviceName,
  } = data;

  return (
    <div className={styles.newsWrapper}>
      <div className="container padding-vert--lg">
        <NewsIcon className={styles.newsIcon} />
        <h2>Подпишитесь на рассылочку</h2>
        <p>Получение последнего контента на электропочту. Отписаться можно в любое время.</p>

        <form
          action={action}
          className={styles.form}
          method={method}
          target="_blank"
        >
          <input
            name={emailFieldName}
            placeholder="Ваша почта"
            type="email"
            required
          />
          <input name={firstNameFieldName} placeholder="Ваше имя" />
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_4ed0fd1909674fddee53ac3e7_dfdcae99f5"
              tabIndex={-1}
              value=""
            />
          </div>
          <button
            type="submit"
            name={submitButtonName}
            className="button button--primary"
          >
            Подписаться
          </button>
        </form>
        <div className={styles.formFooter}>
        Подписываясь на рассылку, вы соглашаетесь с {serviceName}’s{" "}
          <a target="_blank" href={tosURL}>
          Условиями предоставления услуг
          </a>{" "}
          и{" "}
          <a target="_blank" href={privacyPolicyURL}>
          Политикой конфиденциальности
          </a>
          .
        </div>
      </div>
    </div>
  );
};
