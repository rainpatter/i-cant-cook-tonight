
export default function Logout(props) {
    
    function handleClick() {
        props.onLogout()
    }

    return (
        <button onClick={handleClick}>Logout</button>
    )
}