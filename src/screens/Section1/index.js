import React from 'react'
import { Template } from '../../components/template'
import { MenuWrapper, LogoWrapper, Logo, SearchArea, CardsArea } from './styles'
import GhibliLogo from '../../assets/images/logo.png'
import { useFilms } from './hooks'
import { makeStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}))

export const Menu = () => {
  const [data] = useFilms()
  const classes = useStyles()

  return (
    <Template>
      <MenuWrapper>
        <LogoWrapper>
          <Logo alt="" src={GhibliLogo} />
        </LogoWrapper>
      </MenuWrapper>

      <SearchArea>
        <FormControl className={classes.formControl}>
          <InputLabel>Studio Ghibli's movies!</InputLabel>
          <Select>
            {data.map(item => (
              <MenuItem value={item.title}>{item.title}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Choose a movie!</FormHelperText>
        </FormControl>
      </SearchArea>

      <CardsArea></CardsArea>
    </Template>
  )
}
