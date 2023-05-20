import React from 'react';

const Experience = () => {
    return (
        <div className="experience">
            <h3>Expériences</h3>
            <div className="exp-1">
                <h4>Développeur BackEnd - AUBAY</h4>
                <h5>2022 - Aujourd'hui</h5>
                <p> Développement de micro-services en java 17, architecture hexagonale.<br/>
                    CraftmanShip, TDD (couverture 100%), Tests intégrations (Postman)</p>
                <p>SpringBoot, SpringBatch, PostgreSQL, Maven</p>
            </div>
            <div className="exp-2">
                <h4>Développeur Full stack - Muvraline</h4>
                <h5>2021</h5>
                <p> Développement d'une api Restfull asynchrone dans un microservice existant. <br/>
                    Création d'une collection de tests Postman ajoutée dans la pipeline d'intégration</p>
                <p> Développement d'une application mobile Ionic pour tester
                    en interne notre solution backEnd d'appairage et de contrôle d'IOT. </p>
                <p>SpringWebFlux, PostgreSQL, Maven, TypeScript - Ionic - Angular</p>
            </div>
            <div className="exp-3">
                <h4>Product Owner - Muvraline</h4>
                <h5>2020</h5>
                <p>Gestion du projet dans sa globalité.
                    Identification des besoins clients et transmission à l'équipe.
                    méthodologie en sprint de 15 jours.
                    Livraison en continue.
                </p>
                <p>Jira - Gitlab-CI</p>
            </div>
            <div className="exp-4">
                <h4>Responsable R&D - Muvraline</h4>
                <h5>2019</h5>
                <p>Réflexions sur le projet de majordome virtuel.
                    Rédaction d'un projet de recherche NLP validé par l'ANRT.
                    Définition de l'architecture du projet.
                </p>
                <p>NLP - Microservices - KAFKA - ELK </p>
            </div>
        </div>
    );
};

export default Experience;
