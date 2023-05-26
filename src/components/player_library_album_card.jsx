import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/player.module.css";
import icons from "@/styles/icons.module.css";
import capi from "@/api/capi";

export default function PlayerLibraryAlbumCard({ PlayTrack, AddToQueue, album })
{
   /**
    * Array of track data related to the given album
    */
   const [tracks, SetTracks] = useState([]);

   /**
    * Initialize list of tracks related to the given album
    */
   useEffect(() => {
      const GetTracks = async () => { // Async function in a non async hook to fetch data
         const trackList = await capi.GetTracksByTax(album["albums-tax"][0]);
         SetTracks(trackList);
      }
      GetTracks();
   }, [album]);

   // Create rows of track data
   const trackTable = tracks.map((track, i) => {
      return (
         <div
            key={ i }
            className={ i % 2 == 0 ? styles["player-library-album-card-track-even"] : styles["player-library-album-card-track-odd"] }
         >
            <span
               className={ `${icons["play"]} ${styles["fake-button"]}` }
               title="Play track"
               onClick={ () => PlayTrack(track.id) }
            />
            &nbsp;{ i + 1 }.&nbsp;
            <span
               dangerouslySetInnerHTML={{ __html: track.title.rendered }}
            />
            &nbsp;
            <span className={ styles["player-library-album-card-track-right"] }>
               { track.track_length }&nbsp;
               <span
                  className={ `${icons["plus"]} ${styles["fake-button"]}` }
                  title="Add to queue"
                  onClick={ () => AddToQueue(track.id) }
               />
            </span>
         </div>
      );
   });

   return (
      <div className={ styles["player-library-album-card"] }>
         <div className={ styles["player-library-album-card-title"] }>
            <Image
               src={ album.album_featured_image[0] }
               alt={ capi.GetInnerText(album.title.rendered) }
               width={ 100 }
               height={ 100 }
            />
            <div>
               <span
                  className={ styles["player-library-album-card-title-name"] }
                  dangerouslySetInnerHTML={{ __html: album.title.rendered }}
               />
               <span className={ styles["player-library-album-card-title-game"] }>
                  Inspired by the game <i dangerouslySetInnerHTML={{ __html: album.album_game_name }} />
               </span>
            </div>
         </div>
         <div>
            { trackTable }
         </div>
      </div>
   );
}