"use client"
import React, { useState } from "react";
import styles from './style.module.css'
import Image from "next/image";

/* Don't forget to download the CSS file too 
OR remove the following line if you're already using Tailwind */
 
export default function Home  ()  {
  const [menu,setmenu]=useState(false);
  return (
    <div id="webcrumbs" className="max-md:overflow-hidden"> 
            	<div className="w-full">
               
                   {/* Navigation */}
         <nav className="flex justify-around p-5  bg-[#f8f7f1] max-sm:justify-between max-sm:mt-[-10px] w-full">
              <div className=""><h1 className={styles.logo}>Rajat</h1></div>
              {/* {menu} */}
              <ul className={`flex justify-between w-[500px]  cursor-pointer max-sm:hidden ${styles.menulist} `}>
                <li className="pb-2  hover:border-b-2  border-orange-300">Home</li>
                <li className="pb-2  hover:border-b-2  border-orange-300">Services</li>
                <li className="pb-2  hover:border-b-2 border-orange-300">Works</li>
                <li className="pb-2  hover:border-b-2  border-orange-300">Experience</li>
              </ul>
              <div className="sm:hidden">

              <img src="/image/icons8-menu-30.png" onClick={()=>setmenu(true)}/>
              </div>
              {menu &&
              <div className=" md:hidden w-[100%] h-full bg-[#f8f7f1] absolute z-[100]">
              <img src = "/image/icons8-close-30.png" className="m-4 w-[30px] h-[30px]" onClick={()=>setmenu(false)}/>
 
              <ul className={`cursor-pointer flex flex-col
                 z-[200] items-center text-2xl mt-10 ${styles.menulist} `}>
                <li className="pb-2  hover:border-b-2  border-orange-300 ">Home</li>
                <li className="pb-2  hover:border-b-2  border-orange-300 max-sm:mt-10">Services</li>
                <li className="pb-2  hover:border-b-2 border-orange-300 max-sm:mt-10">Works</li>
                <li className="pb-2  hover:border-b-2  border-orange-300 max-sm:mt-10">Experience</li>
              </ul>

              </div>
              }
         </nav>

{/* Mobile Navigation */}



{/* Hero sections */}

         <section className=" flex bg-[#f8f7f1] w-full max-sm:flex-col justify-evenly h-[350px]  max-md:h-[400px] ">
          
            <div className="h-[300px] max-md:order-1 max-md:text-center">
                <h1 className={styles.heroheading}>Hey There <span className="block">I,m Rajat</span></h1>
                <h4 className="text-[#f26440] max-md:hidden md:mt-20">RajatKumar108@hotmail.com</h4>
              <div className="flex max-md:flex-col max-md:hidden md:mt-20">
              <span className="text-5xl block ">2</span>
              <h1 className="ml-2"> Years <span className="block"> Experience</span></h1>  
                </div>   
            </div>


            <div className="md:mt-[-50px] max-md:order-3">
             <img src="/image/portrait-businessman.png " className={`max-md:w-[250px] max-md:h-[250px] max-md:mt-20 mt-10  ${styles.herosectionImg}`}/>
               <Image src={"/image/herobackground.png"}
              width={400}
              height={400}
              alt ="background image for hero section image is brush"
          
              className={styles.backgroundimagebr}
              /> 
            </div>

            <div className="h-[200px]  max-md:order-2 md:mt-20 max-md:text-center max-md:mt-5"> 
              <h3 className={styles.herosecondheading}>I design beautifully simple <span className="block">things, And I love what i do.</span></h3>
              {/* <div>
                <img src="#"/>
                <h2> <span>Coursera Certificate FrontEnd Development</span></h2>
              </div> */}
            </div>
         </section>

        <section className=" bg-[#f8f8f8] flex w-full md:justify-between max-md:flex-wrap   max-md:m-0">
            <div className="md:w-[28%] max-md:mt-24  md:ml-20 text-center m-4">
            
              <div className="border-[#F0F0F0] max-md:w-[350px]   flex justify-around border-2 hover:bg-white p-5 mt-5 max-md:mt-12 rounded-lg cursor-pointer">
              <div className="w-[65px] h-[65px] bg-[#286f6c] rounded-full flex justify-center items-center">
                <img src="/image/icons8-computer-30.png"/>
              </div>
                <div className="text-2xl">Website Design <span className="block text-sm">76 Projects</span></div>
              </div>


              <div className="border-[#F0F0F0] shadow-xs flex justify-around items-center  border-2 hover:bg-white p-5 mt-5 rounded-lg cursor-pointer">
                <div className="w-[65px] h-[65px] bg-[#f1c249] rounded-full flex justify-center items-center">
                  <img src="/image/icons8-google-pixel-6-30.png"/>
                </div>
                <div className="text-2xl">Mobile App Design <span className="block text-sm">76 Projects</span></div>
              </div>

              <div className="border-[#F0F0F0] shadow-xs  flex justify-around items-center  border-2 hover:bg-white p-5 mt-5 rounded-lg cursor-pointer">
              <div className="w-[65px] h-[65px] bg-[#f26440] rounded-full flex justify-center items-center">
              <img src="/image/icons8-spc-gear-30.png"/>
              </div>
                <div className="text-2xl">Brand Identity <span className="block text-sm">76 Projects</span></div>
              </div>
            </div>

            {/*  */}
            <div className="md:w-[50%]  text-start flex-wrap  mt-5   ">

              <h1 className="p-5 max-md:text-4xl text-6xl">What do I help?</h1>
              <p className="p-5">I will help with finging a solution and solve
                 your problems, we use process design to create digital
                 products. Besids that also help their business.
                 We use process design to create digital products.
                 Besids that also help their business. 
              </p>
              <div className="flex justify-around text-start ">
                <h1 className="text-3xl">285+ <span className="block text-sm">Project Completed</span></h1>
                <h1 className="text-3xl">190+ <span className="block text-sm">Happy Clients</span></h1>
              </div>
            </div>
        </section>

        {/* Work Experience */}

<section className="bg-[#f8f7f1] h-[800px] max-md:h-[1100px]">
  <h1 className="text-center pt-10 text-2xl bold ">My Work Experience</h1>
  <div className="flex justify-evenly pt-14 max-md:flex-wrap">

  <div className="flex flex-col justify-around max-md:order-2">
 
    <div className="">
      <h1 className="text-2xl">Self-Employed,Brisbane</h1>
      <span className="block mt-2 font-bold">Sep 2016-Aug 2014</span>
    </div>

    <div className="mt-10">
      <h1 className="text-2xl">New Man Services</h1>
      <span className="block mt-2 font-bold">Jan 2017-Mar 2018</span>
    </div>

    <div className="mt-10">
      <h1 className="text-2xl">Global Solution</h1>
      <span className="block mt-2 font-bold">Feb 2019 - Mar 2020</span>
    </div>

  </div>



<div className="flex max-md:ml-14">

  <div className="flex flex-col ">
    <div className="border-2 flex justify-center items-center border-dotted  border-[#9ea4a1] w-[35px] h-[35px] rounded-full ml-[-15px]">
      <span className="  text-center block bg-[#286f6c] rounded-[100px] w-[15px] h-[15px] "></span>
    </div>

      <div className="w-[0.3px] h-[160px] border-[1.5px] border-dotted border-[#9ea4a1]"></div>
      
      <div className="border-2 flex justify-center items-center border-dotted  border-[#9ea4a1] w-[35px] h-[35px] rounded-full ml-[-15px]">

        <span className="  text-center block bg-[#f26440] rounded-[100px] w-[15px] h-[15px] "></span>

      </div>
    <div className=" w-[0.3px] h-[170px] border-[1.5px] border-dotted border-[#9ea4a1] "></div>
    <div className="border-2 flex justify-center items-center border-dotted  border-[#9ea4a1] w-[35px] h-[35px] rounded-full ml-[-15px]">

    <span className="  text-center block bg-[#f1c249] rounded-[100px] w-[15px] h-[15px] "></span>

    </div>
  <div className=" w-[0.3px] h-[170px] border-[1.5px] border-dotted border-[#9ea4a1] "></div>
    
  
  </div>

<div>


  <div className="  mt-1 ml-4  max-w-[350px]  h-[200px] text-sm">
    <h1 className="p-2 text-2xl">Visual Designer</h1>
    <p className="p-2 text-[#4f646b]">A Visual Designs for a variety of platforms
      , which may include Internet and intranet sites, games, movies.
    </p>
    
  
  </div>

{/*  */}

  <div className="mt-1 ml-4  max-w-[300px]  h-[200px] text-sm">
    <h1 className="p-2 text-2xl">New Man Services</h1>
    <p className="p-2 text-[#4f646b]">A Visual Designs for a variety of platforms
      , which may include Internet and intranet sites, games, movies.
    </p>

  </div>

{/*  */}


  <div className="  mt-1 ml-4  max-w-[300px]  h-[200px] text-sm">
    <h1 className="p-2 text-2xl">Global Solution</h1>
    <p className="p-2 text-[#4f646b]">A Visual Designs for a variety of platforms
      , which may include Internet and intranet sites, games, movies.
    </p>
   
  </div>

</div>

  </div>
</div>
</section>

{/*  My Latest Work */}


<section className="md:m-20 max-md:m-5 mt-20 h-[350px] max-md:h-[450px]">
  <h1 className="text-2xl">My Latest Works</h1>
  <div className="flex justify-between">
    <p className="mt-2 text-sm">Perfect solution for digital experience</p>
    <a className="underline text-[#f26440] text-lg mt-[-20px]">Explore More</a> 
  </div>
  {/* work section */}

  <div className={`mt-16 scroll-smooth scroll-thin  overflow-x-scroll   ${styles.worksection}`}>
    
      <div className={`flex justify-evenly  w-[1200px] h-[300px] p-2 ${styles.worksectionboxshadow}`}>

        <div className="w-[350px] h-[250px] rounded-[8px] bg-[#f1c249]">
          <p className="text-white text-xl m-4">App Design <span className="text-sm block bold">Food Delivery App</span></p>
          
        </div>
        <div className="w-[350px] h-[250px] rounded-[8px] bg-[#286f6c]">
          <p className="text-white text-xl m-4">App Design <span className="text-sm block bold">Web Design</span></p>
        </div>
        <div className="w-[350px] h-[250px] rounded-[8px] bg-[#d5eae5]">
          <p className="text-white text-xl m-4">Brand Build <span className="text-sm block bold">Brand advertisment</span></p>
        </div>
      </div>
  
    </div>
</section>


{/* testimonials */}

<section className="bg-[#f8f7f3] max-md:h-auto  max-md:pb-5 pb-2">
  <div className="flex justify-center flex-col p-5">

  <h1 className={styles.reviewheading}>People talk about us</h1>
  <p className="block text-center mt-2 text-[#4f646b]">I got a job that was in accordance with the salary and field of works, The process<span className="block text-center">
    of submitting an application was quite easy
    </span></p>
  </div>
  <div className="flex md:m-20  mt-12  justify-evenly flex-wrap">
      
      <div className="w-[335px] h-[250px] bg-white rounded-[8px] px-2">
        <div className="rounded-full w-[70px] h-[70px] p-5 bg-green-300 ml-auto mr-auto mt-[-20px]">
                  <img className=""/>
        </div>
        <div className="">
          <p className="text-sm m-5 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
        </div>
        <hr/>
        <div className="flex justify-center mt-2 flex-col items-center">
        <h1 className="font-bold">John Allendane</h1>
        <p className="block text-sm">Creative Manager</p>
        </div>
        </div>   

        <div className="w-[335px] h-[250px] max-lg:mt-10 bg-white rounded-[8px] px-2">
          <div className="rounded-full w-[70px] h-[70px] p-5 bg-[#f1c249] ml-auto mr-auto mt-[-20px]">
                    <img className=""/>
          </div>
        {/*  */}
        <div className="">
          <p className="text-sm m-5 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
        </div>
        {/*  */}

          <hr/>

          <div className="flex justify-center mt-2 flex-col items-center">
          <h1 className="font-bold">John Allendane</h1>
            <p className="block text-sm">Creative Manager</p>
          </div>

        </div> 


          <div className="w-[335px] h-[250px] max-lg:mt-10 bg-white rounded-[8px] px-2">
            <div className="rounded-full w-[70px] h-[70px] p-5 bg-pink-300 ml-auto mr-auto mt-[-20px]">
                      <img className=""/>
            </div>
            <div className="flex justify-center mt-2 flex-col items-center">
              <p className="text-sm m-5 text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
            </div>
            <hr/>

        <div className="flex justify-center mt-2 flex-col items-center">
        <h1 className="font-bold">John Allendane</h1>
          <p className="block text-sm">Creative Manager</p>
          </div>
        </div>    
    
   </div>
</section>


{/* Footer */}


<section className="m-10 md:m-20 h-[250px] flex md:justify-around max-md:flex-col">
  <div className="">
    <h1 className="text-2xl">Let's make something <span className="block text-2xl">amazing toghtether.</span></h1>
      <h1 className="text-2xl md:mt-20 ">Start by <span className="border-b-2 border-[#f26440] text-[#f26440]">saying hi</span></h1>
  </div>
  <div className="max-md:mt-5 max-md:flex max-md:flex-col max-md:items-center" >
    <h1>Information</h1>
    <span className="text-center">145 New York, FL 5467, USA</span>
    <ul className={`ml-[-8px] mt-5 ${styles.list}`}>
      <li >Services</li>
      <li >Works</li>
      <li >Notes</li>
      <li >Experience</li>
    </ul>
  </div>
</section>


<hr className="m-20"/>

{/* footer details */}

<section className="text-center md:flex  md:justify-around ">
  <div className="md:flex ">

  <h1 className={`text-2xl ${styles.logo}`}>Rajat</h1>
  <span className="" >|</span>
  <p className="ml-20">@2024 All Right Reserved</p>
  </div>
  <div className="">
    <p >Design by  <span className="text-[#286f6c]">Creative Agency</span></p>
  </div>
</section>

         </div>
    	</div> 
  )
}

