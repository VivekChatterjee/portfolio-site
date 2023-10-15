import React from 'react'
import profile from './images/about-background.png'

const About = () => {
  return (
    <section className="about" id="about">
<div className="about-img">
  <img src={profile} alt="" />
</div>
<div className="about-content">
  <h2 className="heading">About <span>Me</span></h2>
  <h3>FrontEnd Developer</h3>
  <p>
    Possessing strong foundation in programming fundamentals and a hunger
    for learning new technologies. Strongly motivated to work in an agile
    team environment, along with the ability to adapt to fast-paced and
    dynamic work environments.
  </p>
  <a
    target="_blank" rel="noopener noreferrer"
    href="https://www.linkedin.com/posts/vivek-chatterjee-a590421b7_40days150problems-newbeginning-challenge-activity-7015217807864819712-7E1Q?utm_source=share&utm_medium=member_desktop"
    className="btn"
    >Read More</a
  >
</div>
</section>
  )
}

export default About