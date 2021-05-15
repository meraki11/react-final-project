import React from 'react';
import { Container, Row, Col } from 'react-bootstrap/';
import CalendarView from "./CalendarView";
import SelectedDate from "./SelectedDate";

export default function Home() {
    return (
      <>home
        <Container fluid>
          <Row>
            <Col lg={4}>
              <CalendarView />
            </Col>
            <Col lg={8}>
              <SelectedDate />
            </Col>
          </Row>
        </Container>
      </>
    );
  }