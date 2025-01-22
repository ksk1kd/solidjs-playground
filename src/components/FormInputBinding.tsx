import { For, createSignal } from 'solid-js'

export function FormInputBinding() {
  const optionArray = ['option1', 'option2', 'option3']
  const [options] = createSignal(optionArray)
  const [text, setText] = createSignal('')
  const [checkbox, setCheckbox] = createSignal(false)
  const [radio, setRadio] = createSignal(optionArray[0])
  const [select, setSelect] = createSignal(optionArray[0])
  const [checkboxes, setCheckboxes] = createSignal([optionArray[0]])

  return (
    <>
      <h1>Form Input Binding</h1>

      <section>
        <h2>Text</h2>
        <input
          type="text"
          value={text()}
          onInput={(e) => setText(e.target.value)}
        />
        <p>Text: {text()}</p>
      </section>

      <section>
        <h2>Checkbox</h2>
        <input
          type="checkbox"
          checked={checkbox()}
          onChange={(e) => setCheckbox(e.target.checked)}
        />
        <p>Checkbox: {checkbox() ? 'TRUE' : 'FALSE'}</p>
      </section>

      <section>
        <h2>Radio</h2>
        <For each={options()}>
          {(option) => (
            <label>
              <input
                type="radio"
                checked={radio() === option}
                onChange={() => setRadio(option)}
              />
              {option}
            </label>
          )}
        </For>
        <p>Radio: {radio()}</p>
      </section>

      <section>
        <h2>Select</h2>
        <select value={select()} onChange={(e) => setSelect(e.target.value)}>
          <For each={options()}>{(option) => <option>{option}</option>}</For>
        </select>
        <p>Select: {select()}</p>
      </section>

      <section>
        <h2>Multiple Checkbox</h2>
        <For each={options()}>
          {(option) => (
            <label>
              <input
                type="checkbox"
                checked={checkboxes().includes(option)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setCheckboxes([...checkboxes(), option])
                  } else {
                    setCheckboxes(
                      checkboxes().filter((item) => item !== option),
                    )
                  }
                }}
              />
              {option}
            </label>
          )}
        </For>
        <p>Multiple Checkbox: {checkboxes().join(', ')}</p>
      </section>
    </>
  )
}
