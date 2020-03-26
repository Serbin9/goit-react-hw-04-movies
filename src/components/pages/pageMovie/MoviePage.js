import React, { Component } from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import Find from '../moviesPage/Find';
import MovieDetailsPage from './../movieDetailsPage/MovieDetailsPage';
import queryString from 'query-string';
import {takeMovieFind} from '../../services/FunctionForAll'



class MoviePage extends Component {
    state = { 
        movieList: [],
        error: '',
        loading: false,
        query: '',
        someFilm: []
         }
         componentDidMount(){
             this.setState({loading: true})
             const {location}=this.props;
        if(location.search !==""){
            let parseSearchQuery = queryString.parse(location.search).query;
            takeMovieFind(parseSearchQuery)
            .then(data => this.setState({movieList: data.data.results}))
       }else this.setState({movieList: []}) 
       
         }
        
         handleChangeFilms=(movieList, query)=>{
            this.setState({movieList,query})
            this.props.history.push(`/someFilms?query=${query}`)
         }
    render() {
        const {movieList, error}=this.state
        return (
            <>
            {error && <h2>Write correct film</h2>}
            <Find handleChangeFilms={this.handleChangeFilms}/>
                <ul>
                {movieList.map(res=><li key={res.id}>
                    <Link to={{
                       pathname: `/someFilms/${res.id}`,
                               state:{id: res.id, from: `/someFilms`, query: `?query=${this.state.query}`}
                    }}>
                        {res.title|| res.name}

                    </Link>
                    <Switch>
                        <Route path={`/someFilms/${res.id}`} component={MovieDetailsPage} />
                    </Switch>
                </li>)}
                </ul>
            </>
        );
    }
}

export default MoviePage;