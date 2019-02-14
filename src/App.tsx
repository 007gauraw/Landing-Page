import * as React from 'react';
import RequestForm from './Containers/formContainers'
import AgGridDataTable from './Containers/agGridDataTable'
import { Row, Col, Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class App extends React.Component {
  public render() {
    return (
      <Tabs>
        <TabPane tab="Home" key="1">
          <div className="container">
            <Row>
              <Col span={24}>
                <div className="title">
                  <span> Create New Request </span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="padding-s" />
              </Col>
            </Row>
            <Row>
              <RequestForm />
            </Row>
            <Row>
              <Col>
                <div className="padding-m" />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className="title">
                  <span> Current Request </span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="padding-sm" />
              </Col>
            </Row>
            <Row>
              <Col>
                <AgGridDataTable />
              </Col>
            </Row>
          </div>
        </TabPane>
        <TabPane tab="Request" key="2">
          <div className="container">
            Coming Sooonnn...
          </div>
        </TabPane>
        <TabPane tab="POP Reach QA" key="3">
          <div className="container">
            Coming Sooonnn...
          </div>
        </TabPane>

      </Tabs>
    )
  }
}

export default App;
