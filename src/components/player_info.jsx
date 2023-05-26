import { useEffect, useState } from 'react';
import styles from '@/styles/player.module.css';
import Image from 'next/image';
import capi from '@/api/capi';

export default function PlayerInfo({ currentTrack }) {

   /**
    * Data about the album from which the current track is playing
    */
   const [album, SetAlbum] = useState(null);

   /**
    * Get the data about the album from which the current track is playing as soon as the component loads, and refetches when the current track changes
    */
   const trackAlbumTax = currentTrack && currentTrack["albums-tax"] ? currentTrack["albums-tax"][0] : null; // Keep hook dependency to the album taxonomy ID specifically
   useEffect(() => {
      const GetCurrentAlbum = async () => { // Async function in non async hook to fetch data
         if (trackAlbumTax) {
            let albumObj = await capi.GetAlbumByTax(trackAlbumTax);
            SetAlbum(albumObj);
         }
      }
      GetCurrentAlbum();
   }, [ trackAlbumTax ]);

   if (!currentTrack || !album) {
      return <div className={ styles["player-info"] }></div>;
   }
   return(
      <div className={ styles["player-info"] }>
         <div>
            <Image
               src={ album.album_featured_image[0] }
               alt={ capi.GetInnerText(album.title.rendered) }
               width={ 50 }
               height={ 50 }
            />
         </div>
         <div>
            <span dangerouslySetInnerHTML={{ __html: currentTrack.title.rendered }} />
            <br />
            <span dangerouslySetInnerHTML={{ __html: album.title.rendered }} />
         </div>
      </div>
   );
}