import Slider from "react-slick";
import { eventos } from "../../data/eventos";
import { Slide } from "./slide/Slide";

import './banner.css'


export const Banner = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      fade:true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true
    };
    return (

        <Slider className="slider" {...settings}>
            {
                eventos.map((evento, id) => (
                    <Slide key={id} {...evento} />
                ))
            }
        </Slider>
    );
}

// export const Banner = () => {

//     const imagePath = {
//         image1: '../../../assets/banner-1.jpg'
//     }

//     const bannerBackground = {
//         backgroundImage: `url(${imagePath.image1})`,
//     }

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//     }


//     return (
//         <div>
//             <h2> Single Item</h2>
//             <Slider {...settings}>
//                 <div>
//                     <h3>1</h3>
//                 </div>
//                 <div>
//                     <h3>2</h3>
//                 </div>
//                 <div>
//                     <h3>3</h3>
//                 </div>
//                 <div>
//                     <h3>4</h3>
//                 </div>
//                 <div>
//                     <h3>5</h3>
//                 </div>
//                 <div>
//                     <h3>6</h3>
//                 </div>
//             </Slider>
//       </div>
//     )
// }
