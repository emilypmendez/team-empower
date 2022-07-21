import React, { useState, useEffect } from "react";

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

import dataBK4json from '../assets/data/FY2023_Statements_BK4.json'

function BK4() {

  // react Hook for State Handler
  const [dataBK4, setDataBK4] = useState(dataBK4json);

  // useEffect : fetch function for BK4
  useEffect(()=> {
    fetch("../assets/data/FY2023_Statements_BK4.json",
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
                <Card.Title as="h4">Striped Table with Hover</Card.Title>
                <p className="card-category">
                  Displaying fun statistics
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
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

        {/* JSON DATA */}
        <Row>
          <div className="agency-data">
            <Col>
            <h4><strong>Agency Information Breakdown</strong></h4>
             <p>Each agency will have a breakdown of its requests on the right-hand side.
               It displays numbers and dates within the "Priority" field. Please note,
               the "Priority" numbers represent their ranking amongst the other requests. For example in BK14,
               the capital requests are ranked by 13 because there are 13 capital requests in total,
               which is why most of the priority numbers are x/13. The expense items are ranked by 25.
             </p><br/>
             </Col>

           <Col>
              {dataBK4json && dataBK4json.map(
                function(data, {agency, priority, budgetType, request}){
                  return (
                    <>
                  {/* <div key={data.id}> */}
                  <Row>
                      <Col lg="4" sm="8" key={data.id}>
                        <Card className="card-stats">
                          <Card.Body>
                            <Row>
                              <Col sm="4">
                                <div className="numbers">
                                  <p className="card-category">
                                    <br/>
                                    <Card.Title as="h4"><strong>({data.id}) Agency:</strong></Card.Title>
                                  </p>

                                </div>
                              </Col>
                              <Col sm="8">
                                <div className="icon-big text-center icon-warning">
                                  {data.agency}
                                </div>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Col>

                      <Col>
                      <Card className="card-stats">
                        <Card.Body>
                          <Row>
                            <Col sm="12">
                            <div className="stats">
                                <strong>Priority: </strong> {data.priority} <br/>
                                <strong>Budget Type: </strong> {data.budgetType} <br/>
                                <strong>Request: </strong> {data.request} <br/>
                                <strong>Description: </strong> <em>{data.requestDescription}</em> <br/><br/>
                            </div>
                            </Col>
                          </Row>
                        </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    {/* </div> */}
                    </>
                  );
                }
              )}
            </Col>
            </div>
        </Row>

      </Container>
    </>
  );
}

export default BK4;
