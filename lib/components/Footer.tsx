import { COURSE_CREDITS } from "@/lib/config";
import { AuthAction } from "./AuthAction";

export default function Footer() {
  return (
    <footer>
      <p>
      ex2 by liora vesnovaty<AuthAction /> | {COURSE_CREDITS}
      </p>
    </footer>
  );
}
