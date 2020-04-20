import React from 'react'
import { useScreenMeasure } from './hooks'
import { TemplateContext } from './context'

export const TemplateProvider = props => {
  const [isMobile] = useScreenMeasure()

  const value = {
    isMobile
  }

  return <TemplateContext.Provider value={value}>{props.children}</TemplateContext.Provider>
}
