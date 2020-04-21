import React from 'react'
import { Template } from '../../components/template'
import { useCards } from './hooks'
import { makeStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import clsx from 'clsx'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  card: {
    maxWidth: 400,
    minWidth: 400
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
  header: {
    color: '#fff',
    backgroundColor: '#DC2042'
  },
  body: {
    backgroundColor: '#E9E2CF'
  }
}))

export const Cards = props => {
  const [handleExpandClick, expanded] = useCards()
  const classes = useStyles()

  return (
    <Template>
      <Card className={classes.card}>
        <CardHeader className={classes.header} title={props.title} subheader={props.director} />
        {/* <CardMedia className={classes.media} image="/static/images/cards/paella.jpg" title="Paella dish" /> */}
        <CardContent className={classes.body}>
          <Typography variant="body2" color="textSecondary" component="p">
            Producer: {props.producer}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Release date: {props.releaseDate}
          </Typography>
        </CardContent>
        <CardActions className={classes.body} disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className={classes.body}>
            <Typography paragraph>{props.description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Template>
  )
}
