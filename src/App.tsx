import './App.css'
import { ComponentProps } from './components/ComponentProps'
import { ControlFlow } from './components/ControlFlow'
import { DerivedSignal } from './components/DerivedSignal'
import { Effect } from './components/Effect'
import { FormInputBinding } from './components/FormInputBinding'

function App() {
  return (
    <>
      <div class="container">
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
