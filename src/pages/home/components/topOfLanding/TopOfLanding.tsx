import './TopOfLanding.scss'
import refresh from "../../../../assets/icons/refresh.svg"
import change from "../../../../assets/icons/change.svg"
import toman from "../../../../assets/toman.svg"
import trx from "../../../../assets/trx.svg"
import InputAmount from '../../../../components/inputAmount/inputAmount'

const TopOfLanding = () => {
    return (
        <div className='main-top-landing'>
            <div className='title-description'>
                <h1 className='title'>یه پرداخت ساده ، یه دریافت سریع!</h1>
                <h3 className='description extra'>با ما، به راحتی و بدون نیاز به مراحل پیچیده، ارز دیجیتال مورد نظرت رو دریافت کن! کافیست مبلغ ریالی رو پرداخت کنی و در چند لحظه، ارز دیجیتال مستقیم به کیف پولت منتقل می‌شه. سریع، امن و راحت؛ بدون دغدغه به دنیای دیجیتال وصل شو و هر زمان که خواستی، تراکنش خودت رو انجام بده!</h3>
            </div>
            <div className='box-exchange'>
                <div className='buttons-refresh'>
                    <div className='tabs'>
                        <button className='tab active'>
                            تبادل ارز
                        </button>
                        <button className='tab'>
                            خرید / فروش
                            <span className='badge'>به زودی</span>
                        </button>
                    </div>
                    <button className='refresh'>
                        <img src={refresh} alt="Refresh" />
                    </button>
                </div>
                <div className='box-token first'>
                    <span className='title-box'>تبادل</span>
                    <div className='inputs-name-token'>
                        <InputAmount />
                        <div className='image-name-token'>
                            TOMAN
                            <img src={toman} alt="token" />
                        </div>
                    </div>
                    <span className='title-fee'>
                        مقدار fee شبکه  :
                        <span className='amount-fee'> 15,000تومان  </span>
                    </span>

                    <button className='change-tokens'>
                        <img src={change} alt="Change" />
                    </button>
                </div>

                <div className='box-token second'>
                    <span className='title-box'>خرید</span>
                    <div className='inputs-name-token'>
                        <InputAmount />
                        <div className='image-name-token'>
                            TRX
                            <img src={trx} alt="token" />
                        </div>
                    </div>
                    <span className='title-fee'>
                        قیمت هر ترون:
                        <span className='amount-fee'>10,000تومان</span>
                    </span>
                </div>

                <input placeholder='آدرس کیف پول شما برای انتقال:' type="text" className='input-wallet' />
                <button className='submit'>دریافت رمز ارز</button>

            </div>
        </div>
    )
}


export default TopOfLanding