import styles from "@/styles/player.module.css";
import icons from "@/styles/icons.module.css";

export default function PlayerQueue({ PlayTrackInQueue, RemoveFromQueue, queue, currentTrack }) {
   
   // Create rows of tracks in the queue
   const trackTable = queue.map((track, i) =>
      // Display current track in the queue differently from the others
      i == currentTrack ?
      <div className={ styles["player-queue-track-current"] } key={ i }>
         <span
            className={ `${icons["play"]} ${styles["fake-button"]}` }
            title="Play track"
            onClick={ () => PlayTrackInQueue(i) }
         />
         &nbsp;{ i + 1 }.
         <span dangerouslySetInnerHTML={{ __html: track.title.rendered }}/>
         &nbsp;
         <span className={ styles["player-queue-track-right"] }>
            { track.track_length }&nbsp;
            <span
               className={ `${icons["x"]} ${styles["fake-button"]}` }
               title="Remove from the queue"
               onClick={ () => RemoveFromQueue(i) }
            />
         </span>
      </div>
      :
      // Alternate background colors for each row using different class names depending on whether the row is even or odd numbered
      <div className={ i % 2 == 0 ? styles["player-queue-track-even"] : styles["player-queue-track-odd"] } key={ i }>
         <span
            className={ `${icons["play"]} ${styles["fake-button"]}` }
            title="Play track"
            onClick={ () => PlayTrackInQueue(i) }
         />
         &nbsp;{ i + 1 }.
         <span dangerouslySetInnerHTML={{ __html: track.title.rendered }}/>
         &nbsp;
         <span className={ styles["player-queue-track-right"] }>
            { track.track_length }&nbsp;
            <span
               className={ `${icons["x"]} ${styles["fake-button"]}` }
               title="Remove from the queue"
               onClick={ () => RemoveFromQueue(i) }
            />
         </span>
      </div>
   );

   return (
      <div className={ styles["player-queue"] }>
         <h3>Player Queue</h3>
         <div>
            { queue !== undefined && queue !== null && queue.length > 0 ? trackTable : <></> }
         </div>
      </div>
   );
}