import React from 'react'
import {connect} from 'react-redux'
import { Grid, Row, Col} from 'react-bootstrap'
import {AppBar} from 'material-ui'

import * as movieActions from './actions'
import MovieList from '../../components/MovieList/MovieList'
import { getMoviesList } from './services'

class MovieBrowser extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('11')
        this.props.getTopMovies(1); // from actions
    }

    render() {
        const { topMovies } = this.props;
        const movies = getMoviesList(topMovies.response);
        return (
            <div>
                <AppBar title='TMDB' />
                <Grid>
                    <Row>
                        <p>search will go here</p>
                    </Row>
                    <Row>
                        <MovieList movies={movies} />
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        topMovies: state.movieBrowser.topMovies
    }),
    { ...movieActions }
)(MovieBrowser);