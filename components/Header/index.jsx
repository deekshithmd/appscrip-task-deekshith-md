import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image"
import Box from "@/assets/box.svg";
import Logo from '@/assets/logo.svg'
import Search from '@/assets/search.svg'
import Favourite from '@/assets/favourite.svg'
import Cart from '@/assets/cart.svg'
import Profile from '@/assets/profile.svg'
import "./header.css"

export const Header = () => {
    return <header>
        <div className="top">
            <div className="top-item hidden">
                <Image src={Box} width={16} height={16} alt="Toast Icon" />
                <span>Lorem ipsum dolor</span>
            </div>
            <div className="top-item hidden">
                <Image src={Box} width={16} height={16} alt="Toast Icon" />
                <span>Lorem ipsum dolor</span>
            </div>
            <div className="top-item">
                <Image src={Box} width={16} height={16} alt="Toast Icon" />
                <span>Lorem ipsum dolor</span>
            </div>
        </div>
        <div className="navigation-bar">
            <div className="flex-row col-gap-8">
                <div className="show-mobile"><GiHamburgerMenu size={20} /></div>
                <Image src={Logo} width={35} height={35} alt="Buyhop Logo" className="logo" />
            </div>
            <span className="logo-font">LOGO</span>
            <div className="profile-items">
                <Image src={Search} width={24} height={24} alt="Search" className="profile-icon" />
                <Image src={Favourite} width={24} height={24} alt="Favourite" className="profile-icon" />
                <Image src={Cart} width={24} height={24} alt="Cart" className="profile-icon" />
                <Image src={Profile} width={24} height={24} alt="Profile" className="profile-icon hidden" />
                <select className="hidden">
                    <option selected>ENG</option>
                    <option>HIN</option>
                </select>
            </div>

        </div>
        <nav className="navigation-items">
            <span className="show-mobile">HOME  |</span>
            <span>SHOP</span>
            <span className="hidden">SKILLS</span>
            <span className="hidden">STORIES</span>
            <span className="hidden">ABOUT</span>
            <span className="hidden">CONTACT US</span>
        </nav>
    </header>
}