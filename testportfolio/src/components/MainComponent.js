import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import GameInfo from './CampsiteInfoComponents';
import DesignInfo from './DesignInfoComponents';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Project from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { GAMES } from '../shared/games';
import { GAMEINFO } from '../shared/gameinfo';
import { DESIGNS } from '../shared/designs';
import { DESIGNINFO } from '../shared/designinfo';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        games: state.games,
        gameinfo: state.gameinfo,
        designs: state.designs,
        designinfo: state.designinfo,

    };
};

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            games: GAMES,
            gameinfo: GAMEINFO,
            designs: DESIGNS,
            designinfo: DESIGNINFO,
        };
    }

    render() {
        const DesignwithId = ({match}) => {
            return (
                <DesignInfo design={this.props.designs.filter(design => design.id === +match.params.campsiteId)[0]} 
                designinfo={this.props.designinfo.filter(comment => comment.campsiteId === +match.params.campsiteId)} />
            );
        };

        const GamewithId = ({match}) => {
            return (
                <GameInfo game={this.props.games.filter(game => game.id === +match.params.campsiteId)[0]} 
                  gameinfo={this.props.gameinfo.filter(comment => comment.campsiteId === +match.params.campsiteId)} />
            );
        };


        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/design' render={() => <Project designs={this.props.designs} />} />
                    <Route path='/design/:campsiteId' component={DesignwithId} />
                    <Route exact path='/games' render={() => <Directory games={this.props.games} />} />
                    <Route path='/games/:campsiteId' component={GamewithId} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/about' render={() => <About about={this.props.about} /> } />
                    <Redirect to='/about' /> 
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));