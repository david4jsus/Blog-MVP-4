import Link from "next/link";

export default function Navigation() {
   return(
      <div>
         <span>
            <Link href="/">Home</Link>
            &nbsp;|&nbsp;
            <Link href="/about">About</Link>
            &nbsp;|&nbsp;
            <Link href="/articles">Articles</Link>
            &nbsp;|&nbsp;
            <Link href="/games">Games</Link>
         </span>
      </div>
   );
}