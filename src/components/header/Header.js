import TopHeader from './topHeader/TopHeader';
import HeaderMenu from './menuBox/HeaderMenu';
import HeaderContent from './headerContent/HeaderContent';

function Header() {
    return (
        <header className="header">
            <div className="container"> 
                <TopHeader />
                <HeaderMenu />
                <HeaderContent />
            </div>
        </header>
    );
}

export default Header;