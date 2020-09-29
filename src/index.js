import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { TemplateProvider } from './components/template/provider'
import { Navigation } from './navigation'
import './style.css'

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <TemplateProvider>
        <Navigation />
      </TemplateProvider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render()

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./navigation', () => {
    render()
  })
}
