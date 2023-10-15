import React from 'react'
import profile from './images/about-background.png'
import { TypeAnimation } from 'react-type-animation'


const Home = () => {
  
  return (
    <section className="home" id="home">
    <div className="home-content">
      <h3>Hello World, It's</h3>
      <h1>Vivek Chatterjee</h1>
      <h3>And I'm a <span className="multiple-text">
      <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'FrontEnd Developer',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Leetcoder',
                            1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                    />
        </span>
        </h3>
      <p>I've been addicted to Programming :)</p>
      <div className="social-media">
        <a href="https://github.com/VivekChatterjee" target="_blank" rel="noopener noreferrer"
          ><i className="bx bxl-github"></i
        ></a>
        <a 
          target="_blank" rel="noopener noreferrer"
            href="https://twitter.com/i_vivek_jsr" 
          ><i className="bx bxl-twitter"></i
        ></a>
        <a 
          target="_blank" rel="noopener noreferrer"            
            href="https://www.instagram.com/vivekbossss/"
          ><i className="bx bxl-instagram"></i
        ></a>
        <a
          target="_blank" rel="noopener noreferrer"         
          href="https://www.linkedin.com/in/vivek-chatterjee-a590421b7/" 
          ><i className="bx bxl-linkedin-square"></i
        ></a>
      </div>
      <a
          target="_blank" rel="noopener noreferrer"        
        href="https://drive.google.com/file/d/1rb_k9sizQchvI7VLlVjlB_pt4tb2tsaq/view?usp=sharing" 
        className="btn"
        >Download Resume</a
      >
    </div>
    <div className="home-img">
      <img src={profile} alt='profile'/>
    </div>
  </section>
  )
}

export default Home