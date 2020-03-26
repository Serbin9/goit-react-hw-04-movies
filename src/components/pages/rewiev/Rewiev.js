import React, { Component } from 'react'
import Loading from '../../loading/Loading';
import {takeMovieReviews} from '../../services/FunctionForAll'
import s from "./Rewiev.module.css"
class Rewiev extends Component {
    state = { 
        result: [],
        isLoading: false,
        error: null
     }
     componentDidMount(){
        takeMovieReviews(this.props.location.state.id)
        .then(data=>this.setState({result: data.data.results}))
        .catch(error=>this.setState({error}))
        .finally(()=>this.setState({isLoading: false}))
        // console.log(this.props)
     }

    render() {
    const {result, isLoading, error}=this.state
        return (
            <div>
                {error && <p className={s.error}>Somthing Wrong</p>}
                {isLoading && <Loading/>}
                {result.length ? (<ul>
                {result.map(items=>(<li key={items.key}>
                    <p>{items.author}</p>
                    <p className={s.rewiev}>{items.content}</p>
                    </li>))}
                </ul>):(<p className={s.rewiev}>Not found Author</p>)}
            </div>
        );
    }
}

export default Rewiev;