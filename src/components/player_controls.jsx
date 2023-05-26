import styles from '@/styles/player.module.css';
import icons from '@/styles/icons.module.css';

export default function PlayerControls({ ChangeVolume, ToggleMute, SkipPrevious, SkipNext, ToggleRepeat, ToggleShuffle, currentVolume, isMuted, isRepeat, isShuffle }) {
   
   // Calculate volume control value here to avoid warnings or errors from React
   const volumeSliderValue = isMuted ? 0 : currentVolume;

   return(
      <div className={ styles["player-controls"] }>
         <span
            className={ `${icons["rewind-circle-fill"]} ${styles["fake-button"]}` }
            title="Rewind this track / Play the previous track in the queue"
            onClick={ () => SkipPrevious() }
         />
         &nbsp;
         <span
            className={ `${icons["fast-forward-circle-fill"]} ${styles["fake-button"]}` }
            title="Play the next track in the queue"
            onClick={ () => SkipNext() }
         />
         &nbsp;
         <div className={ styles["sc-widget-wrapper"] }>
            <iframe
               id="sc-widget"
               allow="autoplay"
               src="https://w.soundcloud.com/player/?url=https%3A%2F%2Fsoundcloud.com%2Fdavid4jsus%2Ffan-the-flames-drftn-away-dvg-remix&amp;color=%231c1c1c&amp;inverse=false&amp;auto_play=false"
            />
         </div>
         &nbsp;
         <span
            className={ `${isRepeat ? icons["repeat-1"] : icons["repeat"]} ${styles["fake-button"]}` }
            title={ isRepeat ? "Repeat this track" : "Repeat mode is off" }
            onClick={ () => ToggleRepeat() }
         />
         &nbsp;
         <span
            className={ `${isShuffle ? icons["shuffle"] : icons["shuffle-disabled"]} ${styles["fake-button"]}` }
            title={ isShuffle ? "Shuffle the queue" : "Shuffle mode is off" }
            onClick={ () => ToggleShuffle() }
         />
         &nbsp;
         <span
            className={ `${isMuted ? icons["volume-mute-fill"] : icons["volume-up-fill"]} ${styles["fake-button"]}` }
            title={ isMuted ? "Muted" : "Unmuted" }
            onClick={ () => ToggleMute() }
         />
         &nbsp;
         <input
            type="range"
            min="0"
            max="100"
            value={ volumeSliderValue }
            onChange={ e => ChangeVolume(e.target.value) }
         />
      </div>
   );
}