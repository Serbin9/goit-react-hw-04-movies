import React, { Component, lazy, Suspense } from 'react'
import {Route, Link, Switch, withRouter} from 'react-router-dom'
import {allMoviesInfo} from '../../services/FunctionForAll'
import css from './MovieDetailPage.module.css'
const CastLazy = lazy(() => import("./../cast/Cast"))
const RewievLazy=lazy(()=> import ("./../rewiev/Rewiev"))



class MovieDetailsPage extends Component {
    state = { 
        movieInfo: {},
        from: "",
        query: ""
    }

     componentDidMount(){
         const {location}=this.props
         allMoviesInfo(this.props.location.state.id)
         .then(data=>this.setState({movieInfo: data.data, from: location.state.from, query:this.props.location.state.query }))
        
     }
    handleGoBack=()=>{
        const{query}=this.state

  this.props.history.push({
    pathname: this.state.from,
    search: query,
  });
}
    render() {
        console.log("render")
        const{movieInfo, movieInfo: {genres=[]}}= this.state
        return (
            <>
            <div>
                <button className={css.button} type="button" onClick={this.handleGoBack}>
                Go BACK
                </button>
               
                    <>
                <h2 className={css.name}> {movieInfo.title}</h2>
                <p className={css.score}>User Score: {movieInfo.vote_average * 10}%</p>
                <p className={css.overview}><span>Overview</span> {movieInfo.overview}</p>
                <h3 className={css.genres}>Genres</h3>
                <p>{genres.map(film=>(<span key={film.id}>{film.name} </span>))}</p>
            
                <img  src={movieInfo.poster_path ?`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`: null}
                    alt="Poster"/>  
                    </>   
                    </div>
            <h3>Additinal information</h3>
            <ul>
                <li>
                    <Link to={{pathname: `/someFilms/${movieInfo.id}/cast`, state:{id: movieInfo.id, from: `/someFilms`}}}>
                    Cast
                    </Link>
                </li>
                <li>
                    <Link to={{pathname: `/someFilms/${movieInfo.id}/reviews`, state:{id: movieInfo.id, from: `/someFilms`}}}>
                        Reviews</Link>
                </li>

            </ul>
        <Suspense fallback={<div>Load</div>}>
            <Switch>
                <Route path={`/someFilms/:movieId/cast`} component={CastLazy} />
                <Route path={`/someFilms/:movieId/reviews`} component={RewievLazy}/>
            </Switch>
            </Suspense>
            </>
        );
    }
}

export default  withRouter(MovieDetailsPage);