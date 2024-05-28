import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import user_1 from '../../assets/user_1.png';
import user_2 from '../../assets/user_2.png';
import user_3 from '../../assets/user_3.png';
import user_4 from '../../assets/user_4.png';

function Testimonials() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  const data = [
    {
      name: `William Jackson`,
      img: user_1,
      add: `Delhi, India`,
      des: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, eaque omnis? Voluptatem corporis veniam iure architecto labore aliquid, repudiandae maxime!`
    },
    {
      name: `William Jackson`,
      img: user_2,
      add: `Delhi, India`,
      des: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, eaque omnis? Voluptatem corporis veniam iure architecto labore aliquid, repudiandae maxime!`
    },
    {
      name: `William Jackson`,
      img: user_3,
      add: `Delhi, India`,
      des: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, eaque omnis? Voluptatem corporis veniam iure architecto labore aliquid, repudiandae maxime!`
    },
    {
      name: `William Jackson`,
      img: user_4,
      add: `Delhi, India`,
      des: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, eaque omnis? Voluptatem corporis veniam iure architecto labore aliquid, repudiandae maxime!`
    },
  ];

  return (
    <div className='text-center bg-slate-200' name='Testimonials'>
      <h1 className='pt-5 text-xl font-semibold text-center text-blue-700 font-poppins'>TESTIMONIALS</h1>
      <h2 className='pt-1 pb-8 text-3xl font-bold text-center font-outfit text-blue-950'>What Student Says</h2>
      <div className='mt-20 px-[10%]'>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className='px-2'> {/* Added px-2 for spacing */}
              <div className='flex md:h-[250px] md:w-[300px] text-black rounded-xl'>
                <div className='px-5 pt-6 bg-blue-400 md:pt-8 rounded-xl'>
                  <div className='flex flex-wrap items-center justify-between'>
                    <img className='m-auto border-4 rounded-full border-violet-700 h-14' src={d.img} alt="" />
                    <div className="">
                      <h1 className='font-bold text-blue-800'>{d.name}</h1>
                      <h2 className='font-outfit'>{d.add}</h2>
                    </div>
                  </div>
                  <p className='pt-2 font-outfit'>{d.des}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
