import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { storeSetUp } from './store/store.ts'


createRoot(document.getElementById('root')!).render(
  <Provider store={storeSetUp()}>
      <App />
  </Provider>
  

)
