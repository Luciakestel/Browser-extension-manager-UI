import type { Theme } from "../../../utils/common";
import IconMoon from '../../../assets/images/icon-moon.svg';
import IconSun from '../../../assets/images/icon-sun.svg';
import './NavBar.scss';
import classNames from "classnames";
import Logo from "../../../assets/images/Logo/Logo";

export interface NavBarProps {
theme: Theme;
onChangeTheme: (theme: Theme) => void;
}

const NAV_BAR_BASE_CLASS = 'e-nav-bar';

const getThemeFromClass = (theme: Theme): string => classNames(
    [`${NAV_BAR_BASE_CLASS}`], {
        [`${NAV_BAR_BASE_CLASS}--theme-light`]: theme === 'light',
        [`${NAV_BAR_BASE_CLASS}--theme-dark`]: theme === 'dark',
    })

const NavBar = ({theme,onChangeTheme}:NavBarProps) => {
    const themeIcon = theme === 'light' ? IconMoon : IconSun;

    const handleOnChangeTheme = () => {
        onChangeTheme(theme)
    }

    return (
        <section className={getThemeFromClass(theme)}>
            <Logo theme={theme} />
            <div className={`${NAV_BAR_BASE_CLASS}__icon-container`} onClick={handleOnChangeTheme}>
                <img src={themeIcon} alt="Theme icon" className={`${NAV_BAR_BASE_CLASS}__icon`} />
            </div>
        </section>
    )
}

export default NavBar;