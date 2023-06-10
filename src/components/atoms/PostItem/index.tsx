import type { Post } from '@/libs/notion'
import { PostTitle } from '@/components/atoms/PostTitle'
import { PostDescription } from '@/components/atoms/PostDescription'
import { PostReadButton } from '@/components/atoms/PostReadButton'
import { PostThumbnail } from '@/components/atoms/PostThumbnail'

type Props = {
  post: Post
}

/**
 * ブログ一覧の各記事の概要を表示するコンポーネントです
 *
 * @param {Props} props - コンポーネントのプロパティ
 * @param {Post} props.post - 記事のデータ
 * @returns {JSX.Element} - 記事の概要を表する <section> 要素
 */
export const PostItem = (props: Props) => {
  return (
    <section className="flex flex-col justify-center w-80 text-gray-900">
      {/* 記事のサムネイル */}
      <PostThumbnail
        imageSrc={'/image.jpg'}
        categoryName={''}
        createdAt={props.post.createdAt}
      />

      {/* 記事の概要 */}
      <div className="flex flex-col justify-center">
        <PostTitle title={props.post.title} />
        <PostDescription description={props.post.description} />
        <PostReadButton name="記事を読む" href={`/blog/${props.post.slug}`} />
      </div>
    </section>
  )
}
