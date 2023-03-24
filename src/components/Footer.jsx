import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import instagram from "../assets/icon-instagram.svg";
import pinterest from "../assets/icon-pinterest.svg";

const Footer = () => {
    return (
        <div className="flex flex-col items-center bg-emerald-200 text-Primary-DesaturatedCyan gap-7">
            <p className="text-3xl font-extrabold mt-10">sunnyside</p>
            <ul className="flex gap-16 font-Barlow font-semibold">
                <li><a href="#" className="hover:text-white duration-200">About</a></li>
                <li><a href="#" className="hover:text-white duration-200">Services</a></li>
                <li><a href="#" className="hover:text-white duration-200">Projecs</a></li>
            </ul>
            <div className="flex gap-10 mt-7 mb-10">
                <a href="#"><img src={facebook} alt="Facebook"/></a>
                <a href="#"><img src={instagram} alt="Instagram" /></a>
                <a href="#"><img src={twitter} alt="Twitter" /></a>
                <a href="#"><img src={pinterest} alt="Pinterest" /></a>
            </div>
        </div>
    )
}

export default Footer
