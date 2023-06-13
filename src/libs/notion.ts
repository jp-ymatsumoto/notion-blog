import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'

export type Post = {
  cover: string | null
  title: string
  description: string
  category: string
  tags: string[]
  slug: string
  createdAt: string
  updatedAt: string
}

export type PostAndBody = Post & {
  body: string
}

const notion = new Client({
  auth: process.env.NOTION_TOKEN as string,
})

const n2m = new NotionToMarkdown({ notionClient: notion })

const PAGE_SIZE = 2

const queryObject = {
  // 公開フラグがtrueのブログ記事だけ取得する
  filterPublished: {
    property: 'published',
    checkbox: {
      equals: true,
    },
  },
  // 作成日時の降順で取得する
  sortsCreatedAt: [
    {
      property: 'createdAt',
      direction: 'descending' as 'descending' | 'ascending',
    },
  ],
}

// すべてのブログ記事を生データで取得する
const getPostsRawData = async () => {
  return await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
    filter: queryObject.filterPublished,
    sorts: queryObject.sortsCreatedAt,
  })
}

// 一覧ページのブログ記事を生データで取得する
export const getPostsDataPagination = async (
  pageSize: number = 2,
  startCursor: string | undefined = undefined
) => {
  const rawPosts = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
    page_size: pageSize,
    start_cursor: startCursor,
    filter: queryObject.filterPublished,
    sorts: queryObject.sortsCreatedAt,
  })

  const posts = rawPosts.results.map((post) => getPostProperties(post))
  return posts
}

// 特定のブログ記事の生データを取得する
const getPostRawData = async (slug: string) => {
  return await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
    // 公開フラグがtrueのブログ記事だけ取得する
    filter: {
      property: 'slug',
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  })
}

// ブログ記事の生データから必要なプロパティを抽出する
const getPostProperties: (post: any) => Post = (post) => {
  return {
    cover: post.cover === null ? null : post.cover.external.url,
    title: post.properties.title.title[0].plain_text,
    description: post.properties.description.rich_text[0].plain_text,
    category: post.properties.category.select.name,
    tags: post.properties.tags.multi_select.map((tag: any) => tag.name),
    slug: post.properties.slug.formula.string,
    createdAt: post.properties.createdAt.created_time,
    updatedAt: post.properties.updatedAt.last_edited_time,
  }
}

// ブログ記事の生データからスラッグを抽出する
const getPostPropertySlug: (post: any) => { slug: string } = (post) => {
  return {
    slug: post.properties.slug.formula.string,
  }
}

// すべてのブログ記事を取得する
export const getPosts = async () => {
  const rawPosts = await getPostsRawData()
  const posts: Post[] = rawPosts.results.map((post) => getPostProperties(post))
  return posts
}

// ブログ記事を取得する
export const getPost = async (slug: string) => {
  const rawPost = await getPostRawData(slug)
  if (rawPost.results.length === 1) {
    const post: Post = getPostProperties(rawPost.results[0])

    // Notionの記事IDで本文のMarkdownを取得する
    const mdBlocks = await n2m.pageToMarkdown(rawPost.results[0].id)
    const mdString = n2m.toMarkdownString(mdBlocks)

    return {
      ...post,
      body: mdString.parent,
    }
  } else {
    return null
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

export const getSlugs = async () => {
  const rawPosts = await getPostsRawData()

  const posts: { slug: string }[] = rawPosts.results.map((post) =>
    getPostPropertySlug(post)
  )
  const slugs = posts.map((post) => post.slug)
  return slugs
}

// ページの総数を取得する
export const getPages = async (pageSize: number) => {
  const rawPosts = await getPostsRawData()
  const pages: number = Math.ceil(rawPosts.results.length / pageSize)
  return pages
}

// TODO: ページネーションの実装

// export const getPostsPagination = async () => {
//   const rawPosts = await getPostsRawDataPagination(2, '0')
//   const posts = rawPosts.results.map((post) => getPostProperties(post))

//   return posts
// }
