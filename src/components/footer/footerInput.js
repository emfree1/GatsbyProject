import * as React from "react"

const FooterInput = () => {
  return (
    <div className='footer-input container-md'>
      <h2 className="footer-input--title">Stay in Touch</h2>
      <div className='footer-input--wrapper'>
        <form>
          <input placeholder="Enter your email address" type="email" name="email" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default FooterInput
