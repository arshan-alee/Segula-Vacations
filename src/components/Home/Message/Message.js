import React from 'react'
import "./Message.css"

const Message = () => {

    return (
        <div className='Message_Container'>
            <div className='Message_Container_Child'>
                <h2>SEND US MESSAGE</h2>
                <div className='message_child'>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing eliate  eiusm sit amet consectetur adipiscing eliate  eiusm</p>
                </div>

                <div className='message_form'>
                <input type="text" id="fname" placeholder="First Name" className='message_form_input'/>
                <input type="text" id="fname" placeholder="Last Name" className='message_form_input'/>
                <input type="text" id="fname" placeholder="Phone Number" className='message_form_input'/>
                <input type="text" id="fname" placeholder="Email" className='message_form_input'/>
                <input type="text" id="fname" placeholder="Message" className='message_form_message_input'/>
                </div>

                <button>SUBMIT</button>
            </div>
        </div>
    )
}

export default Message