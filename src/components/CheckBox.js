import { Checkbox } from '@mui/material'
import React from 'react'

const CheckBox = (props) => {
    const {value,onChange} =props
  return (
    <div>
      <Checkbox checked={value } onChange={onChange}/>
    </div>
  )
}

export default CheckBox
