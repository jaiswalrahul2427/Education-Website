import program_1 from '../../assets/program_1.png';
import program_2 from '../../assets/program_2.png';
import program_3 from '../../assets/program_3.png';
import program_icon_1 from '../../assets/program_icon_1.png';
import program_icon_2 from '../../assets/program_icon_2.png';
import program_icon_3 from '../../assets/program_icon_3.png';
import college_video from '../../assets/college_video.mp4';
import about from '../../assets/about.png';
import play_icon from '../../assets/play_icon.png';

function Offer() {
  

  return (
    <div className='pt-10 min-h-full px-[10%]'>
      <h1 className='text-xl font-medium text-center text-blue-700'>OUR PROGRAM</h1>
      <h2 className='text-3xl font-bold text-center font-outfit text-blue-950'>What We Offer</h2>
      <div className='flex pt-10 space-x-8'>
        <div className='relative w-1/3'>
          <img className='rounded' src={program_1} alt="img" />
          <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
            <img className='w-14' src={program_icon_1} alt="Program" />
            <p>Graduation Program</p>
          </div>
        </div>
        <div className='relative w-1/3'>
          <img className='rounded' src={program_2} alt="img" />
          <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
            <img className='w-14' src={program_icon_2} alt="Program" />
            <p>Graduation Program</p>
          </div>
        </div>
        <div className="relative w-1/3">
          <img className="rounded" src={program_3} alt="img" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <img className="w-14" src={program_icon_3} alt="Program" />
            <p>Graduation Program</p>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap-reverse justify-between pt-16'>
        <div className='relative'>
          <video  width="500" height="350" className='rounded-lg' autoPlay poster={about}>
            <source src={college_video} type="video/mp4" />
          </video>
          <a href="https://greatstack.in/assets/college-video-6XtGR-D3.mp4">          <img  className='absolute inset-0 flex flex-col items-center justify-center m-auto text-center cursor-pointer w-14' src={play_icon} alt="play" />
</a>
        </div>
        <div className='md:w-1/2'>
          <h1 className='text-xl font-semibold text-blue-700 font-poppins'>ABOUT UNIVERSITY</h1>
          <h2 className='pt-3 text-3xl font-bold font-outfit text-blue-950'>Nurturing Tomorrow's <br /> Leaders Today</h2>
          <p className='pt-3 text-xl font-outfit'>
            Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education. With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities. <br /> Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Offer;
