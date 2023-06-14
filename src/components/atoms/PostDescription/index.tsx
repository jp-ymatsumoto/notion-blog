type Props = {
  description: string
  classes?: string
}

/**
 * ブログ一覧の記事の説明文を表示するコンポーネントです
 * @param {object} props - コンポーネントのプロパティ
 * @param {string} props.description - 記事の説明文
 * @param {string} [props.classes] - クラス名（オプション）
 * @returns {JSX.Element} - 記事の説明文を表示する <p> 要素
 */
export const PostDescription = (props: Props) => {
  const description = props.description.substring(0, 70)
  const classes = props.classes ? props.classes : 'text-md py-1 px-4'

  return <p className={classes}>{description}</p>
}
