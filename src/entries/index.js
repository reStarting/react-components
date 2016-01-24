import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'

import App from '../containers/app.js'
import createStoreWithMiddleware from '../configStore.js'
import reducers from '../reducers'

const store = createStoreWithMiddleware(reducers)

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)