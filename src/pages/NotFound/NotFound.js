import './NotFound.scss';
import notFoundImg from '../../assets/images/404-page--img.png';

function NotFound() {
    return (
        <>
            <section className='notfound'>
                <div className='notfound__cont'>
                    <img className='notfound__img' src={notFoundImg} alt="Bread-Sama apologizes!" />
                    <div className='notfound__desc'>
                        <h1 className='notfound__desc--404'>404</h1>
                        <h2 className='notfound__desc--text'>Page Not Found <br /> Or <br /> Page Does Not Exist</h2>
                        <a className='notfound__desc--link' href='/'>Return to Home Page</a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default NotFound;