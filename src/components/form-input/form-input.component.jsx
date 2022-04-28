import './form-input.style.scss'

//const FormInput = ({name,placeholder,type,handleChange}) => {
const FormInput = ({handleChange, ...otherProps}) => {
    return (
        <div className='group'>
            <input 
                //name={name} 
                //placeholder={placeholder}
                //type={type}
                {...otherProps} //for name,placehoder,type ->spread operator
                onChange={handleChange}
                className='form-input'
                //value={value? value: ''}
            />
        </div>
    )
}

export default FormInput