import React, { useState } from "react";
import Burnt from "../assets/burnt oblations (1).png"
import Ignition from "../assets/ignition (1).png"
import Fire from "../assets/lost in the fire (1).png"
import Surged from "../assets/surged chaos (1).png"
import Obituary from "../assets/obituary (1).png"
import "./Music.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faItunes, faApple, faSoundcloud } from "@fortawesome/free-brands-svg-icons";


export default function Music() {
    const [position, setPosition] = useState(3); // Default to the 3rd radio button
    const totalSlides = 5; // Total number of slides

    const moveLeft = () => {
        setPosition((prev) => (prev === 1 ? totalSlides : prev - 1)); // Move to the previous slide or loop to the last
    };

    const moveRight = () => {
        setPosition((prev) => (prev === totalSlides ? 1 : prev + 1)); // Move to the next slide or loop to the first
    };

    const info = [
        {
            name: "BURNT OBLATIONS",
            className: "Burnt",
            p: "music_desc_con_p",
            s: "burnt_s",
            song1: "Puppet Act",
            song2: "Introspection",
            song3: "Past Echoes",
            song4: "Pray to Me",
            song5: "",

            desc: "Tells the story of resilience, loss, and ambition that rose from discarded prayers. Through the album, listeners are taken on a journey about rising from the ashes past dream and finding solace in oneself. (im cringing). This album involves raw, emotive guitar riffs, haunting lyrics, and a fusion of indie-rock introspection with explosive energy (taken from chatGPT)"
        },
        {
            name: "IGNITION",
            className:"Ignition",
            p: "music_desc_con_p",
            s: "ignition_s",
            song1: "Ignition",
            song2: "",
            song3: "",
            song4: "",
            song5: "",

            desc: "Talks about the catalyst for Stage Fright’s journey and about what started it all. It gives listeners a fresh and authentic vision of the emotions that went through the band when they first started. Each track captures the ambition, grief, hopelessness, and most importantly, fiery determination of the time through an intricate layering of vibrant guitar riffs, thunderous percussion, and lyrics that strike like a match."
        },
        {
            name:"LOST IN THE FIRE",
            className:"Lost_2",
            p: "lost_desc_con_p",
            s: "lost_s",
            song1: "Heaven",
            song2: "Match Strike",
            song3: "Inferno",
            song4: "Smoke Signals",
            song5: "Flicker and Fade",
            desc: "A song about losing oneself, self sabotage, passion, and rebirth. With a soundscape that oscillates between smoldering ballads and roaring anthems, the album captures the feeling of being consumed by life's flames while desperately seeking a way out—or perhaps a way to embrace the burn. (chat gpt)"
        },
        {
            name:"SURGED CHAOS",
            className: "Surged",
            p: "music_desc_con_p",
            s: "surged_s",
            song1: "Surged Chaos",
            song2: "",
            song3: "",
            song4: "",
            song5: "",
            desc: "letting loose"
        },
        {
            name:"OBITUARY",
            className: "Obituary",
            p: "music_desc_con_p",
            s: "obituary_s",
            song1: "Afterglow",
            song2: "Six Feet",
            song3: "Nail in the Coffin",
            song4: "Paradise",
            song5: "",
            desc: "A reflection of the past experiences that made Stage Fright who they are today. Serves to remember the past and praise the reborn present. With a sound that blends melancholic melodies, heavy rock grit, and poetic lyricism, Obituary is as much about mourning as it is about finding meaning in the void. (chat gpt)"
        }
    ];

    return (
        <div className="music_page">
            <div className="top_sec">
                {/* Left Arrow */}
                

                {/* Radio Buttons */}
                {[1, 2, 3, 4, 5].map((index) => (
                    <input
                        key={index}
                        type="radio"
                        name="position"
                        checked={position === index}
                        onChange={() => setPosition(index)}
                        className="radio"
                    />
                ))}
                    
                
                
                {/* Carousel */}
                <div className="carousel" style={{ "--position": position }}>
                    <button className="arrow left" onClick={moveLeft}>
                        &#8592;
                    </button>
                    <div className="item">
                        <img src={Burnt}></img>
                    </div>
                    <div className="item">
                        <img src={Ignition}></img>
                    </div>
                    <div className="item">
                        <img src={Fire}></img>
                    </div>
                    <div className="item">
                        <img src={Surged}></img>
                    </div>
                    <div className="item">
                        <img src={Obituary}></img>
                    </div>
                    <button className="arrow right" onClick={moveRight}>
                    &#8594;
                    </button>
                    
                </div>
                


                {/* Center Rectangle */}
                

                {/* Right Arrow */}
                
            </div>
            <div className="music_bottom">
                <div className="music_desc_con">
                    <div className={info[position-1].className}>
                        <h3 className={info[position-1].className}>{info[position-1].name}</h3>
                        <p className={info[position-1].p}>{info[position-1].desc}</p>
                        <div className={info[position-1].s}>
                            <p>{info[position-1].song1}</p>
                            <p>{info[position-1].song2}</p>
                            <p>{info[position-1].song3}</p>
                            <p>{info[position-1].song4}</p>
                            <p>{info[position-1].song5}</p>
                        </div>
                    </div>
                    

                </div>
                
            </div>
            <div>

            </div>
            <div className="streaming">
                    <div className="stream_con">
                        <div className="stream_text_con">
                            <h2 className="stream_text">STREAM NOW</h2>
                        </div>
                        <div className="stream_icons">
                            
                            <div className="stream_row">
                                <FontAwesomeIcon className="icon" icon={faSpotify} />
                                <p>Spotify</p>
                            </div>
                            <div className="stream_row">
                                <FontAwesomeIcon className="icon" icon={faItunes} />
                                <p>iTunes</p>
                            </div>
                            <div className="stream_row">
                                <FontAwesomeIcon className="icon" icon={faApple} />
                                <p>Apple Music</p>
                            </div>
                            <div className="stream_row">
                                <FontAwesomeIcon className="icon" icon={faSoundcloud} />
                                <p>SoundCloud</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>

        </div>
    );
}