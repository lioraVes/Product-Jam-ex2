"use client"; // Mark this file as a Client Component

import styles from "./page.module.css";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import the useRouter hook


export default function Design({searchParams,}: {searchParams: { message: string };}) {
  const router = useRouter(); // Initialize the router

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
      emailInput.value = ""; // Clear input field
      passwordInput.value=""; // Clear password field
      return;
    } 

    if (password.length === 0) {
      passwordInput.placeholder = "Password required";
      passwordInput.value = ""; // Clear input field
      emailInput.value = ""; // Clear input field
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
      <br/>
      <div className={styles.intro}>
      דרך שאלון אינטראקטיבי של סרטונים נלמד להכיר אותך קצת יותר ונמליץ לך על מסלול מותאם אישית שמתאים בול בשבילך.
        שנתחיל?
      </div>
      <br/>
      </div>
      <div className={styles.loginText}>
      רק כמה פרטים קטנים לפני...
      </div>


      {/* Add the moving shapes */}
      <div className={styles.movingShapes}>
        <img src="/purpleShape.svg" className={styles.shape1}  alt="Shape 1" />
        <img src="/greenShape.svg" className={styles.shape2}  alt="Shape 2" />
        <img src="/blueShape.svg" className={styles.shape3}  alt="Shape 3" />
        <img src="/purpleShape.svg" className={styles.shape4}  alt="Shape 4" />
        <img src="/red_new.svg" className={styles.shape5} alt="Shape 5" />
        <img src="/green_new.svg" className={styles.shape6} alt="Shape 6" />
      </div>

      <div>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <label htmlFor="email">
         <input  name="email" placeholder="אימייל" required />
        </label>

        <label htmlFor="password">
          <input type="password" name="password" placeholder="סיסמה" required />
        </label>
        <a> כבר יש לי חשבון</a>
        <button>בואו נתחיל!</button>

        {searchParams?.message && (
          <p className={styles.errorMessage}>{searchParams.message}</p>
        )}
      </form>
      </div>







    
    </div>
  );
}