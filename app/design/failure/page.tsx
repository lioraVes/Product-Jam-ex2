"use client"; // Mark this file as a Client Component

import styles from "./page.module.css";
import { useRouter } from "next/navigation";


export default function Failure({searchParams,}: {searchParams: { message: string };}) {

    const router = useRouter(); // Initialize the router

    const handleClick = () => {
      router.push("/design");
    };

    return ( 
    <div className={styles.designContent}>
      <div className={styles.hey}> 
         אופס, משהו לא עבד... 
      </div>
      <button className={styles.button} onClick={handleClick}>לנסות שוב</button>
       {/* Shapes container */}
       <div className={styles.shapesContainer}>
       <img src="/greenShape.svg" className={styles.shape1} alt="Shape 1" />
       <img src="/purpleShape.svg" className={styles.shape2} alt="Shape 2" />
       <div className={styles.shapeonshapecontainer}>
        <img src="/red_new.svg" className={styles.shape3} alt="Shape 3" />
        <img src="/green_new.svg" className={styles.shape4} alt="Shape 4" /> 
        </div>
      </div>
    </div>

  );
}