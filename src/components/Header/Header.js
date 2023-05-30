import './Header.scss';

import LogoLight from '../../assets/icons/Bread-logo-icon-light.svg';

function Header() {
    return (
        <>
            <nav className='navbar'>
                <div className='navbar__cont'>
                    <div className='navbar__sec'>
                        <a className='navbar__logo' href="/">
                            <h2 className='navbar__logo--text'>
                                BG.
                            </h2>
                            <img src={LogoLight} alt="Bren.Dev Logo" className='navbar__logo--img' />
                        </a>
                    </div>
                    <div className='navbar__sec'>
                        <ul className='navbar__opts'>
                            <li><a className='navbar__links' href="/">Who</a></li>
                            <li><a className='navbar__links' href="/">What</a></li>
                            <li><a className='navbar__links' href="/">Where</a></li>
                        </ul>
                        <div className='navbar__opts'>
                            <input className='navbar--theme' type="checkbox" />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;