type Props = {
  name: string
  color: 'blue' | 'yellow'
}

export const Tag = (props: Props) => {
  let bgColor = 'bg-gray-300'

  switch (props.color) {
    case 'yellow':
      bgColor = 'bg-yellow-300'
      break
    case 'blue':
      bgColor = 'bg-blue-300'
      break
  }

  return (
    <span
      className={`inline-block rounded-full px-3 py-1 my-1 mx-1 text-sm font-semibold text-gray-50 ${bgColor} `}
    >
      {props.name}
    </span>
  )
}
