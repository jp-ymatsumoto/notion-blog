import { PostCategory } from '@/components/atoms/PostCategory'
import { PostCreatedAt } from '@/components/atoms/PostCreatedAt'

type Props = {
  imageSrc: string
  categoryName?: string
  createdAt?: string
}

/**
 * ブログ一覧のサムネイルを表示するコンポーネントです
 * @param {object} props - コンポーネントのプロパティ
 * @param {string} props.imageSrc - サムネイルの画像パス
 * @param {string} [props.categoryName] - 記事のカテゴリー名（オプション）
 * @param {string} [props.createdAt] - 記事の作成日時（オプション）
 * @returns {JSX.Element} - サムネイルを表示する <div> 要素
 */
export const PostThumbnail = (props: Props) => {
  return (
    <div className="relative border-gray-900 border">
      <img className="" src={props.imageSrc} alt="サムネイル" />
      {props.categoryName && <PostCategory name={props.categoryName} />}
      {props.createdAt && <PostCreatedAt createdAt={props.createdAt} />}
    </div>
  )
}
