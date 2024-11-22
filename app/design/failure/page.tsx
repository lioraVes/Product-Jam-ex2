"use client"; // Mark this file as a Client Component

import styles from "./page.module.css";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import the useRouter hook


export default function Failure({searchParams,}: {searchParams: { message: string };}) {
    const router = useRouter(); // Initialize the router
    const handleClick = () => {
      // If all validations pass, redirect to the success page
      router.push("/design");
    };
    return ( 
    <div className={styles.designContent}>
      <div className={styles.hey}> 
        <h1> אופס, משהו לא עבד... </h1>
      </div>
      <button className={styles.button} onClick={handleClick}>לנסות שוב</button>
       {/* Shapes container */}
       <div className={styles.shapesContainer}>
       <img src="/greenShape.svg" className={styles.shape1} alt="Shape 1" />
       <img src="/purpleShape.svg" className={styles.shape2} alt="Shape 2" />
       <img src="/red_new.svg" className={styles.shape3} alt="Shape 3" />
       <img src="/green_new.svg" className={styles.shape4} alt="Shape 4" />

      </div>
    </div>

  );
}