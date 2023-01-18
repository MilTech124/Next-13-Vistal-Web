import React, { useState } from "react";

function Modal({info,link}) {
  const [open, setOpen] = useState(true);

  if (open) {
    return (
      <>
        <div className="bg-black/50 fixed z-20 flex justify-center items-center top-0 left-0 w-full h-full">
          <div className="bg-white backdrop-blur-md bg-opacity-40 w-[80%] h-[50%] rounded-md">
            <p className="text-center pt-[15%] text-2xl font-bold">
              Potwierdz swoje zamówienie
            </p>

            <div className="flex justify-around pt-10">
              <a href="tel:+48 693 344 132">
                {" "}
                <div className="bg-slate-600 p-2 rounded-md hover:bg-yellow-500 transition-all cursor-pointer">
                  <img src="/svg/wphone.svg" />
                </div>
              </a>
              <a href="mailto:kontakt@vistal-garaze-blaszane.pl">
                {" "}
                <div onClick={()=>(setTimeout(()=>{setOpen(false)},2000))} className="bg-slate-600 p-2 rounded-md hover:bg-yellow-500 transition-all cursor-pointer">
                  <img src="/svg/wmail.svg" />
                </div>
              </a>
            </div>

            <div onClick={()=>(setOpen(false))} className="text-xl font-bold mt-5 p-5 flex justify-center bg-slate-500 hover:bg-yellow-500 transition-all cursor-pointer">
              Cofnij
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}

export default Modal;
