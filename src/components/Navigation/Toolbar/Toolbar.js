import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Menu from './MenuButton/MenuButton'

const toolbar=(props)=>(
    <header className={classes.Toolbar}>
        <Menu clicked={props.menuClick}>Menu</Menu>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
    
)

export default toolbar