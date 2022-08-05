import React, { useState, useEffect } from "react";

import dataBK4json from '../../assets/data/Capital_Project_Detail_Data(BK4)_-Dollars.json'

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableListCB4() {

  // react Hook for State Handler
  const [dataBK4, setDataBK4] = useState(dataBK4json);

  // useEffect : fetch function for BK4
  useEffect(()=> {
    fetch("../assets/data/Capital_Project_Detail_Data(BK4)_-Dollars.json",
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(async response => {
      try {
        const data = await response.json();
        console.log('response data?', data);
      } catch (error) {
        console.log('Error happened here...');
        console.error(error);
      }
    }).then(function(data){
      setDataBK4(data); // store data in State data variable
    })
  }, []);

  return (
    <>
      <Container fluid>
          <Row>
            <Col md="12">
              <Card className="strpied-tabled-with-hover">
                <Card.Header>
                  <Card.Title as="h4"><strong>Top Agency Budgets of Community Board 4</strong></Card.Title>
                  <p className="card-category">
                    Displaying fun statistics as it appears on NYC.gov (in the thousands $$)
                  </p>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover table-striped">
                    <thead>
                      <tr>
                        <th className="border-0">ID</th>
                        <th className="border-0">Agency Name</th>
                        <th className="border-0">Budget</th>
                        <th className="border-0">Community Board</th>
                        <th className="border-0">City</th>
                        <th className="border-0">State</th>
                        {/* <th className="border-0">More Information</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {dataBK4json && dataBK4json.map(
                        function(data, {id, agency_name, budget, community_board, city, state}){
                          return (
                            <>
                              <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.agency_name}</td>
                                <td>$ {data.budget}</td>
                                <td>{data.community_board}</td>
                                <td>{data.city}</td>
                                <td>{data.state}</td>
                                {/* <td><Button onClick={(event)=> event.target.value} target="_blank">View on NYC.gov</Button></td> */}
                              </tr>
                              </>
                            )
                          }
                        )}
                    </tbody>
                  </Table>
                  <div className="divider"></div>
                  <center><p><em>Information is up to date as of 2022-2023 fiscal year.
                  View more information by visiting
                  <a href="https://data.cityofnewyork.us/City-Government/Capital-Project-Detail-Data-Dollars/wa2y-rh4b" target="_blank" alt="NYC Open Data"> the NYC Open Data website.</a></em></p></center>
                </Card.Body>
              </Card>
            </Col>


            {/*
            <Col md="12">
              <Card className="card-plain table-plain-bg">
                <Card.Header>
                  <Card.Title as="h4">Table on Plain Background</Card.Title>
                  <p className="card-category">
                    Here is a subtitle for this table
                  </p>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover">
                    <thead>
                      <tr>
                        <th className="border-0">ID</th>
                        <th className="border-0">Name</th>
                        <th className="border-0">Salary</th>
                        <th className="border-0">Country</th>
                        <th className="border-0">City</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Dakota Rice</td>
                        <td>$36,738</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Minerva Hooper</td>
                        <td>$23,789</td>
                        <td>Curaçao</td>
                        <td>Sinaai-Waas</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Sage Rodriguez</td>
                        <td>$56,142</td>
                        <td>Netherlands</td>
                        <td>Baileux</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Philip Chaney</td>
                        <td>$38,735</td>
                        <td>Korea, South</td>
                        <td>Overland Park</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Doris Greene</td>
                        <td>$63,542</td>
                        <td>Malawi</td>
                        <td>Feldkirchen in Kärnten</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Mason Porter</td>
                        <td>$78,615</td>
                        <td>Chile</td>
                        <td>Gloucester</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col> */}
          </Row>
      </Container>
    </>
  );
}

export default TableListCB4;
