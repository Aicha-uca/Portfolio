import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import mcp from '../certifications/1.png';
import ms from '../certifications/2.png';
import scjp from '../certifications/3.png';
import spring from '../certifications/4.png';
import react from '../certifications/6.png';
import reacta from '../certifications/8.png';

function CertificationCard(props) {
    const { logo, title, issuer, date} = props;
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <span>{issuer}</span>
                    <br />
                    <span>Date de délivrance : {date}</span>
                    <br />
                   
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

function Certifications() {
    const certifications = [
        {
            logo: mcp,
            title: 'Front-End web developpement with React',
            issuer: 'Coursera',
            date: 'Jan. 2023',
           
        },
        {
            logo: ms,
            title: 'Introduction to cloud computing',
            issuer: 'Microsoft',
            date: 'Mars. 2023',
           
        },
        {
            logo: scjp,
            title: 'Bootstrap 4',
            issuer: 'Coursera',
            date: 'Mars. 2023',
            
        },
        {
            logo: spring,
            title: 'Node-Js, Express and Mongo Db',
            issuer: 'Coursera',
            date: 'Jan. 2023',
           
        },
        {
            logo: react,
            title: 'Introduction to DevOps',
            issuer: 'Coursera',
            date: 'Mars 2023',
           
        },
        {
            logo: reacta,
            title: 'Full Stack Developement with React',
            issuer: 'Coursera',
            date: 'Mars. 2023',
           
        }
    ];
    const PAGE_SIZE = 3;
    const [activePage, setActivePage] = React.useState(1);

    const totalPages = Math.ceil(certifications.length / PAGE_SIZE);

    const handleClick = (event) => {
        setActivePage(event.target.text);
    }

    const pages = [];

    for (let number = 1; number <= totalPages; number++) {
        pages.push(
            <Pagination.Item key={number} active={number === activePage} onClick={handleClick}>
                {number}
            </Pagination.Item>,
        );
    }

    const startIndex = (activePage - 1) * PAGE_SIZE;
    const endIndex = activePage * PAGE_SIZE;
    const currentCertifications = certifications.slice(startIndex, endIndex);

    return (
        <div>
            <Row className="my-3">
                {currentCertifications.map(certification => (
                    <Col key={certification.id} xs={12} sm={6} lg={4} className="d-flex">
                        <CertificationCard {...certification} />
                    </Col>
                ))}
            </Row>
            <Row className="my-3">
                <Col>
                    <Pagination>{pages}</Pagination>
                </Col>
            </Row>
        </div>
    );
}

export default Certifications;