const Schedule = () => {
  return (
    <div className="max-w-7xl mx-auto mt-40">
      <div>
        <div className="flex justify-center items-center">
          <img src="/public/AdTask.ai-u.png" alt="logo" />
        </div>
      </div>

      <div className="py-10">
        <div className="flex flex-col justify-center items-center py-16">
          <h2 className="text-white text-4xl ">Are you ready to boost</h2>
          <h3 className="font-semibold text-4xl bg-gradient-to-r from-[#7687B5] via-#91B0FF] to-[#E2E8F8] bg-clip-text text-transparent z-30 relative">
            your Digital Presence
          </h3>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <button
              className="text-white border-2 bg-[#7687B5] relative border-[#bac0d0] px-12 py-3 rounded-full"
              style={{
                backgroundImage: "url(/gifimg.gif)",
              }}
            >
              <span className="font-semibold">Start Free trail</span>
              <div className="absolute bottom-0 right-8">
                <img src="/Ellipse-btn.png" alt="ellipse" className="" />
              </div>
            </button>
            <span>
              <img src="/gifimg.gif" alt="gif" className="size-1" />
            </span>
          </div>
          <button className="bg-[#333B4F] relative px-12 py-3 rounded-3xl mt-2 font-semibold text-white border border-[#7687B5]">
            Schedule a Call
          </button>
        </div>
      </div>
    </div>
  );
};
export default Schedule;
