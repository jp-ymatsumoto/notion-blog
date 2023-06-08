import { Client } from '@notionhq/client'

export type Post = {
  title: string
  description: string
  tags: string[]
  slug: string
  createdAt: string
  updatedAt: string
}

const notion = new Client({
  auth: process.env.NOTION_TOKEN as string,
})

// すべてのブログ記事を生データで取得する
const getPostsRawData = async () => {
  return await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
    // 公開フラグがtrueのブログ記事だけ取得する
    filter: {
      property: 'published',
      checkbox: {
        equals: true,
      },
    },
    // 作成日時の降順で取得する
    sorts: [
      {
        property: 'createdAt',
        direction: 'descending',
      },
    ],
  })
}

// ブログ記事の生データから必要なプロパティを抽出する
const getPostProperties: (post: any) => Post = (post) => {
  return {
    title: post.properties.title.title[0].plain_text,
    description: post.properties.description.rich_text[0].plain_text,
    tags: post.properties.tags.multi_select.map((tag: any) => tag.name),
    slug: post.properties.slug.formula.string,
    createdAt: post.properties.createdAt.created_time,
    updatedAt: post.properties.updatedAt.last_edited_time,
  }
}

// すべてのブログ記事のタグ名とタグ数を取得する
export const getTags = async () => {
  const rawPosts = await getPostsRawData()
  const posts: Post[] = rawPosts.results.map((post) => getPostProperties(post))
  const rawTags = posts.map((post) => post.tags)
  const flatTags = rawTags.flat()

  let tags: { [key: string]: number } = {}
  flatTags.forEach((tag: string) => {
    if (tag in tags) {
      tags[tag]++
    } else {
      tags[tag] = 1
    }
  })

  return tags
}
