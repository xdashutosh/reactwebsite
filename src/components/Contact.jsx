import React from 'react'

const Contact = () => {
  return (
      <div className='contactus'>
    <div>

      <h1>Contact Us</h1>
<form>
  <div className="inputval">
  <label>Name</label>
<input type="text" required placeholder="your name" />  
  </div>

  <div className="inputval">
<label>Email</label>
<input type="email" required placeholder="xyz@mail" />  
  </div>

  <div className="inputval">
<label>Message</label>
<input type="text" required placeholder="type message..." />  
    </div>

    
<input type="submit" required placeholder="Submit" className='submit'/>  
</form>
    </div>
      </div>
  )
}

export default Contact
