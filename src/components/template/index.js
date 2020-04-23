import React, { useContext } from 'react'
// import { TemplateContext } from '../../components/template/context'
import { View } from './style'

export const Template = props => {
  // const { isMobile } = useContext(TemplateContext)
  // **** Esse código comentado pode ser utilizado para criar visualizações diferentes para mobile e desktop
  // return <View>{isMobile ? 'Isso é Boilerplate mobile' : props.children}</View>
  return <View>{props.children}</View>
}
