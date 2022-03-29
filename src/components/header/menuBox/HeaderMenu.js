import Menu from "./Menu";
import Shop from "./Shop";

function HeaderMenu () {
    return (
        <div className="menu__box">
            <Menu />
            <Shop />
        </div>
    );
}

export default HeaderMenu;