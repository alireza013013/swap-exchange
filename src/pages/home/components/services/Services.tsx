import "./Services.scss"
import clock from "../../../../assets/icons/clock.svg"
import timer from "../../../../assets/icons/timer.svg"
import users from "../../../../assets/icons/users.svg"
import shield from "../../../../assets/icons/shield.svg"

const Services = () => {

    const services = [
        {
            title: "پشتیبانی 24/7",
            subtitle: "پشتیبانی سریع و همه وقته",
            img: clock
        },
        {
            title: "1 دقیقه",
            subtitle: "خرید با سرعت",
            img: timer
        },
        {
            title: "+500,000",
            subtitle: "مشتریان وفادار ما",
            img: users
        },
        {
            title: "3 سال",
            subtitle: "سابقه کار",
            img: shield
        },
    ]

    return (
        <div className="main-services">
            {
                services.map((service, index) => {
                    return (
                        <div className="box-service" key={index}>
                            <span className="subtitle extra">
                                {service.title}
                                <img src={service.img} alt={service.title} />
                            </span>
                            <span className="description">{service.subtitle}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Services