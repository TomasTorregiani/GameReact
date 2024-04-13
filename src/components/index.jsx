import { Link } from "react-router-dom";

const Index = () => {

    return (
        <>
            <h1>Welcome to "DRAGON REPELLER"</h1>
            <Link to='/townSquare'>
                <button>PLAY</button>
            </Link>
            
        </>
        
    )

}

export default Index;