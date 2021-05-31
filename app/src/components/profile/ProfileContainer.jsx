import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setUserProfile } from '../../redux/ProfileReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component{

  componentDidMount(){
    //debugger
    // let userId=this.props.match.params.userId
    let userId=this.props.match.params.userId || 2
    // userId=userId?userId:2
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response=>{
            this.props.setUserProfile(response.data)
        })
  }

  render(){
    return(
      <Profile {...this.props} profile={this.props.profile}></Profile>
    )
  }
}

let mapStateToProps=(state)=>({
  profile:state.profilePage.profile
})

let WithUrlDataContainerComponent=withRouter(ProfileContainer)
export default connect(mapStateToProps,{setUserProfile})(WithUrlDataContainerComponent);