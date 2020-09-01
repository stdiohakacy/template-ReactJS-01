import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import './header.styles.scss'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='logo-container' to='/shop'>
                SHOP
            </Link>
            <Link className='logo-container' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser
                    ? (<div className='option' onClick={() => auth.signOut()}>Sign out</div>)
                    : (<Link className='option' to='/signin'>Sign in</Link>)
            }
            <CartIcon />
        </div>
        <CartDropDown />
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)
