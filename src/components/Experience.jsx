import React from 'react';
import { Card } from 'primereact/card';

const ExperienceCard = ({ title, position, duration }) => {
    return (
        <Card title={title} subTitle={position} footer={duration} style={{backgroundColor: '#FFF0F5'}}>
            
           
        </Card>
    );
};

const Experience = () => {
    // Données pour chaque expérience
    const experienceData = [
        {
           
            title: 'La mise en place D’un site web responsive avec JS, Bootstrap et JQuery',
            position: 'FST Marrakech',
           
        },
        {
            
            title: 'Stage PFE : Développement d’une application web pour la gestion des tâches d’un projet en utilisant springBoot et AngularJS',
            position: 'Sales Pilot agence web de Digital Marketing',
            duration: 'Du 04/2021 Au 06/2021',
        },
       
    ];

    return (
        <section className="section">
            <div className="experience-grid">
                {experienceData.map((experience, index) => (
                    <div key={index} className="card" >
                        <ExperienceCard
                            title={experience.title}
                            position={experience.position}
                            duration={experience.duration}
                            
                        />
                    </div>
                ))}
            </div>
        </section>

    );
};

export default Experience;