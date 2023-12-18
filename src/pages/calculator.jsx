export default function Calculator() {
  return (
    <div className=" flex justify-center my-10 h-[38rem] w-full">
      <div className="z-30 border-2 bg-[#4f4f4f] w-96 rounded-lg drop-shadow-2xl">
        <div className="w-full h-full pt-8 px-4 text-4xl font-bold text-white">
          <div className="w-full h-[90px] bg-slate-200 rounded-md"></div>
          <div className="flex flex-col gap-4 pt-4">
            <div className="flex flex-row gap-4">
              <div className="bg-orange-400 h-[76px] w-[76px] rounded-xl flex justify-center items-center drop-shadow-xl">
                C
              </div>
              <div className="bg-slate-600 h-[76px] w-[76px] rounded-xl flex justify-center items-center drop-shadow-lg">
                %
              </div>
              <div className="bg-slate-600 h-[76px] w-[76px] rounded-xl flex justify-center items-center drop-shadow-lg">
                /
              </div>
              <div className="bg-slate-600 h-[76px] w-[76px] rounded-xl flex justify-center items-center drop-shadow-lg">
                *
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="bg-slate-800 h-[76px] w-[76px] rounded-xl flex justify-center items-center drop-shadow-lg">
                1
              </div>
              <div className="bg-slate-800 h-[76px] w-[76px] rounded-xl flex justify-center items-center drop-shadow-lg">
                2
              </div>
              <div className="bg-slate-800 h-[76px] w-[76px] rounded-xl flex justify-center items-center drop-shadow-lg">
                3
              </div>
              <div className="bg-slate-700 h-[76px] w-[76px] rounded-xl flex justify-center items-center drop-shadow-lg">
                -
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="bg-slate-800 h-[76px] w-[76px] rounded-xl flex justify-center items-center drop-shadow-lg">
                4
              </div>
              <div className="bg-slate-800 h-[76px] w-[76px] rounded-xl flex justify-center items-center drop-shadow-lg">
                5
              </div>
              <div className="bg-slate-800 h-[76px] w-[76px] rounded-xl flex justify-center items-center drop-shadow-lg">
                6
              </div>
              <div className="bg-slate-700 h-[76px] w-[76px] rounded-xl flex justify-center items-center drop-shadow-lg">
                +
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4">
                  <div className="bg-slate-800 h-[76px] w-[76px] rounded-xl flex justify-center items-center drop-shadow-lg">
                    7
                  </div>
                  <div className="bg-slate-800 h-[76px] w-[76px] rounded-xl flex justify-center items-center drop-shadow-lg">
                    8
                  </div>
                  <div className="bg-slate-800 h-[76px] w-[76px] rounded-xl flex justify-center items-center drop-shadow-lg">
                    9
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="flex flex-grow bg-slate-800 h-[76px] w-[76px] rounded-xl px-8 items-center">
                    0
                  </div>
                  <div className="bg-slate-800 h-[76px] w-[76px] rounded-xl flex justify-center items-center drop-shadow-lg">
                    .
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-grow bg-orange-400 h-[76px] w-[76px] rounded-xl justify-center items-center drop-shadow-lg">
                  =
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
