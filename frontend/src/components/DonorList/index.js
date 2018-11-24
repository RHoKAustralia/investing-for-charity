import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Table } from 'reactstrap';

let name = 'Matt';

export default class DonorList extends React.Component {
  render() {
    return (
      <div className="donerListBody">
        <div className="headerSection">
          <div className="headerLeft">
            {' '}
            <h5>Hello {name}</h5>
            <p>
              Add, Edit and Remove - Donors, Donations, Disbursments -
              Allocations and EOFY Divident
            </p>
          </div>

          <div className="headerRight">
            <Button color="success" className="headerButton">
              Email Donors
            </Button>
            <Button color="success">Add Donors</Button>
          </div>
        </div>
        <div className="donorList">
            
      <Table bordered>
        <thead>
            <tr class="tableTitle">
                <td colspan="3">Donors List</td>
                <td colspan="8">Cause Allocations</td>
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
          <tr className="tableData">
              <td>John Smith</td>
              <td>$300</td>
              <td>5%</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td><Button color="success" className="tableViewButton">View</Button></td>
          </tr>
          <tr className="tableData">
              <td>John Smith</td>
              <td>$300</td>
              <td>5%</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td><Button color="success" className="tableViewButton">View</Button></td>
          </tr>
          <tr className="tableData">
              <td>John Smith</td>
              <td>$300</td>
              <td>5%</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td><Button color="success" className="tableViewButton">View</Button></td>
          </tr>
          <tr className="tableData">
              <td>John Smith</td>
              <td>$300</td>
              <td>5%</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td><Button color="success" className="tableViewButton">View</Button></td>
          </tr>
          <tr className="tableData">
              <td>John Smith</td>
              <td>$300</td>
              <td>5%</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td><Button color="success" className="tableViewButton">View</Button></td>
          </tr> 
          <tr className="tableData">
              <td>John Smith</td>
              <td>$300</td>
              <td>5%</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td><Button color="success" className="tableViewButton">View</Button></td>
          </tr>     

        </thead>
        <tbody>

        </tbody>
      </Table>


        </div>
      </div>
    );
  }
}
