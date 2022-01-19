import './local.css';

export const Local = ({
    id,
    title,
    image,
    phoneNumber,
    adress,
    href
}) => {
    return (
        <div className={ id % 2 === 0 ? 'locals__item reverse' : 'locals__item'  }>
            <div className='local__image'>
                <img src={image} alt={title} /> 
            </div>

            <div className='local__info'>
                <h3 className='title local__info__title'>{title}</h3>
                <p className='local__info__text'>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                </p>
                <p className='local__info__adress'>
                    <span><ion-icon name="location-outline"></ion-icon></span>
                    {adress}
                </p>
                <p className='local__info__phone-number'>
                    <span><ion-icon name="call-outline"></ion-icon></span>
                    (+51) {phoneNumber}
                </p>
                <a href={href} target="_blank" className='btn btn-primario local__info__btn'>Más Información</a>
            </div>
        </div>

    )
}
