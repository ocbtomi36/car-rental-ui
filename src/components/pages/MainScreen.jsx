const MainScreen = () => {
    return (  
        <>
        <header class="hero">
        <div class="navbar">
            <div class="navbar__container container">
                <h1 class="navbar__logo-text secondary"><span class="car">C</span>ar<span class="rent">Rent</span><span class="and">&</span><span class="trade">T</span><span class="rade">rade</span></h1>
                <nav>
                    <ul class="navbar__menu-list">
                        <li class="navbar__menu-item"><a class="navbar__btn btn" href="./userDetail.html" target="_blank">Users</a></li>
                        <li class="navbar__menu-item"><a class="navbar__btn btn" href="./carDetail.html" target="_blank">Cars</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="main-content">
            <a class="main-content__btn btn hidden">Login</a>
        </div>
    </header>
        
        </>
    );
}
 
export default MainScree
