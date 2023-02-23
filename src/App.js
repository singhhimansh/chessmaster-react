
import { useState,useEffect, useRef } from 'react';
import chessboard from './images/chess.webp';
import king from './images/king.png';
import knight from './images/knight.png';
import pawn from './images/pawn.png';
import Tilt from 'react-parallax-tilt';
// import { useRouter } from 'next/router';
import { Ctrl }from './utils/ctrl.ts';

const App =() => {
  // const [darkMode, setDarkMode] = useState('dark');
  const ctrl = new Ctrl();
  // const router = useRouter()


  const  login = async (e)=> {
    // e.preventDefault();
    window.open(document.URL, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
    await ctrl.auth.login()
    // router.push('/login');
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black  "  >
      {/* <Head>
        <title>ChessMaster</title>
        <link rel="icon" href="/images/knightround.png" />
      </Head> */}

      {/* <header>
        <button onClick={() => setDarkMode(darkMode ? '' : 'dark')}>DarkMode</button>
      </header> */}


      <div className="bg-black ">
        <div className=" min-h-screen flex  flex-col pt-10 gap-10 font-poppins overflow-hidden bg-chesslers bg-origin-content items-center">
          <div className="flex flex-col lg:flex-row lg:px-20 gap-5 justify-between items-center z-10 w-full text-white lg:py-4">
            <div className="flex flex-row items-center justify-between w-full md:justify-around">
              <div className="flex flex-col justify-between items-center w-auto px-5 gap-5">
                <a className="z-10 block text-xl lg:text-3xl font-bold bg-gradient-to-br from-golden-300 to-white bg-clip-text text-transparent" href="/">Chesslers</a>
              </div>
            </div>

            <div className="flex justify-around lg:w-auto w-full py-4 lg:py-0 items-center space-x-14 text-sm lg:text-lg px-2">
              <div className="md:w-60">
                <div className="relative">
                  <div className="relative w-full  cursor-default overflow-hidden delay-500 duration-1000   focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <button className="absolute inset-y-0 left-0 flex items-center pl-2" id="headlessui-combobox-button-:r0:" type="button" aria-haspopup="listbox" aria-expanded="false" data-headlessui-state="">
                      <svg width="27" height="27" viewBox="0 0 27 27" className="h-3 w-3 text-gray-400" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.6897 0C19.6868 0 25.3782 5.69142 25.3782 12.6884C25.3782 15.9896 24.1113 19.0004 22.0382 21.2601L26.1175 25.3309C26.4993 25.7127 26.5006 26.3303 26.1188 26.712C25.9286 26.9049 25.6771 27 25.4269 27C25.178 27 24.9279 26.9049 24.7363 26.7146L20.6078 22.5976C18.436 24.3369 15.6823 25.3782 12.6897 25.3782C5.69273 25.3782 0 19.6854 0 12.6884C0 5.69142 5.69273 0 12.6897 0ZM12.6897 1.95447C6.77029 1.95447 1.95447 6.76899 1.95447 12.6884C1.95447 18.6079 6.77029 23.4237 12.6897 23.4237C18.6079 23.4237 23.4237 18.6079 23.4237 12.6884C23.4237 6.76899 18.6079 1.95447 12.6897 1.95447Z" fill="currentColor"></path>
                      </svg>
                    </button>
                    <input className="text-sm rounded-lg block w-full pl-10 p-1 bg-white/20 border-gray-600 outline-none placeholder-gray-400 text-white" placeholder="Search" id="headlessui-combobox-input-:r1:" onChange={()=> console.log('searching')
                    } role="combobox" type="text" aria-expanded="false" data-headlessui-state="" value="" />
                  </div>
                </div>
              </div>
              <div className="flex gap-5">
                <a className="font-semibold hover:text-golden-300 hover:underline underline-offset-4 duration-500 ease-in" href="/leaderboard">Leaderboard</a>
                <div className="rounded-lg text-black text-sm w-32 px-3 font-bold bg-golden-300 text-primary ">
                  <a href='' onClick={login} className="flex items-center justify-center w-full">
                    <p>Login with</p>
                    <svg height="30" viewBox="-12 -12 74 74" xmlns="http://www.w3.org/2000/svg"><path fill="black" stroke="#000000" strokeLinejoin="round" d="M38.956.5c-3.53.418-6.452.902-9.286 2.984C5.534 1.786-.692 18.533.68 29.364 3.493 50.214 31.918 55.785 41.329 41.7c-7.444 7.696-19.276 8.752-28.323 3.084C3.959 39.116-.506 27.392 4.683 17.567 9.873 7.742 18.996 4.535 29.03 6.405c2.43-1.418 5.225-3.22 7.655-3.187l-1.694 4.86 12.752 21.37c-.439 5.654-5.459 6.112-5.459 6.112-.574-1.47-1.634-2.942-4.842-6.036-3.207-3.094-17.465-10.177-15.788-16.207-2.001 6.967 10.311 14.152 14.04 17.663 3.73 3.51 5.426 6.04 5.795 6.756 0 0 9.392-2.504 7.838-8.927L37.4 7.171z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex-1 md:w-auto w-screen text-white px-5 md:px-20 xl:px-40 py-10 ">
              <div className="text-white p-10 md:px-40 flex flex-col-reverse md:flex-row justify-between w-full gap-20 ">
                <div className="flex flex-col justify-center backdrop-blur-lg flex-1">
                  <h1 className=" text-3xl md:text-6xl font-extrabold">Play Chess.</h1>
                  <br />
                  <h2 className="text-3xl md:text-6xl font-extrabold">Get Paid.</h2>
                  <div className="my-8">
                    <p>Join now to get $5 and get started</p>
                  </div>
                </div>
                <Tilt tiltReverse={true}>
                <div>
                  <div className="slideContent ">
                    <div className="relative md:mt-20">
                      <img alt="board" src={chessboard} decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}} width="600" height="300" />
                      <div className="absolute top-6 left-10 md:top-10 md:left-20 rotate-12 hover:rotate-0 h-20 w-20 md:h-40 md:w-40">
                        <img alt="board" src={king} sizes="100vw" decoding="async" data-nimg="fill" loading="lazy" style={{position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent"}} />
                      </div>
                      <div className="absolute top-10 right-10 md:top-10 md:right-10 -rotate-12 hover:rotate-0 h-20 w-20 md:h-40 md:w-40 ">
                        <img alt="board" sizes="100vw" src={pawn} decoding="async" data-nimg="fill" loading="lazy" style={{position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent"}} />
                      </div>

                      <div className="absolute -top-5 right-24 md:-top-10 md:right-56 -rotate-12 hover:rotate-0 h-20 w-20 md:h-40 md:w-40">
                        <img alt="board" sizes="100vw" src={knight} decoding="async" data-nimg="fill" loading="lazy" style={{position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent"}} />
                      </div>
                    </div>
                  </div>
                </div>
                </Tilt>
              </div>

              <div className="flex flex-col items-center gap-20 my-40">
                <h2 className="text-2xl font-bold">How Does it Work</h2>
                <div className="flex flex-col md:flex-row gap-16 justify-around w-full">
                  <div className=" bg-golden-300/20 rounded-lg p-5 py-8 w-80 relative flex flex-col items-center gap-4">
                    <p className="absolute left-2 -top-10 text-6xl font-extrabold text-golden-300/30">1</p>
                    <div className="flex items-center gap-2">
                      <svg viewBox="-12 -12 74 74" xmlns="http://www.w3.org/2000/svg" className="h-14 text-golden-300"><path fill="none" stroke="currentColor" strokeLinejoin="round" d="M38.956.5c-3.53.418-6.452.902-9.286 2.984C5.534 1.786-.692 18.533.68 29.364 3.493 50.214 31.918 55.785 41.329 41.7c-7.444 7.696-19.276 8.752-28.323 3.084C3.959 39.116-.506 27.392 4.683 17.567 9.873 7.742 18.996 4.535 29.03 6.405c2.43-1.418 5.225-3.22 7.655-3.187l-1.694 4.86 12.752 21.37c-.439 5.654-5.459 6.112-5.459 6.112-.574-1.47-1.634-2.942-4.842-6.036-3.207-3.094-17.465-10.177-15.788-16.207-2.001 6.967 10.311 14.152 14.04 17.663 3.73 3.51 5.426 6.04 5.795 6.756 0 0 9.392-2.504 7.838-8.927L37.4 7.171z"></path></svg>
                      <p className="text-3xl font-bold">Login</p>
                    </div>
                    <p className="text-sm text-center">With your lichess account to sync your rankings and earnings</p>
                  </div>

                  <div className=" bg-golden-300/20 rounded-lg p-5 py-8 w-80 relative flex flex-col items-center gap-4">
                    <p className="absolute left-2 -top-10 text-6xl font-extrabold text-golden-300/30">2</p>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="h-14 text-golden-300"><path fill="currentColor" d="M83.5 79.2c-.9.4-1.8 1-2.5 1.7s-1.3 1.6-1.7 2.5L66.1 70.3l-2.8 2.8-6.4 6.4c-.4.4-.9.6-1.4.6-.5 0-1-.2-1.4-.6-.8-.8-.8-2 0-2.8l2.8-2.8 2.8-2.8-6.9-6.9L57 60l6.9 6.9 2.8-2.8-6.9-6.9L64 53l6.9 6.9 2.8-2.8 2.8-2.8c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8l-6.4 6.4-2.8 2.8 13.4 12.9zM40.1 42.9 9.4 12.2v8.5l26.5 26.5 4.2-4.3zm7.1-7L20.7 9.4h-8.5l30.7 30.7 4.3-4.2zm39.4 46.7c-1.1 0-2.1.4-2.8 1.2-.8.8-1.2 1.8-1.2 2.8s.4 2.1 1.2 2.8c1.6 1.6 4.1 1.6 5.7 0s1.6-4.1 0-5.7c-.8-.7-1.8-1.1-2.9-1.1zm-47.7-7.3zM36 66.8 33.2 64 87.8 9.4h-8.5L29 59.7l-2.8-2.8-2.8-2.8c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l6.4 6.4 2.8 2.8-13.3 13.1c.9.4 1.8 1 2.5 1.7s1.3 1.6 1.7 2.5l13.1-13.1 5 5 4.2 4.2c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.8-.8.8-2 0-2.8L43 73.9 40.3 71l50.3-50.3v-8.5L36 66.8zM13.4 82.6c-1.1 0-2.1.4-2.8 1.2-1.6 1.6-1.6 4.1 0 5.7s4.1 1.6 5.7 0c.8-.8 1.2-1.8 1.2-2.8s-.4-2.1-1.2-2.8c-.8-.9-1.8-1.3-2.9-1.3z"></path></svg>

                      <p className="text-3xl font-bold">Challenge</p>
                    </div>
                    <p className="text-sm text-center">your favourite player or friends or simply create an open challenge</p>
                  </div>

                  <div className=" bg-golden-300/20 rounded-lg p-5 py-8 w-80 relative flex flex-col items-center gap-4">
                    <p className="absolute left-2 -top-10 text-6xl font-extrabold text-golden-300/30">3</p>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512" className="h-14 text-golden-300"><g data-name="<Group>"><path fill="currentColor" d="M465.592,242.149c-20.2-6.1-45.592-9.72-73.592-10.385V125a9.885,9.885,0,0,0-2.749-6.973c-3.744-11.176-16.957-20.267-39.522-27.084-22.47-6.789-51.824-10.527-82.695-10.527-30.807,0-59.9,3.744-81.943,10.544-18.14,5.6-39.758,16.017-39.758,33.882a20.338,20.338,0,0,0,.286,3.31l1.107,45.554a120.6,120.6,0,0,0-22.461-2.114c-66.018,0-119.727,53.686-119.727,119.675A119.675,119.675,0,0,0,199.689,384.19c18.786,4.367,40.863,6.779,64.274,7.022,5.094,27.7,65.189,40.373,121.2,40.373,30.8,0,59.78-3.782,82.016-10.65C485.452,415.292,507,404.815,507,386.949V276.96a9.8,9.8,0,0,0-1.388-5.37C503.014,259.32,489.714,249.429,465.592,242.149ZM190.828,110.07c20.184-6.226,47.28-9.655,76.144-9.655,28.546,0,56.629,3.525,76.976,9.672,21.752,6.572,26.482,13.413,26.482,14.754s-4.7,8.222-26.453,14.8c-20.338,6.15-48.373,9.678-76.926,9.678-27.634,0-53.81-3.178-73.709-8.951-21.467-6.227-27.6-13.087-28.122-15.265a.427.427,0,0,0-.22-.276C165,122.668,171.667,115.981,190.828,110.07ZM372,149.62v25.042a10.629,10.629,0,0,0-1.639,5.619c0,1.349-4.664,8.221-26.419,14.8-20.337,6.151-48.355,9.679-76.908,9.679-24.736,0-48.91-2.648-68.088-7.455-.282-.071-.558-.122-.841-.168A117.954,117.954,0,0,0,166.871,179.4l-.683-28.158a117.876,117.876,0,0,0,21.584,8.336c21.66,6.282,49.817,9.742,79.285,9.742,30.881,0,60.168-3.741,82.631-10.535A109.735,109.735,0,0,0,372,149.62ZM191.32,365.033a99.7,99.7,0,1,1-67.055-173.442,100.8,100.8,0,0,1,29.513,4.421,98.539,98.539,0,0,1,35.369,19.651,99.592,99.592,0,0,1,32.791,55.473,103.868,103.868,0,0,1,2,20.13,99.415,99.415,0,0,1-32.619,73.767Zm25.412,2.189A119.763,119.763,0,0,0,235.967,334.3c8.6.742,17.627,1.167,26.941,1.263a9.935,9.935,0,0,0,.046,3.489l.418,32.157A303.428,303.428,0,0,1,216.732,367.222Zm26.622-87.8c5.889.376,12.007.608,18.312.691a20.551,20.551,0,0,0,.549,2.112l.433,33.342c-7.228-.084-14.254-.378-21.016-.873a120.224,120.224,0,0,0,2.307-23.423C243.939,287.338,243.742,283.379,243.354,279.417Zm24.454-19.229c-.264-.021-.5-.04-.774-.04-9.665,0-18.878-.355-27.484-1.052a119.8,119.8,0,0,0-17.8-37.208,345.934,345.934,0,0,0,45.3,2.873c30.881,0,60.168-3.741,82.63-10.535A109.663,109.663,0,0,0,372,205.059V231.8c-25,.717-48.457,3.933-67.237,9.232C287.1,246.015,274.767,252.436,267.808,260.188ZM281.586,275.1c1.657-3.054,9.244-9.151,28.7-14.641,19.563-5.521,45.1-8.458,71.913-8.458h.768c28.566,0,56.608,3.34,76.937,9.475,21.047,6.352,26.136,12.8,26.443,14.516,0,.046-.008.091-.011.136-.108,1.491-5.049,8.4-27.23,14.955-20.536,6.071-47.576,9.415-76.139,9.415-26.547,0-51.963-2.963-71.566-8.342-18.756-5.147-26.886-11.029-29.292-14.4A9.951,9.951,0,0,0,281.586,275.1ZM487,386.949c0,1.361-4.387,8.288-25.72,14.877-20.375,6.294-47.372,9.759-76.228,9.759-28.9,0-55.829-3.387-75.925-9.537-19.137-5.858-25.549-12.534-25.549-14.68,0-.056.014-.113.013-.169l-.1-6.146-.29-22.616a128.138,128.138,0,0,0,24.935,8.992c20.95,5.486,47.525,8.507,74.826,8.507,30.869,0,59.945-3.733,82.289-10.511,7.3-2.214,15.746-5.188,21.746-9.076Zm0-60.721c0,1.534-1.289,3.34-1.289,5.281,0,1.351-4.558,8.228-26.147,14.777-20.514,6.223-47.7,9.65-76.655,9.65-54.351,0-91.419-12.109-100.016-21.715l-.412-31.639c23.564,12.254,63.276,17.915,100.485,17.915,30.43,0,59.253-3.636,81.579-10.236A108.53,108.53,0,0,0,487,301.181Z"></path><path fill="currentColor" d="M124.265,225.25a66.016,66.016,0,1,0,66.016,66.016A66.091,66.091,0,0,0,124.265,225.25Zm0,112.032a46.016,46.016,0,1,1,46.016-46.016A46.069,46.069,0,0,1,124.265,337.282Z"></path></g></svg>
                      <p className="text-3xl font-bold">Earn</p>
                    </div>
                    <p className="text-sm text-center">coins and use them for future matches </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col my-40 gap-10 items-center">
                <h2 className="text-2xl font-bold">Backed By the Giants</h2>
                <p className="text-lg text-center">They are not just the backers, but believers of what we do, and how we aim to change the ecosystem and become the part of the change.</p>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <img alt="mesh" src={"https://chesslers.com/_next/image?url=%2Fbackers%2Fmesh.png&w=384&q=75"} decoding="async" data-nimg="1" loading="lazy" style={{ color: "transparent" }} width="180" height="100" />
                  <img alt="tachyon" src="https://chesslers.com/_next/image?url=%2Fbackers%2Ftachyon.png&w=640&q=75" decoding="async" data-nimg="1" loading="lazy" style={{color: "transparent"}} width="250" height="130"/>
                  <img alt="protocol" src="https://chesslers.com/_next/image?url=%2Fbackers%2Fprotocol.png&w=640&q=75" decoding="async" data-nimg="1" loading="lazy" style={{color: 'transparent',}} width="250" height="130" />
                </div>
              </div>
              <div className="flex flex-col my-40 gap-10 items-center">
                <h2 className="text-2xl font-bold">Connect With Us</h2>
                <div className="grid grid-cols-3 gap-5 w-80 items-center">
                  <a target="_blank" href="https://twitter.com/respctclub">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-10 w-full" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path></svg></a>
                  <a target="_blank" href="https://www.instagram.com/respct.club/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-10 w-full" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path></svg>
                  </a>

                  <a target="_blank" href="https://discord.gg/rPWpu3rTeZ"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-10 w-full" viewBox="0 0 16 16"><path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path></svg></a>
                </div>
              </div>
              <div className="flex justify-center">
                <p className="text-gray-400">© All rights reserved Gamut Inc.</p>
              </div>
            </div>
            <div className="Toastify"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
