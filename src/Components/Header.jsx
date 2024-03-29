import React from 'react'

const Header=()=> {
    return (
        <header>
            <div className='header'>
                <div className='logo'>
                    {/* <img src="./public/RashkaPoi.JPG" alt="" /> */}
                    <h4><span>Coding </span>With <span>ENG</span> SK</h4>
                </div>
                <div className='navs'>
                    <a href="#Home">Home</a>
                    <a href="#Bio">Bio</a>
                    <a href="#Skill">Skills</a>
                    <a href="#Projects">Projects</a>
                    <a href="#Contact">Contact</a>
                </div>
            </div>
        </header>
    )
}
export default Header