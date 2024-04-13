import { Link } from "react-router-dom";

const Cave = () => {
    
    return (
        <>
            <h1>CAVE</h1>
            <button className="button">Fight slime</button>
            <button className="button">Fight fanged beast</button>
            <Link to='/townSquare'>
                <button className="button">Go to town square</button>
            </Link>
            <p>You enter the cave. You see some monsters.</p>
        </>
    )

}

export default Cave;