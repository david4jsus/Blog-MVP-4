import { useRouter } from "next/router";
import styles from "@/styles/banner.module.css"
import icons from "@/styles/icons.module.css"

export default function Search() {

   /**
    * Use the Next.js router to launch the search page
    */
   const router = useRouter();

   /**
    * Check that there is text in the search box, and search for that content if there is
    */
   const SearchButton = () => {

      
      // Get the text in the search bar
      const searchString = document.getElementById("search").value.trim();

      // Verify that the search text is not empty
      if (searchString && searchString != "") {

         // Send data to search page
         router.push("/search?string=" + encodeURI(searchString));
      }
   }

   return (
      <div className={ styles.search }>
         <input type="search" placeholder="Search in articles" aria-label="Search in articles" id="search" />
         &nbsp;
         <button title="Search in articles" onClick={ () => SearchButton() }><span className={ icons.search } /></button>
      </div>
   );
}