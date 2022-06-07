import { useState,useEffect } from "react";
import HomeNav from "../components/HomeNav";
import ContactForm from "../components/Contact";
import '../css_pages/home.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import {useSelector} from 'react-redux';
import SlideCard from "../components/SlideCard";
import {Link} from 'react-router-dom'
import '@splidejs/react-splide/css';

function Home() {
const [size,setSize]=useState(window.innerWidth);
const recipes = useSelector(state=>state.recipe.recipes);
const popular = useSelector(state=>state.recipe.popular);

const checkSize=()=>{
  setSize(window.innerWidth);
}

useEffect(()=>{
  window.addEventListener('resize',checkSize);
  return ()=>{
    window.removeEventListener('resize',checkSize);;
  }
})

  return (<>
  <HomeNav/>
  <section className="main">
    <div className="welcome">
      <h2>Welcome To Provider</h2>
      <h3><Link to="/user">Start</Link></h3>
    </div>
    {/* this all the products in resto */}
    <div id='tour'>
      <div>
        <h3 className='section-header'>Popular</h3>
        <div className="section">
          {/* add the popular recipes */}
        <Splide options={ { rewind: true,
                            perPage:size<400?1:size<700?2:size<1024?3:4,
                            gap:'2rem',
                            pagination:false,
                            arrows:false,
                            drag:'free'}} >
        {popular?.map((image) =><SplideSlide key={image.recipeID}><SlideCard image={image}/></SplideSlide>)}
        </Splide>
        </div>
      </div>
      <div>
        <h3 className='section-header'>Others</h3>
        <div className="section">
          {/* add all the recipes */}
          <Splide options={ { rewind: true,
                            perPage:size<400?1:size<700?2:size<1024?3:4,
                            gap:'2rem',
                            pagination:false,
                            arrows:false,
                            drag:'free'}} >
           {recipes?.map((image)=><SplideSlide key={image.recipeID}><SlideCard image={image} /></SplideSlide>)}
        </Splide>
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