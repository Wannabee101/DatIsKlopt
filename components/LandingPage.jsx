import React from 'react';

import styles from '../styles/LandingPage.module.css';
import Particles from "react-tsparticles";

export default function LandingPage() {
    return(
        <div>
            <Particles
                className={styles.particles}
                id="tsparticles"
                options={{
                background: {
                    color: {
                    value: "#939190",//"#1B2838",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                    ondiv: {
                        enable: true,
                        elementId: "login",
                        type: "rectangle"
                    },
                    },
                    modes: {
                    bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                    },
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.2,
                    },
                    },
                },
                particles: {
                    color: {
                    value: "#14171D",//"#B8B6B4",
                    },
                    links: {
                    color: "#14171D",//"#B8B6B4",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                    },
                    collisions: {
                    enable: true,
                    },
                    move: {
                        collisions: false,
                        direction: "none",
                        enable: true,
                        out_mode: "bounce",
                        random: false,
                        speed: 1,
                        straight: false
                    },
                    number: {
                    density: {
                        enable: true,
                        value_area: 800,
                    },
                    value: 80,
                    },
                    opacity: {
                    value: 0.5,
                    },
                    shape: {
                    type: "circle",
                    },
                    size: {
                    random: true,
                    value: 5,
                    },
                },
                detectRetina: true,
                }}
            />
        </div>
    )

}