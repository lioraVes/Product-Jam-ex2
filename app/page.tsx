import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
      <h2>Product Jam - Web Application</h2>
      <div className="home-logos">
          <Image src="/huji.svg" alt="Hebrew University Logo" width="80" height="80" priority/>
          <Image src="/bezalel.svg" alt="Bezalel Academy Logo" width="80" height="80" priority />
        </div>
      </div>
      <div className="home-content">
        <h3>This web application includes:</h3>
        <ul>
          <li>
            Part 1 - <Link href="/tic-tac-toe">Tic Tac Toe Game</Link>
          </li>
          <li>
            Part 2 - <Link href="/nasa">NASA API Data Fetching</Link>
          </li>
          <li>
            Part 3 - <Link href="/design">Design to Code</Link>
          </li>
        </ul>
        <p>Feel free to explore these sections using the links above or the navigation bar!</p>
      </div>
    </main>
  );
}
