import HomeNav from "../components/HomeNav";
import { useEffect } from "react";
import ContactForm from "../components/Contact";
import '../css_pages/home.scss'

function Home() {

// useEffect(()=>{
//   const authentication = async()=>{
//     await fetch('http://localhost:4500/rest/views/jwtVerify.php', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization':JSON.parse(localStorage.getItem('token'))||''
//     }
//     })
//     .then(response => response.json()).then(data=>{
//       if(data.message){
//         // actions.AUTHENTICATE_USER();
//       }else{
//         // actions.LOGOUT_USER();
//       }
//     }).catch(err=>{
//       console.log(err);
//     })
//   }
//   authentication();
// },[])  

  return (<>
  <HomeNav/>
  <section className="main">
    <div className="welcome">
      <h2>Welcome To Provider</h2>
      <h3><a href="/user">Start</a></h3>
    </div>
    {/* this all the products in resto */}
    <div id='tour'>
      <div className="section">
        <h3 className='section-header'>Popular</h3>
        <div>
          {/* add the popular recipes */}
        </div>
      </div>
      <div className="section">
        <h3 className='section-header'>Others</h3>
        <div>
          {/* add all the recipes */}
        </div>
      </div>
    </div>

    {/* about section  */}
    <div className='section' id='about'>
      <h3 className='section-header'>About</h3>
      <p className='section-para'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aut reiciendis perspiciatis porro est, molestias dolor illum error consectetur quis eveniet corrupti rem deserunt, minima ratione, expedita maiores rerum nemo.
      </p>
    </div>
    <div className='section' id='services'>
      <h3 className='section-header'>Services</h3>
      <ul className='section-list'>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aliquid!</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aliquid!</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aliquid!</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aliquid!</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aliquid!</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aliquid!</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aliquid!</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aliquid!</li>
      </ul>
    </div>
    <div className='section' id='faq'>
      <h3 className='section-header'>Frequently Asked Questions</h3>
      <ul className='section-list'>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aliquid!</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aliquid!</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aliquid!</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aliquid!</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aliquid!</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aliquid!</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aliquid!</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, aliquid!</li>
      </ul>
    </div>
    <div className='section' id='contact'>
      <h3 className='section-header'>Contact</h3>
      <ContactForm/>
    </div>
    <div className='section'>
      <h4>foot</h4>
    </div>
  </section>
  </>)
}

export default Home