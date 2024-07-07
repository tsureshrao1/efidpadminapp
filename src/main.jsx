import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './css/skin-1.css'
import { AppProvider } from './context/index';
import { CanvasProvider } from './context/canvasContext'
import { PopupProvider } from './context/popupContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <CanvasProvider>
      <PopupProvider>
        <App />
      </PopupProvider>
    </CanvasProvider>
  </AppProvider>,
)
