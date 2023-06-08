import { getTags } from '@/libs/notion'
import Link from 'next/link'

export const TagsSidebar = async () => {
  const tags = await getTags()

  return (
    <div className="flex flex-col w-52">
      <div className="flex flex-row items-center bg-gray-900 py-2">
        <div className="w-2 h-9 bg-gray-600"></div>
        <h3 className="ml-2 text-gray-50 text-2xl">タグ一覧</h3>
      </div>
      <div className="border-gray-600 border px-2">
        {Object.entries(tags).map(([key, value]) => (
          <p className="text-gray-900 text-2xl py-2">
            <Link href={`/tag/${key}`}>
              {key} ({value})
            </Link>
          </p>
        ))}
      </div>
    </div>
  )
}
