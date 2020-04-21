import { useState, useEffect } from 'react'

export const useCards = () => {
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return [handleExpandClick, expanded]
}
