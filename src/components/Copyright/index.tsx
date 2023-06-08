type Props = {
  year: number
  name: string
}

export const Copyright = (props: Props) => {
  return (
    <p className="text-sm md:text-xl text-gray-50 px-1 md:px-2 py-1 md:py-2 my-3 md:my-6">
      &copy; {props.year} {props.name}
    </p>
  )
}
