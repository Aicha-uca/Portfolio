import React from "react";
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

const About= () => {
  
    return (
      <div className={classes.box} id='about'>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        ><div className="d-flex justify-content-center">
        <img
          alt=""
          src="https://picsum.photos/50"
          width="30"
          height="30"
          className="rounded-circle"
        />
      </div>
          <span className={classes.head}>ABOUT ME</span>
          <h2 className={classes.heading}>Who Am I?</h2>
          <div className={classes.About}>
        <p>
              je m'appelle <b>SAMIH AICHA</b> je suis {' '}
              <b>une étudiante à l'emsi en 4ème année</b> et voiçi
              <b>
                {' '}
                <a className={classes.link} target='_blank' href='https://www.linkedin.com/feed/'>
                   Mon compte
                </a>
              </b>
              
            </p>
            <p className={classes.br}>
              Je suis originaire de Casa, une fois le Bac en poche ,j'ai décidé de m'orienter vers la FST
              de Marrakech dans laquelle j'ai suivi un cursus de développement du site web
              et d'application et durant cette formation j'ai vraiment pu tirer un profit de savoir faire correspondant parfaitement au profil du développement
              et par rapport à mes expériences j'ai eu de la chance d'effectuer un stage au sein d'une société de marketing digitalet de dévloppement web ce qui m'a aidé à developper l'esprit de la communication,
              le sens d'organisation, et de responsabilité qui m'ont accordé une valeur pour mon cursus professionnel.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }

export {About};