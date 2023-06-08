import { TagsSidebar } from '@/components/TagsSidebar'

type Props = {
  children: React.ReactNode
}

const BlogDetailPageLayout = (props: Props) => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row mt-4 mb-4 w-full gap-3 mx-4">
        <main className="flex-auto">{props.children}</main>
        <div>
          {/* TODO: エラーを確認する */}
          <TagsSidebar />
        </div>
      </div>
    </div>
  )
}

export default BlogDetailPageLayout
