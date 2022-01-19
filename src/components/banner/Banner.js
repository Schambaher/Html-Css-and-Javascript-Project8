import './banner.css';

export const Banner = () => {

    const imagePath = {
        image1: '../../../assets/banner-1.jpg'
    }

    const bannerBackground = {
        backgroundImage: `url(${imagePath.image1})`,
        height: '80vh'
    }

    return (
        <div id='inicio' style={ bannerBackground } className='banner'>
            {/* <h1>Hola desde el banner</h1> */}
        </div>
    )
}
