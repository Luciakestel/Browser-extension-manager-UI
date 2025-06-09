import type { Theme } from "../../../utils/common";
import Logo from '../../../assets/images/logo.svg';
import IconMoon from '../../../assets/images/icon-moon.svg';
import IconSun from '../../../assets/images/icon-sun.svg';
import './NavBar.scss';
import classNames from "classnames";

export interface NavBarProps {
theme: Theme;
onChangeTheme: (theme: Theme) => void;
}

const NAV_BAR_BASE_CLASS = 'e-nav-bar';
const NAV_BAR_THEME_CLASS = `${NAV_BAR_BASE_CLASS}__theme`;

const getThemeFromClass = (theme: Theme): string => classNames(
    [`${NAV_BAR_THEME_CLASS}`], {
        [`${NAV_BAR_THEME_CLASS}--light`]: theme === 'light',
        [`${NAV_BAR_THEME_CLASS}--dark`]: theme === 'dark',
    })

const NavBar = ({theme,onChangeTheme}:NavBarProps) => {
    const themeIcon = theme === 'light' ? IconMoon : IconSun;

    const handleOnChangeTheme = () => {
        onChangeTheme(theme)
    }

    return (
        <section className={NAV_BAR_BASE_CLASS}>
            <div className={`${NAV_BAR_BASE_CLASS}__logo`}>
                <img src={Logo} alt="Logo" />
            </div>
            <div className={getThemeFromClass(theme)} onClick={handleOnChangeTheme}>
                <img src={themeIcon} alt="Theme icon" />
            </div>
        </section>
    )
}

export default NavBar;