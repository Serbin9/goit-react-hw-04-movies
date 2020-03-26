import React from 'react';
import {Switch, Redirect, Route, Link} from 'react-router-dom';
import HomePage from './components/pages/homePage/HomePage';
import MoviePage from './components/pages/pageMovie/MoviePage';
import MovieDetailsPage from './components/pages/movieDetailsPage/MovieDetailsPage';
const App=()=>(
    <div>
        <Link to='/' >HOME <br></br>
        </Link> 
        <Link to='/someFilms'>MOVIE
        </Link>
        <Switch>
                <Route path='/' exact component={HomePage}/>
                <Route path='/someFilms/:someFilmsId' component={MovieDetailsPage} />
                <Route  path='/someFilms' exact component ={MoviePage}/>

                <Redirect to='/'/>
        </Switch>
        
    </div>
    
    )

export default App