import React, { Component } from 'react';
import { Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    return(
      <div>
        <Button
          className="item-details-buton"
          bsStyle="link"
          onClick={() => this.setState({open: !this.state.open})}
          >
          { this.state.open === false ?   `See` : `Hide `} item details
          { this.state.open === false ?   ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Media>
                <Media.Left>
                  <img
                  width={100}
                  height={100}
                  alt="thumbnail"
                  src="https://target.scene7.com/is/image/Target/GUEST_2d3f95cc-eb8b-4f57-9d70-cfce5423059f?wid=1400"
                  />
                </Media.Left>
                <Media.Body>
                  <p>This is a nice Walkway Chiar</p>
                  <Row className="show-grid">
                    <Col mid={6}>
                      <strong> {`$${this.props.price}`} </strong>
                      <br />
                      <strong className="price-strike">
                       {`$${this.props.price}`}
                      </strong>
                    </Col>
                    <Col md={6}> Qty: 1
                    </Col>
                  </Row>
                </Media.Body>
              </Media>
            </Well>
          </div>
        </Collapse>
      </div>
    )
  }
}
