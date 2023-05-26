import styles from '@/styles/player.module.css';
import icons from '@/styles/icons.module.css';

export default function PlayerPullUpDown({ ClosePlayer, ExpandPlayer, HideLibrary, isPlayerExpanded }) {

   // Handle what button to show depending on whether the player library is being shown
   let expandButton = isPlayerExpanded ?
      <span
         className={ `${icons["chevron-double-down"]} ${styles["fake-button"]}` }
         title="Hide library"
         onClick={ () => HideLibrary() }
      />
      :
      <span
         className={ `${icons["chevron-double-up"]} ${styles["fake-button"]}` }
         title="Show library"
         onClick={ () => ExpandPlayer() }
      />
   ;

   return (
      <div className={ styles["player-pull-up-down"] }>
         { expandButton }
         &nbsp;&nbsp;
         <span
            className={ `${icons["chevron-double-down"]} ${styles["fake-button"]}` }
            title="Hide player"
            onClick={ () => ClosePlayer() }
         />
      </div>
   );
}