"use client"; // Mark this file as a Client Component

import styles from "./page.module.css";

export default function Design() {
  return ( 
    <div className={styles.designContent}>
      <div className={styles.hey}> 
        <h1>היי!</h1>
      </div>
      <div className={styles.text}>
      <div className={styles.welcome}>
        ברוכימ.ות הבאימ.ות למדריך האישי שלך למוזיאון ישראל בירושלים
      </div>
        <br/>

        <div className={styles.intro}>
          דרך שאלון אינטראקטיבי של סרטונים נלמד להכיר אותך קצת יותר ונמליץ לך על מסלול מותאם אישית שמתאים בול בשבילך.
           שנתחיל?
           </div>
           <br/>
      </div>
      <div className={styles.login}>
          רק כמה פרטים קטנים לפני...
      </div>







    
    </div>
  );
}