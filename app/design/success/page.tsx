"use client"; // Mark this file as a Client Component

import styles from "./page.module.css";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { useState } from "react";


export default function Success({searchParams,}: {searchParams: { message: string };}) {
    return ( 
    <div className={styles.designContent}>
      <div className={styles.hey}> 
        <h1> את.ה בפנים!</h1>
      </div>
      <div className={styles.svgContainer}>
        <img src="/blueShape.svg" className={`${styles.svgLayer} ${styles.layer1}`} alt="shape 1" />
        <img src="/purpleShape.svg" className={`${styles.svgLayer} ${styles.layer2}`} alt="shape 2" />
        <img src="/red_new.svg" className={`${styles.svgLayer} ${styles.layer3}`} alt="shape 3" />
        <img src="/green_new.svg" className={`${styles.svgLayer} ${styles.layer4}`} alt="shape 4" />

      </div>
      <br/>
      <button className={styles.button}>להתחיל את השאלון</button>
    </div>

  );
}