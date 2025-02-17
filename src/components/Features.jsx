const Features = () => {
  return (
    <div>
      <div className="text-white text-center py-20">
        <h2>Features</h2>
        <div>
          <h2>Feature packed to make</h2>
          <h3>Digital marketing easier and affordable.</h3>
        </div>
        <p>
          Experience Intelligent Features to optimize your marketing efforts.
        </p>
      </div>
      <div className="py-4 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col gap-4 order-1">
          <div
            className="relative h-[593px]
          "
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#333B4F] to-[#7687B5] rounded-lg p-[1px]">
              <div className="h-full w-full bg-black rounded-lg">
                <div
                  className="flex justify-center items-center w-full h-full relative overflow-hidden rounded-lg "
                  style={{
                    backgroundImage: "url(/Rectangle-5.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top center",
                  }}
                >
                  <div className="absolute top-[240px] left-[170px]">
                    <div className="size-2 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute top-[243px] left-[61px]">
                    <img src="/radar-circle.png" alt="radar" />
                  </div>
                  <div className="text-white absolute bottom-0 p-3">
                    <h2 className="font-bold">Reach Target Audience</h2>
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
              <div className="h-full w-full bg-black rounded-lg"></div>
            </div>
          </div>
          <div className="relative w-1/2 lg:w-full lg:h-1/2">
            <div className="absolute inset-0 bg-gradient-to-r from-[#333B4F] to-[#7687B5] rounded-lg p-[1px]">
              <div className="h-full w-full bg-black rounded-lg"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 order-2 lg:order-3">
          <div className="relative h-[593px]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#333B4F] to-[#7687B5] rounded-lg p-[1px]">
              <div className="h-full w-full bg-black rounded-lg"></div>
            </div>
            <p className="relative">This box has a gradient border!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
