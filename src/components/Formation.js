import React from "react";
import { Card } from "react-bootstrap";

function Formation() {
    const formations = [
        {
            diplome: "Cycle d’ingénieur Informatique et Réseaux option Miage",
            etablissement: "EMSI MARRAKECH",
            annees: "2022 - PRÉSENT",
        },
        {
            diplome: "LST,Option Système d'Information Répartis",
            etablissement: "Faculté des Sciences et Techniques Marrakech",
            annees: "2020- 2021",
        },
        {
            diplome: "DEUST filière Math, Informatique et physique",
            etablissement: "Faculté des Sciences et Techniques Marrakech",
            annees: "2017 - 2020",
        },
        {
            diplome: "1ère année Option SMPC",
            etablissement: "Faculté des Sciences Ain Chok Casablanca",
            annees: "2016 - 2017",
        },
        {
            diplome: "Baccalauréat option Sciences Physiques Chimie",
            etablissement: "Homman El Fetwaki ,Casablanca",
            annees: "2015 - 2016",
        },
    ];

    return (
        <section className="section">
            {formations.map((formation) => (
                <Card key={formation.diplome} className="mb-3">
                    <Card.Body>
                        <Card.Title>{formation.diplome}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {formation.etablissement}
                        </Card.Subtitle>
                        <Card.Text>{formation.annees}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </section>
    );
}

export default Formation;
