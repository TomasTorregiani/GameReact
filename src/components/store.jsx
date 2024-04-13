import { Link } from "react-router-dom";

const Store = () => {

    return (
        <>
            <h1>STORE</h1>
            <button className="button">Buy 10 health (10 gold)</button>
            <button className="button">Buy weapon (30 gold)</button>
            <Link to='/townSquare'>
                <button className="button">Go to town square</button>
            </Link>
            <p>You enter the store</p>
        </>
    )

}

export default Store;