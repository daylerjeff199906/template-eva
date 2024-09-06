interface Props {
  params: {
    id: string
  }
}

export default function Page(props: Props) {
  const { id } = props.params
  return <div>page</div>
}
