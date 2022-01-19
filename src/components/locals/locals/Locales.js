import { locales } from '../../../data/locales';
import { Local } from '../local/Local';
import './locales.css';

export const Locales = () => {

    return (
        <section id='locales' className='locals'>
            <h1 className='title locals__title'>Locales y Entrenamiento</h1>

            {
                locales.map((local, i) => {
                    return <Local key={i} {...local} /> 
                })
            }
        </section>
    )
}
