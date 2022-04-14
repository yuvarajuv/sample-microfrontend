import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import serviceWorkerRegistration from '@/services/serviceWorker/serviceWorkerRegistration'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorkerRegistration()
