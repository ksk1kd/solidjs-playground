import './App.css'
import { ComponentProps } from './components/ComponentProps'
import { ControlFlow } from './components/ControlFlow'
import { FormInputBinding } from './components/FormInputBinding'

function App() {
  return (
    <>
      <div class="container">
        <ControlFlow />
        <ComponentProps />
        <FormInputBinding />
      </div>
    </>
  )
}

export default App
