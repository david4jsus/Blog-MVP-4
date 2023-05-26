import { useEffect, useState } from "react";
import PlayerLibraryAlbumCard from "./player_library_album_card";
import capi from "@/api/capi";

export default function PlayerLibraryList({ PlayAndAddToQueue, AddToQueue, albums }) {
   
   // /**
   //  * Data about the player library
   //  */
   // const [albumLibrary, SetAlbumLibrary] = useState([]);

   // /**
   //  * Initialize album library
   //  */
   // useEffect(() => {
   //    const GetAlbums = async () => { // Async function in non async hook to fetch data
   //       const albumList = await capi.GetListOfAlbums();
   //       SetAlbumLibrary(albumList);
   //    }
   //    GetAlbums();
   // }, []); // Empty dependecy list to run hook on component mount only, not on component update

   // // Check for no library data
   // if (!albumLibrary || !albumLibrary.length) {
   //    return <div>NO DATA FOUND || Loading...</div>;
   // }

   if (!albums) {
      return <div>LOADING...</div>
   } else if (albums.length < 1) {
      return <div>NO DATA FOUND</div>
   }

   // Create a list of components that will be displayed as the list of available albums in the library
   let libraryList = albums.map((album, i) =>
      <PlayerLibraryAlbumCard key={ i } PlayTrack={ PlayAndAddToQueue } AddToQueue={ AddToQueue } album={ album } />
   );

   return(
      <div>
         { libraryList }
      </div>
   );
}