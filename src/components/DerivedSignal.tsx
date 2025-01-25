import { createSignal } from 'solid-js'

export function DerivedSignal() {
  const [firstName, setFirstName] = createSignal('')
  const [lastName, setLastName] = createSignal('')
  const fullName = () => `${firstName()} ${lastName()}`

  return (
    <>
      <h1>Derived Signal</h1>

      <section>
        <input
          type="text"
          placeholder="First name"
          onInput={(e) => setFirstName(e.currentTarget.value)}
        />
        <input
          type="text"
          placeholder="Last name"
          onInput={(e) => setLastName(e.currentTarget.value)}
        />
        <p>Full name: {fullName()}</p>
      </section>
    </>
  )
}
