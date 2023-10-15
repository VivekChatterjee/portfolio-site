import React from 'react'

const Service = () => {
  return (
    <section className="services" id="services">
    <h2 className="heading">My <span>Services</span></h2>

    <div className="services-container">
        
      <div className="services-box">
        <i className="bx bx-code-alt"></i>
        <h3>Web Development</h3>
        <p>
          Looking for a reliable and professional web development service to
          help you create a stunning website that stands out from the crowd?
          Look no further, I can build a high-quality website that will not
          only attract and engage your target audience but also help you
          achieve your business goals. Contact me today to learn more about my
          web development services and how I can help take your online
          presence to the next level.
        </p>
      </div>
      <div className="services-box">
        <i className="bx bxs-pen"></i>
        <h3>Content Writer</h3>
        <p>
          Are you struggling to find the time and resources to produce
          high-quality content that engages and connects with your audience?
          Look no further, I can create content that resonates with your
          audience and moreover develop a customized content strategy that
          aligns with your goals and objectives. Contact me today to learn
          more about my content writing services and how I can help you
          elevate your brand's online presence.
        </p>
      </div>
    </div>
  </section>
  )
}

export default Service