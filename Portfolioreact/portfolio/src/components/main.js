import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Contact from './contact';
import About from './about';
import Directory from './gamesComponent';
import CampsiteInfo from './gameinfo';
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        comments: state.comments,
        partners: state.partners,
        promotions: state.promotions
    };
};

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            selectedGame: null
        };
    }


    render() {
  

         const CampsiteWithId = ({match}) => {
            return (
                <CampsiteInfo campsite={this.props.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]} 
                comments={this.props.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)} />
          );
        };


        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/about' component ={About } />
                    <Route exact path='/about' render={() => <About/> } />
                    <Route exact path='/directory' render={() => <Directory campsites={this.props.campsites} />} />
                    <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                    <Route exact path='/contact' component={Contact} />
                    <Redirect to='/about' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));