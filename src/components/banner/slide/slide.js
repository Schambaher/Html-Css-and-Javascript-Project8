import './slide.css';

export const Slide = ({id, title, text }) => {

    return (
        <div
            id='inicio'
            className={`banner background-${id}`}
        >
            <div className='banner-flex container'>
                <h1 className='banner__title'>{title}</h1>
                <p className='banner__text'>
                    {text}
                </p>
            </div>
        </div>
    )
}
