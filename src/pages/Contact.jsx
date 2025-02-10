import React, { useState, useEffect } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faInstagram, faFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Details:', details);
    setSubmitted(true);
  };

  const handleReset = () => {
    setName(' ');
    setEmail('');
    setSubject('');
    setDetails('');
    setDate('');
    setTime('');

    setSubmitted(false);
  };

  const [deliveryOption, setDeliveryOption] = useState("delivery");

  const handleDeliveryOptionChange = (option) => {
      setDeliveryOption(option);
  };



  


  return (
    <div className="contact_page">
        <div className="contact_container">
            <div className="contact_left">
                <h2 className="inquiry_text">SUBMIT AN INQUIRY</h2>
                <div className="order_type">
              <div className="options">
                <div className="delivery_btn_con">
                  <label htmlFor="delivery">
                    <button
                      onClick={() => handleDeliveryOptionChange("delivery")}
                      className={`delivery_btn ${deliveryOption === "delivery" ? "active1" : ""}`} >
                      <input
                        type="radio"
                        id="delivery"
                        name="orderType"
                        value="delivery"
                        className="delivery_radio"
                        checked={deliveryOption === "delivery"}
                        onChange={() => handleDeliveryOptionChange("delivery")}
                      />
                      Submit an Inquiry
                    </button>
                  </label>
                </div>
                <div className="pickup_btn_con">
                  <label htmlFor="pickup">
                    <button
                      onClick={() => handleDeliveryOptionChange("pickup")}
                      className={`pickup_btn ${deliveryOption === "pickup" ? "active1" : ""}`} >
                      <input
                        type="radio"
                        id="pickup"
                        name="orderType"
                        value="pickup"
                        className="pickup_radio"
                        checked={deliveryOption === "pickup"}
                        onChange={() => handleDeliveryOptionChange("pickup")}
                      />
                      <label for="pickup">Booking Request</label>
                    </button>
                  </label>
                </div>



              </div>


              {deliveryOption === "delivery" && (
                <div className="form">
                {submitted ? (
                <div className="contact_after">
                    <p>Thank you for contacting us! <br></br>Our team will reach out soon with further information.</p>
                    
                    <button className="reset" onClick={handleReset}>Submit Another Response</button>
                </div>
                ) : (
                <form onSubmit={handleSubmit}>
                    <div className="entry_field">
                        <label className="input_label" htmlFor="name">Name</label>
                        <br></br>
                        <input
                            type="text"
                            autoComplete='none'
                            id="name"
                            className="input"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="entry_field">   
                        <label className="input_label" htmlFor="email">Email</label>
                        <br></br>
                        <input
                            type="email"
                            autoComplete='none'
                            id="email"
                            className="input"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="entry_field">
                        <label className="input_label" htmlFor="subject">Subject</label>
                        <br></br>
                        <select
                            id="subject"
                            required
                            value={subject}
                            className="subject"
                            onChange={(e) => setSubject(e.target.value)}
                        >
                            <option value="">Select...</option>
                            <option value="booking">Booking</option>
                            <option value="collaboration">Collaboration</option>
                            <option value="general">Sponsorship</option>
                            <option value="lime1">Promotion and Press</option>
                            <option value="lime2">Feedback</option>

                        </select>
                    </div>
                    <div className="entry_field">
                        <label className="input_label" htmlFor="details">Please share more details</label>
                        <br></br>
                        <textarea
                            type="text"
                            id="details"
                            autoComplete='none'
                            required
                            className="input"
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            
                        />
                    </div>
                    
                    <button type="submit" className="button">Submit</button>
                    
                    
                </form>
                )}
            </div>
              )}

              {deliveryOption === "pickup" && (
                <div className="form">
                {submitted ? (
                <div className="contact_after">
                    <p>Thank you for contacting us! <br></br>Our team will reach out soon with further information.</p>
                    
                    <button className="reset" onClick={handleReset}>Submit Another Response</button>
                </div>
                ) : (
                <form onSubmit={handleSubmit}>
                    <div className="entry_field">
                        <label className="input_label" htmlFor="name">Name</label>
                        <br></br>
                        <input
                            type="text"
                            autoComplete='none'
                            id="name"
                            className="input"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="entry_field">   
                        <label className="input_label" htmlFor="email">Email</label>
                        <br></br>
                        <input
                            type="email"
                            autoComplete='none'
                            id="email"
                            className="input"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="entry_field">
                        <label className="input_label" htmlFor="subject">Event Type</label>
                        <br></br>
                        <select
                            id="subject"
                            required
                            value={subject}
                            className="subject"
                            onChange={(e) => setSubject(e.target.value)}
                        >
                            <option value="">Select...</option>
                            <option value="musical">Musical Performance</option>
                            <option value="guest">Guest Appearance</option>
                            <option value="voice">Voice-Over/AD(Radio/Internet)</option>
                            <option value="custom">Custom Produced Instrumental</option>
                            <option value="other">Other</option>

                        </select>
                    </div>
                    <label className="input_label" htmlFor="time">Event Date & Time</label>
                    <div className="contact_flex">

                    
                    <div className="entry_field">
                      <input
                      type="date"
                      id="date"
                      className="date_input"
                      value={date}
                      style={{ padding: "5px", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "10px", backgroundColor: "#333", color: "white"}}
                      onChange={(e) => setDate(e.target.value)}
                    />
                    
                    </div>
                    <div className="entry_field">
                      <input
                      type="time"
                      id="time"
                      className="time_input"
                      value={date}
                      style={{ padding: "5px", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "10px", backgroundColor: "#333", color: "white"}}
                      onChange={(e) => setTime(e.target.value)}
                    />
                    
                    </div>
                    </div>
                    <div className="entry_field">
                        <label className="input_label" htmlFor="details">Please Share the Venue Details</label>
                        <br></br>
                        <textarea
                            type="text"
                            id="details"
                            autoComplete='none'
                            required
                            className="input"
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            
                        />
                    </div>
                    
                    <button type="submit" className="button">Submit</button>
                    
                    
                </form>
                )}
                </div>
                
                
              )}
            
            </div>
        

            </div>
            <div className="contact_right">
                <h2 className="inquiry_text">CONTACT</h2>
                <p className="contact_p">stagefright@globalmedia.com</p>

                <h2 className="contact_heading">BASED IN</h2>
                <p className="contact_p">Dallas, Texas</p>

                {/* Social Media */}
                <div className="social-media">
                <h3 className="contact_heading">FOLLOW US:</h3>
                <div className="social_links">
                    <div className="social_row">
                        <FontAwesomeIcon className="icon" icon={faInstagram} />
                        <p href="https://www.instagram.com/stagefright" target="_blank" rel="noopener noreferrer">Instagram: @stagefright</p>

                    </div>
                    <div className="social_row">
                        <FontAwesomeIcon className="icon" icon={faXTwitter} />
                        <p href="https://www.twitter.com/name" target="_blank" rel="noopener noreferrer">Twitter: @stage_fright</p>

                    </div>
                    <div className="social_row">
                        <FontAwesomeIcon className="icon" icon={faFacebook} />
                        <p href="https://www.facebook.com/name" target="_blank" rel="noopener noreferrer">Facebook: @sf_band</p>

                    </div>
                    <div className="social_row">
                        <FontAwesomeIcon className="icon" icon={faSpotify} />
                        <p href="https://www.spotify.com/name" target="_blank" rel="noopener noreferrer">Spotify: @stagefright</p>

                    </div>

                    
                </div>
                </div>

            </div>
            
        
        </div>

    </div>

  );
}

export default Contact;