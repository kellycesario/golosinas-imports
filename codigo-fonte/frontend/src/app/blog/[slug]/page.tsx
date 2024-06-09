import { Comment } from "@/atomic/components/molecules/Comment";
import { NewComment } from "@/atomic/components/molecules/NewComment";
import { ArticleExpanded } from "@/organisms/ArticleExpanded";
import { getEntry } from "@/api/contentful";
import styles from "./styles.module.scss";
import { auth } from "@/auth";
import { getPostComments } from "@/api/backend/controllers/comment";
import { Text } from "@/atoms/Text";

interface ArticleProps {
  params: { slug: string };
}

export default async function Article({ params }: ArticleProps) {
  const article = await getEntry("blogPost", params.slug);
  const session = await auth();

  const comments = await getPostComments(article.sys.id);

  const user = session?.user;

  console.log(article.sys.id);
  return (
    <main className={styles.article}>
      <ArticleExpanded
        title={article.title}
        author={article.author}
        dateOfPublication={article.dateOfPublication}
        image={article.image ? article.image.url : ""}
        content={article.content}
        slug={article.slug}
        alternativeText={article.alternativeText}
      />

      <section className={styles.article__comments}>
        {
          comments.map((comment) => {
            return (<Comment
              name={comment.author}
              comment={comment.content}
              user={user}
              userId=""
            />)
          })
        }
        {user ? (
          <NewComment user={user} />
        ) : (
          <Text
            align="left"
            children="Faça login para postar um novo comentário"
            weight="400"
            lineHeight="3.8rem"
            letterSpacing="0.015rem"
          />
        )}
      </section>
    </main>
  );
}
