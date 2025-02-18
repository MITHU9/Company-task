import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto mt-24">
      <div>
        <h2 className=" bg-gradient-to-r from-[#8E8D8D]/20 to-[#282828]/40 w-[130px] font-bold mx-auto py-3 px-4 rounded-3xl uppercase mb-2 text-white text-center">
          Features
        </h2>
      </div>

      <div className="flex justify-evenly p-4">
        <div className="w-1/2 relative">
          <div className="pr-8">
            <h2 className="font-semibold text-white text-4xl">
              Ask whatever you have
            </h2>
            <h2 className="font-semibold text-4xl bg-gradient-to-r from-[#7687B5] via-#91B0FF] to-[#E2E8F8] bg-clip-text text-transparent">
              in your mind now
            </h2>
            <p className="text-gray-200 z-30 relative max-w-2xl mx-auto mt-4 pb-8">
              Whether you have questions or are ready to discuss your business,
              we’re here to help. Reach out today.
            </p>
            <div className="w-[500px] mx-auto absolute -top-5 left-0 ">
              <img
                src="/Ellipse-1.png"
                alt="img"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-white flex flex-col gap-2">
            <div className="flex items-center space-x-1 z-40">
              <MdEmail className="text-green-800 size-6 " />
              <span>contact@adtask.ai</span>
            </div>
            <div className="flex items-center space-x-1 ">
              <IoCall className="text-green-800 size-6" />
              <span>(969) 819-8061</span>
            </div>
            <div className="flex items-center space-x-1">
              <CiLocationOn className="text-green-800 size-6" />
              <span>San Francisco Bay Area</span>
            </div>
          </div>
        </div>

        <div className="border w-1/2 ">
          <div>
            <span className="text-white">Name</span>
            <input
              type="text"
              placeholder="Name"
              className="w-full mt-2 p-2 border border-gray-500 rounded-md"
            />
          </div>
          <div className="mt-4">
            <span className="text-white">Email</span>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-500 rounded-md mt-2"
            />
          </div>
          <div className="mt-4">
            <span className="text-white">Message</span>
            <textarea
              placeholder="Message"
              className="w-full p-2 border border-gray-500 rounded-md mt-2"
            ></textarea>
          </div>
          <div className="text-center">
            <button className="bg-[#7687B5]/29 relative px-12 py-2 rounded-3xl mt-2 text-white border border-[#7687B5]">
              Submit
              <img
                src="/Ellipse-btn.png"
                alt="btn"
                className="absolute bottom-0 right-2"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
