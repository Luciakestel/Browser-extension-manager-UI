import classNames from 'classnames';
import './Card.scss';
import type { Size, Theme } from '../../../utils/common';
import DevLens from '../../../assets/images/logo-devlens.svg'

export interface CardProps {
    theme: Theme;
    size?: Size;
}

const CARD_BASE_CLASS = 'e-card';

const getCardClassFromProps = ({size, theme}:{size?:Size, theme:Theme}) => {
   

    return classNames(
        CARD_BASE_CLASS, {
            [`${CARD_BASE_CLASS}--${size}`]: size,
            [`${CARD_BASE_CLASS}--theme-${theme}`]: theme,
        })
   
}

const Card = ({size = 'medium', theme}:CardProps) => {
    return (
        <section className={getCardClassFromProps({size, theme})}>
            <div className={`${CARD_BASE_CLASS}__content`}>
                <img src={DevLens} alt='logo DevLens'/>
                <div className={`${CARD_BASE_CLASS}__text-container`}>
                    <div>Card Title</div>
                    <p>This is a description of the card. It provides some details about the content.</p>
                </div>
            </div>
            <div className={`${CARD_BASE_CLASS}__actions`}>
                <button className="btn">Click Me</button>
                <button>switch</button>
            </div>
        </section>
    )
}

export default Card;