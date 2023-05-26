import Navigation from "./navigation"
import Search from "./search"
import styles from "@/styles/banner.module.css"

export default function Banner() {
   return (
      <>
         <div className={ styles.banner }>
            <Navigation />
            <Search />
         </div>
         <hr />
      </>
   );
}