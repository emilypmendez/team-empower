import React from "react";

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

function TableListCB14() {

  return (
    <>
      <Container fluid>

        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4"><strong>Top 5 Agency Budgets of Community Board 14</strong></Card.Title>
                <p className="card-category">
                  Displaying fun statistics as it appears on NYC.gov
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
                      <th className="border-0">More Information</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>AGENCY IDENTIFIER #1</td>
                      <td>$36,738</td>
                      <td>CB 14</td>
                      <td>Brooklyn</td>
                      <td>New York</td>
                      <td><Button onClick={(event)=> event.target.value} target="_blank">View on NYC.gov</Button></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>AGENCY IDENTIFIER #2</td>
                      <td>$23,789</td>
                      <td>CB 14</td>
                      <td>Brooklyn</td>
                      <td>New York</td>
                      <td><Button onClick={(event)=> event.target.value} target="_blank">View on NYC.gov</Button></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>AGENCY IDENTIFIER #3</td>
                      <td>$56,142</td>
                      <td>CB 14</td>
                      <td>Brooklyn</td>
                      <td>New York</td>
                      <td><Button onClick={(event)=> event.target.value} target="_blank">View on NYC.gov</Button></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>AGENCY IDENTIFIER #4</td>
                      <td>$38,735</td>
                      <td>CB 14</td>
                      <td>Brooklyn</td>
                      <td>New York</td>
                      <td><Button onClick={(event)=> event.target.value} target="_blank">View on NYC.gov</Button></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>AGENCY IDENTIFIER #5</td>
                      <td>$63,542</td>
                      <td>CB 14</td>
                      <td>Brooklyn</td>
                      <td>New York</td>
                      <td><Button onClick={(event)=> event.target.value} target="_blank">View on NYC.gov</Button></td>
                    </tr>
                  </tbody>
                </Table>
                <center><p><em>Information is up to date as of 2022-2023 fiscal year statements.</em></p></center>
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
                      <td>Cura??ao</td>
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
                      <td>Feldkirchen in K??rnten</td>
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

export default TableListCB14;
