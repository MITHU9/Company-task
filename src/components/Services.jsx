const Services = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-white relative text-center py-20">
        <h2 className=" bg-gradient-to-r from-[#8E8D8D]/20 to-[#282828]/40 w-[130px] font-bold mx-auto py-3 px-4 rounded-3xl uppercase">
          Services
        </h2>
        <div className="flex justify-evenly items-center">
          <div className="w-[218px] h-1 bg-gradient-to-r from-[#0D111A]  to-[#5C73AE] rounded-3xl"></div>
          <div className="mt-3">
            <h2 className="font-semibold text-4xl">Innovative Services</h2>
            <h3 className="font-semibold text-4xl bg-gradient-to-r from-[#7687B5] via-#91B0FF] to-[#E2E8F8] bg-clip-text text-transparent z-30 relative">
              for Growth.
            </h3>
          </div>
          <div className="w-[218px] h-1 bg-gradient-to-r from-[#5C73AE] to-[#0D111A] rounded-3xl"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        <div
          className=" relative flex flex-col gap-4 items-center justify-center h-[292px] "
          style={{
            backgroundImage: "url(/Rectangle-5.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
          }}
        >
          <div className="absolute -top-5  -left-4">
            <img src="/sill.png" alt="sill" />
          </div>
          <div className="absolute -left-2">
            <img src="/Line-verticle.png" alt="line" />
          </div>
          <div className="absolute -right-[8px]">
            <img src="/Line-verticle.png" alt="line" />
          </div>
          <div className="absolute -top-[10px]">
            <img src="/Line-horizontal.png" alt="line" />
          </div>
          <div className="">
            <img src="/service-1.png" alt="light" />
          </div>

          <div className="text-white w-[320px] mt-3 text-center">
            <h2 className="mb-2 font-bold text-lg">Smart Ad Targeting</h2>
            <p>
              AI-powered audience segmentation ensures your ads reach the right
              people, delivering higher ROI and maximum conversion rates.
            </p>
          </div>
        </div>

        <div
          className=" flex relative flex-col gap-4 items-center justify-center h-[292px] "
          style={{
            backgroundImage: "url(/Rectangle-5.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
          }}
        >
          <div className="absolute -top-5  -left-4">
            <img src="/sill.png" alt="sill" />
          </div>
          <div className="absolute -top-5  -right-4">
            <img src="/sill.png" alt="sill" />
          </div>
          <div className="absolute -right-[8px]">
            <img src="/Line-verticle.png" alt="line" />
          </div>
          <div className="absolute -top-[10px]">
            <img src="/Line-horizontal.png" alt="line" />
          </div>

          <div className="">
            <img src="/service-2.png" alt="light" />
          </div>

          <div className="text-white w-[320px] mt-3 text-center">
            <h2 className="mb-2 font-bold text-lg">Performance Analytics</h2>
            <p>
              Access real-time insights and track key metrics across all
              campaigns in one unified dashboard to quickly refine your
              strategies.
            </p>
          </div>
        </div>

        <div
          className="relative flex flex-col gap-4 items-center justify-center h-[292px] "
          style={{
            backgroundImage: "url(/Rectangle-5.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
          }}
        >
          <div className="absolute -top-5  -left-4">
            <img src="/sill.png" alt="sill" />
          </div>
          <div className="absolute -top-5  -right-4">
            <img src="/sill.png" alt="sill" />
          </div>
          <div className="absolute -left-2">
            <img src="/Line-verticle.png" alt="line" />
          </div>
          <div className="absolute -right-[8px]">
            <img src="/Line-verticle.png" alt="line" />
          </div>
          <div className="absolute -top-2">
            <img src="/Line-horizontal.png" alt="line" />
          </div>

          <div className="">
            <img src="service-3.png" alt="light" />
          </div>

          <div className="text-white w-[320px] mt-3 text-center">
            <h2 className="mb-2 font-bold text-lg">SEO Automation</h2>
            <p>
              Automate keyword research and content optimization suggestions to
              improve your search engine rankings with less effort.
            </p>
          </div>
        </div>

        <div
          className="relative flex flex-col gap-4 items-center justify-center h-[292px] "
          style={{
            backgroundImage: "url(/Rectangle-5.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
          }}
        >
          <div className="absolute -top-5 -left-4 ">
            <img src="/sill.png" alt="sill" />
          </div>
          <div className="absolute -top-5 -right-4 lg:hidden">
            <img src="/sill.png" alt="sill" />
          </div>
          <div className="absolute -bottom-5  -left-4">
            <img src="/sill.png" alt="sill" />
          </div>
          <div className="absolute -left-2">
            <img src="/Line-verticle.png" alt="line" />
          </div>
          <div className="absolute -right-[8px]">
            <img src="/Line-verticle.png" alt="line" />
          </div>
          <div className="absolute top-0">
            <img src="/Line-horizontal.png" alt="line" />
          </div>
          <div className="absolute hidden -bottom-1 lg:block">
            <img src="/Line-horizontal.png" alt="line" />
          </div>

          <div className="">
            <img src="service-4.png" alt="light" />
          </div>

          <div className="text-white w-[320px] mt-3 text-center">
            <h2 className="mb-2 font-bold text-lg">Social Media Marketing</h2>
            <p>
              AI agents craft personalized content, schedule posts, monitor
              engagement, and refine strategies in real time for maximum impact
              across all major social platforms.
            </p>
          </div>
        </div>

        <div
          className="relative flex flex-col gap-4 items-center justify-center h-[292px]"
          style={{
            backgroundImage: "url(/Rectangle-5.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
          }}
        >
          <div className="absolute -bottom-4  -left-4">
            <img src="/sill.png" alt="sill" />
          </div>
          <div className="absolute -bottom-4  -right-4">
            <img src="/sill.png" alt="sill" />
          </div>
          <div className="absolute -top-5 -left-4 lg:hidden">
            <img src="/sill.png" alt="sill" />
          </div>
          <div className="absolute -left-2">
            <img src="/Line-verticle.png" alt="line" />
          </div>
          <div className="absolute -right-[8px]">
            <img src="/Line-verticle.png" alt="line" />
          </div>
          <div className="absolute top-0">
            <img src="/Line-horizontal.png" alt="line" />
          </div>
          <div className="absolute -bottom-1">
            <img src="/Line-horizontal.png" alt="line" />
          </div>

          <div className="">
            <img src="service-5.png" alt="light" />
          </div>

          <div className="text-white w-[320px] mt-3 text-center">
            <h2 className="mb-2 font-bold text-lg">Conversion Optimization</h2>
            <p>
              AI-driven A/B testing and automated tweaks to landing pages and
              funnels help you consistently improve conversion rates.
            </p>
          </div>
        </div>

        <div
          className=" flex flex-col gap-4 items-center justify-center h-[292px] relative"
          style={{
            backgroundImage: "url(/Rectangle-5.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
          }}
        >
          <div className="absolute -bottom-4  -right-4">
            <img src="/sill.png" alt="sill" />
          </div>
          <div className="absolute -top-4  -right-4">
            <img src="/sill.png" alt="sill" />
          </div>
          <div className="absolute -left-2">
            <img src="/Line-verticle.png" alt="line" />
          </div>
          <div className="absolute -right-[8px]">
            <img src="/Line-verticle.png" alt="line" />
          </div>
          <div className="absolute top-0">
            <img src="/Line-horizontal.png" alt="line" />
          </div>
          <div className="absolute -bottom-1">
            <img src="/Line-horizontal.png" alt="line" />
          </div>

          <div className="">
            <img src="/service-6.png" alt="light" />
          </div>

          <div className="text-white w-[320px] mt-3 text-center">
            <h2 className="mb-2 font-bold text-lg">Campaign Automation</h2>
            <p>
              Centralize and streamline your ad management. Our intelligent
              engine automatically adjusts bids, budgets, and targeting to
              maximize results.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center py-20">
        <button
          className="text-white border relative border-[#7687B5] px-10 py-3 rounded-3xl"
          style={{
            backgroundImage: "url(/gifimg.gif)",
          }}
        >
          <span className="font-semibold">contact us</span>
          <div className="absolute bottom-0 right-4">
            <img src="/Ellipse-btn.png" alt="ellipse" className="" />
          </div>
        </button>
        <span>
          <img src="/gifimg.gif" alt="gif" className="size-1" />
        </span>
      </div>
    </div>
  );
};
export default Services;
