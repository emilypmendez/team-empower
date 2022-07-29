import React from "react";
import ChartistGraph from "react-chartist";
import Chartist from 'chartist';
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
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";



function Dashboard() {

  return (
    <>
      <Container fluid>
        <Row>
          <h2>About Community Boards</h2>
          <p>Community Districts are the smallest level of government in NYC and act as a bridge between
            local communities and the broader city-wide efforts. This project aims to work with the leaders
            of those communities to empower their districts using data science. Our team will be working with
            Celestina Leon (District Manager, Brooklyn Community Board 4) and Shawn Campbell (District Manager,
              Brooklyn Community Board 14) to uplift their respective districts. Some of our solutions include
              an interactive tool for land use applications, an interactive dashboard for local budgeting and
              a mapping tool to determine community needs.
              <br/><br/>
              Have a look around and start the learning journey about your local community boards!
              <br/><br/>
          </p>
          <div className="divider"></div>

          {/*
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Agencies</p>
                      <Card.Title as="h4">30</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update Now
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-light-3 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Revenue</p>
                      <Card.Title as="h4">$ 1,345</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Last day
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Errors</p>
                      <Card.Title as="h4">23</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  In the last hour
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Followers</p>
                      <Card.Title as="h4">+45K</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update now
                </div>
              </Card.Footer>
            </Card>
          </Col>   */}
        </Row>

        {/* Charts Data */}
        <Row>
          <h4>District Needs</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br/><br/>
          </p>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Requests per agencies (Community Board 4)</Card.Title>
                <p className="card-category">Count of request for BK4</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart ct-perfect-fourth" id="request_BK4">
                  <ChartistGraph
                     data={{
                       labels: [
                         'DOT',
                         'DPR',
                         'EDC',
                         'HPD',
                         'FDNY',
                         'NYPD',
                         'NYCTA',
                         'DOHMH',
                         'BPL',
                         'DSNY',
                         'DOE',
                         'DOB',
                         'DOITT',
                         'OMB',
                         'DCLA',
                         'DHS',
                         'SBS',
                         'DEP',
                         'DYCD',
                         'DFTA'
                         ],
                       series: [
                         [
                         6,
                         5,
                         5,
                         3,
                         3,
                         2,
                         2,
                         2,
                         2,
                         2,
                         1,
                         1,
                         1,
                         1,
                         1,
                         1,
                         1,
                         1,
                         1,
                         1
                         ],
                       ]
                     }}
                       type="Bar"
                       options= {{
                         reverseData: true,
                         horizontalBars: true,
                         seriesBarDistance: 10,
                         axisX: {
                          type: Chartist.FixedScaleAxis,
                          ticks: [0, 1, 2, 3, 4, 5, 6],
                          low: 0,
                           showGrid: true,
                           showLabel: true
                         },
                         height: "480px",
                         fullWidth: true,
                         chartPadding: {
                           left: 25,
                           right:80
                         },
                         axisY: {
                           offset: 35, //Insert here your axisY offset and play with the values
                           showLabel: true
                         }
                     }}
                     responsiveOptions= {[
                       [
                         'screen and (max-width: 640px)',
                         {
                           seriesBarDistance: 5,
                           axisX: {
                             labelInterpolationFnc: function (value) {
                               return value[0];
                             },
                           },
                         }]
                     ]}
                   />
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Requests per agencies (Community Board 14)</Card.Title>
                <p className="card-category">Count of request for BK14</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart ct-perfect-fourth" id="request_BK14">
                  <ChartistGraph
                      data={{
                         labels: [
                           'DSNY',
                           'NYPD',
                           'DOT',
                           'NYCTA',
                           'DPR',
                           'SCA',
                           'FDNY',
                           'BPL',
                           'DEP',
                           'DOHM',
                           'DFTA',
                           'DHS',
                           'SBS',
                           'DOHMH',
                           'HRA',
                           'DOB',
                           'HPD',
                           'ACS',
                           'DYCD',
                           'OMB',
                           'NYP',
                           'EDC'
                           ],
                         series: [
                           [
                           5,
                           3,
                           3,
                           3,
                           3,
                           2,
                           2,
                           2,
                           2,
                           2,
                           2,
                           1,
                           1,
                           1,
                           1,
                           1,
                           1,
                           1,
                           1,
                           1,
                           1,
                           1
                           ],
                         ]
                       }}
                       type="Bar"
                       options= {{
                         reverseData: true,
                         horizontalBars: true,
                         seriesBarDistance: 10,
                         axisX: {
                          type: Chartist.FixedScaleAxis,
                          ticks: [0, 1, 2, 3, 4, 5, 6],
                          low: 0,
                           showGrid: true,
                           showLabel: true
                         },
                         height: "480px",
                         fullWidth: true,
                         chartPadding: {
                           left: 25,
                           right: 80
                         },
                         axisY: {
                           offset: 35, //Insert here your axisY offset and play with the values
                           showLabel: true
                         }
                     }}
                     responsiveOptions= {[
                       [
                         'screen and (max-width: 640px)',
                         {
                           seriesBarDistance: 5,
                           axisX: {
                             labelInterpolationFnc: function (value) {
                               return value[0];
                             },
                           },
                         }]
                     ]}
                   />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <h4>Capital Projects by Agency (Adopted)</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br/><br/>
          </p>
          <Col lg="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4"> Adopted Capital Projects by Agency</Card.Title>
                <p className="card-category">Current Modified Budget Amount as the credential (in thousands $$)</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart ct-octave" id="chartAgencies_MostCapitalProjects">
                  <ChartistGraph
                      data={{
                        labels: [
                          "Dept. Environmental Protection",
                          "Dept. Housing Preservation",
                          "Transit Authority Capital",
                          "Dept. Transportation",
                          "Dept. Design & Construction",
                          "Dept. Parks & Recreation",
                          "Dept. Citywide Admin Svcs",
                          "Dept. Correction",
                          "Dept. Small Business Svcs",
                          "Dept. Sanitation",
                          "Dept. Homeless Svcs",
                          "Health & Hospitals Corp",
                          "Dept. Health & Mental Hygiene",
                          "Brooklyn Public Library",
                          "Police Dept.",
                          "Human Resources Administration",
                          "Dept. Cultural Affairs",
                          "City University",
                          "NY Public Library",
                          "Fire Dept.",
                          "Dept. for the Aging"
                        ],
                        series: [
                          [
                            7185167,
                            4576439,
                            3998713,
                            3476602,
                            2889000,
                            1184337,
                            681448,
                            649099,
                            382828,
                            368348,
                            284652,
                            138872,
                            107197,
                            90784,
                            73097,
                            24421,
                            16612,
                            12950,
                            9191,
                            7474,
                            1260
                          ]
                        ]
                      }}
                        type="Bar"
                        options= {{
                          reverseData: true,
                          horizontalBars: true,
                          seriesBarDistance: 0,
                          axisX: {
                            ticks: [0, 1450000, 2900000, 4350000, 5800000, 7250000],
                            low: 1000,
                            high: 7250000,
                            showGrid: true,
                            showLabel: true,
                            // type: Chartist.AutoScaleAxis,
                            labelInterpolationFnc: function (value, index) {
                              return index % 1.25 == 0 ? value: null;
                            } // adjust as necessary - see github issue: https://github.com/gionkunz/chartist-js/issues/849
                          },
                          axisY: {
                            offset: 200, //Insert here your axisY offset and play with the values
                            showLabel: true
                          },
                          fullHeight: false,
                          fullWidth: true,
                          height: "725",
                          chartPadding: {
                            left: 15,
                            right: 15,
                            bottom: 50,
                            top: 0
                          }
                        }}
                        responsiveOptions= {[
                          [
                            'screen and (max-width: 640px)',
                            {
                              seriesBarDistance: 5,
                              axisX: {
                                labelInterpolationFnc: function (value) {
                                  return value[0];
                                },
                              },
                        }],
                      ]}
                    />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>


        <Row>
          <h4>Top Expense Projects by Agency</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br/><br/>
          </p>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Top Budget Expenses</Card.Title>
                <p className="card-category">2021 Modified Budget Amount as the credential (in millions $$)</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartAgencies_MostBudgetExpense2"
                >
                  <ChartistGraph
                    data={{
                      labels: ["28.5%", "11.6%", "10.5%", "9.9", "6.0", "5.3", "28.1"],
                      series: [28.5, 11.6, 10.5, 9.9, 6.0, 5.3, 28.1],
                    }}
                    type="Pie"
                  />
                </div>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i> Department of Education ($81,697.32) - 28.5% <br/>
                  <i className="fas fa-circle text-danger"></i> Miscellaneous ($40,517.23) - 11.6% <br/>
                  <i className="fas fa-circle text-warning"></i> Department of Social Services ($30,770.98) - 10.5% <br/>
                  <i className="fas fa-circle purple"></i> Pension Contributions ($29,889.29) - 9.9% <br/>
                  <i className="fas fa-circle blue"></i> Police Department ($16,819.43) - 6.0% <br/>
                  <i className="fas fa-circle green"></i> Debt Service ($15,911.34) - 5.3% <br/> {/* NEEDS UPDATE */}
                  <i className="fas fa-circle yellow"></i> All Other Budgets ($83,810.24) - 28.1% <br/> {/* NEEDS UPDATE */}
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock"></i>
                   Updated July 2022
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Top Budget Expenses</Card.Title>
                <p className="card-category">2021 Modified Budget Amount as the credential (in millions $$)</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart " id="chartAgencies_MostBudgetExpense1">
                  <ChartistGraph
                    data={{
                      labels: [
                        "DOE",
                        "MISCELLANEOUS",
                        "DEPT. SOCIAL SERVICES",
                        "PENSION CONTRIBUTIONS",
                        "POLICE DEPARTMENT",
                        "DEBT SERVICE",
                        "ALL OTHER BUDGETS"
                      ],
                      series: [
                        [
                          81697.32,
                          40517.23,
                          30770.98,
                          29889.29,
                          16819.43,
                          15911.34,
                          83810.24
                        ],
                      ],
                    }}
                    type="Bar"
                    options={{
                      seriesBarDistance: 10,
                      axisX: {
                        showGrid: true,
                      },
                      height: "245px",
                      fullWidth: true,
                      chartPadding: {
                        left: 25,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          seriesBarDistance: 5,
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              {/* <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Tesla Model S <i className="fas fa-circle text-danger"></i>
                  BMW 5 Series
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-check"></i>
                  Data information certified
                </div>
              </Card.Footer> */}
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  );
}

export default Dashboard;
