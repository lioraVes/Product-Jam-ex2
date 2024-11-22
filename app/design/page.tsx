"use client"; // Mark this file as a Client Component

import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Design() {
  const router = useRouter(); 

  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent form submission
    const emailInput = event.currentTarget.email;
    const passwordInput = event.currentTarget.password;

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Basic email validation regex
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailIsValid) {
      emailInput.placeholder = ":( אימייל לא תקין";
      emailInput.value = ""; 
      passwordInput.value = ""; 
      return;
    }

    if (password.length === 0) {
      passwordInput.placeholder = "Password required";
      passwordInput.value = "";  
      emailInput.value = ""; 
      return;
    }

    // If all validations pass, redirect to the success page
    router.push("/design/success");
  };

  return (
    <div className={styles.designContent}>
      <div className={styles.hey}>
        <h1>היי!</h1>
      </div>
      <div className={styles.text}>
        <div className={styles.welcome}>
          ברוכימ.ות הבאימ.ות למדריך האישי שלך למוזיאון ישראל בירושלים
        </div>
        <br />
        <div className={styles.intro}>
          דרך שאלון אינטראקטיבי של סרטונים נלמד להכיר אותך קצת יותר ונמליץ לך על
          מסלול מותאם אישית שמתאים בול בשבילך. שנתחיל?
        </div>
        <br />
      </div>
      <div className={styles.loginText}>רק כמה פרטים קטנים לפני...</div>

      {/* Add the moving shapes */}
      <div className={styles.movingShapes}>
        <img src="/purpleShape.svg" className={styles.shape1} alt="Shape 1" />
        <img src="/greenShape.svg" className={styles.shape2} alt="Shape 2" />
        <img src="/blueShape.svg" className={styles.shape3} alt="Shape 3" />
        <img src="/purpleShape.svg" className={styles.shape4} alt="Shape 4" />
        <div className={styles.shapeonshapecontainer}>
        <img src="/red_new.svg" className={styles.shape5} alt="Shape 5" />
        <img src="/green_new.svg" className={styles.shape6} alt="Shape 6" /> 
        </div>
      </div>

      <div>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <label htmlFor="email">
            <input name="email" placeholder="אימייל" onBlur={() => setEmailTouched(true)} 
              className={emailTouched ? styles.emailTouched : ""} required/>
          </label>

          <label htmlFor="password">
            <input type="password" name="password" placeholder="סיסמה" onBlur={() => setPasswordTouched(true)}
              className={passwordTouched ? styles.passwordTouched : ""} required />
          </label>
          <a> כבר יש לי חשבון</a>
          <button>בואו נתחיל!</button>
        </form>
      </div>
    </div>
  );
}
