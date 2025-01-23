import { children, mergeProps } from 'solid-js'

type Props = {
  children: string
  string: string
  number: number
  boolean: boolean
  array: string[]
  optional?: string
}

export function ComponentPropsChild(props: Props) {
  const safeChildren = children(() => props.children)
  const finalProps = mergeProps({ optional: 'default value' }, props)

  return (
    <>
      <p>children: {safeChildren()}</p>
      <p>stringProp: {props.string}</p>
      <p>numberProp: {props.number}</p>
      <p>booleanProps: {props.boolean ? 'TRUE' : 'FALSE'}</p>
      <p>arrayProps: {props.array}</p>
      <p>optionalProps: {finalProps.optional}</p>
    </>
  )
}
