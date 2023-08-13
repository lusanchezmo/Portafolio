import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Bianca.png";
import projImg2 from "../assets/img/mojarraScript.png";
import projImg3 from "../assets/img/buscapapa.png";
import projImg4 from "../assets/img/app.png";
import projImg5 from "../assets/img/calculator.png";
import projImg6 from "../assets/img/slow.png";
import projImg7 from "../assets/img/project-img2.png";

import projImg8 from "../assets/img/skullmap.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Bianca",
      description: "Algoritmo de Redistribución",
      imgUrl: projImg1,
      link: 'https://lusanchezmo.github.io/FrontBianca/',
    },
    {
      title: "mojarraScript",
      description: "Aplicación web que compara productos",
      imgUrl: projImg2,
      link: 'https://github.com/jcarranza06/mojarrascript',
    },
    {
      title: "React Calculator",
      description: "calculadora portable",
      imgUrl: projImg5,
      link: 'https://lusanchezmo.github.io/react-calculator/',
    },
    {
      title: "Buscapapa",
      description: "Plataforma que ayuda a pequeños papicultores de Boyacá a vender sus productos",
      imgUrl: projImg3,
      link: 'https://github.com/lusanchezmo/buscapapa/',
    },
    {
      title: "skullMap",
      description: "Videojuego de carrera de calaveras",
      imgUrl: projImg8,
      link: 'https://lusanchezmo.github.io/skullMap/',
    },
    {
      title: "Training for gym",
      description: "Aplicación movil de rutinas para gimnacio",
      imgUrl: projImg4,
      link: '',
    },
    {
      title: "Slow",
      description: "Aplicación de escritorio con inteligencia artificial para analizar velocidad de vehiculos",
      imgUrl: projImg6,
      link: 'https://github.com/JavierTarazona06/slow',
    },
    {
      title: "Proyectos",
      description: "Muchos mas proyectos mas en el siguiente link",
      imgUrl: projImg7,
      link: 'https://github.com/lusanchezmo?tab=repositories',
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Proyectos desarrollados a lo largo de mi carrera universitaria</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
