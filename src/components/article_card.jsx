import Link from 'next/link';
import styles from '@/styles/article_card.module.css';

export default function ArticleCard({ article }) {
   return (
      <div className={ styles["article-card"] }>
         <h3 dangerouslySetInnerHTML={{ __html: article.title.rendered }} />
         <p dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }} />
         <Link href={ "/articles/" + article.slug }>Read more...</Link>
      </div>
   );
}