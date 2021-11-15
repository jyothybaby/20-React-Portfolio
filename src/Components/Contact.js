import React, { Component } from 'react';

class Contact extends Component {

   constructor(props) {
      super(props);
      this.state = { 
         contactName: '',
         contactEmail: '',
         contactMessage: '',
         invalidEmail: false,
         contactSuccess: false
      }
    }
   
  render() {

   if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var message = this.props.data.contactmessage;
    }

   // var contactName = '';
   // var contactEmail = '';
   // var contactMessage = '';
   // const [contactName, setContactName] = useState('');
   // const [contactEmail, setContactEmail] = useState('');
   // const [contactMessage, setContactMessage] = useState('');

   


   const handleInputChange = (e) => {
      // Getting the value and name of the input which triggered the change
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      // Based on the input type, we set the state of either email, username, and password
      if (inputType === 'contactEmail') {
         this.setState({contactEmail: inputValue});
      } else if (inputType === 'contactName') {
         this.setState({contactName: inputValue});
      } else if (inputType === 'contactMessage') {
         this.setState({contactMessage: inputValue});
      }
      console.log(this.state)
    };

    const handleFormSubmit = (e) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      e.preventDefault();

      
      // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
      if (!validateEmail(this.state.contactEmail)) {
         this.setState({invalidEmail: true});
         // We want to exit out of this code block if something is wrong so that the user can correct it
         return;
         // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
       }else{
         this.setState({invalidEmail: false});
       }

      
      // If everything goes according to plan, we want to clear out the input after a successful registration.
      this.setState({contactSuccess: true});
    }; 
 
    function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action="" method="post" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={handleInputChange} />
                  </div>
                  {this.state.contactName === '' && <div className="contactErrorMsg">Name is mandatory</div>}

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={handleInputChange} />
                  </div>
                  {this.state.contactEmail === '' && <div className="contactErrorMsg">Email is mandatory</div>}
                  {this.state.invalidEmail && <div className="contactErrorMsg">Invalid Email</div>}

                  {/* <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={handleInputChange} />
                  </div> */}

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" onChange={handleInputChange}></textarea>
                  </div>
                  {this.state.contactMessage === '' && <div className="contactErrorMsg">Message is mandatory</div>}

                  <div>
                     <button className="submit" onClick={handleFormSubmit}>Submit</button>
                     {/* <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span> */}
                  </div>
                  {this.state.contactSuccess && <div className="contactSuccessMsg">Contact request sent successfully</div>}
					</fieldset>
				   </form>

              

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>

               </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
