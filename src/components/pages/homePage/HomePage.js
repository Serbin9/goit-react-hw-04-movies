import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Loading from './../../loading/Loading';
import { takePopularMovies } from '../../services/FunctionForAll';


class HomePage extends Component {
    state = { 
        shows: [],
        loading: false,
        error: '',
     }

     componentDidMount(){
        this.setState({loading: true})

        takePopularMovies()
        .then(data=> this.setState({shows: data.data.results}))
        .finally(() => this.setState({ loading: false }))
   
     }
    

    render() {
        const{loading, error}=this.state;
        const {shows} =this.state;
        return (
            <>
            {error && <h2>Somthing wrong, write coorect</h2>}
            {loading && <Loading/>}
               <ul>
                   {shows.map(res=>(
                   <li key={res.id}>
                       <Link to={{
                           pathname:`/someFilms/${res.id}`,
                           state:{id: res.id, from: `/`}
                       }}>
                           {res.title}
                       </Link>

                   </li>)
                   )}
               </ul>
           </> 
            
        );
    }
}

export default HomePage;