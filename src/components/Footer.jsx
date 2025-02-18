import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto mt-24 px-8 py-4 grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center ">
        <div className="order-3 md:order-1 col-span-2 md:col-span-1">
          <h2 className="text-6xl text-white py-4">
            ad<span className="font-semibold">Task</span>.ai
          </h2>
          <div className="flex items-center text-white/50 space-x-1 z-40">
            <MdEmail className="text-green-800 size-6 " />
            <span>contact@adtask.ai</span>
          </div>

          <div className="flex text-white/60 items-center space-x-1">
            <CiLocationOn className="text-green-800 size-6" />
            <span>San Francisco Bay Area</span>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-xl font-semibold text-white pb-2">Utilities</h2>
          <ul className="text-white/60 leading-6 ">
            <li>Home</li>
            <li>Services</li>
            <li>Testimonials</li>
            <li>Contact</li>
            <li>Schedule</li>
          </ul>
        </div>

        <div className="order-2 md:order-3">
          <h2 className="text-xl text-white font-semibold pb-2">Social</h2>
          <ul className="text-white/60 leading-6">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>

      <div>
        <div className=" text-white/70 text-center py-4">
          <p>© 2021 adTask.ai. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
