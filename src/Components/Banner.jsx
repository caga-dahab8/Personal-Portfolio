import React from "react";
const Banner=()=>{
    return(
        <section id="banner">
            <div className="banner">
                <div className="content">
                    <h1> Hello, I'm <span>Suleiman</span>. </h1>
                    <h2> <span>From Somalia.</span></h2>
                    <p>A budding software developer passionate about web technologies.</p>
                    <div className="links">
                        <a href="#"><span></span>Hire Me</a>
                        <a href="#"><span></span>Let's Talk</a>
                    </div>
                </div>
                <div className="img">
                    <img src="../../public/suleiman.jpeg" alt="Me" />
                </div>
            </div>
        </section>
    )
}

export default Banner