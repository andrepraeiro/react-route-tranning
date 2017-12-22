import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter, Route, hashHistory } from 'react-router-dom'

import App from './pages/App'
import Cursos from './pages/Cursos'
import Sobre from './pages/Sobre'

ReactDom.render(
    (<HashRouter>
        <App>
            <Route exact={true} path="/" component={App} />
            <Route path="/cursos" component={Cursos} />
            <Route path="/sobre" component={Sobre} />
        </App>
    </HashRouter>
    ),
    document.getElementById('app')
)