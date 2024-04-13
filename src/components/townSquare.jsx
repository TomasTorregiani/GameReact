import { Link } from "react-router-dom";

const TownSquare = ()=> {


    return(
        <>
            <h1>Town Square </h1>
            <Link to='/store'>
                <button className="button">Go to Store</button>
            </Link>
            <Link to='/cave'>
                <button className="button">Go to cave </button>
            </Link>
            <Link>
                <button className="button">Fight Dragon </button>
            </Link>
            
            <p>You are in the town square. You see a sign that says "Store"</p>
        </>
        
    )
}

export default TownSquare;