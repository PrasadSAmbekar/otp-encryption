import React from 'react';

function AboutUsPage() {
    return (
        <div style={{ minHeight: 'calc(70vh - 65px - 55px)' }} className='mx-5'>
            <div className='my-5' />
            <div className='responsive-about google-fonts-roboto' style={{ textAlign: 'center' }}>
                {/* Image in the center */}
                <img src="/friends.jpg" alt="profile" style={{ width: '5', height: '5', margin: '0px auto' }} />
                
                {/* Some descriptive text below the image */}
                <p style={{ marginTop: '20px', fontSize: '1.2rem' }}>
                    Welcome to our page where we explore the power of secure cryptographic solutions. 
                    This is a demonstration of how images and content can seamlessly be integrated in React.
                </p>
            </div>
        </div>
    );
}

export default AboutUsPage;
