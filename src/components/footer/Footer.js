import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div class="footer-basic" style={{backgroundColor: "white", color: "black"}}>
                <footer>
                    <div class="social">
                        <a href="https://www.linkedin.com/school/international-university-vnu/">
                            <i class="icon ion-social-linkedin"></i> Linkedin
                        </a>
                        <a href="https://www.youtube.com/channel/UCTBixlLRDIIlpmR_Y7wmI3w">
                            <i class="icon ion-social-youtube"></i> Youtube
                        </a>
                        <a href="https://www.facebook.com/IUVNUHCMC">
                            <i class="icon ion-social-facebook"></i> Facebook
                        </a>
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
