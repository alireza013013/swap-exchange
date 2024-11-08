import './Home.scss'
import TopOfLanding from './components/topOfLanding/TopOfLanding';
import Banner from './components/banner/Banner';
import Services from './components/services/Services';
import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadAll } from "@tsparticles/all";
import News from './components/news/News';
import Questions from './components/questions/Questions';

const Home = () => {
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadAll(engine)
        }).then(() => {
            setInit(true);
        });
    }, []);


    const options: any = useMemo(
        () => ({
            particles: {
                number: {
                    value: 100,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    polygon: {
                        nb_sides: 5
                    },
                },
                opacity: {
                    value: 0.1,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 10,
                        size_min: 0.1,
                        sync: false
                    }
                },
                links: {
                    enable: true,
                    distance: 200,
                    color: "#ffffff",
                    opacity: 0.1,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            retina_detect: false
        }),
        [],
    );



    return (
        <div className='main-home'>
            {
                init &&
                <Particles
                    id='tsparticles'
                    options={options}
                />
            }
            <TopOfLanding />
            <Banner />
            <Services />
            <News />
            <Questions />
        </div>
    )
}

export default Home;