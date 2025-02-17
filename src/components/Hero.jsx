import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <>
      <div
        className="relative border-2 bg-[#050506] z-30 
    "
      >
        <div
          className="flex justify-center items-center h-[500px]  w-3/4 mx-auto "
          style={{
            backgroundImage: "url(/Mask_group_1.webp)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
          }}
        ></div>
        <div className="absolute -top-20 left-0 right-0 bottom-0 flex justify-center items-center z-10">
          <img src="/Rectangle-5.png" alt="vector" className="drop-shadow-lg" />
        </div>
      </div>
      <div
        className="w-[970px] h-[500px] mt-4 border-[1px] rounded-3xl border-[#333B4F] mx-auto flex justify-center items-center relative
      before:absolute before:top-[-50%] before:left-[-50%] before:right-[-50%] before:bottom-[-50%] before:bg-[conic-gradient(transparent,transparent,#566999)] before:rounded-3xl
      before:animate-[spin_5s_linear_infinite]
      before:z-10
      overflow-hidden
      "
      >
        <div className="absolute bg-black top-[1px] left-[1px] right-[1px] bottom-[1px] flex justify-center items-center z-20 rounded-3xl">
          <img src="/public/AdTask.ai-u.png" alt="add" />
          <div className="absolute ">
            <img src="/public/logos_youtube-icon.png" alt="UTube" />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Marquee speed={90} gradient={false} className=" text-white py-4">
          <img src="/Property-1.png" alt="brand" />
        </Marquee>
      </div>
      <div className="py-2 border border-red-500">
        <h2>Adtask AI works with :</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-4 w-[930px] mx-auto">
          <div className="group flex flex-col items-center">
            {/* Icon Container */}
            <div className="relative border w-[112px] h-[107px] transition-all duration-600 ease-in-out group-hover:-translate-y-4">
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#333B4F] to-[#7687B5] rounded-2xl p-[1px]">
                {/* Inner Black Box */}
                <div className="w-full h-full bg-black flex justify-center rounded-2xl items-center relative overflow-hidden">
                  {/* Backdrop Blur Effect */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-lg opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
                  {/* Icon */}
                  <img
                    src="/Vector.png"
                    alt="vector"
                    className="z-10 transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_4px_10px_rgba(255,255,255,0.3)]"
                  />
                </div>
              </div>
            </div>

            {/* Label with Smooth Hover Effect */}
            <div className="border -mt-3 hidden group-hover:block transition-all duration-1000">
              <span className="text-white">Google Ads</span>
            </div>
          </div>
          <div className="group flex flex-col items-center">
            <div className="relative border transition-all duration-600 ease-in-out  w-[112px] h-[107px] group-hover:-translate-y-4">
              <div className="absolute inset-0 bg-gradient-to-r from-[#333B4F] to-[#7687B5] rounded-2xl p-[1px]">
                {/* Inner Black Box */}
                <div className="w-full h-full bg-black flex justify-center rounded-2xl items-center relative overflow-hidden">
                  {/* Backdrop Blur Effect */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-lg opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
                  {/* Icon */}
                  <img
                    src="/Vector-2.png"
                    alt="vector"
                    className="z-10 transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_4px_10px_rgba(255,255,255,0.3)]"
                  />
                </div>
              </div>
            </div>
            <div className="border -mt-3 hidden group-hover:block transition-all duration-1000">
              <span className="text-white">Tik Tok Ads</span>
            </div>
          </div>
          <div className="group flex flex-col items-center">
            <div className="relative border transition-all duration-600 ease-in-out  w-[112px] h-[107px] group-hover:-translate-y-4">
              <div className="absolute inset-0 bg-gradient-to-r from-[#333B4F] to-[#7687B5] rounded-2xl p-[1px]">
                {/* Inner Black Box */}
                <div className="w-full h-full bg-black flex justify-center rounded-2xl items-center relative overflow-hidden">
                  {/* Backdrop Blur Effect */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-lg opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
                  {/* Icon */}
                  <img
                    src="/Vector-3.png"
                    alt="vector"
                    className="z-10 transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_4px_10px_rgba(255,255,255,0.3)]"
                  />
                </div>
              </div>
            </div>
            <div className="border -mt-3 hidden group-hover:block transition-all duration-1000">
              <span className="text-white">Meta</span>
            </div>
          </div>

          <div className="group flex flex-col items-center">
            <div className="relative border transition-all duration-600 ease-in-out  w-[112px] h-[107px] group-hover:-translate-y-4">
              <div className="absolute inset-0 bg-gradient-to-r from-[#333B4F] to-[#7687B5] rounded-2xl p-[1px]">
                {/* Inner Black Box */}
                <div className="w-full h-full bg-black flex justify-center rounded-2xl items-center relative overflow-hidden">
                  {/* Backdrop Blur Effect */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-lg opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
                  {/* Icon */}
                  <img
                    src="/Vector-4.png"
                    alt="vector"
                    className="z-10 transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_4px_10px_rgba(255,255,255,0.3)]"
                  />
                </div>
              </div>
            </div>
            <div className="border -mt-3 hidden group-hover:block transition-all duration-1000">
              <span className="text-white">Linkedin Ads</span>
            </div>
          </div>

          <div className="group flex flex-col items-center">
            <div className="relative border transition-all duration-600 ease-in-out  w-[112px] h-[107px] group-hover:-translate-y-4">
              <div className="absolute inset-0 bg-gradient-to-r from-[#333B4F] to-[#7687B5] rounded-2xl p-[1px]">
                {/* Inner Black Box */}
                <div className="w-full h-full bg-black flex justify-center rounded-2xl items-center relative overflow-hidden">
                  {/* Backdrop Blur Effect */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-lg opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
                  {/* Icon */}
                  <img
                    src="/Group.png"
                    alt="vector"
                    className="z-10 transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_4px_10px_rgba(255,255,255,0.3)]"
                  />
                </div>
              </div>
            </div>
            <div className="border -mt-3 hidden group-hover:block transition-all duration-1000">
              <span className="text-white">Amazon Ads</span>
            </div>
          </div>

          <div className="group flex flex-col items-center">
            <div className="relative border transition-all duration-600 ease-in-out  w-[112px] h-[107px] group-hover:-translate-y-4">
              <div className="absolute inset-0 bg-gradient-to-r from-[#333B4F] to-[#7687B5] rounded-2xl p-[1px]">
                {/* Inner Black Box */}
                <div className="w-full h-full bg-black flex justify-center rounded-2xl items-center relative overflow-hidden">
                  {/* Backdrop Blur Effect */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-lg opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
                  {/* Icon */}
                  <img
                    src="/Vector-5.png"
                    alt="vector"
                    className="z-10 transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_4px_10px_rgba(255,255,255,0.3)]"
                  />
                </div>
              </div>
            </div>
            <div className="border -mt-3 hidden group-hover:block transition-all duration-1000">
              <span className="text-white">X/Twitter</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
