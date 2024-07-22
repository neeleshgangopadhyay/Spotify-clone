import React from 'react'
import {Search} from '@material-ui/icons'
import "./header.css"
import {Avatar} from '@material-ui/core'
import { UseDataLayerValue} from './DataLayer' 

function header() {
    const [{user},dispatch] = UseDataLayerValue()
  return (
    <div className='header'>
        <div className="header__left">
        <Search />
        <input placeholder="Search for Artists, Songs, or Albums" type="text" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>

      
    </div>
  )
}

export default header
