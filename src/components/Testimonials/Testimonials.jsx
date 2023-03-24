import Client from "./TestimonialsClients";
import emilyFoto from "../../assets/image-emily.jpg"
import jennieFoto from "../../assets/image-jennie.jpg"
import thomasFoto from "../../assets/image-thomas.jpg"

function Testimonials() {
    return (
        <div className="flex flex-col items-center gap-16">
            <h4 className="mt-28 font-Fraunces text-lg font-semibold text-MyNeutral-Blue">CLIENT TESTIMONIALS</h4>
            <div className="flex flex-row gap-10 mb-28 flex-wrap justify-center gap-y-20">
                <Client foto={emilyFoto} description="We put our trust in Sunnyside and they delivered, marking sure our need were met and deadlines were alwais hit" name="Emily R." job="Marketing Director"></Client>
                <Client foto={jennieFoto} description="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience." name="Thomas S." job="Chief Operating Officer"></Client>
                <Client foto={thomasFoto} description="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!" name="Jennie F." job="Business Owner"></Client>
            </div>
        </div>
    )
}

export default Testimonials
