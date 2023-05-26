import icons from '@/styles/icons.module.css';
import styles from '@/styles/player.module.css';

export default function PlayerCard({ OpenPlayer, activeClass }) {
   return (
      <div
         className={ `${styles["player-card"]} ${styles["fake-button"]} ${activeClass}` }
         onClick={ () => OpenPlayer() }
      >
         <span className={ icons["music-note-beamed"] }></span>
      </div>
   );
}