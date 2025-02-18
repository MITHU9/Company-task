const Features = () => {
  return (
    <div>
      <div className="text-white relative text-center py-20">
        <h2 className=" bg-gradient-to-r from-[#8E8D8D]/20 to-[#282828]/40 w-[130px] font-bold mx-auto py-3 px-4 rounded-3xl uppercase mb-2">
          Features
        </h2>
        <div className="flex justify-evenly items-center">
          <div className="w-[218px] h-1 bg-gradient-to-r from-[#0D111A]  to-[#5C73AE] rounded-3xl"></div>
          <div>
            <h2 className="font-semibold text-4xl">Feature packed to make</h2>
            <h3 className="font-semibold text-4xl bg-gradient-to-r from-[#7687B5] via-#91B0FF] to-[#E2E8F8] bg-clip-text text-transparent z-30 relative">
              Digital marketing easier and affordable.
            </h3>
          </div>
          <div className="w-[218px] h-1 bg-gradient-to-r from-[#5C73AE] to-[#0D111A] rounded-3xl"></div>
        </div>
        <p className="text-gray-400 z-30 relative max-w-2xl mx-auto mt-4">
          Experience Intelligent Features to optimize your marketing efforts.
        </p>
        <div className="w-[500px] h-[240px] mx-auto rounded-[200px] absolute bottom-0 bg right-0 left-0 top-50">
          <img
            src="/Ellipse-1.png"
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="py-4 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col gap-4 order-1">
          <div
            className="relative h-[593px]
          "
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#333B4F] to-[#7687B5] rounded-lg p-[1px]">
              <div className="h-full w-full bg-gradient-to-b from-[#0B0B0B] to-[#1D2333] rounded-lg">
                <div
                  className="flex justify-center items-center w-full h-full relative overflow-hidden rounded-lg "
                  style={{
                    backgroundImage: "url(/Rectangle-5.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top center",
                  }}
                >
                  <div className="size-[480px] hero-ring"></div>
                  <div className="absolute top-[240px] left-[200px]">
                    <div className="size-2 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute top-[243px] left-[90px]">
                    <img src="/radar-circle.png" alt="radar" />
                  </div>
                  <div className="text-white absolute bottom-0 p-3">
                    <h2 className="font-bold bg-gradient-to-r from-[#FFFFFF] to-[#5C73AE] bg-clip-text text-transparent">
                      Reach Target Audience
                    </h2>
                    <p className="text-sm text-gray-500">
                      Pinpoint the perfect audience with precision. Our
                      AI-driven targeting ensures every message resonates where
                      it matters most.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-col gap-4 order-3 lg:order-2 col-span-2 lg:col-span-1 h-[300px] lg:h-full">
          <div className="relative w-1/2 lg:w-full lg:h-1/2">
            <div className="absolute inset-0 bg-gradient-to-r from-[#333B4F] to-[#7687B5] rounded-lg p-[1px]">
              <div className="h-full w-full bg-gradient-to-b from-[#0B0B0B] to-[#1D2333] rounded-lg">
                <div
                  className="flex justify-center w-full h-full relative overflow-hidden rounded-lg "
                  style={{
                    backgroundImage: "url(/Rectangle-5.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top",
                  }}
                >
                  <div className="p-[1px] mt-8 h-[125px] bg-gradient-to-r from-[#333B4F] to-[#7687B5] rounded-2xl">
                    <div className="bg-black/70 p-2 rounded-2xl">
                      <div className="relative w-[112px] h-[107px] transition-all duration-600 ease-in-out group-hover:-translate-y-4">
                        {/* Gradient Border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#333B4F] to-[#7687B5] rounded-2xl p-[1px]">
                          {/* Inner Black Box */}
                          <div className="w-full h-full bg-black/50 relative rounded-2xl p-2">
                            <img
                              src="/Vector-ring-1.png"
                              alt="vector"
                              className="z-10 transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_4px_10px_rgba(255,255,255,0.3)]"
                            />
                            <div className="absolute right-2 bottom-2 flex justify-center items-center z-20 rounded-2xl">
                              <img src="/Vector-ring-2.png" alt="ring" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-16 -right-5 p-3">
                      <h3 className="text-center bg-gradient-to-r from-[#FFFFFF] to-[#5C73AE] bg-clip-text text-transparent">
                        GEN AI Powered
                      </h3>
                      <div className="w-[162px] lg:w-[155px] h-[2px] bg-white/50"></div>
                    </div>
                  </div>
                  <div className="text-white absolute bottom-0 p-3">
                    <h2 className="font-bold bg-gradient-to-r from-[#FFFFFF] to-[#5C73AE] bg-clip-text text-transparent">
                      Marketing made Easier
                    </h2>
                    <p className="text-sm text-gray-400">
                      Save time and simplify campaign management. Let automated
                      workflows handle the heavy lifting, so you can focus on
                      creativity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-1/2 lg:w-full lg:h-1/2">
            <div className="absolute inset-0 bg-gradient-to-r from-[#333B4F] to-[#7687B5] rounded-lg p-[1px]">
              <div className="h-full w-full bg-gradient-to-b from-[#0B0B0B] to-[#1D2333] rounded-lg">
                <div
                  className="flex justify-center  w-full h-full relative overflow-hidden rounded-lg "
                  style={{
                    backgroundImage: "url(/Rectangle-5.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top",
                  }}
                >
                  <div className="flex mt-10 gap-4 justify-center">
                    <div>
                      <img src="/Frame-1.png" alt="frame" />
                    </div>
                    <div className="mt-4">
                      <img src="/Group-1.png" alt="group" />
                    </div>
                  </div>
                  <div className="text-white absolute bottom-0 p-3">
                    <h2 className="font-bold bg-gradient-to-r from-[#FFFFFF] to-[#5C73AE] bg-clip-text text-transparent">
                      Smart Marketing Insights
                    </h2>
                    <p className="text-sm text-gray-400">
                      Unlock actionable data to guide every decision. Stay ahead
                      of trends, refine your strategies, and make confident
                      moves with powerful analytics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 order-2 lg:order-3">
          <div className="relative h-[593px]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#333B4F] to-[#7687B5] rounded-lg p-[1px]">
              <div className="h-full w-full bg-gradient-to-b from-[#0B0B0B] to-[#1D2333] rounded-lg">
                <div
                  className="flex justify-center items-center w-full h-full relative overflow-hidden rounded-lg "
                  style={{
                    backgroundImage: "url(/Rectangle-5.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top center",
                  }}
                >
                  <div className="size-[490px] hero-ring"></div>
                  <div className="size-[390px] hero-ring"></div>
                  <div>
                    <img
                      src="/Vector-strike.png"
                      alt="strike"
                      className="size-[320px] object-contain"
                    />
                  </div>
                  <div className="text-white absolute bottom-0 p-3">
                    <h2 className="font-bold bg-gradient-to-r from-[#FFFFFF] to-[#5C73AE] bg-clip-text text-transparent">
                      Intelligent Agents to Optimize your Reach
                    </h2>
                    <p className="text-sm text-gray-500">
                      Scale and refine your marketing with AI-powered agents.
                      They track performance in real-time to help you reach more
                      customers efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
