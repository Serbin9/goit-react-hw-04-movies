import React, { Component } from 'react';
import {takeMovieFind} from '../../services/FunctionForAll';
import Loading from '../../loading/Loading';
class Find extends Component {
    state = { 
        query: '',
        someFilms: '',
        loading: false,
     }
     handleQuerySubmit=e=>{
         e.preventDefault();
         this.setState({loading: true})

         takeMovieFind(this.state.query)
         .then(data => this.setState({someFilms: data.data.results}))
         .then(()=>this.props.handleChangeFilms(this.state.someFilms, this.state.query))
         .finally(() => this.setState({loading:false}));
     }
     onChange=e=>{
         if({query: e.target.value} ===""){
             return <p>Write coorect film name</p>
         }else{this.setState({query: e.target.value})}
         
     }
    render() {
        const {query, loading}=this.state
        return (
            <>
              <form onSubmit={this.handleQuerySubmit}>

                <input onChange={this.onChange} value={query}></input>

                <button tupe="button" onClick={this.handleQuerySubmit}>Find film</button>
            </form>
            {loading && <Loading/>}
           
            </>
          
        );
    }
}


export default Find;
