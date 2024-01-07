// src/components/ProjectSection.js

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projects = [
  {
    title: 'Virthual Mouse',
    description: 'A virtual mouse is software that allows users to give mouse inputs to a system without using an actual mouse. In this the hand movements of a user are mapped into mouse inputs. ',
    link: 'https://github.com/example/project1',
  },
  {
    title: 'Book-Verse',
    description: 'This is a front-end project which developed using javascript,html and css. In this project i created a website where we can buy a books,basically this is book-store website',
    link: 'https://github.com/example/project2',
  },
  {
    title: 'Library Management System',
    description: 'In tis project i developed a application that we can use in library for management.in this project i used java-springboot for backend and MySQL Database for storing Data..',
    link: 'https://github.com/example/project2',
  },
 
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className='bg-dark min-vh-100'>
      <header className='bg-dark p-5'>
          <h1>My-Projects</h1>
        </header>
    <Container className="my-5 bg-dark h-100" id="projects">
      
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-5 w-30 h-10">
            <Card>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.link} target="_blank">
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>

  );
};

export default Projects;
