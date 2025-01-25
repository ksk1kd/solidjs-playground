import './App.css'
import { ComponentProps } from './components/ComponentProps'
import { ControlFlow } from './components/ControlFlow'
import { Effect } from './components/Effect'
import { FormInputBinding } from './components/FormInputBinding'

function App() {
  return (
    <>
      <div class="container">
        <Effect />
        <ControlFlow />
        <ComponentProps />
        <FormInputBinding />
      </div>
    </>
  )
}

export default App
