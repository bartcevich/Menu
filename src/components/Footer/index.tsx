"use client";
import styles from "./styles.module.scss";
import Link from "next/link";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { px } from "framer-motion";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.navigation}>
        <p>О САЙТЕ</p>
        <div>
          <p>СОВЕТЫ НУТРИЦИОЛОГА</p>
          <ul>
            <li>
              <Link href="/programs">Витамины - какие, когда и сколько?</Link>
            </li>
            <li>
              <a href="/">О чём молчат анализы?</a>
            </li>
            <li>
              <a href="/">Диеты - мифы и реальность?</a>
            </li>
          </ul>
        </div>

        <div>
          <p>ПОЛЕЗНЫЕ СТАТЬИ</p>
          <ul>
            <li>
              <Link href="/programs">правильное питание</Link>
            </li>
            <li>
              <a href="/">организация пространства на кухне</a>
            </li>
            <li>
              <a href="/">лайфхаки по хранению продуктов</a>
            </li>
            <li>
              <a href="/">советы по выбору продуктов</a>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.text}>
        <h3 className={styles.textH3}>Есть вопросы? Хотите создать сайт?</h3>
        <div className={styles.icon}>
          <h3 className={styles.textH3}>Свяжитесь с разработчиком:</h3>
          <a className={styles.telegram} href="https://t.me/elektrikcss">
            <span className={styles.tooltip}>Telegram</span>
            <i
              className={styles.faGithub}
              aria-hidden="true"
              title="Andrei Bartsevich, Telegram"
            >
              <FontAwesomeIcon icon={faTelegram} />
            </i>
          </a>
          <a
            className={styles.linkedin}
            href="https://www.linkedin.com/in/андрей-барцевич-935588260"
          >
            <span className={styles.tooltip}>Linkedin</span>
            <i
              className="fa-brands fa-linkedin"
              aria-hidden="true"
              title="Andrei Bartsevich, LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </i>
          </a>
          <a className={styles.github} href="https://t.me/elektrikcss">
            <span className={styles.tooltip}>Github</span>
            <i
              className={styles.faGithub}
              aria-hidden="true"
              title="Prime99, Telegram"
            >
              <FontAwesomeIcon icon={faGithub} />
            </i>
          </a>
          {/* <a className={styles.instagram} href="#">
            <span className={styles.tooltip}>Instagram</span>
            <i
              className="fa-brands fa-instagram"
              aria-hidden="true"
              title="Prime99, WhatApp"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </i>
          </a> */}
        </div>
      </section>
    </div>
  );
}
