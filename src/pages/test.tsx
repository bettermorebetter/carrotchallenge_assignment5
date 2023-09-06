import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div class="flex justify-center items-center w-screen h-screen bg-pink-100 px-12 py-4">
      <div class="flex justify-center w-full h-5/6 space-x-8">
        <div class="px-4 py-2 w-1/4 h-full bg-white">
          <div class="pt-8">
            <p class="text-4xl font-bold">Weather</p>
          </div>
          <div
            class="px-4 py-4 border-2
            border-gray-600 rounded-md
            shadow-md shadow-black
          flex justify-between my-4"
          >
            <div>
              <p class="font-bold">Casius</p>
              <p class="text-xs">Mars, 12AM</p>
            </div>
            <div class="flex items-center space-x-4">
              <div class="w-8 h-8 bg-slate-300 rounded-full"></div>
              <p class="text-3xl font-bold">85</p>
            </div>
          </div>
          <div
            class="px-4 py-4 border-2
            border-gray-600 rounded-md
            shadow-md shadow-black
          flex justify-between my-4
          bg-yellow-400"
          >
            <div>
              <p class="font-bold">Dlacria</p>
              <p class="text-xs">Mars, 12AM</p>
            </div>
            <div class="flex items-center space-x-4">
              <div class="w-8 h-8 bg-slate-300 rounded-full"></div>
              <p class="text-3xl font-bold">85</p>
            </div>
          </div>
          <div
            class="px-4 py-4 border-2
            border-gray-600 rounded-md
            shadow-md shadow-black
          flex justify-between my-4
          bg-emerald-400"
          >
            <div>
              <p class="font-bold">New York</p>
              <p class="text-xs">USA, 12AM</p>
            </div>
            <div class="flex items-center space-x-4">
              <div class="w-8 h-8 bg-slate-300 rounded-full"></div>
              <p class="text-3xl font-bold">85</p>
            </div>
          </div>
          <div
            class="px-4 py-4 border-2
            border-gray-600 rounded-md
            shadow-md shadow-black
          flex justify-between my-4
          bg-red-400"
          >
            <div>
              <p class="font-bold">Zomato</p>
              <p class="text-xs">India, 12AM</p>
            </div>
            <div class="flex items-center space-x-4">
              <div class="w-8 h-8 bg-slate-300 rounded-full"></div>
              <p class="text-3xl font-bold">20</p>
            </div>
          </div>
          <div
            class="shodow-black shadow-lg
          w-12 h-12 rounded-full
          flex items-center justify-center
          border-2 border-black mx-auto mt-10"
          >
            <p class="text-3xl">+</p>
          </div>
        </div>
        <div
          class="w-1/4 bg-white flex
        flex-col items-center space-y-4"
        >
          <div class="px-8 w-full mt-8 flex justify-start">
            <div
              class="flex items-center
            justify-center border-2 border-black
            rounded-full w-8 h-8"
            >
              <p>X</p>
            </div>
          </div>
          <div>
            <p class="text-sm font-semibold">SIMPLE TAG</p>
          </div>
          <div class="flex">
            <p
              class="text-2xl text-center
            font-bold"
            >
              Work with best designers
            </p>
          </div>
          <div
            class="w-5/6 h-2/5 
          grid grid-rows-2 grid-cols-2
          content-center gap-6"
          >
            <div class="bg-gray-400"></div>
            <div class="bg-gray-400"></div>
            <div class="bg-gray-400"></div>
            <div class="bg-gray-400"></div>
          </div>
          <div
            class="border-2 bg-sky-500
          w-4/5 flex justify-center items-center
          rounded-md p-2"
          >
            <button>Let get it done</button>
          </div>
        </div>
        <div
          class="w-1/4 bg-yellow-300
        space-y-2 flex flex-col items-center
        px-4"
        >
          <div
            class="py-8 flex items-center
          justify-start w-full px-4"
          >
            <div
              class="flex items-center
            justify-center border-2 border-black
            rounded-full w-8 h-8 bg-white"
            >
              <svg
                class="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </div>
            <p class="ml-16">Friends</p>
          </div>
          <div
            class="border-2 border-black
          rounded-md py-2 w-full px-4 bg-white"
          >
            <input class="bg-transparent" placeholder="Search with love ..." />
          </div>
          {[1, 1, 1].map((_, i) => (
            <div
              key={i}
              class="border-2
            border-black w-full px-4 py-2
            flex items-center rounded-md
            space-x-4 bg-white"
            >
              <div
                class="w-8 h-8 rounded-full
              bg-slate-400"
              ></div>
              <div>
                <p class="text-md font-bold">Bill Rizer</p>
                <p class="text-xs text-gray-300">Planet Designer</p>
              </div>
              <div>
                <div
                  class="border-2 border-black 
                bg-yellow-400 text-sm rounded-md
                px-2"
                >
                  <p>Invite</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;