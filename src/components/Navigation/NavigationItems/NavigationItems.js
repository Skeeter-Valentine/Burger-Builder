import React from 'react';
import classes from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem>Checkout</NavigationItem>
    </ul>
)

export default navigationItems;