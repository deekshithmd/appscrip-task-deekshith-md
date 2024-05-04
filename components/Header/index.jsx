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
                <Image src={Box} width={16} height={16} alt="box" />
                <span>Lorem ipsum dolor</span>
            </div>
            <div className="top-item hidden">
                <Image src={Box} width={16} height={16} alt="box" />
                <span>Lorem ipsum dolor</span>
            </div>
            <div className="top-item">
                <Image src={Box} width={16} height={16} alt="box" />
                <span>Lorem ipsum dolor</span>
            </div>
        </div>
        <div className="navigation-bar">
            <Image src={Logo} width={35} height={35} alt="Company-Logo" />
            <span className="logo-font">LOGO</span>
            <div className="profile-items">
                <Image src={Search} width={24} height={24} alt="Search" />
                <Image src={Favourite} width={24} height={24} alt="Favourite" />
                <Image src={Cart} width={24} height={24} alt="Cart" />
                <Image src={Profile} width={24} height={24} alt="Profile" />
                <select>
                    <option selected>ENG</option>
                    <option>HIN</option>
                </select>
            </div>

        </div>
        <nav className="navigation-items">
            <span>SHOP</span>
            <span>SKILLS</span>
            <span>STORIES</span>
            <span>ABOUT</span>
            <span>CONTACT US</span>
        </nav>
    </header>
}