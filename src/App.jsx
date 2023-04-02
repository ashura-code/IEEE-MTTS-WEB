import "./App.css";
import {message} from "./sign.js";
import { useState,useEffect } from "react";

function App() {


    message();

  return (
    <div className="App" role="main">
      <nav className='navbar'>
       <ul className='list_content'>
        <li className='logo'>
          MTTS
        </li>
        <li className="end">Home</li>
        <li className="end">Gallery</li>
        <li className='about end'>About</li>
        <li class="what_we_do end">Info</li>
       </ul>
     </nav>
  


    <div className="container-area">
       <div className="container one">

  
        
        {/* <pre className="text" dangerouslySetInnerHTML={{ __html: `
       IEEE 
       Microwave Theory 
       and 
       Techniques Society 
       Student Chapter.
     ` }}></pre> */}

     <h1 className="text">
         IEEE<br/>
         Microwave Theory <br />
         and <br />
         Techniques Society <br />
         Student Chapter. <br />
     </h1>

       </div>

       <div className="container two">

         <h1 className="about_title">About IEEE-MTTS</h1>
         <span className="about_content_wrapper">

         <center className="about_content">
          The IEEE Microwave 
         Theory and Techniques Society (MTT-S) is a professional 
         organization dedicated to the advancement of microwave theory 
         and its practical applications. The society boasts a diverse membership of engineers, scientists, educators, and students from around the world who are involved in various aspects of microwave technology, including design, modeling, testing, and application.</center>

         </span>
        
       </div>



       <div className="container three">
          <p className="about2_content">
          The <b>MTT-S</b> local chapter connects
           individuals interested in microwave 
           technology globally and facilitates 
           knowledge exchange and professional 
           development at the regional level through seminars,
            workshops, and other events. VIT Vellore is a group of 
            enthusiasts committed to organizing additional activities, including industry visits 
            and hands-on projects, 
            to complement the chapter's efforts. Together, we aim to promote excellence in microwave technology and create opportunities for learning and growth for all members.
          </p>
      
       </div>
       <div className="container four">

         <section className="logoo">
          <img  width="100px" height="100px" src="https://uc2f76edb773d9e3c13bb0528677.previews.dropboxusercontent.com/p/thumb/AB1RwQnPgk_ePLcInFNskYwRk-vsD_N4Xbm2Vxr8_ir2MejAP_F_L25azxSEdOMBMe1Qthj9ly6EASgFlIKIHVMSuawln4akK-bTaPNhpRxnkapP_SGupNcrSBEhAF3TRJmJTl0EwfOQU-e3mfqZeV6aNe-2y8Nxs94A4To0A2jeV63AF7Ap6ItVBfopwstkDQzX2gJclsTUKSx7vtg9fcoeBF_cTD1ORBlNC1cLpy8ittWqkDo9K50Bn_lL4ucFEGP5kyjelfl6ssoLpShmeStYBeV_1Lnbp2jdFKUOC9v_zN54NqdIHtM4LMgueE7tMy00z40iZUUzqfs7AFg03iaW1TLZZ0L-IYcMVtdNC5H9Iwoif25TtEMUCaWkeUgfG00/p.png"/>
      </section>

       <a href="">Instagram</a>
       <a href="">Linkedin</a>
       <a href="">Youtube</a>



       </div>
    </div>



    {/* <footer>
      <div className="container footer"></div>
    </footer> */}
    </div>
  );
}

export default App;
