// Home.js - Main landing page of the portfolio
import React from 'react';

// Home component displays the hero section with intro and profile image
function Home()
{
    return(
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(120deg, #f7f7f7 0%, #e3e3e3 100%)',
            position: 'relative',
            fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif"
        }}>
            <style>{`
                .fade-in-up {
                    opacity: 0;
                    transform: translateY(40px);
                    animation: fadeInUp 0.8s cubic-bezier(.4,0,.2,1) forwards;
                }
                .fade-in-up.delay-1 { animation-delay: 0.2s; }
                .fade-in-up.delay-2 { animation-delay: 0.4s; }
                .fade-in-up.delay-3 { animation-delay: 0.6s; }
                @keyframes fadeInUp { to { opacity: 1; transform: none; } }
                @media (max-width: 991px) {
                  .container-home {
                    min-height: auto !important;
                    height: auto !important;
                    padding-top: 2.5rem !important;
                    padding-bottom: 1.5rem !important;
                  }
                  .home-img {
                    margin-top: 0.5rem !important;
                  }
                  .flex-fill {
                    margin-bottom: 0.5rem !important;
                  }
                }
            `}</style>
            <div className="container py-5 px-3 d-flex flex-row home-flex align-items-center justify-content-center container-home" style={{position: 'relative', zIndex: 2, minHeight: '100vh'}}>
                <div className="flex-fill" style={{minWidth: 0, marginBottom: 0}}>
                    <h1 className="fade-in-up delay-1" style={{color: '#d90429', fontWeight: 'bold', fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif"}}>Hi, I'm Sidharth</h1>
                    <p className="lead fade-in-up delay-2" style={{color: '#18191a', fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif"}}>
                        <span style={{
                            fontWeight: 700,
                            color: '#18191a',
                            background: '#f3f3f3',
                            borderLeft: '4px solid #d90429',
                            padding: '4px 14px',
                            borderRadius: '4px',
                            fontSize: '1.25rem',
                            display: 'inline-block',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                        }}>
                            I am a Full Stack Developer
                        </span><br />
                        <span style={{fontWeight: 400}}>
                            with a passion for building responsive web applications and seamless user experiences. I specialize in JavaScript, React, and Node.js, and enjoy turning complex problems into elegant solutions. Let’s create something amazing together!
                        </span>
                    </p>
                    <p className="fade-in-up delay-3" style={{color: '#18191a', fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif", fontWeight: 500, fontSize: '1.1rem'}}>Check out my projects and skills.</p>
                    <a className="btn btn-primary btn-lg fade-in-up delay-4" href="./about" role="button" style={{fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif"}}>Know more</a>
                </div>
                <div className="fade-in-up delay-4 home-img" style={{display: 'flex', justifyContent: 'center', marginTop: '0.7rem', marginBottom: 0}}>
                    <img src="profile.jpg" height={400} width={400} alt="Profile" className="rounded-circle shadow" style={{border: '4px solid #222', background: '#fff', maxWidth: '90vw', height: 'auto'}} />  
                </div>
            </div>
        </div>
    )
}

export default Home;