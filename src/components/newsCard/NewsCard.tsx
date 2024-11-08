import './NewsCard.scss'
import messages from "../../assets/icons/messages.svg"
import eye from "../../assets/icons/eye.svg"
import calender from "../../assets/icons/calender.svg"

const NewsCard = (props: {
    title: string,
    countComment: number,
    countView: number,
    date: string,
    img: string
}) => {
    return (
        <div className='card'>
            <img src={props.img} alt="News" />
            <div className='subtitle-info'>
                <span className='normal-text'>{props.title}</span>
                <div className='info'>
                    <span className='extra'>
                        {props.countComment}
                        <img src={messages} alt="Count Comment" />
                    </span>
                    <span className='extra'>
                        {props.countView}
                        <img src={eye} alt="Count View" />
                    </span>
                    <span className='extra'>
                        {props.date}
                        <img src={calender} alt="Date" />
                    </span>
                </div>
            </div>
        </div>
    )
}


export default NewsCard;