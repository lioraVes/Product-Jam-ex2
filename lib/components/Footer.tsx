import { COURSE_CREDITS } from "@/lib/config";
import { AuthAction } from "./AuthAction";

export default function Footer() {
  return (
    <footer>
      <p>
      ex2 by Liora Vesnovaty<br/>
      design-to-code designed by Noga Aloni<br/>
      <AuthAction /> {COURSE_CREDITS}
      </p>
    </footer>
  );
}
