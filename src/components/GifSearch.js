import React, {Component} from 'react'

export default class GifSearch extends Component{
    state={
        query: ""
    }

    handleonChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.fetchgifs(this.state.query);
        this.setState({
            query: ""
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    Enter a Search Term:
                    <input type="text" name="query" onChange={this.handleonChange} value={this.state.query}/>
                    <input type="submit" value= "Search" />
                </form>
            </div>
        );
    }
}