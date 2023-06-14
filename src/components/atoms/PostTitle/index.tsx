type Props = {
  title: string
  classes?: string
}

/**
 * ブログ一覧の記事のタイトルを表示するコンポーネントです
 * @param {Object} props - コンポーネントのプロパティ
 * @param {string} props.title - 記事のタイトル
 * @param {string} [props.classes] - クラス名（オプション）
 * @returns {JSX.Element} - タイトルを表示する h3 要素
 */
export const PostTitle = (props: Props) => {
  const title = props.title.substring(0, 40)
  const classes = props.classes
    ? props.classes
    : 'text-md font-bold text-center py-1 px-4'

  return <h3 className={classes}>{title}</h3>
}
