'use client'
import "./footer.css"
import Image from "next/image"
import Flag from "@/assets/us-flag.svg"
import Instagram from "@/assets/instagram.svg"
import Linkedin from "@/assets/linkedin.svg"
import GooglePay from "@/assets/gpay.svg"
import AmExpress from "@/assets/american-express.svg"
import Paypal from "@/assets/paypal.svg"
import MasterCard from "@/assets/master-card.svg"
import ApplePay from "@/assets/apple-pay.svg"
import Pay from "@/assets/pay.svg"
import { TfiAngleDown } from "react-icons/tfi";
import { useState } from "react"

export const Footer = () => {
    const [showContactUs, setShowContactUs] = useState(true)
    const [showQuickLinks, setShowQuickLinks] = useState(true)
    const [showFollowUs, setShowFollowUs] = useState(true)
    return (
        <footer>
            <section className="section">
                <div className="sub-section-1">
                    <h3 className="text-bold">BE THE FIRST TO KNOW</h3>
                    <p className="text-sm">Sign up for updates from mettā muse.</p>
                    <div className="subscribe-section">
                        <input type="text" placeholder="Enter your email..." className="email-input" />
                        <button className="subscribe-button">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
                <hr className="show-mobile" />
                <div className="sub-section-2">
                    <h3 className="text-bold">CONTACT US</h3>
                    <p className="text-sm">+44 221 133 5360</p>
                    <p className="text-sm">customercare@mettamuse.com</p>
                    <hr className="show-mobile" />
                    <h3 className="text-bold">CURRENCY</h3>
                    <div className="flex-row col-gap-8">
                        <Image src={Flag} width={24} height={24} alt="USA Flag" />
                        <p className="diamond" />
                        <span className="text-sm font-semibold">USA</span>
                    </div>
                    <p className="text-xs">Transactions will be completed in Euros and a currency reference is available on hover.</p>
                </div>
            </section>
            <hr />
            <section className="section">
                <div className="flex-col row-gap-16 text-md">
                    <h3 className="text-bold flex-row justify-between">mettā muse <TfiAngleDown className="show-mobile" onClick={() => setShowContactUs(!showContactUs)} /></h3>
                    {
                        showContactUs && <>
                            <a href="#">About us</a>
                            <a href="#">Stories</a>
                            <a href="#">Artisans</a>
                            <a href="#">Boutiques</a>
                            <a href="#">Contact Us</a>
                            <a href="#">EU Compliances Docs</a>
                        </>
                    }
                </div>
                <hr className="show-mobile" />
                <div className="flex-col row-gap-16 text-md">
                    <h3 className="text-bold flex-row justify-between">QUICK LINKS <TfiAngleDown className="show-mobile" onClick={() => setShowQuickLinks(!showQuickLinks)} /></h3>
                    {
                        showQuickLinks && <>
                            <a href="#">Orders & Shopping</a>
                            <a href="#">Join/Login as a Seller</a>
                            <a href="#">Payment & Pricing</a>
                            <a href="#">Return & Refunds</a>
                            <a href="#">FAQs</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms & Conditions</a>
                        </>
                    }
                </div>
                <hr className="show-mobile" />
                <div className="flex-col row-gap-16">
                    <h3 className="text-bold flex-row justify-between">FOLLOW US <TfiAngleDown className="show-mobile" onClick={() => setShowFollowUs(!showFollowUs)} /></h3>
                    {
                        showFollowUs && <div className="flex-row col-gap-12">
                            <a href="https://instagram.com" target="_blank">
                                <Image src={Instagram} width={32} height={32} alt="Instagram" />
                            </a>
                            <a href="https://linkedin.com" target="_blank">
                                <Image src={Linkedin} width={32} height={32} alt="Lingkedin" />
                            </a>
                        </div>
                    }
                    <hr className="show-mobile" />
                    <h3 className="text-bold payment-section">mettā muse ACCEPTS</h3>
                    <div className="flex-row col-gap-8 flex-wrap">
                        <Image src={GooglePay} width={56} height={35} alt="Google Pay Logo" />
                        <Image src={MasterCard} width={56} height={35} alt="Mastercard Logo" />
                        <Image src={Paypal} width={56} height={35} alt="Paypal Logo" />
                        <Image src={AmExpress} width={56} height={35} alt="American Express Logo" />
                        <Image src={ApplePay} width={56} height={35} alt="ApplePay Logo" />
                        <Image src={Pay} width={56} height={35} alt="Pay Logo" />
                    </div>
                </div>
            </section>
            <p className="copyright">Copyright © 2023 mettamuse. All rights reserved.</p>
        </footer >
    )
}