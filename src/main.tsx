import ReactDOM from 'react-dom/client';
import { App } from './App.tsx'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
  const { worker } = await import('./mocks/browser')
  return worker.start()
}
enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <App />
  )
})
