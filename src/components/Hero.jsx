import Marquee from "react-fast-marquee";
import bannerBg from "/Mask_group_1.webp";
import heroLogoBg from "/AdTask.ai-u.png";
import heroLogoBg1 from "/Property-1m.png";
import heroLogoBg2 from "/Property-h.png";
import heroShadowBg from "/Rectangle-2.png";
import starBg from "/gifimg.gif";
import btnBg from "/Ellipse-btn.png";
import pearls from "/Vector-pearl.png";

const Hero = () => {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${bannerBg})` }}
        className="relative py-10 flex flex-col justify-center items-center container mx-auto px-2 md:px-5 min-h-[600px] bg-no-repeat bg-cover bg-center bg-black/95 bg-blend-overlay mt-[50px]"
      >
        <p className="absolute w-fit top-0 md:-top-16 left-0 mx-auto right-0 z-[1]">
          <img
            className="filter min-h-[500px] object-cover sm:object-none drop-shadow-[0px_0px_0px_rgba(38,48,72,1)]"
            src={heroShadowBg}
            alt="heroShadowBg"
          />
        </p>
        <div className="hero-content mb-12 z-10 text-center relative min-h-[300px]">
          <div className="token-title bg-gradient-to-r from-[#8e8d8d46] to-[#0000004d] overflow-hidden relative py-3 px-5 w-fit mx-auto flex justify-center items-center gap-1.5 rounded-xl border-x-0  border border-[#6e6e6e4a] mb-10">
            <p className="absolute blaze w-[200px] h-[20px] md:h-[30px] blur-xl bg-[#ffffff96] rotate-60"></p>
            <span>
              <img src={pearls} alt="pearls" />
            </span>
            <p className="uppercase text-white text-[10px] md:text-sm">
              Transform Your Digital Presence with AI Agents
            </p>
          </div>
          <div className="animate-hero-logo relative w-fit mx-5 sm:mx-auto group mt-20">
            <div>
              <img
                className="mx-auto filter drop-shadow-2xl  top-0 left-0"
                src={heroLogoBg}
                alt="Hello"
              />
            </div>
            <img
              className="mx-auto logo-serial-1 absolute top-0 left-0"
              src={heroLogoBg1}
              alt="Hello"
            />
            <img
              className="mx-auto logo-serial-2 absolute top-0"
              src={heroLogoBg2}
              alt="Hello"
            />
            <img
              className="mx-auto logo-serial-3 absolute top-0"
              src={heroLogoBg}
              alt="Hello"
            />
          </div>
          <p className="text-center mt-10 md:w-4/6 mx-auto text-sm md:text-base text-white">
            Stop struggling with marketing decisions. Our AI assistant analyzes
            your business, creates personalized strategies, and helps you
            execute them - all in real-time.
          </p>
          <button
            style={{ backgroundImage: `url(${starBg})` }}
            className="relative bg-contain bg-center px-8 mb-4 py-2.5 border bg-[#7687B54A] border-gray-400 rounded-full mt-10 text-white"
          >
            Start Free Trial
            <p className="absolute bottom-0">
              <img src={btnBg} alt="btnBg" />
            </p>
          </button>
          <br />
          <small className="text-white">Try AdTask AI free for 30 days</small>
        </div>
      </section>

      <div
        className="lg:w-[970px] h-[500px] mt-4 border-[1px] rounded-3xl border-[#333B4F] mx-auto flex justify-center items-center relative
      before:absolute before:top-[-50%] before:left-[-50%] before:right-[-50%] before:bottom-[-50%] before:bg-[conic-gradient(transparent,transparent,#566999)] before:rounded-3xl
      before:animate-[spin_5s_linear_infinite]
      before:z-10
      overflow-hidden
      "
      >
        <div className="absolute bg-black top-[1px] left-[1px] right-[1px] bottom-[1px] flex justify-center items-center z-20 rounded-3xl">
          <img src="/AdTask.ai-u.png" alt="add" />
          <div className="absolute ">
            <img src="/logos_youtube-icon.png" alt="UTube" />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Marquee speed={90} gradient={false} className=" text-white py-4">
          <img src="/Property-1.png" alt="brand" />
        </Marquee>
      </div>
      <div className="pb-10 ">
        <h2 className="text-white text-center py-5">Adtask AI works with :</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-4 lg:w-[930px] mx-auto">
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
            <div className="border -mt-3 opacity-0 group-hover:opacity-100 transition-all duration-1000">
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
            <div className="border -mt-3 opacity-0 group-hover:opacity-100 transition-all duration-1000">
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
            <div className="border -mt-3 opacity-0 group-hover:opacity-100 transition-all duration-1000">
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
            <div className="border -mt-3 opacity-0 group-hover:opacity-100 transition-all duration-1000">
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
            <div className="border -mt-3 opacity-0 group-hover:opacity-100 transition-all duration-1000">
              <span className="text-white">X/Twitter</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
