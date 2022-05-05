import {connect} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CartItem } from '../cart-item/cart-item.component'

import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.style.scss'


const CartDropDown = ({cartItems}) => {
    let navigate = useNavigate()
    return(
        <>
            <div className='cart-dropdown'>
                <div className='cart-items'>
                    {cartItems.map((item,idx) => <CartItem key={idx} item={item} />)}
                </div>
                <CustomButton
                    onClick = { () => navigate('./checkout')}
                >
                    GO TO CHECKOUT
                </CustomButton>
            </div>
        </>
    )
}

const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems
})
export default connect(mapStateToProps,null)(CartDropDown)