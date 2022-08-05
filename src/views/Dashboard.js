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

        {/*

          COMMUNITY Board BK4

           */}
        <Row>
          <h4>The Community Board Budget Requests</h4>
          <p>Requests is a Charter mandate that form an integral part of the City's budget process.
            It is intended to support communies in their ongoing consultations with city agencies, elected officials and
            other key stakeholders and influence more informed decision making on a broad range of local planning and budget priories.

              These graphs are based on the requests of Community Boards 4 and 14 during the fiscal year of 2023.
              They serve to show which agencies are most prevalent in the requests, as it shows which core issues the community cared most for at that time.
              The graphs are divided based on the community boards and the type of budget requests (Capital/Expense).
                <br/><br/>
              Source: Capital Budget data retrieved from
              <a href="https://data.cityofnewyork.us/City-Government/Capital-Project-Detail-Data-Dollars/wa2y-rh4b" target="_blank"> NYC OpenData</a>.
              Budget Request for <a href="https://docs.google.com/viewer?url=https://github.com/NYCPlanning/labs-cd-needs-statements/raw/master//BK%20DNS%20FY%202023/FY2023_Statement_BK04.pdf" target="_blank"> BK4 </a>
              and <a href="https://www.cb14brooklyn.com/wp-content/uploads/2022/03/FY2023_Statement_BK14.pdf" target="_blank"> BK14 </a>are in PDF format.
          </p>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Requests per agencies (CAPITAL - Community Board 4)</Card.Title>
                <p className="card-category">Count of Requests for BK4</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart ct-perfect-fourth" id="agencyCapital_BK4">
                  <ChartistGraph
                     data={{
                       labels: [
                        'DOT',
                        'DPR',
                        'HPD',
                        'EDC',
                        'BPL'
                        ],
                        series: [
                          [
                          5,
                          3,
                          2,
                          2,
                          2
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
                <Card.Title as="h4">Requests per agencies (EXPENSE - Community Board 4)</Card.Title>
                <p className="card-category">Count of Requests for BK4</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart ct-perfect-fourth" id="agencyExpense_BK4">
                  <ChartistGraph
                      data={{
                        labels: [
                           'FDNY',
                           'EDC',
                           'DSNY',
                           'DOHMH',
                           'DPR'
                           ],
                           series: [
                             [
                             3,
                             3,
                             2,
                             2,
                             2
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

        {/*

          COMMUNITY Board BK14

           */}
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Requests per agencies (CAPITAL - Community Board 14)</Card.Title>
                <p className="card-category">Count of Requests for BK14</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart ct-perfect-fourth" id="agencyCapital_BK14">
                  <ChartistGraph
                     data={{
                         labels: [
                           'DOT',
                           'NYPD',
                           'DPR',
                           'SCA',
                           'NYCTA'
                           ],
                           series: [
                             [
                             3,
                             2,
                             2,
                             2,
                             2
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
                <Card.Title as="h4">Requests per agencies (EXPENSE - Community Board 14)</Card.Title>
                <p className="card-category">Count of Requests for BK14</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart ct-perfect-fourth" id="agencyExpense_BK14">
                  <ChartistGraph
                      data={{
                        labels: [
                          'DSNY',
                          'DOHM',
                          'DFTA',
                          'DEP',
                          'OMB'
                          ],
                          series: [
                            [
                            4,
                            2,
                            2,
                            2,
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
          <p>New York City’s spending on capital projects consumes a significant portion of the municipal budget.
            Capital projects are directed to a city agency an adopt the criteria as either a new construction, expansion,
            renovation, or replacement project for an existing facility or facilities. This could look like building schools,
            repaving streets, or buying fire truck. An agency's capital program is presented in the capital commitment plan,
            which is released three times annually by OMB. It also includes the estimated implementation timetable for projects
            in the current fiscal year and the following three years. Based on the overall expenditure of their capital projects,
            the agencies that received the greatest funding for 2021 are shown in the graph below. Thereby showing us which areas
            are prioritized in our city's improvements.
              <br/><br/>
                Source: Mayor’s Office of Management and Budget (OMB). (2022).
                Capital Project Detail Data - Dollars [data file and codebook]. Retrieved from
                <a href="https://www.ibo.nyc.ny.us/iboreports/IBOCBG.pdf" target="_blank"> NYC OpenData</a>.
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

          <h4>Discretionary Funds</h4>
          <p>Discretionary funds make up an appropriated sum of money in the City’s expense budget.
            Funds are allocated to eligible not-for-profit organizations by the City Council or a Member of the Council.
            There are several categories of discretionary funding used by the City Council, each serving different purposes.
            The graph below provides a count of total initiatives directed towards each category based on recurring keywords.
            These non-profit initiatives can be youth oriented, senior oriented, anti-poverty oriented, local needs oriented, etc.
              <br/><br/>
                Source: Mayor’s Office of Management and Budget (OMB). (2022). New York City Council Discretionary Funding. Retrieved from NYC OpenData. Retrieved from
                <a href="https://data.cityofnewyork.us/City-Government/New-York-City-Council-Discretionary-Funding/4d7f-74pe" target="_blank"> NYC OpenData</a>.
              <br/><br/>
              </p>
          <Col lg="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4"> Discretionary Funds by Category</Card.Title>
                <p className="card-category">Current Program Initiatives Funded</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart ct-octave" id="chartIssues_DiscretionaryFunding">
                  <ChartistGraph
                      data={{
                        labels: [
                          "Education",
                          "Cultural",
                          "Elderly",
                          "Youth",
                          "Miscellaneous",
                          "Advocacy",
                          "General Operations",
                          "Environment",
                          "Arts",
                          "Community Outreach",
                          "Career",
                          "Housing",
                          "Health",
                          "Social Services",
                          "Community Beautification",
                          "Homeless"
                        ],
                        series: [
                          [
                            434,
                            370,
                            204,
                            182,
                            165,
                            115,
                            114,
                            88,
                            87,
                            76,
                            74,
                            70,
                            67,
                            43,
                            20,
                            18
                          ]
                        ]
                      }}
                        type="Bar"
                        options= {{
                          reverseData: true,
                          horizontalBars: false,
                          seriesBarDistance: 10,
                          axisX: {
                            low: 0,
                            high: 450,
                            showGrid: true,
                            showLabel: true
                          },
                          axisY: {
                            offset: 100, //Insert here your axisY offset and play with the values
                            showLabel: true
                          },
                          fullHeight: false,
                          fullWidth: true,
                          height: "725",
                          chartPadding: {
                            left: 0,
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
          <p>This chart summarizes the expense budget of New York City in 2021 according to NYC open data.
            The data was grouped by different agencies. Each bar represents the actual total adopted budget of one agency in the year.
              <br/><br/>
                Source: Retrieved from NYC Open Data and their
                <a href="https://data.cityofnewyork.us/City-Government/Expense-Budget/mwzb-yiwb" target="_blank"> Expense Budget for City Government.</a>
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
