import { Splide, SplideSlide } from "@splidejs/react-splide";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import "@splidejs/react-splide/css";
import Project from "../components/Project";
import { projects } from "../data/data";
import Technologies from "../components/Technologies";

export default function Home() {
  useEffect(() => {
    const gsap = window.gsap;
    // let custom_nav = document.querySelector(".custom-nav");
    // let hero = document.querySelector("#hero");

    let tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to(".cover-text", { opacity: "100%", duration: 2 });
    tl.to(".cover-two", { y: "-100%", duration: 1.5, delay: 0.5 });
    tl.to(".cover-one", { y: "-100%", duration: 1 }, "-=1");
    tl.to(".progress-section", { opacity: "100%", duration: 0.5 });
    tl.to(".custom-nav", { opacity: "100%", duration: 0.5 }, "-=0.5");
    tl.to(".socials", { opacity: "100%", y: "0%", duration: 1 }, "-=0.5");
  }, []);

  useEffect(() => {
    let main_container = document.querySelector(".main-container");
    let progressBar = document.querySelector(".progress-bar");

    let custom_nav = document.querySelector(".custom-nav");
    let back_to_top = document.querySelector(".back-to-top");

    const updateProgressBar = () => {
      progressBar.style.height = `${getScrollPercentage()}%`;
      custom_nav.style.background = `rgba(4, 8, 15, ${
        getNavPercentage() >= 1 ? 1 : 0
      })`;
      back_to_top.style.display = `${
        getNavPercentage() >= 1 ? "flex" : "none"
      }`;
      back_to_top.style.opacity = `${getNavPercentage() >= 1 ? 1 : 0}`;
      requestAnimationFrame(updateProgressBar);
    };
    const getNavPercentage = () => {
      return main_container.scrollTop / main_container.clientHeight;
    };
    const getScrollPercentage = () => {
      return (
        (main_container.scrollTop /
          (main_container.scrollHeight - main_container.clientHeight)) *
        100
      );
    };
    updateProgressBar();
  });

  useEffect(() => {}, []);

  const scrollToName = (e) => {
    // console.log(e.target.getAttribute("name"));
    document
      .getElementById(e.target.getAttribute("name"))
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="main-container">
      <Head>
        <title>James V.</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Fira+Sans"
        ></link>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"
          integrity="sha512-VEBjfxWUOyzl0bAwh4gdLEaQyDYPvLrZql3pw1ifgb6fhEvZl9iDDehwHZ+dsMzA0Jfww8Xt7COSZuJ/slxc4Q=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js"></script>
        <script src="/js/progressBar.js"></script>
      </Head>
      <div className="custom-nav fixed top-0 left-0 flex justify-between items-center w-full z-10 p-[10%] py-4 text-[#eff6ee]">
        <a href="/" className="font-semibold text-[#fff]">
          James V.
        </a>
        <nav className="flex">
          <div
            className="custom-nav-item hover:text-[#5761ec] cursor-pointer text-xs sm:text-sm md:text-md font-medium"
            onClick={scrollToName}
            name="about"
          >
            ABOUT
          </div>
          <div
            className="custom-nav-item hover:text-[#5761ec] cursor-pointer text-xs sm:text-sm md:text-md font-medium"
            onClick={scrollToName}
            name="projects"
          >
            PROJECT
          </div>
          <div
            className="custom-nav-item hover:text-[#5761ec] cursor-pointer text-xs sm:text-sm md:text-md font-medium"
            onClick={scrollToName}
            name="contact"
          >
            CONTACT
          </div>
        </nav>
      </div>
      <section
        className="flex flex-col justify-center items-center bg-[#04080f]"
        id="hero"
      >
        <div className="bg-gray-900 h-1/6 w-full border-b-2 border-[#5761ec]"></div>
        <div className="my-auto">
          <div className="mb-5">
            <h1 className="text-md sm:text-lg md:text-xl hero-text mb-2">
              I'm James Virtudazo.
            </h1>
            <h3 className="text-2xl md:text-2xl lg:text-4xl font-bold">
              I'm a{" "}
              <span className="text-[#5761ec]">Full Stack Web Developer.</span>
            </h3>
          </div>
          <div className="flex space-x-2">
            {/* <div
              className="p-2 bg-gray-100 cursor-pointer"
              onClick={scrollToName}
              name="about"
            >
              About Me
            </div> */}
            <div
              className="py-2 md:py-2 px-2 md:px-4 cursor-pointer text-sm md:text-md lg:text-lg border border-[#5761ec] hover:border-[#5761ec] hover:bg-[#5761ec] text-[#eff6ee] transition duration-600 ease-in-out"
              onClick={scrollToName}
              name="projects"
            >
              View Projects
            </div>
            {/* <div
              className="p-2 bg-gray-100 cursor-pointer"
              onClick={scrollToName}
              name="contact"
            >
              Get in Touch
            </div> */}
          </div>
        </div>
        <div className="bg-gray-900 h-1/6 w-full border-t-2 border-[#5761ec]"></div>
      </section>
      <section className="abg-[#eff6ee] bg-white text-gray-800" id="about">
        <div
          className="flex flex-col sm:flex-row lg:flex-row h-full w-full"
          id="about-div"
        >
          <div className="flex items-center mb-0 md:mb-5 sm:w-1/3 h-1/3 sm:h-full md:h-full px-12">
            <div>
              <h1 className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold hero-text mb-2">
                About
              </h1>
              <h3 className="text-xs sm:text-sm md:text-md font-medium">
                I'm an Engineering Student with a passion for creating solutions
                using both hardware and software. I'm a self-taught Programmer
                and Full Stack Web Developer experienced in various
                technologies. I create and maintain software for schools and
                small businesses.
              </h3>
            </div>
          </div>
          <div className="flex items-center mb-0 md:mb-5 sm:w-2/3 h-2/3 sm:h-full md:h-full px-12 abg-gray-500 bg-[#04080f]">
            <div className="flex flex-col space-y-4 lg:space-y-24 text-gray-100">
              <div>
                <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold hero-text mb-2 lg:mb-5">
                  Experience
                </h1>
                <div className="space-x-2 ml-2 lg:ml-10 flex">
                  <div className="experience">
                    <a
                      href="https://dentistfind.com"
                      className="text-lg lg:text-2xl mb-2 font-medium text-[#5761ec]"
                    >
                      Dentist Find
                    </a>
                    <p className="text-sm text-gray-400">
                      Web Development Intern
                    </p>
                    <p className="text-xs text-gray-400">
                      Toronto, Ontario, Canada
                    </p>
                    {/* <h4 className="text-sm lg:text-md font-medium">Tasks:</h4> */}
                    <ul className="ml-5 list-disc text-xs lg:text-base">
                      <li>
                        Work with Senior Developers on new and existing internal
                        business tools.
                      </li>
                      <li>Maintain and monitor existing client websites.</li>
                      <li>Implement UI/UX designs.</li>
                      <li>Undergo various trainings.</li>
                    </ul>
                  </div>
                  <div className="experience">
                    <h2 className="text-lg lg:text-2xl mb-2 font-medium text-[#5761ec]">
                      Freelance Web Developer
                    </h2>
                    <ul className="ml-5 list-disc text-xs lg:text-base">
                      <li>
                        Create and host Full Stack Applications for local
                        businesses.
                      </li>
                      <li>ReactJS + Django/Flask + MySQL + Nginx</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold hero-text md:mb-2">
                  Technologies
                </h1>
                <Technologies />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="abg-[#04080f]" id="projects">
        <Splide options={{ speed: "1000", width: "100%" }}>
          {projects?.map((project) => (
            <SplideSlide key={project.id}>
              <Project project={project} />
            </SplideSlide>
          ))}
        </Splide>
      </section>
      <section className="bg-[#04080f]" id="contact">
        <div className="h-full w-full flex flex-col md:flex-row">
          <div className="flex items-center px-12 w-full md:w-1/3 h-1/2 md:h-full abg-[#eff6ee] bg-white text-[#04080f]">
            <div className="mt-10 md:mt-0">
              <div className="mb-5 md:mb-12">
                <h1 className="font-bold sm:text-xl md:text-2xl lg:text-4xl hero-text">
                  Got a project in mind?
                </h1>
                <p className="text-gray-500 text-xs sm:text-sm md:text-sm lg:text-base">
                  Let me help you!
                </p>
              </div>
              <div className="my-2 md:my-5 space-y-4">
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:virtjameslourd55@gmail.com">
                    virtjameslourd55@gmail.com
                  </a>
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/james-lourd-virtudazo/">
                    James Lourd Virtudazo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start pt-10 md:pt-0 md:items-center justify-center px-12 w-full md:w-1/2 h-full">
            <form
              action="https://formsubmit.co/1165917826e096d6bcf590995efdfba8"
              method="POST"
              className="w-full"
            >
              <CustomInput label={"Name"} type={"text"} name="name" />
              <CustomInput label={"Email"} type={"email"} name="email" />
              <div className="flex flex-col">
                <label
                  htmlFor="input-group-1"
                  className="block mb-2 text-sm font-medium text-[#5761ec]"
                >
                  Message
                </label>
                <div className="relative mb-6">
                  <textarea
                    name={"message"}
                    style={{ height: "8rem" }}
                    id="input-group-1"
                    className="bg-gray-800 text-white text-sm rounded-lg outline-none focus:ring-[#5761ec] focus:border-[#5761ec] block w-full p-2.5"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="flex px-4 py-2 space-x-2 rounded-md cursor-pointer border border-[#5761ec] hover:border-[#5761ec] hover:bg-[#5761ec] text-[#eff6ee] fill-[#eff6ee] transition duration-600 ease-in-out"
              >
                <div>Send</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transform rotate-45 pb-1"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* <section className="bg-red-300">
        <div>about me</div>
      </section> */}
      <div className="cover-one bg-[#04080f] flex justify-center items-center text-[#5761ec] font-bold text-6xl">
        <h1 className="hide bg-[#04080f]">
          <span className="cover-text">Hello!</span>
        </h1>
      </div>
      <div className="cover-two bg-gray-800"></div>
      <div className="progress-section">
        <div className="progress-bar-wrap bg-white">
          <div className="progress-bar"></div>
        </div>
      </div>
      <div
        className="back-to-top fixed bottom-5 flex justify-center w-full"
        name="hero"
      >
        <div
          className="bg-[#5761ec] p-2 rounded-full shadow-md text-[#eff6ee] cursor-pointer animate-bounce"
          onClick={scrollToName}
          name="hero"
        >
          <svg
            name="hero"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              name="hero"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 11l7-7 7 7M5 19l7-7 7 7"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col fixed bottom-2 right-2">
        <a
          className="socials hover:scale-125 transition duration-300 fill-white hover:fill-[#5761ec] pl-2"
          href="https://github.com/virtjames-LoneRunner"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">
            <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
          </svg>
        </a>
        <a
          className="socials hover:scale-125 transition duration-300 fill-white hover:fill-[#5761ec]"
          href="https://www.linkedin.com/in/james-lourd-virtudazo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
            <path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M25,44h-5V26h5V44z M22.485,24h-0.028C20.965,24,20,22.888,20,21.499C20,20.08,20.995,19,22.514,19c1.521,0,2.458,1.08,2.486,2.499 C25,22.887,24.035,24,22.485,24z M44,44h-5v-9c0-3-1.446-4-3-4c-1.445,0-3,1-3,4v9h-5V26h5v3c0.343-0.981,1.984-3,5-3c4,0,6,3,6,8 V44z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
