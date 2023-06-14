import { Pagination } from '@/components/Organisms/Pagination'
import { PostList } from '@/components/PostsList'
import type { Post } from '@/libs/notion'
import { getPosts } from '@/libs/notion'

const TopPage = async () => {
  const posts: Post[] = await getPosts()

  return (
    <div className="container mx-auto mt-5 mb-10 lg:max-w-5xl ">
      {/* スマートフォン画面 */}
      <main className="flex flex-col justify-center">
        <PostList posts={posts} />

        <Pagination totalPages={6} currentPage={1} />
      </main>
      {/* タブレット画面 */}
    </div>
  )
}

export default TopPage
