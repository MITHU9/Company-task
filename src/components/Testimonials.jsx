const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-white relative text-center py-20">
        <h2 className=" bg-gradient-to-r from-[#8E8D8D]/20 to-[#282828]/40 w-[130px] font-bold mx-auto py-3 px-4 rounded-3xl uppercase mb-2">
          Testimonials
        </h2>
        <div className="flex justify-evenly items-center">
          <div className="w-[100px] md:w-[218px] h-1 bg-gradient-to-r from-[#0D111A]  to-[#5C73AE] rounded-3xl "></div>
          <div>
            <h2 className="font-semibold text-4xl">Trusted by</h2>
            <h3 className="font-semibold text-4xl bg-gradient-to-r from-[#7687B5] via-#91B0FF] to-[#E2E8F8] bg-clip-text text-transparent z-30 relative">
              satisfied clients
            </h3>
          </div>
          <div className="w-[100px] md:w-[218px] h-1 bg-gradient-to-r from-[#5C73AE] to-[#0D111A] rounded-3xl "></div>
        </div>
        <p className="text-gray-400 z-30 relative max-w-2xl mx-auto mt-4">
          Discover how we’ve driven growth and innovation.
        </p>
        <div className="md:w-[500px] h-[400px] mx-auto absolute bottom-0 bg right-0 left-0 top-40">
          <img
            src="/Ellipse-1.png"
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative p-[1px] h-[200px]">
          <div className="absolute inset-0 bg-gradient-to-r to-[#7687B5] from-[#333B4F] rounded-lg"></div>
          <div className="relative bg-black w-full h-full text-white p-6 rounded-lg ">
            <p className="font-semibold text-gray-400">
              “We used to struggle with consistent branding across platforms.
              adTask’s unified dashboard ensures our message stays on point
              every single time.”
            </p>
            <h2 className="font-bold mt-5">
              -Brand Director at a Tech Startup
            </h2>
          </div>
        </div>

        <div className="relative p-[1px] h-[200px]">
          <div className="absolute inset-0 bg-gradient-to-r to-[#7687B5] from-[#333B4F] rounded-lg"></div>
          <div className="relative bg-black w-full h-full text-white p-6 rounded-lg ">
            <p className="font-semibold text-gray-400">
              “adTask turned our complicated campaigns into a breeze. The
              built-in AI agents helped us reach exactly the customers we
              wanted—without guesswork!”
            </p>
            <h2 className="font-bold mt-5">– Head of Growth at Tech Startup</h2>
          </div>
        </div>

        <div className="relative p-[1px] h-[200px]">
          <div className="absolute inset-0 bg-gradient-to-r to-[#7687B5] from-[#333B4F] rounded-lg"></div>
          <div className="relative bg-black w-full h-full text-white p-6 rounded-lg ">
            <p className="font-semibold text-gray-400">
              “We’ve tried other platforms before, but none delivered the depth
              of insights adTask offers. Our conversion rates are up by 35%
              since we signed on!”
            </p>
            <h2 className="font-bold mt-5">
              –Ecommerce Manager at Home Décor Brand
            </h2>
          </div>
        </div>

        <div className="relative p-[1px] h-[200px]">
          <div className="absolute inset-0 bg-gradient-to-r to-[#7687B5] from-[#333B4F] rounded-lg"></div>
          <div className="relative bg-black w-full h-full text-white p-6 rounded-lg ">
            <p className="font-semibold text-gray-400">
              “What impressed me most was the real-time optimization. adTask’s
              intelligent agents just keep refining our campaigns—our ad spend
              has never worked harder!”
            </p>
            <h2 className="font-bold mt-5">
              – Digital Strategist at SaaS Company
            </h2>
          </div>
        </div>

        <div className="relative p-[1px] h-[200px]">
          <div className="absolute inset-0 bg-gradient-to-r to-[#7687B5] from-[#333B4F] rounded-lg"></div>
          <div className="relative bg-black w-full h-full text-white p-6 rounded-lg ">
            <p className="font-semibold text-gray-400">
              “adTask made everything from campaign setup to performance
              tracking simple. Our team can now focus on creating great content
              rather than crunching numbers.”
            </p>
            <h2 className="font-bold mt-5">
              – Social Media Lead at Non-Profit Organization
            </h2>
          </div>
        </div>

        <div className="relative p-[1px] h-[200px]">
          <div className="absolute inset-0 bg-gradient-to-r to-[#7687B5] from-[#333B4F] rounded-lg"></div>
          <div className="relative bg-black w-full h-full text-white p-6 rounded-lg ">
            <p className="font-semibold text-gray-400">
              “We’ve seen a 50% boost in engagement across our social channels
              since switching to adTask. Its AI-driven insights are
              game-changing!”
            </p>
            <h2 className="font-bold mt-5">
              – Social Media Manager at a Fitness Brand
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
