import React, { useContext } from 'react'
import { TemplateContext } from '../../components/template/context'
import { View } from './style'

export const Template = props => {
  const { isMobile } = useContext(TemplateContext)

  return <View>{isMobile ? 'Isso é Boilerplate mobile' : props.children}</View>
}
