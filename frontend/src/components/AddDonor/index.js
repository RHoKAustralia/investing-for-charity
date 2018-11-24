import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Row, Col } from 'reactstrap';
import apiAxios from '../../api/apiAxios';
let name = 'Matt';

export default class AddDonor extends React.Component {
  state = { emailsent: false };
  sendemail = async () => {
    try {
      this.setState({
        emailsent: false,
        emailerror: undefined,
      });
      const { data } = await apiAxios.post('/send-dividend-impact-statement');
      this.setState({ emailsent: true });
    } catch (e) {
      this.setState({
        emailerror: 'Failed to send email',
      });
      console.log('fail to fetch apiAxios', e);
    }
  };

  render() {
    return (
      <div className="addDonorListBody">
        <div className="headerSection">
          <div className="headerLeft">
            {' '}
            {this.state.emailsent && <span>email sent successfully</span>}
            {this.state.emailerror && <span>failed to send email</span>}
            <h5>Hello {name}</h5>
            <p>
              Add, Edit and Remove - Donors, Donations, Disbursments -
              Allocations and EOFY Divident
            </p>
          </div>

          <div className="headerRight">
            <Button
              color="success"
              className="headerButton"
              onClick={this.sendemail}
            >
              Email Donors
            </Button>
          </div>
        </div>
        <div className="addDonorList">
        <Form>

        <Row form>
          <Col lg={6}>
        <FormGroup>
          <Label for="name">First Name:</Label>
          <Input type="text" name="name" id="name" placeholder="First Name"/>
        </FormGroup>
            </Col>
            <Col lg={6}>
        <FormGroup>
          <Label for="name">Last Name:</Label>
          <Input type="text" name="name" id="name" placeholder="Last Name"/>
        </FormGroup>
            </Col>
        </Row>

        <FormGroup>
        <Label for="EmailAddress">Email Address:</Label>
        <Input type="email" name="EmailAddress" id="EmailAddress" placeholder="Email Address" ></Input>
        </FormGroup>
        <FormGroup>
        <Label for="AmountDonated">Amount Donated:</Label>
        <Input type="tezt" name="AmountDonated" id="AmountDontated" placeholder="Amount Donated" ></Input>
        </FormGroup>
        <Button color="success" className="addDonorButton">Submit</Button>
        <Button color="danger" className="removeDonorButton">Cancel</Button>

      </Form>
        </div>
      </div>
    );
  }
}
