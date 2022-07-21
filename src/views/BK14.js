import React, { useState, useEffect } from "react";
import TableListCB14 from "../components/TableList/TableList_CB14.js"

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

import dataBK14json from '../assets/data/FY2023_Statements_BK14.json'

function BK14() {

  // react Hook for State Handler
  const [dataBK14, setDataBK14] = useState(dataBK14json);

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
      setDataBK14(data); // store data in State data variable
    })
  }, []);

  return (
    <>
      <Container fluid>
        <TableListCB14/>

        {/* JSON DATA */}
        <Row>
          <div className="agency-data">
            <Col>
            <h2><strong>Agency Information Breakdown</strong></h2>
             <p>Each agency will have a breakdown of its requests on the right-hand side.
               It displays numbers and dates within the "Priority" field. Please note,
               the "Priority" numbers represent their ranking amongst the other requests. For example in BK14,
               the capital requests are ranked by 13 because there are 13 capital requests in total,
               which is why most of the priority numbers are x/13. The expense items are ranked by 25.
             </p>
             <h4>40 agencies listed</h4>
             </Col>

           <Col>
              {dataBK14json && dataBK14json.map(
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

export default BK14;
