import styles from '@/styles/player.module.css';
import PlayerLibraryList from './player_library_list';
import PlayerQueue from './player_queue';
import { useEffect } from 'react';

export default function PlayerLibrary({ PlayTrackInQueue, PlayAndAddToQueue, AddToQueue, RemoveFromQueue, LoadAlbumLibrary, queue, currentTrack, albums }) {

   /**
    * If album data hasn't been initialized yet, initialize it
    */
   useEffect(() => {

      // Check whether album data has been initialized
      if (!albums) {
         const InitAlbumData = async () => { // Async function in non async hook to fetch data
            await LoadAlbumLibrary();
         };
         InitAlbumData();
      }
   });

   return (
      <div className={ styles["player-library"] }>
         <PlayerLibraryList PlayAndAddToQueue={ PlayAndAddToQueue } AddToQueue={ AddToQueue } albums={ albums } />
         <PlayerQueue PlayTrackInQueue={ PlayTrackInQueue } RemoveFromQueue={ RemoveFromQueue } queue={ queue } currentTrack={ currentTrack } />
      </div>
   );
}