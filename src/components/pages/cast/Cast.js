import React, { Component } from 'react'
import Loading from './../../loading/Loading';
import {takeCastMovie} from '../../services/FunctionForAll'
import css from './cast.module.css'
class Cast extends Component {
    state = { 
        cast: [],
        isLoading: false,
        error: null
     }

     componentDidMount(){
         this.setState({isLoading: true});
         takeCastMovie(this.props.location.state.id)
         .then(data=>this.setState({cast: data.data.cast}))
         
        .catch(error=>this.setState({error}))
        .finally(()=> this.setState({isLoading: false}))
        }
    render() {
        const {cast=[], isLoading, error}=this.state
        return (
            <>
                {error&&<p>Somthing went wrong</p>}
                {isLoading && <Loading/>}
                <ul >
                {cast.map(cst=>(
                    <li key={cst.cast_id}>
                        <div>
                            <p className={css.text}>Character</p>
                            <p className={css.text3}>{cst.character}</p>
                            <div>
                                <img className={css.img} src={
                                    cst.profile_path 
                                    ? `https://image.tmdb.org/t/p/w500/${cst.profile_path}`
                                    :<p>NOT FOUND</p>
                                }
                                alt={cst.name}
                                />
                            </div>
                            <p className={css.text2}>{cst.name}</p>
                        </div>
                    </li>))}
                </ul>
            </>
            
        );
    }
}

export default Cast;


