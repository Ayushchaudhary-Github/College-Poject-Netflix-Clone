import "./home.scss"
import React from "react"
import Navbar from "../../Components/navbar/Navbar"
import Featured from "../../Components/features/Featured"
import List from "../../Components/list/List"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List />
      <List />
      <List />
      <List />
    </div>

    // <div class="preloader" style="display: none;">
    //             <div class="preloader-inner" style="display: none;">
    //                             <div>
    //               <div class="ms-spinner-loader"></div>
    //               <div class="ms-spinner-loader ms-spinner-loader-2"></div>
    //             </div>

    //             </div>
    //         </div>
  )
}

export default Home