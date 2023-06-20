import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {change} from '../../store/reducers/modal.reducer'


function Modal() {
  
  const visible = useSelector((state) => state.modal.visible)
  const title = useSelector((state) => state.modal.title)
  const dispatch = useDispatch()

  const sendMail=()=>{
    console.log(title.payload.title);
    window.open(`mailto:kontakt@vistal-garaze-blaszane.pl?subject=Strona&body=garaz:${title.payload.title}cena:${title.payload.prize}link:${title.payload.link}`);
  }

  if (visible) {
    return (
      <>
        <div className="bg-black/50 fixed z-20 flex justify-center items-center top-0 left-0 w-full h-full">
          <div className="bg-white backdrop-blur-md bg-opacity-40 w-[80%] h-[50%] rounded-md">
            <p className="text-center pt-[15%] text-2xl font-bold">
              Potwierdz swoje zamówienie
            </p>

            <div className="flex justify-around pt-10">
              <a href="tel:+48 693 344 132">
                
                <div className="bg-slate-600 p-2 flex flex-col rounded-md hover:bg-yellow-500 transition-all cursor-pointer">
                  <img src="/svg/wphone.svg" />
                  <p className="text-white">+48 693 344 132</p>
                </div>
              </a>
              
                <div onClick={()=>sendMail()} className="bg-slate-600 p-2 rounded-md hover:bg-yellow-500 transition-all cursor-pointer">
                  <img src="/svg/wmail.svg" />
                </div>
              
            </div>

            <div onClick={()=>dispatch(change({payload:{title:'',prize:null,link:null}}))} className="text-xl font-bold mt-5 p-5 flex justify-center bg-slate-500 hover:bg-yellow-500 transition-all cursor-pointer">
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
