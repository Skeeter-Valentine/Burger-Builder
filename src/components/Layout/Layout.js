import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component{
    state={
        showSideDrawer: false
    }
    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer: false})
    }
    menuClick=()=>{
        this.setState((prevState)=>{
            return {showSideDrawer: !prevState.showSideDrawer}})
    }
    render (){
        return (
        <Aux>
            <Toolbar menuClick={this.menuClick}/>
            <SideDawer open={this.state.showSideDrawer} 
            closed={this.sideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>)
    }
} 

export default Layout;