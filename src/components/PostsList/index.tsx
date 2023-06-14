import type { Post } from '@/libs/notion'
import { PostItem } from '@/components/atoms/PostItem'

type Props = {
  posts: Post[]
}

/**
 * ブログサイトの記事一覧を表示するコンポーネントです
 * @param {Object} props - コンポーネントのプロパティ
 * @param {Post[]} props.posts - 記事のデータの配列
 * @returns {JSX.Element} - 記事の一覧を表示する <div> 要素
 */
export const PostList = (props: Props) => {
  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5 mt-10 mb-10">
      {props.posts.map((post) => (
        <PostItem post={post} key={post.slug} />
      ))}
    </div>
  )
}
