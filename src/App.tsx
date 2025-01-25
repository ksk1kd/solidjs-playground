import './App.css'
import { ComponentProps } from './components/ComponentProps'
import { Context } from './components/Context'
import { ControlFlow } from './components/ControlFlow'
import { DerivedSignal } from './components/DerivedSignal'
import { Effect } from './components/Effect'
import { FormInputBinding } from './components/FormInputBinding'

function App() {
  return (
    <>
      <div class="container">
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
