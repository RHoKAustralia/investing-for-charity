import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
} from 'reactstrap';
import apiAxios from '../../api/apiAxios';

let firstName = 'John';
let lastName = 'Smith';
let emailAddress = 'johnsmith@gmail.com';
let AmountDonated = 300;
let phonenumber = '0403435405';
let admin = 'John Smith';
let Address = '2107  Haymond Rocks Road, Eugene, Oregon, 97408'

export default class ViewDonor extends React.Component {
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
            {this.state.emailsent && <span class="successEmail">email sent successfully</span>}
            {this.state.emailerror && <span>failed to send email</span>}
            <h5>Hello {admin}</h5>
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
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="First Name"
                    defaultValue={firstName}
                  />
                </FormGroup>
              </Col>
              <Col lg={6}>
                <FormGroup>
                  <Label for="name">Last Name:</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Last Name"
                    defaultValue={lastName}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="EmailAddress">Email Address:</Label>
              <Input
                type="email"
                name="EmailAddress"
                id="EmailAddress"
                placeholder="Email Address"
                defaultValue={emailAddress}
              />
            </FormGroup>
            <FormGroup>
              <Label for="PhoneNumber">Phone Number:</Label>
              <Input
                type="number"
                name="PhoneNumber"
                id="PhoneNumber"
                placeholder="PhoneNumber"
                defaultValue={phonenumber}
              />
            </FormGroup>
            <FormGroup>
              <FormGroup>
                <Label for="Address">Address:</Label>
                <Input
                  type="textarea"
                  name="Address"
                  id="EmailAddress"
                  placeholder="Address"
                  defaultValue={Address}
                />
              </FormGroup>

              <Label for="AmountDonated">Amount Donated:</Label>
              <Input
                type="number"
                name="AmountDonated"
                id="AmountDontated"
                placeholder="Amount Donated"
                defaultValue={AmountDonated}
              />
            </FormGroup>
            <Button color="success" className="addDonorButton">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
