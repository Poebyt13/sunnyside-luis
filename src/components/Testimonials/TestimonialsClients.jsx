
function TestimonialsClients({ foto, description, name, job }) {
    return (
        <div className="flex flex-col items-center gap-12">
            <img src={foto} alt="foto" className="w-16 rounded-full" />
            <p className="w-80 font-Barlow text-center font-semibold text-MyNeutral-VeryDarkGrayishBlue leading-7">{description}</p>
            <div className="text-center">
                <h5 className="text-lg font-bold">{name}</h5>
                <p className="text-MyNeutral-Blue font-medium text-sm">{job}</p>
            </div>
        </div>
    )
}

export default TestimonialsClients
