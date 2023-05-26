import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/game_card.module.css';

export default function GameCard({ game }) {
   return (
      <div className={ styles["game-card"] }>
         <h3 dangerouslySetInnerHTML={{ __html: game.title.rendered }} />
         <Image src={ game.game_featured_image[0] } width={ 100 } height={ 100 } alt="Game cover" />
         <br />
         <p>Developer: { game.game_developer }</p>
         <p>Publisher: { game.game_publisher }</p>
         <p>Release Date: { game.game_release_date }</p>
         <Link href={ "/games/" + game.slug }>Go to game</Link>
      </div>
   );
}