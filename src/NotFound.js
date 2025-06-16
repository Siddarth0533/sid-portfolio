// NotFound.js - Custom 404 Not Found Page for the Portfolio
import React from 'react';

// NotFound component displays a professional 404 error page
function NotFound() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(120deg, #f7f7f7 0%, #e3e3e3 100%)',
            fontFamily: "'Montserrat', 'Segoe UI', 'Arial', sans-serif"
        }}>
            <style>{`
                .notfound-fade {
                    opacity: 0;
                    transform: translateY(40px);
                    animation: fadeInUp 0.7s cubic-bezier(.4,0,.2,1) forwards;
                }
                @keyframes fadeInUp { to { opacity: 1; transform: none; } }
            `}</style>
            <div className="notfound-fade text-center">
                <div style={{fontSize: '5rem', color: '#d90429', marginBottom: 8}}>🚫</div>
                <h1 style={{fontSize: '4rem', color: '#d90429', fontWeight: 'bold', marginBottom: 0}}>404</h1>
                <h2 style={{color: '#18191a', marginBottom: 16, fontWeight: 600}}>Page Not Found</h2>
                <p style={{color: '#18191a', fontSize: '1.1rem', marginBottom: 24}}>Sorry, the page you are looking for does not exist or has been moved.</p>
                <a href="/" className="btn btn-primary btn-lg" style={{fontWeight: 600, fontSize: '1.1rem'}}>Go Home</a>
            </div>
        </div>
    );
}

export default NotFound;