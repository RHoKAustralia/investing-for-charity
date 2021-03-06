import React from 'react';
import apiAxios from '../../api/apiAxios';

export default class Home extends React.Component {
  state = { testAuthData: undefined };

  async componentDidMount() {
    try {
      const { data } = await apiAxios.post('/testauth');
      this.setState({ testAuthData: data });
    } catch (e) {
      console.log('fail to fetch apiAxios', e);
    }
  }

  render() {
    return (
      <React.Fragment>
        This is data from API:
        {this.state.testAuthData && (
          <blockquote>{this.state.testAuthData}</blockquote>
        )}
      </React.Fragment>
    );
  }
}
