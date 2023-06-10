type Props = {
  createdAt: string
}

/**
 * ブログ一覧のサムネイル上に作成日時を表示するコンポーネントです
 * @param {Object} props - コンポーネントのプロパティ
 * @param {string} props.createdAt - 記事の作成日時
 * @returns {JSX.Element} - 作成日時を表示するコンポーネント
 */
export const PostCreatedAt = (props: Props) => {
  const createdAt = props.createdAt

  return (
    <div className="absolute bottom-0 right-0">
      <div className="bg-gray-900/40">
        <div className="text-sm text-gray-50 py-1 px-2">{createdAt}</div>
      </div>
    </div>
  )
}
