import { For, Match, Show, Switch } from 'solid-js'
import { Portal } from 'solid-js/web'

export function ControlFlow() {
  return (
    <>
      <h1>Control Flow</h1>

      <section>
        <h2>Show</h2>
        <Show when={true}>
          <div>Loading...</div>
        </Show>
      </section>

      <section>
        <h2>Switch</h2>
        <Switch fallback={<p>Default</p>}>
          <Match when={false}>
            <p>Outcome 1</p>
          </Match>
          <Match when={true}>
            <p>Outcome 2</p>
          </Match>
        </Switch>
      </section>

      <section>
        <h2>For</h2>
        <For each={[1, 2, 3]}>{(number) => <p>{number}</p>}</For>
      </section>

      <section>
        <h2>Portal</h2>
        <Portal>Mount on root</Portal>
      </section>
    </>
  )
}
