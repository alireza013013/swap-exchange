import { useState } from "react"
import "./Questions.scss"
import arrow from "../../../../assets/icons/arrow.svg"

const Questions = () => {

    const [questions, setQuestions] = useState([
        {
            subtitle: "آیا خرید و فروش رمز ارز قانونی است؟",
            description: "ابتدا، نوع استفاده از لپ تاپ باید مشخص شود. آیا شما از آن برای کارهای روزمره، بازی‌های رایانه‌ای، کارهای مهندسی یا طراحی گرافیکی استفاده می‌کنید؟ این تعیین کننده",
            isOpen: false
        },
        {
            subtitle: "کدام رمز ارز آینده بهتری دارد؟",
            description: "ابتدا، نوع استفاده از لپ تاپ باید مشخص شود. آیا شما از آن برای کارهای روزمره، بازی‌های رایانه‌ای، کارهای مهندسی یا طراحی گرافیکی استفاده می‌کنید؟ این تعیین کننده",
            isOpen: false
        },
        {
            subtitle: "چطور بتوانیم به ... اعتماد کنیم؟",
            description: "ابتدا، نوع استفاده از لپ تاپ باید مشخص شود. آیا شما از آن برای کارهای روزمره، بازی‌های رایانه‌ای، کارهای مهندسی یا طراحی گرافیکی استفاده می‌کنید؟ این تعیین کننده",
            isOpen: false
        },
    ])

    const changeOpenParallex = (index: number) => {
        let element = questions[index]
        let newFilter = [...questions]
        if (!element.isOpen) {
            newFilter.forEach((item) => {
                item.isOpen = false
            })
        }
        element.isOpen = !element.isOpen
        newFilter[index] = element
        setQuestions(newFilter)
    }


    return (
        <div className="main-questions">
            <div className="texts">
                <h2 className="subtitle">سوالات متداول خرید ارز از ... :</h2>
                <h3 className="normal-text desktop">در صورتی که هنوز سوالاتی دارید، میتوانید در از قسمت پشتیبانی سوالات خود را مطرح کنید</h3>
            </div>
            <div className="parallex-main">
                {
                    questions.map((item, index) => {
                        return (
                            <div className='parallex-div' key={index} onClick={() => changeOpenParallex(index)}>
                                <img src={arrow} alt="Arrow" className={item.isOpen ? 'open' : ''} />
                                <span className='normal-text'>{item.subtitle}</span>
                                {
                                    item.isOpen && <span className='extra'>{item.description}</span>
                                }
                            </div>
                        )
                    })
                }
            </div>
            <h3 className="normal-text mobile">در صورتی که هنوز سوالاتی دارید، میتوانید در از قسمت پشتیبانی سوالات خود را مطرح کنید</h3>
        </div>
    )
}


export default Questions;