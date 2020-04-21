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
import { red } from '@material-ui/core/colors'
import { Cards } from '../Cards'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}))

export const Menu = () => {
  const [data, film, handleChange] = useFilms()
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
          <Select onChange={handleChange}>
            {data.map(item => (
              <MenuItem value={item.id}>{item.title}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Choose a movie!</FormHelperText>
        </FormControl>
      </SearchArea>
      <CardsArea>
        {film && (
          <Cards
            title={film.title}
            director={film.director}
            producer={film.producer}
            releaseDate={film.release_date}
            description={film.description}
          />
        )}
      </CardsArea>
    </Template>
  )
}
