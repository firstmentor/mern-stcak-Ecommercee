
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './redux/store.js'
import { positions, transitions, Provider as Alertprovider } from 'react-alert'
import AlertTemplate from "react-alert-template-basic"

const options = {
  timeout: 7000,
  position: positions.TOP_CENTER,
  transitions: transitions.SCALE,
}

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={Store}>
    <BrowserRouter>
      <Alertprovider template={AlertTemplate} {...options}>
        <App />
      </Alertprovider>
    </BrowserRouter>
  </Provider>


)

