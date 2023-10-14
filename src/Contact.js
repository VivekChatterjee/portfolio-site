import React from 'react'

const Contact = () => {
  return (
    <>
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me!</span></h2>

      <form action="https://formspree.io/f/xzbqarey" method="POST">
        <div className="input-box">
          <input type="text" name="name" required placeholder="Name" />
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
          />
        </div>
        <textarea
          required
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>

    {/* captain america running  */}

    <div className="runCap">
      <img
        src="https://media.giphy.com/media/U8XjIgP3Q0T9ZdtH69/giphy.gif"
        alt=""
        className="cap"
      />
    </div>
    </>
  )
}

export default Contact