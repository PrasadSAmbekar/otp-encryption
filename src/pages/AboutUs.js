import React from 'react';

function AboutUsPage() {
    return (
        <div style={{ minHeight: 'calc(70vh - 65px - 55px)' }} className='mx-5'>
            <div className='my-5' />
            <div className='responsive-about google-fonts-roboto' style={{ textAlign: 'center' }}>
                <p style={{ marginTop: '20px', fontSize: '1.2rem' }}>
                    Welcome to our page where we explore the power of secure cryptographic solutions. 
                    This is a demonstration of how images and content can seamlessly be integrated in React.
                </p>
                {/* Image in the center */}
                <img src="/friends.jpg" alt="profile" style={{ width: '20%', height: '10%', margin: 'auto' }} />
                
                {/* Some descriptive text below the image */}
            </div>
        </div>
    );
}

export default AboutUsPage;
