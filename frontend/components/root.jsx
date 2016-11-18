import React from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { requestCampaigns } from '../actions/campaign_actions';
import CampaignDetail from './campaign_show/campaign_detail';
import { asArray } from '../reducers/selectors';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import CampaignListContainer from './campaign_list/campaign_list_container';
import CampaignDetailContainer from './campaign_detail/campaign_detail_container';

// const Root = ({ store }) => {
//   return (
//     <Provider store={store}>
//     <div>Hello world!</div>
//     </Provider>
//   );
// };

// const mapStateToProps = (state, ownProps) => {
//   console.log(state);
//   console.log(state.campaigns);
//   return {campaigns: asArray(state)};
// };

// const mapDispatchToProps = dispatch => ({
//   requestCampaigns: () => dispatch(requestCampaigns())
// });

// class Root extends React.Component {
//   render() {

//     // console.log('received campaigns:');
//     console.log(this.props.campaigns);
//     let campaignElems = this.props.campaigns.map(campaign => (<CampaignDetail campaign={campaign}></CampaignDetail>));
//     // let campaignElems = this.props.campaigns.map(campaign => (campaign.name));
//     return <Provider store={this.props.store}><div>{campaignElems}</div></Provider>;
//     // return <Provider store={this.props.store}><div>Hello world!</div></Provider>;
//   }

//   componentDidMount() {
//     this.props.requestCampaigns();
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Root);

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={CampaignListContainer}/>
          <Route path="/campaigns" component={CampaignListContainer}/>
          <Route path="/campaigns/:campaignId" component={CampaignDetailContainer}/>
        </Route>
      </Router>
    </Provider>
  );
};
export default Root;