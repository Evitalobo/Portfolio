import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Contact from './contact';
import About from './about';
import Game from './gamesComponent';
import GameInfo from './gamesort';
import { GAMES } from '../shared/gameList';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';



const mapStateToProps = state => {
    return { games: state.games, };
};

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            games: GAMES,
        };
    }

    render() {

        const GameWithID = ({match}) => {
            return (
                <GameInfo game={this.props.games.filter(game => game.id === +match.params.gameId)[0]}  />
            );
        };


        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/about' component ={About } />
                    <Route exact path='/about' render={() => <About/> } />
                    <Route exact path='/games' render={() => <Game games={this.props.games} />} />
                    <Route path='/games/:gameId' component={GameWithID} />
                    <Route exact path='/contact' component={Contact} />
                    <Redirect to='/about' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));