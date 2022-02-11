import Logo from '../assets/logo.png';

const Navbar = (props) => {
    const {pages, on, toggled, handleNavbarToggle = () =>{console.log("toggler");}} = props;
    const pageNavs = pages.map(pageObj=>{
        const className = "nav-item" + (pageObj.id === on ? " active": "");
        return <li className={className} key={pageObj.id}>
                    <a className="nav-link text-center" href="#">{pageObj.name}</a>
                </li>;
    });

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand ml-5" href="#">
                <img src={Logo} width="42px" height="42px" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handleNavbarToggle}>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`${toggled === 0 ? "collapse" : ""} navbar-collapse`} id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {pageNavs}
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;