/* @refresh reload */
import { render } from 'solid-js/web'
import App from './App.tsx'

const root = document.getElementById('root') as HTMLElement

render(() => <App />, root)
