import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile2.jpg";

const Hero = () => {
  return (
    <div className="border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-6 text-5xl font-extrabold tracking-tight lg:text-7xl">Ömer Çakar</h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Mobile - iOS Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>

            {/* Skills Section */}
            <div className="mt-8">
              {/* Mobile Skills */}
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Mobile Skills</h2>
              <div className="flex flex-wrap gap-2">
                <div className="rounded-lg bg-gradient-to-r from-gray-800 to-gray-800 px-2 py-3 text-sm text-purple-200 shadow-md">
                  Swift - SwiftUI
                </div>
                <div className="rounded-lg bg-gradient-to-r  from-gray-800 to-gray-800 px-2 py-3 text-sm text-purple-200 shadow-md">
                  MVVM
                </div>
                <div className="rounded-lg bg-gradient-to-r  from-gray-800 to-gray-800 px-2 py-3 text-sm text-purple-200 shadow-md">
                  SwiftData - Firebase
                </div>
                <div className="rounded-lg bg-gradient-to-r  from-gray-800 to-gray-800 px-2 py-3 text-sm text-purple-200 shadow-md">
                  REST
                </div>
                <div className="rounded-lg bg-gradient-to-r  from-gray-800 to-gray-800 px-2 py-3 text-sm text-purple-200 shadow-md">
                  Alamofire
                </div>
                <div className="rounded-lg bg-gradient-to-r  from-gray-800 to-gray-800 px-2 py-3 text-sm text-purple-200 shadow-md">
                  Vision - RealityKit - ARKit
                </div>
                <div className="rounded-lg bg-gradient-to-r  from-gray-800 to-gray-800 px-2 py-3 text-sm text-purple-200 shadow-md">
                  Speech - NLP 
                </div>
              </div>

              {/* AI Skills */}
              <h2 className="mt-8 text-2xl font-semibold text-gray-700 mb-4">AI Skills</h2>
              <div className="flex flex-wrap gap-2">
                <div className="rounded-lg bg-gradient-to-r  from-gray-800 to-gray-800 px-2 py-3 text-sm text-purple-200 shadow-md">
                  Python
                </div>
                <div className="rounded-lg bg-gradient-to-r  from-gray-800 to-gray-800 px-2 py-3 text-sm text-purple-200 shadow-md">
                  ML
                </div>
                <div className="rounded-lg bg-gradient-to-r  from-gray-800 to-gray-800 px-2 py-3 text-sm text-purple-200 shadow-md">
                  NLP
                </div>
                <div className="rounded-lg bg-gradient-to-r  from-gray-800 to-gray-800 px-2 py-3 text-sm text-purple-200 shadow-md">
                  HuggingFace
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              className="w-[350px] h-[350px] border-4 border-stone-400 rounded-full object-cover object-[center_top]"
              src={profilePic}
              alt="Ömer Çakar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
