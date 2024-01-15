import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red pt-10">
      <div className="w-10/12  mx-auto">
        <div className="-mb-7"><SocialMediaIcons /></div>
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="md:text-left font-playfair font-semibold text-2xl text-white">
            ABHINAV KUMAR
            <div className="flex justify-center gap-2 text-base font-normal">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
<span> abhi2407singh@gmail.com</span>
 </div>
          </p>
          <p className="font-playfair  text-md text-white">
            ©2022 AK. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
