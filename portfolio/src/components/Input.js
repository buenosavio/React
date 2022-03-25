import Contact
 from "../pages/Contact";
const Input = ({type, placeholder, value, method}) => {

    return (
        <>
        <input type={type} placeholder={placeholder} value={value} onChange={(char) => method(char.target.value)}/>
        </>
    )
}

export default Input;