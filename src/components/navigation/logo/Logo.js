import './logo.css';


export const Logo = () => {

    console.log("Hola desde el logo")

    const imagePath = {
        path: "../../../assets/Lobos.png",
    }

    return (
        <a href='#inicio' className="header__logo">
            <div className="header__image">
                <img className="image" src={imagePath.path} alt="logo"/>
            </div>
            <div className="header__logo__name">
                <p className='header__logo__name__first'>Los Lobos</p>
                <p className='header__logo__name__second'>Academia Deportiva</p>
            </div>
        </a>
    )
}
