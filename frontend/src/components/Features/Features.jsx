import React from "react";

import styles from "./Features.module.css";
import { getImageUrl } from "../../utils";

export const Features = () => {
  return (
    <section className={styles.container} id="features">
      <h2 className={styles.title}>Features</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("features/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.featuresImage}
        />
        <ul className={styles.featuresItems}>
          <li className={styles.featuresItem}>
            <img src={getImageUrl("features/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.featuresItemText}>
              <h3>Edit / Upload</h3>
              <p>
                Enrollment officers can easily upload and edit student documents, 
                ensuring accurate and up-to-date records for a streamlined enrollment process.
              </p>
            </div>
          </li>
          <li className={styles.featuresItem}>
            <img src={getImageUrl("features/serverIcon.png")} alt="Server icon" />
            <div className={styles.featuresItemText}>
              <h3>Database Security</h3>
              <p>
                The centralized database includes robust security measures like role-based access,
                protecting sensitive student information and maintaining privacy.
              </p>
            </div>
          </li>
          <li className={styles.featuresItem}>
            <img src={getImageUrl("features/bellIcon.png")} alt="UI icon" />
            <div className={styles.featuresItemText}>
              <h3>Notifications</h3>
              <p>
                 Automated alerts notify officers of any missing or incomplete documents,
                 facilitating timely communication and helping to keep the enrollment process on track.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
