import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Table } from 'reactstrap';
import apiAxios from '../../api/apiAxios'

let admin = 'John Smith';




export default class DonorList extends React.Component {

    state = {emailsent:false}
        sendemail = async() =>{
            try {
                this.setState({ 
                    emailsent:false,
                    emailerror:undefined
                });
                const { data } = await apiAxios.post('/send-dividend-impact-statement');
                this.setState({ emailsent:true});
              } catch (e) {
                  this.setState({
                      emailerror:"Failed to send email"
                  })
                console.log('fail to fetch apiAxios', e);
              }
        }

        

        async componentDidMount(){
          try {
            const { data } = await apiAxios.post('/listdonors');
            this.setState({ test: data });
            console.log(this.state.test.Donors[0].name)
            
          } catch (e) {
            console.log('fail to fetch apiAxios', e);
          }
        }
        

  render() {
    if (!this.state.test) {
      return null;
    }

    return <div className="donerListBody">
        <div className="headerSection">
          <div className="headerLeft">
            {' '}
            {this.state.emailsent && <div className="successEmail">email sent successfully</div>}
            {this.state.emailerror && <span>failed to send email</span>}
            <h5>Hello {admin}</h5>
            <p>
              Add, Edit and Remove - Donors, Donations, Disbursments -
              Allocations and EOFY Divident
            </p>
          </div>

          <div className="headerRight">
            <Button color="success" className="headerButton" onClick={this.sendemail}>
              Email Donors
            </Button>
            <Button href="/add-donor" color="success">
              Add Donors
            </Button>
          </div>
        </div>
        <div className="donorList">
          <Table bordered>
            <thead>
              <tr className="tableTitle">
                <td colSpan="3">Donors List</td>
                <td colSpan="8">Cause Allocations</td>
              </tr>

              <tr className="tableHeader">
                <th>Donor Full Name:</th>
                <th>Total $ Donations:</th>
                <th>Disbursments %</th>
                <th>Under Privilidged Youth</th>
                <th>Refugees in Australia</th>
                <th>Child Slavery</th>
                <th>Mental Health</th>
                <th>Women In Domestic Violence</th>
                <th>Social Enterprise</th>
                <th>Cancer Research</th>
              </tr>

          
              {this.state.test.Donors.map(item => 
              <tr className="tableData">
                <td>{item.name}</td>
                <td>{item.totaldonations}</td>
                <td>{item.disbursments}</td>
                <td>{item.underprivilidgedyouth}</td>
                <td>{item.refugeesinaustralia}</td>
                <td>{item.childslavery}</td>
                <td>{item.mentalhealth}</td>
                <td>{item.womenindomesticviolence}</td>
                <td>{item.socialenterprise}</td>
                <td>{item.cancerresearch}</td>
                <td>
              <Button color="success" className="tableViewButton" href="view-donor">
                    View
                  </Button>
              </td>
              </tr>
            
            
            )}
             

              
           

            </thead>
            <tbody />
          </Table>
        </div>
      </div>;
  }
}
