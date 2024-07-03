import React from 'react';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import { projects } from '../../../resources/projects';


const Project_Slider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {projects.map((project, index) => (
        <div key={index} className='w-[500px] overflow-x-scroll projectscrollbar mt-5 mr-5  flex items-center justify-center' >
          <div className="gap-10 sm:flex-col">
            <div className='flex  items-center justify-center'>
              <img src={project.image} alt="project-image" className="h-60 w-72  mix-blend-multiply" />
            </div>
            <div className="w-full ">
              <div className="sm:text-center">
                <h1 className="text-secondary text-xl mt-0">
                  {project.title}{' '}
                 
                </h1>
                <p className="text-white text-balance cursor-text text-ellipsis line-clamp-6">{project.description}</p>
              </div>
              <div className="sm:flex items-center gap-4 justify-center">
                <a
                  className="text-xl bg-red-600 hover:bg-red-700 py-1 px-3 text-center w-fit rounded mt-2 text-white"
                  href={project.githubrepo || ''}
                >
                  GITHUB
                </a>
               {
                project.link &&
                (
                  <a
                  className="text-xl bg-red-600 hover:bg-red-700 py-1 px-3 text-center w-fit rounded mt-2 text-white"
                  href={project.link || ''}
                >
                  Try Here
                </a>
                )
               }
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Project_Slider;
