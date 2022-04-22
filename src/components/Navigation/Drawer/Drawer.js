import React, {Component} from 'react'
import classes from './Drawer.module.css'
import Backdrop from '../../ui/Backdrop/Backdrop'
import {Link} from 'react-router-dom'

const links = [
  {to: '/', label: 'List', exact: true},
  {to: '/auth', label: 'Autorization', exact: false},
  {to: '/quiz-creator', label: 'Create test', exact: true}
]

class Drawer extends Component {
  clickHandler =()=>{
    this.props.onClose();
  }
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <Link 
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={this.clickHandler}
          >
            {link.label}
          </Link>
        </li>
      )
    })
  }

  render() {
    const cls = [classes.Drawer]

    if (!this.props.isOpen) {
      cls.push(classes.close)
    }

    return (
        <>
            <nav className={cls.join(' ')}>
                <ul>
                    { this.renderLinks() }
                </ul>
            </nav>
            { this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}
        </>
      
    )
  }
}

export default Drawer