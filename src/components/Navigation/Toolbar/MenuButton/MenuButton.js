import React from 'react'
import classes from './MenuButton.css'

const menu=(props)=> (
    <div className={classes.DrawerToggle} 
    onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default menu