import React, { Component } from 'react'
import { Link } from 'react-router-dom';

//old code
// const Navbar = () => {
//     return (
//         <nav className="navbar navbar-dark bg-dark justify-content-between">
//             <a className="navbar-brand">Jua Hali</a>
//             <form className="form-inline">
//                 <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                 <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//             </form>
//         </nav>
//     )
// }

// export default Navbar

export default class Navbar extends Component {
    render() {
        return (
        <nav className="navbar navbar-dark bg-dark justify-content-between">
            <Link to="/" className="navbar-brand">Jua Hali</Link>
            {/* <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
            
        </nav>
        )
    }
}

