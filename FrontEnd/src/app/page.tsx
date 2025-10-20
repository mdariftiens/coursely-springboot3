import Image from "next/image";
import Link from 'next/link'
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <>
      <div>
        <div className="bg-[#080E1C]">
          {/* header area */}
          <header className="bg-[#231D4C] relative overflow-hidden max-w-[1920px] mb-24 mx-auto">
            {/* navbar area */}
            <Header />
            {/* slider area */}
            <section
              className="relative bg-brand-base-950 md:bg-gradient-to-b from-[#050820] via-brand-base-950 to-brand-base-950 pt-24 pb-44 md:pb-72 lg:pb-96 xl:pt-24">
              <div className=" container mx-auto px-3 lg:px-5">
                <div className="page relative z-20 mb-8">
                  <h1 className="uppercase text-7xl text-white font-bold">
                    Launch Your
                    <span className="block">
                      <span className="text-[#6564ED]">AdonisJS</span> Skills
                    </span>
                    <span className="block">to the Stars</span>
                  </h1>
                </div>

                <div className="gap-5">
                  <button className="bg-white px-12 py-2 rounded-md text-black">Sign up for free</button>
                  <button
                    className="bg-transparent border border-white px-12 py-2 rounded-md text-white hover:cursor-pointer hover:bg-white hover:text-black transition duration-500 ease-out items-center font-semibold">
                    New to AdonisJS? start here <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <div className="absolute z-20 bottom-0 left-0 w-full pointer-events-none">
                <svg className="text-body -mb-3"
                  width="100%" height="100%" viewBox="0 0 1427 338" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve"
                  style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10 }}>
                  <g id="Layer1"></g>
                  <rect id="Artboard1" x="-0" y="0" width="1426.86" height="337.246" style={{ fill: 'none' }}></rect>
                  <path
                    d="M5.953,332.693l100.093,-97.828l8.507,-6.565l10.673,-7.658l19.479,-7.198l45.358,-18.824l43.966,-22.807l30.774,-18.297l11.427,11.505l9.905,8.593c-0,0 6.262,5.854 16.811,2.189c10.549,-3.666 32.587,-19.818 32.587,-19.818l26.354,-23.104l26.128,-22.055c0,-0 13.105,-9.46 17.752,-8.38c4.647,1.081 21.351,13.393 21.351,13.393l38.831,-32.915l25.863,-21.511l12.54,0.581l15.967,49.955l87.85,35.525l8.116,-10.854l10.285,-7.977l33.895,-6.249l31.562,5.875l12.859,-3.597l10.515,-10.007l15.41,-17.572l28.505,-27.089l33.396,-25.487l33.241,-20.009l27.004,-7.171l16.796,-0.74l10.404,3.539l9.223,3.537l8.762,6.333l7.299,4.372l4.96,3.178l12.99,2.227l105.743,70.516l22.728,11.436l14.33,2.043l9.333,-0.09l9.914,-2.841l7.909,-4.865l5.564,-7.959l5.065,-8.806l2.494,-5.472l128.723,228.578l-1229.24,10.37Z"
                    className="fill-slate-100"></path>
                  <g id="OBJECTS">
                    <path
                      d="M264.419,153.053c-36.142,23.254 -74.588,42.921 -114.596,58.617c-11.021,4.325 -22.242,8.391 -32.296,14.641c-10.192,6.338 -18.904,14.742 -27.529,23.079c-26.875,25.975 -58.471,58.196 -85.346,84.171l4.433,0c2.371,-1.9 4.584,-3.912 6.6,-5.929c51.909,-36.333 93.438,-67.479 155.725,-83.05c39.43,-8.767 64.088,-54.467 95.784,-87.25c-0.559,-1.154 -1.121,-2.304 -1.663,-3.462c-0.371,-0.28 -0.737,-0.571 -1.112,-0.817Z"
                      style={{ fill: 'none', fillRule: 'nonzero', stroke: '#080E1C', strokeWidth: '4.17px' }}></path>
                    <path
                      d="M265.53,153.871c0.541,1.158 1.108,2.308 1.662,3.462c0.367,-0.379 0.725,-0.779 1.096,-1.158c-0.913,-0.854 -1.829,-1.608 -2.758,-2.304Z"
                      style={{ fill: 'none', fillRule: 'nonzero', stroke: 'currentColor', strokeWidth: '4.17px' }}></path>
                    <path
                      d="M467.29,229.005c46.425,-27.854 105.225,-39.2 139.425,-82.108c-8.43,-20.817 -30.075,-35.621 -52.555,-35.759c-6.687,-0.041 -13.587,1.067 -19.933,-1.05c-14.812,-4.937 -17.221,-21.758 -21.283,-38.025c-1.559,-6.225 -6.413,-10.246 -11.929,-11.483c-9.921,25.887 -20.463,51.121 -33.725,74.992c57.1,15.57 20.762,62.287 -0,93.433Z"
                      style={{ fill: 'currentColor', fillRule: 'nonzero', stroke: 'currentColor', strokeWidth: '4.17px' }}></path>
                    <path
                      d="M626.502,129.131c-7.805,4.663 -14.559,11.025 -19.355,18.771c-0.129,-0.342 -0.291,-0.667 -0.433,-1.004c-34.2,42.908 -93,54.254 -139.425,82.108c20.763,-31.146 57.1,-77.862 0,-93.433c13.263,-23.871 23.804,-49.104 33.725,-74.996c-4.746,-1.062 -9.975,-0.1 -14.083,3.579l-58.925,52.784l-21.946,-14.68c-9.825,1.513 -17.9,8.275 -25.417,14.775c-14.054,12.146 -28.108,24.292 -42.162,36.438c-11.825,10.221 -24.55,20.867 -40.017,23.137c-13.471,1.98 -21.571,-12.32 -30.179,-20.433c-0.371,0.375 -0.725,0.775 -1.092,1.154c14.638,30.375 33.559,58.484 59.942,71.675c31.146,20.763 67.483,10.384 93.437,41.529c10.38,5.192 25.955,10.38 36.338,5.192c41.525,-20.767 83.05,-51.908 114.2,-5.192c32.804,-36.908 62.337,-90.016 55.392,-141.404Z"
                      style={{ fill: 'none', fillRule: 'nonzero', stroke: 'currentColor', strokeWidth: '4.17px' }}></path>
                    <path
                      d="M1007.14,166.717c0,-20.763 -62.292,-25.954 -67.479,-72.671l20.762,-0c-15.175,-21.25 -35.662,-38.958 -54.225,-58.296c-6.758,-3.667 -13.254,-9.337 -19.975,-13.137c-25.091,-14.175 -56.67,-1.809 -81.112,13.466c-33.067,20.671 -62.808,46.65 -87.738,76.638c-4.762,5.729 -9.795,11.912 -16.925,14.071c-3.037,0.916 -6.112,0.966 -9.195,0.6c44.825,25.612 90.183,47.387 139.4,65.283c31.141,5.192 57.1,10.383 83.054,25.954c-15.575,-31.146 -20.767,-67.479 -41.529,-98.625c46.716,67.479 93.437,124.579 176.487,140.154c-31.142,-15.575 -41.525,-57.1 -41.525,-93.437Z"
                      style={{ fill: 'none', fillRule: 'nonzero', stroke: 'currentColor', strokeWidth: '4.17px' }}></path>
                    <path
                      d="M1090.19,177.099c36.337,36.337 77.862,72.671 124.579,103.816c-31.142,-25.954 -57.096,-62.291 -67.479,-93.433c-11.025,-36.754 -24.667,-65.696 -40.896,-94.208c-2.142,3.083 -3.284,7.216 -4.829,10.766c-7.792,17.946 -31.784,23.863 -50.425,17.913c-9.45,-3.017 -17.817,-8.246 -25.55,-14.492c10.354,32.834 46.883,47.488 64.6,69.638Z"
                      style={{ fill: 'none', fillRule: 'nonzero', stroke: 'currentColor', strokeWidth: '4.17px' }}></path>
                    <path
                      d="M1257.05,189.755c-14.446,-6.287 -32.067,-9.7 -40.013,-23.3c-3.604,-6.17 -4.562,-13.625 -8.262,-19.737c-4.263,-7.038 -11.638,-11.496 -18.725,-15.675c-21.513,-12.7 -43.029,-25.396 -64.542,-38.092c-4.562,-2.691 -10.041,-5.458 -14.896,-3.341c-1.804,0.787 -3.129,2.1 -4.216,3.666c16.229,28.509 29.871,57.45 40.9,94.204c10.379,31.146 36.333,67.48 67.479,93.434c-46.717,-31.146 -88.246,-67.479 -124.579,-103.817c-17.721,-22.15 -54.246,-36.8 -64.604,-69.633c-7.517,-6.071 -14.438,-13.092 -21.159,-20c-15.354,-15.775 -30.704,-31.55 -46.058,-47.325c-4.263,-4.375 -9.171,-9.054 -15.275,-9.225c-7.304,-0.204 -13.133,6.083 -20.217,7.879c-5.883,1.487 -11.366,-0.158 -16.683,-3.042c18.562,19.338 39.046,37.046 54.225,58.292l-20.763,-0c5.188,46.721 67.48,51.908 67.48,72.675c-0,36.333 10.383,77.862 41.525,93.437c-83.05,-15.575 -129.771,-72.675 -176.488,-140.158c20.763,31.146 25.954,67.483 41.529,98.629c-25.954,-15.575 -51.912,-20.766 -83.054,-25.954c-49.217,-17.9 -94.575,-39.675 -139.4,-65.283c-6.417,-0.767 -12.896,-3.509 -19.267,-5.209c-15.262,-4.075 -31.958,-1.133 -45.483,6.95c6.946,51.392 -22.587,104.496 -55.392,141.405c-31.15,-46.717 -72.675,-15.575 -114.2,5.191c-10.383,5.188 -25.958,0 -36.337,-5.191c-25.954,-31.146 -62.292,-20.767 -93.438,-41.53c-26.383,-13.191 -45.304,-41.3 -59.941,-71.675c-31.696,32.784 -56.354,78.488 -95.784,87.25c-62.287,15.575 -103.816,46.717 -155.725,83.055c-2.016,2.012 -4.229,4.029 -6.6,5.929l1414.11,-0c-58.258,-28.929 -106.504,-117.854 -166.15,-143.809"
                      style={{ fill: 'currentColor', fillRule: 'nonzero' }}></path>
                    <path
                      d="M1257.05,189.755c-14.446,-6.287 -32.067,-9.7 -40.013,-23.3c-3.604,-6.17 -4.562,-13.625 -8.262,-19.737c-4.263,-7.038 -11.638,-11.496 -18.725,-15.675c-21.513,-12.7 -43.029,-25.396 -64.542,-38.092c-4.562,-2.691 -10.041,-5.458 -14.896,-3.341c-1.804,0.787 -3.129,2.1 -4.216,3.666c16.229,28.509 29.871,57.45 40.9,94.204c10.379,31.146 36.333,67.48 67.479,93.434c-46.717,-31.146 -88.246,-67.479 -124.579,-103.817c-17.721,-22.15 -54.246,-36.8 -64.604,-69.633c-7.517,-6.071 -14.438,-13.092 -21.159,-20c-15.354,-15.775 -30.704,-31.55 -46.058,-47.325c-4.263,-4.375 -9.171,-9.054 -15.275,-9.225c-7.304,-0.204 -13.133,6.083 -20.217,7.879c-5.883,1.487 -11.366,-0.158 -16.683,-3.042c18.562,19.338 39.046,37.046 54.225,58.292l-20.763,-0c5.188,46.721 67.48,51.908 67.48,72.675c-0,36.333 10.383,77.862 41.525,93.437c-83.05,-15.575 -129.771,-72.675 -176.488,-140.158c20.763,31.146 25.954,67.483 41.529,98.629c-25.954,-15.575 -51.912,-20.766 -83.054,-25.954c-49.217,-17.9 -94.575,-39.675 -139.4,-65.283c-6.417,-0.767 -12.896,-3.509 -19.267,-5.209c-15.262,-4.075 -31.958,-1.133 -45.483,6.95c6.946,51.392 -22.587,104.496 -55.392,141.405c-31.15,-46.717 -72.675,-15.575 -114.2,5.191c-10.383,5.188 -25.958,0 -36.337,-5.191c-25.954,-31.146 -62.292,-20.767 -93.438,-41.53c-26.383,-13.191 -45.304,-41.3 -59.941,-71.675c-31.696,32.784 -56.354,78.488 -95.784,87.25c-62.287,15.575 -103.816,46.717 -155.725,83.055c-2.016,2.012 -4.229,4.029 -6.6,5.929l1414.11,-0c-58.258,-28.929 -106.504,-117.854 -166.15,-143.809Z"
                      style={{ fill: 'none', fillRule: 'nonzero', stroke: 'currentColor', strokeWidth: '4.17px' }}></path>
                    <path
                      d="M100.969,255.649c5.325,-6.7 10.979,-13.254 17.916,-18.608c3.425,-2.713 7.234,-5.017 11.321,-6.8c3.996,-1.817 8.779,-2.692 12.634,-3.454c3.85,-0.65 6.412,-3.209 9.445,-6.392c3.084,-3.067 6.296,-6.021 9.775,-8.621c6.871,-5.304 14.563,-9.491 22.63,-12.408c-7.375,4.383 -14.25,9.371 -20.567,14.921c-3.129,2.816 -6.167,5.708 -8.979,8.825c-1.421,1.558 -2.934,3.221 -4.817,4.687c-1.85,1.504 -4.321,2.559 -6.537,3.042c-4.521,0.817 -8.209,1.462 -12.092,3.037c-3.829,1.434 -7.433,3.505 -10.925,5.796c-6.938,4.663 -13.308,10.375 -19.804,15.975"
                      style={{ fill: 'currentColor', fillRule: 'nonzero' }}></path>
                    <path
                      d="M309.452,205.724c9.846,-11.233 20.017,-22.146 30.234,-33.008c5.062,-5.479 10.279,-10.809 15.421,-16.209l7.795,-8.016c1.363,-1.346 2.442,-2.629 4.138,-4.096c0.854,-0.704 1.967,-1.408 3.304,-1.696c1.317,-0.308 2.596,-0.167 3.663,0.063c2.166,0.5 3.695,1.25 5.204,1.366c1.55,0.179 3.166,0.05 4.779,-0.391c3.246,-0.842 6.375,-2.646 9.483,-4.563c6.313,-3.887 12.454,-8.046 18.563,-12.262c6.096,-4.234 12.037,-8.692 17.846,-13.334c5.912,-4.525 11.55,-9.387 17.25,-14.216c-10.13,10.983 -21.317,21.004 -33.2,30.137c-5.888,4.638 -12.092,8.863 -18.342,13.004c-3.175,2.05 -6.575,4.071 -10.558,5.171c-1.975,0.554 -4.138,0.779 -6.296,0.55c-2.234,-0.217 -4.142,-1.1 -5.613,-1.396c-1.554,-0.312 -2.283,-0.187 -3.496,0.763c-1.141,0.954 -2.533,2.483 -3.825,3.75l-7.891,7.925c-5.313,5.233 -10.554,10.533 -15.95,15.687c-10.696,10.396 -21.438,20.742 -32.509,30.771"
                      style={{ fill: 'currentColor', fillRule: 'nonzero' }}></path>
                    <path
                      d="M522.205,190.805c-12.046,11.75 -25.583,21.88 -39.792,30.871c-7.137,4.454 -14.446,8.634 -21.958,12.413c-7.438,3.812 -15.054,7.154 -21.054,13.129c4.766,-7.075 12.371,-11.75 19.483,-15.979c7.142,-4.325 14.283,-8.613 21.313,-13.088c14.158,-8.804 27.92,-18.162 42.008,-27.346"
                      style={{ fill: 'currentColor', fillRule: 'nonzero' }}></path>
                    <path
                      d="M585.724,212.896c9.567,-12.354 17.717,-25.692 24.338,-39.713c3.291,-7.029 6.141,-14.225 8.579,-21.591c1.275,-3.709 2.662,-7.463 4.596,-11.067c1.92,-3.579 4.533,-7.029 8.045,-9.5l2.2,3.079c-10.3,7.583 -19.004,17.113 -27.108,27.092c-8.108,10.012 -15.442,20.7 -22.979,31.296c-1.904,2.612 -3.675,5.387 -6.096,7.891c-2.392,2.554 -5.487,4.425 -8.533,5.754c-6.159,2.563 -12.179,4.655 -18.271,7.005c-12.167,4.558 -24.375,8.995 -36.633,13.312c11.875,-5.287 23.795,-10.446 35.766,-15.487c5.934,-2.542 12.1,-4.959 17.838,-7.6c2.837,-1.384 5.35,-3.042 7.333,-5.317c2.004,-2.267 3.788,-4.958 5.646,-7.629c7.387,-10.65 14.629,-21.488 22.746,-31.771c8.083,-10.283 17.354,-19.825 28.054,-27.604l2.204,3.083c-5.942,4.071 -8.904,11.433 -11.529,18.629c-2.742,7.359 -5.913,14.596 -9.504,21.579c-7.142,14.005 -16.2,26.988 -26.692,38.559"
                      style={{ fill: 'currentColor', fillRule: 'nonzero' }}></path>
                    <path
                      d="M833.085,46.417c-11.695,9.362 -23.654,18.354 -35.654,27.291l-17.983,13.288c-1.383,1.108 -2.65,2.258 -3.617,3.541c-0.962,1.259 -1.583,2.755 -2.241,4.496c-1.167,3.613 -3.438,7.375 -5.95,10.234c-10.313,11.179 -20.938,21.558 -32.063,31.675c-5.567,5.02 -11.192,9.97 -16.9,14.825c-5.8,4.745 -11.567,9.516 -17.575,14.004l16.208,-15.525c5.421,-5.146 10.78,-10.346 16.059,-15.629c10.491,-10.546 21.191,-21.18 31.096,-32.042c2.404,-2.775 4.125,-5.488 5.329,-9c0.671,-1.738 1.491,-3.746 2.833,-5.463c1.3,-1.695 2.85,-3.058 4.417,-4.229c6.241,-4.404 12.291,-8.6 18.541,-12.779c12.384,-8.387 24.813,-16.725 37.5,-24.687"
                      style={{ fill: 'currentColor', fillRule: 'nonzero' }}></path>
                    <path
                      d="M798.77,52.319c-8.171,6.612 -16.375,13.104 -24.409,19.791c-8.004,6.721 -15.991,13.438 -23.771,20.4c-7.837,6.888 -15.458,14.017 -23.087,21.159c-3.813,3.579 -7.567,7.221 -11.292,10.891l-11.283,10.971c3.104,-4.246 6.471,-8.279 9.787,-12.362c3.442,-3.971 6.955,-7.884 10.513,-11.759c7.142,-7.725 14.762,-15 22.6,-22.016c7.908,-6.942 16.046,-13.638 24.571,-19.8c8.491,-6.204 17.225,-12.075 26.371,-17.275"
                      style={{ fill: 'currentColor', fillRule: 'nonzero' }}></path>
                    <path
                      d="M896.668,127.013c6.221,4.163 11.912,9.104 17.262,14.409c5.159,5.47 9.938,11.308 14.396,17.362c8.859,12.171 16.296,25.221 23.925,38.008c7.567,12.842 15.404,25.413 24.592,37.063c4.546,5.867 9.387,11.529 14.325,17.112l14.796,16.825c-5.559,-5.012 -10.925,-10.208 -16.288,-15.433c-5.258,-5.321 -10.404,-10.775 -15.312,-16.475c-9.917,-11.337 -18.034,-24.146 -25.692,-36.967c-7.579,-12.904 -14.858,-25.887 -22.967,-38.308c-8.166,-12.375 -17.587,-23.933 -29.037,-33.596"
                      style={{ fill: 'currentColor', fillRule: 'nonzero' }}></path>
                    <path
                      d="M883.028,55.753c7.734,5.683 15.171,11.704 22.609,17.704l22.204,18.075c7.362,6.063 14.825,11.975 22.275,17.933c3.725,2.971 7.5,5.888 11.304,8.775l11.375,8.759c-4.279,-2.179 -8.383,-4.654 -12.533,-7.079c-4.059,-2.559 -8.063,-5.196 -12.046,-7.875c-7.95,-5.388 -15.546,-11.263 -23.004,-17.288c-7.4,-6.1 -14.671,-12.337 -21.663,-18.887c-7.017,-6.517 -13.925,-13.146 -20.521,-20.117"
                      style={{ fill: 'currentColor', fillRule: 'nonzero' }}></path>
                    <path
                      d="M1089.68,129.363c10.213,12.417 20.2,24.984 30.275,37.475c10.088,12.479 20.021,25.071 30.263,37.417c9.979,12.558 20.246,24.883 30.391,37.317l15.263,18.612l15.162,18.738c-5.691,-5.684 -11.158,-11.571 -16.7,-17.392l-16.166,-17.879c-10.671,-12.021 -20.929,-24.396 -31.184,-36.771c-9.991,-12.588 -19.995,-25.171 -29.554,-38.092c-9.562,-12.916 -18.921,-25.983 -27.75,-39.425"
                      style={{ fill: 'currentColor', fillRule: 'nonzero' }}></path>
                    <path
                      d="M1083.72,148.508c9.183,11.083 18.012,22.417 27.05,33.55c9.075,11.108 18.162,22.179 27.758,32.779c9.525,10.667 19.554,20.85 30.108,30.483l8.055,7.075l8.341,6.746l8.546,6.517c2.954,2.025 5.892,4.092 8.817,6.196c-3.154,-1.721 -6.304,-3.467 -9.429,-5.271l-9.138,-5.796l-8.779,-6.333l-8.513,-6.713c-11.175,-9.171 -21.425,-19.421 -31.104,-30.121c-9.612,-10.77 -18.679,-21.991 -27.183,-33.608c-8.546,-11.587 -16.733,-23.408 -24.529,-35.504"
                      style={{ fill: 'currentColor', fillRule: 'nonzero' }}></path>
                    <path
                      d="M967.35,154.172l10.071,18.167c3.346,6.046 6.784,12.029 10.538,17.783c7.483,11.542 15.871,22.35 26.083,31.492l15.388,13.912c5.075,4.792 9.995,9.734 14.612,14.946c4.629,5.192 9.117,10.492 13.488,15.879c4.266,5.467 8.558,10.909 12.641,16.517l-14.191,-15.183c-4.667,-5.096 -9.4,-10.13 -14.271,-15.013c-4.909,-4.837 -9.775,-9.696 -14.938,-14.225c-5.116,-4.592 -10.416,-9.054 -15.562,-13.783c-10.388,-9.429 -19.063,-20.788 -25.971,-32.875c-6.988,-12.096 -12.658,-24.775 -17.888,-37.617"
                      style={{ fill: 'currentColor', fillRule: 'nonzero' }}></path>
                    <path
                      d="M821.3,83.438c-7.43,8.071 -15.121,15.846 -22.813,23.621c-7.654,7.808 -15.487,15.425 -23.283,23.088c-7.859,7.595 -15.675,15.229 -23.679,22.683l-11.98,11.212c-4.087,3.642 -8.066,7.396 -12.229,10.975c3.488,-4.237 7.179,-8.279 10.779,-12.412l11.167,-12.042c7.479,-8 15.233,-15.725 23.038,-23.396c7.875,-7.6 15.8,-15.154 23.991,-22.42c8.159,-7.3 16.409,-14.5 25.009,-21.309"
                      style={{ fill: 'currentColor', fillRule: 'nonzero' }}></path>
                    <path
                      d="M492.257,86.541c-4.875,10.246 -10.442,20.146 -16.408,29.804c-5.929,9.683 -12.413,19.021 -19.225,28.113c-6.867,9.045 -14.042,17.862 -21.734,26.216c-3.829,4.179 -7.729,8.367 -12.05,12.138c-4.4,3.65 -9.17,7.004 -14.508,8.996c4.917,-2.842 9.271,-6.417 13.108,-10.488c3.938,-3.975 7.5,-8.317 11.021,-12.733c7.071,-8.792 14.1,-17.604 20.838,-26.638c6.841,-8.958 13.354,-18.154 19.883,-27.358c3.258,-4.608 6.446,-9.271 9.567,-13.979l9.508,-14.071Z"
                      style={{ fill: 'currentColor', fillRule: 'nonzero' }}></path>
                    <path
                      d="M462.559,169.415c-3.125,11.72 -9.717,22.47 -18.058,31.375c-8.413,8.841 -18.771,16.033 -30.3,19.812c10.029,-6.733 19.221,-14.083 27.271,-22.671c8.125,-8.516 14.941,-18.116 21.087,-28.516"
                      style={{ fill: 'currentColor', fillRule: 'nonzero' }}></path>
                    <path
                      d="M230.562,184.33c-2.408,2.779 -4.85,5.541 -7.337,8.27l-7.846,7.817l-8.304,7.333l-8.579,7.009c-11.592,9.166 -23.85,17.375 -35.992,25.646c-12.2,8.183 -24.317,16.42 -35.983,25.245l-8.621,6.788l-8.313,7.167l-8.045,7.491c-2.509,2.663 -5.059,5.304 -7.646,7.934c2.237,-2.913 4.512,-5.817 6.837,-8.688l7.442,-8.212l8,-7.68l8.346,-7.3c11.329,-9.525 23.491,-17.925 35.65,-26.2c12.225,-8.191 24.471,-16.262 36.408,-24.745c11.913,-8.517 23.375,-17.659 33.983,-27.875"
                      style={{ fill: 'currentColor', fillRule: 'nonzero' }}></path>
                    <path
                      d="M336.113,213.911c9.733,4.538 19.258,9.492 28.467,15.092c9.229,5.55 18.004,12.017 25.933,19.45c3.904,3.733 7.621,7.533 11.592,10.933c3.895,3.467 8.32,6.217 12.862,8.984c4.55,2.729 9.296,5.27 13.867,8.15c4.496,2.987 8.908,6.254 12.408,10.35c-4.158,-3.409 -8.658,-6.23 -13.433,-8.58c-4.7,-2.479 -9.567,-4.675 -14.392,-7.112c-4.833,-2.388 -9.562,-5.3 -13.842,-8.767c-4.25,-3.475 -8.045,-7.325 -11.92,-10.933c-7.638,-7.3 -16.109,-13.679 -24.817,-19.804c-8.733,-6.088 -17.838,-11.729 -26.725,-17.763"
                      style={{ fill: 'currentColor', fillRule: 'nonzero' }}></path>
                  </g>
                </svg>
              </div>
              <div className="absolute w-full aspect-video top-0 left-0 overflow-hidden">
                <video className="w-full opacity-[70%] hue-rotate-[75deg] mix-blend-exclusion" muted autoPlay
                  loop playsInline>
                  <source src="/assets/images/aurora-bg-loop.mp4" type="video/mp4"
                    media="all and (min-width: 1501px)" />
                  <source src="/assets/images/aurora-bg-loop-1920.mp4" type="video/mp4"
                    media="all and (max-width: 1500px)" />
                  <source src="/assets/images/aurora-bg-450.mp4" type="video/mp4"
                    media="all and (max-width: 450px)" />
                </video>
                <div
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-base-950/0 via-slate-base-950/0 to-brand-base-950 z-10">
                </div>
              </div>
            </section>
          </header>

          {/* series area */}

          <main className="container mx-auto px-3 lg:px-5 py-10">
            <h1 className="text-black text-4xl font-bold">Series.</h1>
            <div className="lg:flex items-center justify-between">
              <h3 className="text-[#4F46E5] text-xl font-semibold">Step-By-Step Learning</h3>
              <h3 className="text-[#020617] text-xl font-semibold items-center">Browse All Series <i
                className="fa-solid fa-arrow-right"></i></h3>
            </div>

            <div className="md:flex items-stretch justify-between gap-8 gap-x-8">
              <div
                className="bg-[#0F172A] flex gap-5 p-5 rounded-md lg:basis-2/3 hover:cursor-pointer border-2 border-transparent hover:border-[#1e293b]">
                <div className="lg:basis-1/2">
                  <h1 className="text-[#fff] text-lg font-bold">Adding an API to an AdonisJS Web App</h1>
                  <div className="flex items-center gap-10 my-1 text-[#94a3b8] text-sm">
                    <h3><i className="fa-solid fa-graduation-cap"></i> 37 Lessons</h3>
                    <h3><i className="fa-solid fa-clock"></i> 4h 37m</h3>
                  </div>
                  <p className="text-[#94a3b8] text-sm lg:text-base">In this series, we&apos;ll ad a API, using Opaque Access
                    Tokens for
                    authentication, to a preexisting web application. We well implement dual-guard authentication,
                    add a token management panel, and authentication our API directly with an organization model!
                  </p>
                </div>
                <div className="lg:basis-1/2 py-2 hidden lg:block">
                  <h4 className="text-[#94a3b8] uppercase font-semibold text-sm mb-3">latest form this series</h4>
                  <div className="flex items-center gap-5 text-[12px] text-[#94a3b8] mb-1">
                    <h5>Lesson 6.1</h5>
                    <span>.</span>
                    <h5>Aug 07</h5>
                  </div>
                  <h4 className="capitalize font-bold text-[#fff] text-sm mb-3">Advanced String filtering</h4>
                  <div className="flex items-center gap-5 text-[12px] text-[#94a3b8] mb-1">
                    <h5>Lesson 6.0</h5>
                    <span>.</span>
                    <h5>Aug 05</h5>
                  </div>
                  <h4 className="capitalize font-bold text-[#fff] text-sm mb-3">Basic course search & filter</h4>
                  <div className="flex items-center gap-5 text-[12px] text-[#94a3b8] mb-1">
                    <h5>Lesson 5.9</h5>
                    <span>.</span>
                    <h5>Jul 31</h5>
                  </div>
                  <h4 className="capitalize font-bold text-[#fff] text-sm mb-3">Getting a Module&apos;s Lessons</h4>
                </div>
              </div>
              <div
                className="bg-[#0F172A] lg:basis-1/3 p-5 my-5 lg:my-0 rounded-md lg:min-h-[300px] hover:cursor-pointer border-2 border-transparent hover:border-[#1e293b]">
                <h4 className="text-[#fff] text-lg font-bold">AdonisJS Quick tip</h4>
                <div className="flex items-center gap-5 my-1 text-[#94a3b8] text-sm">
                  <h3><i className="fa-solid fa-graduation-cap"></i> 23 Lessons</h3>
                  <h3><i className="fa-solid fa-clock"></i> 2h 43m</h3>
                </div>
                <p className="text-[#94a3b8] text-sm lg:text-base">Quick tips, lessons, and screencasts covering specific
                  topics on AdonisJS.
                </p>
              </div>
            </div>

            <div className="md:flex items-stretch justify-between gap-5 lg:py-5">
              <div
                className="bg-[#0F172A] lg:basis-1/3 p-5 rounded-md lg:min-h-[300px] hover:cursor-pointer border-2 border-transparent hover:border-[#1e293b]">
                <h4 className="text-[#fff] text-lg font-bold">Building with AdonisJS & Inertia</h4>
                <div className="flex items-center gap-5 text-[12px] text-[#94a3b8] mb-1">
                  <h3><i className="fa-solid fa-graduation-cap"></i> 91 Lessons</h3>
                  <h3><i className="fa-solid fa-clock"></i> 14h 5m</h3>
                </div>
                <p className="text-[#94a3b8] text-sm lg:text-base">We well how to use InertiaJs with AdonisJS 6 to build a
                  feature-complete
                  application, called plotMyCourse. Our application will use server-side rendering (SSR), Vue 3,
                  Shan-cn-Vue. It will feature organizations, drag-and-drop and lots of forms</p>
              </div>
              <div
                className="bg-[#0F172A] flex gap-3 p-5 my-5 lg:my-0 rounded-md lg:basis-2/3 hover:cursor-pointer border-2 border-transparent hover:border-[#1e293b]">
                <div className="lg:basis-1/2">
                  <h1 className="text-[#fff] text-lg font-bold">AdonisJS in 30</h1>
                  <div className="flex items-center gap-10 my-1 text-[#94a3b8] text-sm">
                    <h3><i className="fa-solid fa-graduation-cap"></i> 9 Lessons</h3>
                    <h3><i className="fa-solid fa-clock"></i> 2h 59m</h3>
                  </div>
                  <p className="text-[#94a3b8] text-sm lg:text-base">In this series, we&apos;ll highlight various features and
                    functionalities in AdonisJS you can complete in about 30 minutes or less.</p>
                </div>
                <div className="lg:basis-1/2 py-2 hidden lg:block">
                  <h4 className="text-[#94a3b8] uppercase font-semibold text-sm mb-3">latest form this series</h4>
                  <div className="flex items-center gap-10 my-1 text-[#94a3b8] text-sm">
                    <h4>Lesson 9.0</h4>
                    <span>.</span>
                    <h4>Nov 6, 24</h4>
                  </div>
                  <h4 className="capitalize font-bold text-[#fff] text-sm mb-3">How To Add Social Authentication
                    with
                    AdonisJS Ally and Google</h4>
                  <div className="flex items-center gap-5 my-1 text-[#94a3b8] text-sm">
                    <h4>Lesson 8.0</h4>
                    <span>.</span>
                    <h4>Aug 02, 24</h4>
                  </div>
                  <h4 className="capitalize font-bold text-[#fff] text-sm mb-3">How to make a simple AdonisJS 6 Package
                  </h4>
                  <div className="flex items-center gap-5 my-1 text-[#94a3b8] text-sm">
                    <h4>Lesson 7.0</h4>
                    <span>.</span>
                    <h4>Jul 22, 24</h4>
                  </div>
                  <h4 className="capitalize font-bold text-[#fff] text-sm mb-3">Three Approaches for organizing your
                    AdonisJS Business Logic Operations.</h4>
                </div>
              </div>
            </div>

            <div className="md:flex items-stretch justify-between gap-3 py-5">
              <div
                className="bg-[#0F172A] flex gap-3 p-5 rounded-md lg:basis-2/3 hover:cursor-pointer border-2 border-transparent hover:border-[#1e293b]">
                <div className="lg:basis-1/2">
                  <h1 className="text-[#fff] text-lg font-bold">Let&apos;s Learn AdonisJS 6</h1>
                  <div className="flex items-center gap-5 text-[12px] text-[#94a3b8] mb-1">
                    <h3><i className="fa-solid fa-graduation-cap"></i> 113 Lessons</h3>
                    <h3><i className="fa-solid fa-clock"></i> 14h 11m</h3>
                  </div>
                  <p className="text-[#94a3b8] text-sm lg:text-base">In this series, we&apos;ll learn AdonisJS 6 Step-By-Step
                    in a
                    beginner-friendly way. Covering topics like routing, controllers, services, EdgeJS, Lucid ORM,
                    forms, filtering, authentication etc.</p>
                </div>
                <div className="lg:basis-1/2 py-2 hidden lg:block">
                  <h4 className="text-[#94a3b8] uppercase font-semibold text-sm mb-3">latest form this series</h4>
                  <div className="flex items-center gap-10 my-1 text-[#94a3b8] text-sm">
                    <h4>Lesson 11.11</h4>
                    <span>.</span>
                    <h4>Jun 29, 24</h4>
                  </div>
                  <h4 className="uppercase font-bold mb-5 text-[#0F172A] text-xs">Thank you for watching!</h4>
                  <div className="flex items-center gap-5">
                    <h4>Lesson 11.10</h4>
                    <span>.</span>
                    <h4>Jun 29, 24</h4>
                  </div>
                  <h4 className="uppercase font-bold mb-5 text-[#0F172A] text-xs">Allowing Admins to delete Movies and
                    their Relationships.</h4>
                  <div className="flex items-center gap-5">
                    <h4>Lesson 11.09</h4>
                    <span>.</span>
                    <h4>Jun 26, 24</h4>
                  </div>
                  <h4 className="uppercase font-bold mb-5 text-[#0F172A] text-xs">Managed Transactions and Syncing Movie
                    cast Members.</h4>
                </div>
              </div>
              <div
                className="bg-[#0F172A] lg:basis-1/3 p-5 my-5 lg:my-0 rounded-md lg:min-h-[300px] hover:cursor-pointer border-2 border-transparent hover:border-[#1e293b]">
                <h4 className="text-[#fff] text-lg font-bold">EdgeJS components</h4>
                <div className="flex items-center gap-5 my-1 text-[#94a3b8] text-sm">
                  <h3><i className="fa-solid fa-graduation-cap"></i> 25 Lessons</h3>
                  <h3><i className="fa-solid fa-clock"></i> 1h 42m</h3>
                </div>
                <p className="text-[#94a3b8] text-sm lg:text-base">In this series, we&apos;ll take a deep dive into EdgeJS
                  Components by creating our
                  own reusable components from the PinesUI component library, built with tailwindcss and ApineJS.</p>
              </div>
            </div>
          </main>

          {/* topics area */}

          <section id="topics_area">
            <div className="container mx-auto px-3 lg:px-5 py-10">
              <h1 className="text-[#fff] text-4xl font-bold">Topics.</h1>
              <div className="lg:flex items-center justify-between">
                <h3 className="text-[#4F46E5] text-xl font-semibold uppercase">Subject Based Learning</h3>
                <h3 className="text-[#020617] text-xl font-semibold items-center">Browse All Topics <i
                  className="fa-solid fa-arrow-right"></i></h3>
              </div>

              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div
                  className="bg-[#0F172A] rounded-md p-2 flex items-center gap-1 group cursor-pointer border-2 border-transparent hover:border-[#1e293b]">
                  <div className="pr-3 flex items-center">
                    <Image
                      src="/assets/images/terminal_1697770046459.png"
                      alt="aci"
                      width={64}
                      height={64}
                      className="w-16 h-auto object-contain rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#E2E8F0] font-bold text-sm xl:text-base mb-1">Ace CLI</h3>
                    <div className="flex items-center gap-5 mb-3 text-[#94a3b8] text-xs">
                      <h3 className="text-xs"><i className="fa-solid fa-server"></i> 3 series</h3>
                      <h3 className="text-xs"><i className="fa-solid fa-graduation-cap"></i> 15 Lessons</h3>
                    </div>
                  </div>
                </div>

                <div
                  className="bg-[#0F172A] rounded-md p-2 flex items-center gap-1 group cursor-pointer border-2 border-transparent hover:border-[#1e293b]">
                  <div className="pr-3 flex items-center">
                    <Image
                      src="/assets/images/adonisjs-icon-with-bg_1671308746819.jpeg"
                      alt="aci"
                      width={64}
                      height={64}
                      className="w-16 h-auto object-contain rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#E2E8F0] font-bold text-sm xl:text-base mb-1">AdonisJS</h3>
                    <div className="flex items-center gap-5 mb-3 text-[#94a3b8] text-xs">
                      <h3 className="text-xs"><i className="fa-solid fa-server"></i> 15 series</h3>
                      <h3 className="text-xs"><i className="fa-solid fa-graduation-cap"></i> 394 Lessons</h3>
                    </div>
                  </div>
                </div>

                <div
                  className="bg-[#0F172A] rounded-md p-2 flex items-center gap-1 group cursor-pointer border-2 border-transparent hover:border-[#1e293b]">
                  <div className="pr-3 flex items-center">
                    <Image
                      src="/assets/images/alpinejs_1706922995887.png"
                      alt="aci"
                      width={64}
                      height={64}
                      className="w-16 h-auto object-contain rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#E2E8F0] font-bold text-sm xl:text-base mb-1">AlpineJS</h3>
                    <div className="flex items-center gap-5 mb-3 text-[#94a3b8] text-xs">
                      <h3 className="text-xs"><i className="fa-solid fa-server"></i> 2 series</h3>
                      <h3 className="text-xs"><i className="fa-solid fa-graduation-cap"></i> 7 Lessons</h3>
                    </div>
                  </div>
                </div>

                <div
                  className="bg-[#0F172A] rounded-md p-2 flex items-center gap-1 group cursor-pointer border-2 border-transparent hover:border-[#1e293b]">
                  <div className="pr-3 flex items-center">
                    <Image
                      src="/assets/images/authentication_1697770401414.png"
                      alt="aci"
                      width={64}
                      height={64}
                      className="w-16 h-auto object-contain rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#E2E8F0] font-bold text-sm xl:text-base mb-1">Authentication</h3>
                    <div className="flex items-center gap-5 mb-3 text-[#94a3b8] text-xs">
                      <h3 className="text-xs"><i className="fa-solid fa-server"></i> 9 series</h3>
                      <h3 className="text-xs"><i className="fa-solid fa-graduation-cap"></i> 43 Lessons</h3>
                    </div>
                  </div>
                </div>

                <div
                  className="bg-[#0F172A] rounded-md p-2 flex items-center gap-1 group cursor-pointer border-2 border-transparent hover:border-[#1e293b]">
                  <div className="pr-3 flex items-center">
                    <Image
                      src="/assets/images/authorization_1697770201941.png"
                      alt="aci"
                      width={64}
                      height={64}
                      className="w-16 h-auto object-contain rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#E2E8F0] font-bold text-sm xl:text-base mb-1">Authentication</h3>
                    <div className="flex items-center gap-5 mb-3 text-[#94a3b8] text-xs">
                      <h3 className="text-xs"><i className="fa-solid fa-server"></i> 3 series</h3>
                      <h3 className="text-xs"><i className="fa-solid fa-graduation-cap"></i> 14 Lessons</h3>
                    </div>
                  </div>
                </div>

                <div
                  className="bg-[#0F172A] rounded-md p-2 flex items-center gap-1 group cursor-pointer border-2 border-transparent hover:border-[#1e293b]">
                  <div className="pr-3 flex items-center">
                    <Image
                      src="/assets/images/aws-amplify-logo-D68DDB5AB1-seeklogo_1671308415523.png"
                      alt="aci"
                      width={64}
                      height={64}
                      className="w-16 h-auto object-contain rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#E2E8F0] font-bold text-sm xl:text-base mb-1">AWS Amplify</h3>
                    <div className="flex items-center gap-5 mb-3 text-[#94a3b8] text-xs">
                      <h3 className="text-xs"><i className="fa-solid fa-server"></i> 1 series</h3>
                      <h3 className="text-xs"><i className="fa-solid fa-graduation-cap"></i> 8 Lessons</h3>
                    </div>
                  </div>
                </div>

                <div
                  className="bg-[#0F172A] rounded-md p-2 flex items-center gap-1 group cursor-pointer border-2 border-transparent hover:border-[#1e293b]">
                  <div className="pr-3 flex items-center">
                    <Image
                      src="/assets/images/bouncer_1697770362618.png"
                      alt="aci"
                      width={64}
                      height={64}
                      className="w-16 h-auto object-contain rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#E2E8F0] font-bold text-sm xl:text-base mb-1">Bouncer</h3>
                    <div className="flex items-center gap-5 mb-3 text-[#94a3b8] text-xs">
                      <h3 className="text-xs"><i className="fa-solid fa-server"></i> 1 series</h3>
                      <h3 className="text-xs"><i className="fa-solid fa-graduation-cap"></i> 4 Lessons</h3>
                    </div>
                  </div>
                </div>

                <div
                  className="bg-[#0F172A] rounded-md p-2 flex items-center gap-1 group cursor-pointer border-2 border-transparent hover:border-[#1e293b]">
                  <div className="pr-3 flex items-center">
                    <Image
                      src="/assets/images/abstract_1697804733488.png"
                      alt="aci"
                      width={64}
                      height={64}
                      className="w-16 h-auto object-contain rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#E2E8F0] font-bold text-sm xl:text-base mb-1">Ace CLI</h3>
                    <div className="flex items-center gap-5 mb-3 text-[#94a3b8] text-xs">
                      <h3 className="text-xs"><i className="fa-solid fa-server"></i> 3 series</h3>
                      <h3 className="text-xs"><i className="fa-solid fa-graduation-cap"></i> 35 Lessons</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* lesson area */}

          <section className="lesson_area">
            <div className="container mx-auto px-3 lg:px-5 py-10">
              <h1 className="text-2xl md:text-3xl xl:text-4xl font-heading font-black tracking-tight text-white">Lessons.
              </h1>
              <div className="lg:flex items-center justify-between">
                <h3 className="text-xl font-heading font-black text-[#818cf8] ">Here&apos;s What&apos;s New</h3>
                <h3
                  className="relative text-[#94a3b8] text-sm font-semibold inline-block
                            after:block after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[2px] after:bg-[#94a3b8]
                            after:transition-all after:duration-300 after:-translate-x-1/2
                            hover:after:w-full cursor-pointer">
                  Browse All Lessons <i className="fa-solid fa-arrow-right"></i>
                </h3>
              </div>

              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-3">
                <div className="group">
                  <div className="rounded-lg">
                    {/* Image */}
                    <Image
                      src="/assets/images/l8ki0nmyn1hzq2abxgsr2dor.jpg"
                      alt="lesson thumbnail"
                      width={400}
                      height={225}
                      className="rounded-lg w-full transform transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                    <p>Adding an Api to...</p>
                    <div className="flex gap-3">
                      <h3>#6.4</h3>
                      <h3>.</h3>
                      <h3>Aug 07</h3>
                    </div>
                  </div>

                  <a href="" className="text-[#F0F4F8] text-ml font-bold">Advanced String Filtering</a>
                  <p className="text-[#94a3b8] text-xs">
                    In this lesson, we upgrade our course name filter to support both
                    simple strings and advanced object-based queries using VineJS&apos; union rule.
                    This allows users to specify not just what to search for, but how to search for it.
                  </p>
                </div>

                <div className="group">
                  <div className="rounded-lg">
                    <Image
                      src="/assets/images/ygf96wnzf4jqhqzakllfr839.jpg"
                      alt="advanced"
                      width={400}
                      height={225}
                      className="rounded-lg w-full transform transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                    <p>Adding an Api to...</p>
                    <div className="flex gap-3">
                      <h3>#6.0</h3>
                      <h3>.</h3>
                      <h3>Aug 05</h3>
                    </div>
                  </div>
                  <h1 className="text-[#F0F4F8] text-ml font-bold">Basic Course Search & Filter</h1>
                  <p className="text-[#94a3b8] text-xs">In this lesson, we&apos;ll add a new search endpoint for our
                    courses
                    and enable some basic filter functionality along with it. We&apos;ll be able to search by course
                    name
                    likeness, status, difficulty, and/or access level.</p>
                </div>
                <div className="group">
                  <div className="rounded-lg">
                    <Image
                      src="/assets/images/tj98r5eavtlofjbycssde4l5.jpg"
                      alt="advanced"
                      width={400}
                      height={225}
                      className="rounded-lg w-full transform transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                    <p>Adding an Api to...</p>
                    <div className="flex gap-3">
                      <h3>#5.9</h3>
                      <h3>.</h3>
                      <h3>Jul 31</h3>
                    </div>
                  </div>
                  <h1 className="text-[#F0F4F8] text-ml font-bold">Getting A Module&apos;s Lessons</h1>
                  <p className="text-[#94a3b8] text-xs">In this lesson, we&apos;ll remove our lesson&apos;s index method in
                    favor
                    of
                    a module method whose purpose will be to fetch a module&apos;s specific lessons in their stored
                    order.</p>
                </div>
                <div className="group">
                  <div className="rounded-lg">
                    <Image
                      src="/assets/images/prsaa7xekw3w4bkda4t9af9d.jpg"
                      alt="advanced"
                      width={400}
                      height={225}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                    <p>Adding an Api to...</p>
                    <div className="flex gap-3">
                      <h3>#5.8</h3>
                      <h3>.</h3>
                      <h3>Jul 25</h3>
                    </div>
                  </div>
                  <h1 className="text-[#F0F4F8] text-ml font-bold">Lesson Operations</h1>
                  <p className="text-[#94a3b8] text-xs">In this lesson, we&apos;ll implement most of the CRUD
                    functionality
                    for
                    our lessons, including creating, updating, deleting, and patching our lesson&apos;s tags. We&apos;ll
                    also
                    discuss why we&apos;ll treat lessons as a top-level resource.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Block 1 */}
                <div className="md:flex md:gap-4 rounded-lg group cursor-pointer">
                  <Image
                    src="/assets/images/s0ugloteg5w4f8jzstwm0k7s.jpg"
                    alt="lesson"
                    width={248}
                    height={132}
                    className="md:w-62 md:h-33 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                      <p>Adding an Api to an Ado...</p>
                      <div className="flex items-center gap-2">
                        <span>#5.7</span>
                        <span>.</span>
                        <span>Jul 25</span>
                      </div>
                    </div>
                    <h1 className="text-[#F0F4F8] text-ml font-bold">Fixing Our ESLint Integration</h1>
                    <p className="text-[#94a3b8] text-xs">I ran into a ReferenceError and realized our ESLint
                      wasn&apos;t
                      working. In this lesson, we&apos;ll take a brief aside to fix the linting within our project
                      so
                      it works with ESLint v9.
                    </p>
                  </div>
                </div>
                {/* Block 2 */}
                <div className="md:flex md:gap-4 rounded-lg group cursor-pointer">
                  <Image
                    src="/assets/images/p5zhmeapntdknkhqu9qqa042.jpg"
                    alt="lesson"
                    width={248}
                    height={132}
                    className="md:w-62 md:h-33 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                      <p>Adding an Api to an Ado...</p>
                      <div className="flex items-center gap-2">
                        <span>#5.6</span>
                        <span>.</span>
                        <span>Jul 23</span>
                      </div>
                    </div>
                    <h1 className="text-[#F0F4F8] text-ml font-bold">Getting Just Course Modules & Lessons</h1>
                    <p className="text-[#94a3b8] text-xs">
                      In this lesson, we&apos;ll remove our GET module route, using the except method on our
                      resource.
                      Then we&apos;ll
                      refactor to add a GetModules action.
                    </p>
                  </div>
                </div>
                {/* Block 3 */}
                <div className="md:flex md:gap-4 rounded-lg group cursor-pointer">
                  <Image
                    src="/assets/images/rwo8i5iq2m399m8k81zlkp13.jpg"
                    alt="lesson"
                    width={248}
                    height={132}
                    className="md:w-62 md:h-33 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                      <p>Adding an Api to an Ado...</p>
                      <div className="flex items-center gap-2">
                        <span>#5.5</span>
                        <span>.</span>
                        <span>Jul 15</span>
                      </div>
                    </div>
                    <h1 className="text-[#F0F4F8] text-ml font-bold">Course Module Nested Resource</h1>
                    <p className="text-[#94a3b8] text-xs">In this lesson, we&apos;ll work on nested resourceful
                      endpoints
                      for
                      our course modules. We&apos;ll add endpoints to create, update, patch, and deleting modules
                      from
                      a specific course.
                    </p>
                  </div>
                </div>
                {/* Block 4 */}
                <div className="md:flex md:gap-4 rounded-lg group cursor-pointer">
                  <Image
                    src="/assets/images/rwo8i5iq2m399m8k81zlkp13.jpg"
                    alt="lesson"
                    width={248}
                    height={132}
                    className="md:w-62 md:h-33 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                      <p>Adding an Api to an Ado...</p>
                      <div className="flex items-center gap-2">
                        <span>#5.5</span>
                        <span>.</span>
                        <span>Jul 15</span>
                      </div>
                    </div>
                    <h1 className="text-[#F0F4F8] text-ml font-bold">Course Module Nested Resource</h1>
                    <p className="text-[#94a3b8] text-xs">In this lesson, we&apos;ll work on nested resourceful
                      endpoints
                      for
                      our course modules. We&apos;ll add endpoints to create, update, patch, and deleting modules
                      from
                      a specific course.
                    </p>
                  </div>
                </div>
                {/* Block 5 */}
                <div className="md:flex md:gap-4 rounded-lg group cursor-pointer">
                  <Image
                    src="/assets/images/drfexpqsk3n2pc4dbnzb17lr.jpg"
                    alt="lesson"
                    width={248}
                    height={132}
                    className="md:w-62 md:h-33 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                      <p>Adding an Api to an Ado...</p>
                      <div className="flex items-center gap-2">
                        <span>#5.4</span>
                        <span>.</span>
                        <span>Jul 15</span>
                      </div>
                    </div>
                    <h1 className="text-[#F0F4F8] text-ml font-bold">Updating A Course&apos;s Difficulty, Status, or
                      Access
                      Level</h1>
                    <p className="text-[#94a3b8] text-xs">
                      In this lesson, we&apos;ll add a specific endpoint with the ability to patch a course&apos;s
                      difficulty, status,
                      or access level with a new value so our users have a way to update these without needing
                      to
                      send the
                      entire course payload.
                    </p>
                  </div>
                </div>
                {/* Block 6 */}
                <div className="md:flex md:gap-4 rounded-lg group cursor-pointer">
                  <Image
                    src="/assets/images/s7fxhq0ipnjtuxhwt60mxlx5.jpg"
                    alt="lesson"
                    width={248}
                    height={132}
                    className="md:w-62 md:h-33 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                      <p>Adding an Api to an Ado...</p>
                      <div className="flex items-center gap-2">
                        <span>#5.3</span>
                        <span>.</span>
                        <span>Jul 15</span>
                      </div>
                    </div>
                    <h1 className="text-[#F0F4F8] text-ml font-bold">Getting A Course&apos;s Details, Modules & Lessons
                    </h1>
                    <p className="text-[#94a3b8] text-xs">In this lesson, we wrap up the Courses controller by
                      adding a
                      show method that fetches all the key info for a single course. That includes its modules
                      and
                      lessons, all nicely organized and ready to use in your API response.</p>
                  </div>
                </div>
                {/* Block 7 */}
                <div className="md:flex md:gap-4 rounded-lg group cursor-pointer">
                  <Image
                    src="/assets/images/ew1gbtzn09w7d2nshez1cy09.jpg"
                    alt="lesson"
                    width={248}
                    height={132}
                    className="md:w-62 md:h-33 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                      <p>Adding an Api to an Ado...</p>
                      <div className="flex items-center gap-2">
                        <span>#5.2</span>
                        <span>.</span>
                        <span>Jun 27</span>
                      </div>
                    </div>
                    <h1 className="text-[#F0F4F8] text-ml font-bold">Paginating our Course List</h1>
                    <p className="text-[#94a3b8] text-xs">In this lesson, we&apos;ll transform our courses list endpoint
                      into
                      a pagination endpoint. We&apos;ll check and validate our query string for a page and per page
                      parameter that we&apos;ll then use to fetch pages of our courses.</p>
                  </div>
                </div>
                {/* Block 9 */}
                <div className="rounded-lg md:flex md:gap-4 group cursor-pointer">
                  <Image
                    src="/assets/images/g7jwq9gct4us0z20wcens2rn.jpg"
                    alt="lesson"
                    width={248}
                    height={132}
                    className="md:w-62 md:h-33 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="space-y-2 mt-4 md:mt-0">
                    <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                      <p>Adding an Api to an AdonisJS</p>
                      <div className="flex items-center gap-2">
                        <span>#5.1</span>
                        <span>.</span>
                        <span>Jun 27</span>
                      </div>
                    </div>
                    <h1 className="text-[#F0F4F8] text-ml font-bold">Creating, Updating, and Deleting</h1>
                    <p className="text-[#94a3b8] text-xs">
                      In this lesson, we&apos;ll add endpoints to allow creating,
                      updating, and deleting courses from our API. We&apos;ll then use this to stub a number of
                      test
                      courses to give us wiggle room to play with our pagination.
                    </p>
                  </div>
                </div>
                {/* Block 10 */}
                <div className="rounded-lg md:flex md:gap-4 group cursor-pointer">
                  <Image
                    src="/assets/images/hw2k2cijxxlnfmukrfm5ky8h.jpg"
                    alt="lesson"
                    width={248}
                    height={132}
                    className="md:w-62 md:h-33 w-full object-cover rounded-md flex-shrink-0 transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="space-y-2 mt-4 md:mt-0">
                    <div className="flex items-center justify-between gap-3 py-1 text-[#818cf8] text-xs">
                      <p>Adding an Api to an...</p>
                      <div className="flex items-center gap-2">
                        <span>#5.0</span>
                        <span>.</span>
                        <span>Jun 27</span>
                      </div>
                    </div>
                    <h1 className="text-[#F0F4F8] text-ml font-bold">Listing Courses</h1>
                    <p className="text-[#94a3b8] text-xs">
                      Our goal in this step is to add an endpoint that lists our
                      courses. We&apos;ll then build upon this endpoint further with the ultimate goal of getting a
                      list of paginated courses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* blogs area */}

          <section className="">
            <div className="container mx-auto px-3 lg:px-5 py-10">
              <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <div>
                    <h1 className="text-2xl md:text-3xl xl:text-4xl font-heading font-black tracking-tight text-white">
                      Blogs.</h1>
                    <div className="lg:flex items-center justify-between">
                      <h3 className="text-base font-bold text-brand-600 uppercase text-[#818cf8] mt-1">odds and ins
                      </h3>
                      <h3 className="sm:flex sm:justify-end sm:items-end flex-col text-[#ffff]">Browse All Blogs <i
                        className="fa-solid fa-arrow-right"></i></h3>
                    </div>
                  </div>
                  <div>
                    <div className="py-2 text-[#475569]">
                      <h4 className="flex items-center gap-x-4 text-xs text-[#94a3b8]">Dec 30, 24</h4>
                      <h1
                        className="mt-2 text-lg font-semibold leading-6 relative elative
                                after:content-[''] after:absolute after:left-0 after:bottom-0
                                after:w-0 after:h-[2px] after:bg-[#ffff]
                                after:transition-all after:duration-300
                                hover:after:w-full text-[#ffff] inline-block">
                        Testing cloudflare R2 for video
                        Storage
                      </h1>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#94a3b8]">We&apos;ll discuss a new ongoing
                        test will be running with
                        our
                        video storage & delivery</p>
                    </div>
                    <div className="py-2 text-[#475569]">
                      <h4 className="flex items-center gap-x-4 text-xs text-[#94a3b8]">Feb 03, 24</h4>
                      <h1
                        className="mt-2 text-lg font-semibold leading-6 relative elative
                                after:content-[''] after:absolute after:left-0 after:bottom-0
                                after:w-0 after:h-[2px] after:bg-[#ffff]
                                after:transition-all after:duration-300
                                hover:after:w-full text-[#ffff] inline-block">
                        What&apos;s New in Adocasts V3</h1>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#94a3b8]">we&apos;re now rocking AdonisJS 6
                        with a fresh redesign to
                        boot! We&apos;ll introduce &quot;The Feed&quot; and discuss a few new Adocasts plus perks.</p>
                    </div>
                    <div className="py-2 text-[#475569]">
                      <div className="text-xs flex items-center gap-10 text-[#94a3b8]">
                        <h4 className="flex items-center gap-x-4 text-xs">Jan 25, 24</h4>
                        <h4 className="flex items-center gap-x-4 text-xs">#adonisjs</h4>
                      </div>
                      <h1
                        className="mt-2 text-lg font-semibold leading-6 relative elative
                                after:content-[''] after:absolute after:left-0 after:bottom-0
                                after:w-0 after:h-[2px] after:bg-[#ffff]
                                after:transition-all after:duration-300
                                hover:after:w-full text-[#ffff] inline-block">
                        AdonisJS 6 has Landed</h1>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#94a3b8]">AdonisJS has officially been
                        released to the public!
                        Here
                        some links to resource to help get you on your way.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl xl:text-4xl font-heading font-black tracking-tight text-white">
                    Snippets.</h1>
                  <div className="lg:flex items-center justify-between">
                    <h3 className="text-base font-bold text-brand-600 uppercase text-[#818cf8] mt-1">Bite Sized code
                    </h3>
                    <h3 className="sm:flex sm:justify-end sm:items-end flex-col text-[#ffff]">Browse All Snippets <i
                      className="fa-solid fa-arrow-right"></i></h3>
                  </div>
                  <div>
                    <div className="py-2 text-[#475569]">
                      <div className="text-xs flex items-center gap-10 mb-1 text-[#94a3b8]">
                        <h4>Sep 15, 24</h4>
                        <h4 className="flex items-center gap-x-4 text-xs">#adonisjs</h4>
                        <h4 className="flex items-center gap-x-4 text-xs">#lucid</h4>
                      </div>
                      <h1
                        className="mt-2 text-lg font-semibold leading-6 relative elative
                                after:content-[''] after:absolute after:left-0 after:bottom-0
                                after:w-0 after:h-[2px] after:bg-[#ffff]
                                after:transition-all after:duration-300
                                hover:after:w-full text-[#ffff] inline-block">
                        Accessing Lucid&apos;s Knex Connection
                        client
                      </h1>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#94a3b8]">Ever need to directly access
                        knexJS, the query
                        builder
                        Lucid wraps around? Here&apos;s how you can do it!</p>
                    </div>
                    <div className="py-2 text-[#475569]">
                      <div className="text-xs flex items-center gap-10 mb-1 text-[#94a3b8]">
                        <h4 className="flex items-center gap-x-4 text-xs">Feb 10, 24</h4>
                        <h4 className="flex items-center gap-x-4 text-xs">#tailwind</h4>
                      </div>
                      <h1
                        className="mt-2 text-lg font-semibold leading-6 relative elative
                                after:content-[''] after:absolute after:left-0 after:bottom-0
                                after:w-0 after:h-[2px] after:bg-[#ffff]
                                after:transition-all after:duration-300
                                hover:after:w-full text-[#ffff] inline-block">
                        Disabled tailwind
                        CSS Hover States on
                        Tap
                        Devices</h1>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#94a3b8]">Did you know you can quick
                        and easily disable
                        Tailwind&apos;s
                        hover state classes on Tap devices, like phones and tablets</p>
                    </div>
                    <div className="py-2 text-[#475569]">
                      <div className="text-xs flex items-center gap-10 mb-1 text-[#94a3b8]">
                        <h4>Feb 04, 24</h4>
                        <h4 className="flex items-center gap-x-4 text-xs">#components</h4>
                        <h4 className="flex items-center gap-x-4 text-xs">#tailwind</h4>
                        <h4 className="flex items-center gap-x-4 text-xs">#adonisjs</h4>
                      </div>
                      <h1
                        className="mt-2 text-lg font-semibold leading-6 relative elative
                                after:content-[''] after:absolute after:left-0 after:bottom-0
                                after:w-0 after:h-[2px] after:bg-[#ffff]
                                after:transition-all after:duration-300
                                hover:after:w-full text-[#ffff] inline-block">
                        Simple AdonisJS 6
                        Layout components
                      </h1>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#94a3b8]">With AdonisJS 6, has been
                        removed in favor of
                        components.
                        In this snippet, we provide a simple layout component example.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fever area */}

          <main className="relative bg-[#0B0C2A] text-white pb-[200px] overflow-hidden mx-auto px-3 lg:px-5">
            <Image
              src="/assets/images/planets-top.svg"
              alt="Top Planets"
              width={1920}
              height={400}
              className="absolute top-0 left-0 w-full opacity-80 pointer-events-none"
            />

            {/* Bottom Behind */}
            <Image
              src="/assets/images/planets-bottom-behind.svg"
              alt="Bottom Behind Planets"
              width={1920}
              height={400}
              className="absolute bottom-0 right-0 w-full opacity-70 pointer-events-none"
            />

            {/* Top Front */}
            <Image
              src="/assets/images/planets-top-front.svg"
              alt="Top Front Planets"
              width={1920}
              height={400}
              className="absolute top-0 right-0 w-full pointer-events-none"
            />

            {/* Bottom Front */}
            <Image
              src="/assets/images/planets-bottom.svg"
              alt="Bottom Planets"
              width={1920}
              height={400}
              className="absolute bottom-0 left-0 w-full pointer-events-none"
            />

            {/* Main Content */}

            <div className="container relative flex flex-col justify-center items-center text-center lg:py-24 py-5 mt-5 px-4">
              <Image
                src="/assets/images/adocasts-plus-white-40.png"
                alt="asocasts"
                width={40}
                height={40}
              />
              <h1 className="text-xl font-semibold text-[#4E45E2] uppercase">Launch Into AdonisJS</h1>
              <div className="bg-[#161749] p-4 rounded-md mt-5 w-full max-w-[800px] mb-8 flex items-center justify-center">
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
                  <div className="space-y-4 sm:text-right">
                    <p className="flex items-center gap-x-3 text-[#93A2B7]"><i
                      className="fa-solid fa-check text-[#4E45E2]"></i> Unlock all series, lessons, and
                      assets
                    </p>
                    <p className="flex items-center gap-x-3 text-[#93A2B7]"><i
                      className="fa-solid fa-check text-[#4E45E2]"></i> 2 weeks early access to new lessons
                    </p>
                    <p className="flex items-center gap-x-3 text-[#93A2B7]"><i
                      className="fa-solid fa-check text-[#4E45E2]"></i> Feed posts shared across the site</p>
                  </div>
                  <div className="lg:space-y-4 md:text-right">
                    <p className="flex items-center gap-x-3 text-[#93A2B7]"><i
                      className="fa-solid fa-check text-[#4E45E2]"></i> Ad-free site experience</p>
                    <p className="flex items-center gap-x-3 text-[#93A2B7]"><i
                      className="fa-solid fa-check text-[#4E45E2]"></i> Submit ads to run across
                      the site</p>
                    <p className="flex items-center gap-x-3 text-[#93A2B7]"><i
                      className="fa-solid fa-check text-[#4E45E2]"></i> Renewal reminders; cancel
                      anytime</p>
                  </div>
                </div>
              </div>

              <div className="relative z-50 flex justify-center items-center min-h-screen">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-[#181742] rounded-md border-4 border-[#242551] p-10">
                  <div className="pt-12 pb-20 pl-10 pr-10">
                    <Image
                      src="/assets/images/adocasts-plus-white-40.png"
                      alt="pic"
                      width={80}
                      height={80}
                    />
                    <h1 className="text-2xl font-bold">Monthly</h1>
                    <div className="flex gap-5">
                      <h1 className="text-7xl py-5">$8</h1>
                      <p className="pt-14 text-[#93A2B7]">/ month</p>
                    </div>
                    <p className="text-[#93A2B7] text-[20px] pb-7">Take things month-by-month with one low price to
                      unlock
                      everything!</p>
                    <button className="bg-[#E6E8EB] text-[#1A1847] w-full mt-3 py-2 rounded-md font-semibold">Get
                      Started</button>
                  </div>
                  <div className="rounded-md border-4 border-[#4F46E5] pt-12 pb-20 pl-10 pr-10">
                    <Image
                      src="/assets/images/adocasts-plus-white-40.png"
                      alt=""
                      width={80}
                      height={80}
                    />
                    <h1 className="text-2xl font-bold">Annually</h1>
                    <div className="flex gap-5">
                      <h1 className="text-7xl py-5">$80</h1>
                      <p className="pt-14 text-[#93A2B7]">/ year</p>
                    </div>
                    <p className="text-[#93A2B7] text-[20px] pb-7">Take things year-by-year with one low price to
                      unlock
                      everything!</p>
                    <button className="bg-[#E6E8EB] text-[#1A1847] w-full mt-3 py-2 rounded-md font-semibold">Get
                      Started</button>
                  </div>
                  <div className="pt-12 pb-20 pl-6 pr-6">
                    <Image
                      src="/assets/images/adocasts-plus-white-40.png"
                      alt="pic"
                      width={80}
                      height={80}
                    />
                    <h1 className="text-2xl font-bold">Forever</h1>
                    <div className="flex gap-5">
                      <h1 className="text-7xl py-5">$285</h1>
                      <p className="pt-14 text-[#93A2B7]">/ lifetime</p>
                    </div>
                    <p className="text-[#93A2B7] text-[20px] pb-7">Hate subscriptions? Me too! Pay once, then never
                      again
                      with our forever plan.</p>
                    <button className="bg-[#E6E8EB] text-[#1A1847] w-full mt-3 py-2 rounded-md font-semibold">Get
                      Started</button>
                  </div>
                </div>
              </div>

            </div>
          </main>

          {/* footer area */}

          <Footer />
        </div>
      </div>
    </>
  );
}
