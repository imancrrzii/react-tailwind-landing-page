import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { tabsData } from "../utils/data";
import { HiArrowRight } from "react-icons/hi";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

const DesignSection = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const progressInterval = useRef(null);
  const PROGRESS_DURATION = 10000;
  const UPDATE_INTERVAL = 100;

  useEffect(() => {
    startProgressTimer();
    return () => clearInterval(progressInterval.current);
  }, [activeTab]);
  const startProgressTimer = () => {
    setProgress(0);
    clearInterval(progressInterval.current);
    progressInterval.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          const currentIndex = tabsData.findIndex(
            (tab) => tab.id === activeTab
          );
          const nextIndex = (currentIndex + 1) % tabsData.length;
          setActiveTab(tabsData[nextIndex].id);
        }
        return prev + (UPDATE_INTERVAL / PROGRESS_DURATION) * 100;
      });
    }, UPDATE_INTERVAL);
  };

  // handle next click
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setIsPlaying(true);
    setProgress(0);
  };

  // toggle video play and pause
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    const video = document.querySelector(`video[data-tab="${activeTab}"]`);
    if (video) {
      if (isPlaying) {
        video.pause();
        clearInterval(progressInterval.current);
      } else {
        video.play();
        startProgressTimer();
      }
    }
  };

  return (
    <div className="overflow-hidden py-24 bg-black text-white">
      <div className="primary-container">
        {/* header */}
        <div className="max-w-[50rem] lg:mb-24 mb-12">
          <h2 className="sm:text-6xl text-5xl md:text-7xl font-bold text-white mb-8">
            Launch pixel-perfect sites
          </h2>
        </div>

        {/* content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* content */}
          <div className="flex flex-col justify-between gap-16">
            {/* subheading and button */}
            <div>
              <p className="text-2xl text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                eos fugit, adipisci, ullam, nostrum odit voluptas fugiat
                deleniti consectetur facilis et quidem maxime necessitatibus
                quod.
              </p>

              <Link className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 mt-8">
                Get Started <span className="font-medium ml-1">it's free</span>
              </Link>
            </div>
            <div className="space-y-6">
              {tabsData.map((tab, index) => (
                <div
                  onClick={() => handleTabClick(tab.id)}
                  className="relative pl-4 cursor-pointer"
                >
                  {/* progress bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-800">
                    {activeTab === tab.id && (
                      <div
                        className="absolute top-0 left-0 w-full bg-blue-600 transition-all duration-100"
                        style={{ height: `${progress}%` }}
                      ></div>
                    )}
                  </div>

                  {/* title */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {tab.title}
                  </h3>

                  {/* subtitle */}
                  <p
                    className={`text-gray-400 transition-all duration-300 ${
                      activeTab === tab.id
                        ? "h-auto opacity-100"
                        : "h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    {tab.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* video */}
          <div className="relative">
            <div className="max-w-[640px] mx-auto">
              {tabsData.map((tab) => (
                <div
                  className={`transition-opacity duration-500 ${
                    activeTab === tab.id ? "opacity-100" : "opacity-0 hidden"
                  }`}
                >
                  <video
                    src={tab.video}
                    className="w-full rounded-lg"
                    autoPlay
                    muted
                    playsInline
                    loop
                    data-tab={tab.id}
                    poster={tab.poster}
                  ></video>

                  {/* bottom text */}
                  <div className="flex items-center justify-between mt-4">
                    <Link
                      to={"/"}
                      className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-200"
                    >
                      {tab.cta.text}
                      <HiArrowRight className="ml-2" />
                    </Link>

                    <button
                      onClick={togglePlayPause}
                      className="p-2 text-white hover:text-gray-300"
                    >
                      {isPlaying ? (
                        <BsPauseFill size={24} />
                      ) : (
                        <BsFillPlayFill size={24} />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSection;
