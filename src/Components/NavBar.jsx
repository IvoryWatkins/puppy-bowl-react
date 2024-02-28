import { NavLink, Link } from "react-router-dom"

function Navbar () {
    return (
    
        <header>
            <section>
                <h1>2024 Puppy Bowl Revamped</h1>
            </section>

            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/allplayers'>All Players</NavLink> 
                <NavLink to='/players'>Single Player</NavLink>
                <NavLink to='/form'>New Player Form</NavLink>
            </nav>
        </header>
    
    )
}
export default Navbar