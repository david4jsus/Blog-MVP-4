import styles from '@/styles/player.module.css';
import PlayerInfo from './player_info';
import PlayerControls from './player_controls';
import PlayerPullUpDown from './player_pull_up_down';

export default function PlayerBar({ ClosePlayer, ExpandPlayer, HideLibrary, ChangeVolume, ToggleMute, SkipPrevious, SkipNext, ToggleRepeat, ToggleShuffle, isPlayerExpanded, activeClass, currentVolume, isMuted, isRepeat, isShuffle, currentTrack }) {
   return (
      <div className={ `${styles["player-bar"]} ${activeClass}` }>
         <PlayerInfo currentTrack={ currentTrack } />
         <PlayerControls ChangeVolume={ ChangeVolume } ToggleMute={ ToggleMute } SkipPrevious={ SkipPrevious } SkipNext={ SkipNext } ToggleRepeat={ ToggleRepeat } ToggleShuffle={ ToggleShuffle } currentVolume={ currentVolume } isMuted={ isMuted } isRepeat={ isRepeat } isShuffle={ isShuffle } />
         <PlayerPullUpDown ClosePlayer={ ClosePlayer } ExpandPlayer={ ExpandPlayer } HideLibrary={ HideLibrary } isPlayerExpanded={ isPlayerExpanded } />
      </div>
   );
}