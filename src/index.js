import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Root from './root'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store/store'
const store = configureStore()
registerServiceWorker()

window.store = store

document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('root')
	ReactDOM.render(<Root store={store} />, root)
})