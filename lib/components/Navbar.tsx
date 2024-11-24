import Link from "next/link";
import { APP_NAME, COURSE_GITHUB, DEMOS_ENABLED } from "../config";

export default function Navbar() {
  return (
    <header id="navbar" >
      <h1>
        <Link href="/">{APP_NAME}</Link>
      </h1>
      <nav>
        <Link href ="/tic-tac-toe">TicTacToe </Link>
        <Link href ="/nasa">Nasa API</Link>
        <Link href ="/design">Design to Code</Link>
        <Link href="/design/failure">Failure</Link>
      </nav>
    </header>
  );
}
