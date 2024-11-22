import styles from "./page.module.css";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default function Design({searchParams,}: {searchParams: { message: string };}) {
  
  const signIn = async (formData: FormData) => {
    "use server";
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { error } = await supabase.auth.signInWithPassword({
      email, password, });
    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }
    return redirect("/");
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
        <img src="/redShape.svg" className={styles.shape1} alt="Shape 1" />
        <img  src="/blueShape.svg" className={styles.shape2} alt="Shape 2" />
        <img src="/greenShape.svg"  className={styles.shape3} alt="Shape 3" />    
        <img src="/purpleShape.svg" className={styles.shape4}  alt="Shape 4" />
      </div>

      <div>
      <form className={styles.loginForm} action={signIn}>
        <label htmlFor="email">
         <input name="email" placeholder="אימייל" required />
        </label>

        <label htmlFor="password">
          <input type="password" name="password" placeholder="סיסמה" required />
        </label>
        <a> כבר יש לי חשבון</a>
        <button>בואו נתחיל!</button>
        {/* <button formAction={signUp}>Sign Up</button> */}
        {searchParams?.message && (
          <p className={styles.errorMessage}>{searchParams.message}</p>
        )}
      </form>
      </div>







    
    </div>
  );
}