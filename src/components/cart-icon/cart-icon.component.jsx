import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import './cart-icon.style.scss'

//Without Hooks
//import {connect} from 'react-redux'
//import toggleCartHidden from '../../redux/cart/cart.action'

//With Hooks
import {useState} from 'react'
import { connect } from 'react-redux'


//const CartIcon = ({toggleCartHidden, hidden}) => {
const CartIcon = ({itemCount}) => {
    const [hidden, setHidden] = useState(false)
    const handleDropDown = () => {
        setHidden(!hidden)
    }
    return(
        <>
            {/**<div className='cart-icon' onClick={toggleCartHidden}>*/}
            <div className='cart-icon' onClick={handleDropDown}>
                <ShoppingIcon className='shopping-icon' />
                {
                    hidden?<CartDropDown />:''
                }
                <span className='item-count'>{itemCount}</span>
            </div>
        </>
    )
}

//const mapDispatchToProps = (dispatch) => ({
//    toggleCartHidden: () => dispatch(toggleCartHidden())
//})

//const mapStateToProps = (state) => ({
 //   hidden: state.cart.hidden
//})

const mapStateToProps = (state) => ({
    itemCount: state.cart.cartItems.length
})

//export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)

export default connect(mapStateToProps, null)(CartIcon)