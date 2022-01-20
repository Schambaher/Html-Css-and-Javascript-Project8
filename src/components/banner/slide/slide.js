import './slide.css';

export const Slide = ({ image, title }) => {

    console.log(image)

    return (
        <div className='banner'>
            <div className='banner-flex container'>
                <h1 className='banner__title'>{title}</h1>
                <p className='banner__text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>s
            </div>
        </div>
    )
}
