import React from 'react'
import Menubar from './Component/Menubar'
import PopupForm from './Component/PopupForm'
import Header from './Component/Header'
import Logo from './img/pic1.png'
import Register from './Component/Register'
import CardHowto from './Component/CardHowto'
import Ask from './Component/Ask'
// import PopupHowTo1 from './Component/PopupHowto1'
// import PopupHowTo2 from './Component/PopupHowto2'
// import PopupHowTo3 from './Component/PopupHowto3'
import Topic from './Component/TopicCard'
import About from './Component/About'
import Schedule from './Component/Schedule'
import Location from './Component/Location'
import Sponsor from './Component/Sponsor'
import Activity from './Component/Activity'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
const Component = () => (
  <div className="font-fam">
  <div className="home-wrap clearfix">
    <div className="row">
      <div className="container-fluid">
        <div className="text-center col-lg-12 bghead">
          <div className="row">
            <Header />
            <PopupForm />
          </div>
        </div>
        
    <Menubar />
    <div className="test-box">
   
      {/* ABOUT */}
      <div className="row col-lg-12 d-flex justify-content-center">
      <div className="mg-tp">
        <Topic message="ABOUT"/>
      </div>
      </div>
      <div><p></p></div>
      <div className="mr-pad row col-lg-12 d-flex justify-content-center">
        <About />
      </div>  
      {/*Schedule*/}
      <div className="row col-lg-12 d-flex justify-content-center">
      <div className="mg-tp">
        <Topic message="SCHEDULE"/>
      </div>
      </div>
      <div><p></p></div>
      <div className="mr-pad row col-lg-12 d-flex justify-content-center">
        <Schedule />
      </div>
      {/* Howto  */}
      <div className="row col-lg-12 d-flex justify-content-center">
      <div className="mg-tp">
        <Topic message="ACTIVITY"/>
      </div>
      </div>
      <div><p></p></div>
      <div className="mr-pad row col-lg-12 d-flex justify-content-center">
        <CardHowto />
      </div>  
      {/*Location*/}
      <div className="row col-lg-12 d-flex justify-content-center">
      <div className="mg-tp">
        <Topic message="LOCATION"/>
      </div>
      </div>
      <div><p></p></div>
      <div className="mr-pad row d-flex justify-content-center">
        <Location />
      </div>  
      {/* Sponsor */}
      <div className="col-lg-12">
      <div className="row col-lg-12 d-flex justify-content-center">
      <div className="mg-tp">
        <Topic message="SPONSOR"/>
      </div>
      </div>

    </div>
  </div>
  </div>
  </div>
      {/* Footer */}
        <Footer />      
  </div>
  </div>
)

export default Component
