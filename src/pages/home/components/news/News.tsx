import './News.scss'
import link from "../../../../assets/icons/externallink.svg"
import news1 from "../../../../assets/home/news-coin.jpg"
import news2 from "../../../../assets/home/news-bist.png"
import NewsCard from '../../../../components/newsCard/NewsCard'


const News = () => {
    return (
        <div className="main-news">
            <div className='title-link'>
                <span className='subtitle'>آخرین اخبار رمزارز:</span>
                <span className='link'>
                    مشاهده همه اخبار
                    <img src={link} alt="See All" />
                </span>
            </div>
            <div className='cards'>
                <NewsCard title='میلیاردر مشهور آمریکایی: همه نشانه‌ها به تورم اشاره دارند' countComment={1} countView={24} date='1403/06/07' img={news1} />
                <NewsCard title='میلیاردر مشهور آمریکایی: همه نشانه‌ها به تورم اشاره دارند' countComment={1} countView={24} date='1403/06/07' img={news2} />
                <NewsCard title='میلیاردر مشهور آمریکایی: همه نشانه‌ها به تورم اشاره دارند' countComment={1} countView={24} date='1403/06/07' img={news1} />
                <NewsCard title='میلیاردر مشهور آمریکایی: همه نشانه‌ها به تورم اشاره دارند' countComment={1} countView={24} date='1403/06/07' img={news2} />
            </div>
        </div>
    )
}


export default News;