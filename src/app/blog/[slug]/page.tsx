import { MarkdownBlocks } from '@/components/MarkdownBlocks'
import { Tag } from '@/components/Tag'
import { getPost, getSlugs } from '@/libs/notion'
import type { PostAndBody } from '@/libs/notion'

type Props = {
  params: {
    slug: string
  }
}

// ダイナミックルーティングのためのパラメータを生成する
export const generateStaticParams = async () => {
  // すべての記事のスラッグ(擬似の記事ID)を取得する
  const slugs = await getSlugs()

  // /blog/[slug]のslugには記事のスラッグを渡す
  // 配列の数だけBlogDetailPageが生成される
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

const BlogDetailPage = async (props: Props) => {
  const post: PostAndBody | null = await getPost(props.params.slug)
  console.log(post)

  return post === null ? (
    <div>記事がありません</div>
  ) : (
    <div className="flex flex-col w-full border-gray-900 border p-3">
      <div className="flex flex-row justify-between">
        <div></div>
        <div className="">
          {post.tags.map((tag) => (
            <Tag name={tag} color="blue" key={tag} />
          ))}
        </div>
      </div>

      <h2 className="text-gray-900 text-4xl">{post.title}</h2>

      <div className="my-6 text-gray-900">
        <MarkdownBlocks body={post.body} />
      </div>

      <div className="flex flex-row justify-end">
        <div className="text-xl text-gray-900">{post.createdAt}</div>
      </div>
    </div>
  )
}

export default BlogDetailPage
