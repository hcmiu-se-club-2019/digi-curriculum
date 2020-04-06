import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons';
import state from '../../data/json/testData2';

const externalLinks = state.externalLinks;

export default class Footer extends Component {
    render() {
        return (
            <div class="footer-basic" style={{backgroundColor: "white", color: "black"}}>
                <footer>
                    <div class="social">
                        {externalLinks.map(link => (
                            <SocialIcon url={link.url} className='m-1'/>
                        ))}
                    </div>
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="/">Home</a></li>
                        <li class="list-inline-item"><a href="/">Services</a></li>
                        <li class="list-inline-item"><a href="/">About</a></li>
                        <li class="list-inline-item"><a href="/">Terms</a></li>
                        <li class="list-inline-item"><a href="/">Privacy Policy</a></li>
                    </ul>
                    <p class="copyright" style={{color: "black"}}>HCMIU @2020</p>
                </footer>
            </div>
        )
    }
}
