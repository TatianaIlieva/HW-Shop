import React  from "react";
import footerLogo from '../logo.png';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer-content">
                <div className="branding">
                    <span className="title">Branding Stuff</span>
                    <span className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</span>
                </div>
                <div className="footer-logo">
                    <a href='/' title="Homepage">
                        <img src={footerLogo} alt="Footer Logo" />
                    </a>
                </div>
                <div className="socials">
                    <a className="facebook" href="https://facebook.com" title="Visit Facebook page" target="_blank" rel="nofollow noreferrer">Visit Facebook page</a>
                    <a className="twitter" href="https://twitter.com" title="Visit Twitter page" target="_blank" rel="nofollow noreferrer">Visit Twitter page</a>
                    <a className="linkedin" href="https://linkedin.com" title="Visit LinkedIn page" target="_blank" rel="nofollow noreferrer">Visit LinkedIn page</a>
                    <a className="google" href="https://google.com" title="Visit Google page" target="_blank" rel="nofollow noreferrer">Visit Google page</a>
                </div>
            </div>
        )
    }
}