import CartWidget from './CartWidget.jsx';

const NavBar = () => {
    return (
        <nav className="NavBar">
            <div>
                <h1>eGarden</h1>
                <img className="logo" src="/logoSprout.svg" alt="Logo con forma de brote" />
            </div>
            <CartWidget/>
        </nav>
    );
};



export default NavBar;
