import './App.css'
import { ComponentProps } from './components/ComponentProps'
import { Context } from './components/Context'
import { ControlFlow } from './components/ControlFlow'
import { DerivedSignal } from './components/DerivedSignal'
import { Effect } from './components/Effect'
import { FormInputBinding } from './components/FormInputBinding'
import { Store } from './components/Store'

function App() {
  return (
    <>
      <div class="container">
        <Store />
        <Context />
        <DerivedSignal />
        <Effect />
        <ControlFlow />
        <ComponentProps />
        <FormInputBinding />
      </div>
    </>
  )
}

export default App
