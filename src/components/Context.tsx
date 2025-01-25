import { type JSX, createContext, createSignal, useContext } from 'solid-js'

type CounterContextType = {
  count: () => number
  increment: () => void
  decrement: () => void
}

const CounterContext = createContext<CounterContextType>()

function CounterProvider(props: { children: JSX.Element }) {
  const [count, setCount] = createSignal(0)
  const increment = () => setCount(count() + 1)
  const decrement = () => setCount(count() - 1)

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {props.children}
    </CounterContext.Provider>
  )
}

function CounterDisplay() {
  const context = useContext(CounterContext)
  if (!context)
    throw new Error('CounterDisplay must be used within a CounterProvider')
  const { count } = context
  return <p>Count: {count()}</p>
}

function CounterControls() {
  const context = useContext(CounterContext)
  if (!context)
    throw new Error('CounterControls must be used within a CounterProvider')
  const { increment, decrement } = context
  return (
    <>
      <button type="button" onClick={decrement}>
        -
      </button>
      <button type="button" onClick={increment}>
        +
      </button>
    </>
  )
}

export function Context() {
  return (
    <CounterProvider>
      <h1>Context</h1>
      <CounterDisplay />
      <CounterControls />
    </CounterProvider>
  )
}
