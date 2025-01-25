import { createEffect, createSignal, onCleanup, onMount } from 'solid-js'

export function Effect() {
  const [count, setCount] = createSignal(0)

  createEffect(() => {
    console.log(count())
  })

  onMount(() => {
    console.log('Mounted')
  })

  onCleanup(() => {
    console.log('Cleaned up')
  })

  return (
    <>
      <h1>Effect</h1>

      <section>
        <h2>createEffect</h2>
        <button
          type="button"
          onClick={() => {
            setCount(count() + 1)
          }}
        >
          Count up
        </button>
      </section>
    </>
  )
}
