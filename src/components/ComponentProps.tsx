import { ComponentPropsChild } from './ComponentPropsChild'

export function ComponentProps() {
  return (
    <>
      <h1>Component Props</h1>
      <ComponentPropsChild
        string="string"
        number={1}
        boolean={false}
        array={['array1', 'array2', 'array3']}
      >
        Children Text
      </ComponentPropsChild>
    </>
  )
}
