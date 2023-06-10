type Props = {
  name: string
}

/**
 * ブログ一覧のサムネイル上にカテゴリを表示するコンポーネントです
 * @param {Object} props - コンポーネントのプロパティ
 * @param {string} props.name - 記事のカテゴリ名
 * @returns {JSX.Element} - カテゴリを表示する <div> 要素
 */
export const PostCategory = (props: Props) => {
  const name = props.name

  return (
    <div className="absolute top-0 left-0">
      <div className="bg-gray-900/100">
        <div className="text-sm text-gray-50 py-1 px-2">{name}</div>
      </div>
    </div>
  )
}
