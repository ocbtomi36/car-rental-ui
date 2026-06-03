import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MainScreen = () => {
    return (  
        <>
            <header className="hero">
                <div className="navbar">
                    <div className="navbar__container container">
                        <div className="navbar__logo">
                            <h1 className="navbar__logo-text secondary"><span className="car">C</span>ar<span className="rent">Rent</span><span className="and">&</span><span className="trade">T</span><span className="rade">rade</span></h1>
                        </div>
                        <div className="navbar__menu">
                            <ul className="navbar__menu-list">
                                <li className="navbar__menu-item"><a className="navbar__btn btn" href="./userDetail.html" target="_blank">Users</a></li>
                                <li className="navbar__menu-item"><a className="navbar__btn btn" href="./carDetail.html" target="_blank">Cars</a></li>
                            </ul>
                        </div>
                        <div className="navbar__mobile-menu">
                            <div className="navbar__mobile-menu-toggle" onClick={() => {
                                const mobileMenu = document.querySelector('.navbar__mobile-menu-items')
                                    mobileMenu.classList.toggle('active');
                            }}>
                                <FontAwesomeIcon icon={faBars} size='{2x}' className='fas'/>
                            </div>
                            <div className="navbar__mobile-menu-items active">
                                <ul className="navbar__mobile-menu-list">
                                    <li className="navbar__mobil-menu-item"><a className="navbar__mobile-menu-link" href="./userDetail.html" target="_blank">Users</a></li>
                                    <li className="navbar__mobil-menu-item"><a className="navbar__mobile-menu-link" href="./carDetail.html" target="_blank">Cars</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
 
export default MainScreen
