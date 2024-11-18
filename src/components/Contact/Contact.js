import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <h2>Contact Us</h2>
            <p>If you'd like to reach out, feel free to send an email directly:</p>
            <a href="mailto:forgelab01@gmail.com" className="email-link">forgelab01@gmail.com</a>
            <footer className="footer">
                &copy; {new Date().getFullYear()} ForgeLab. All rights reserved.
            </footer>
        </div>
    );
};

export default Contact;
