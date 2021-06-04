import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component{
    state = {
        gifs: []
    }

    fetchgifs = (query)=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
          .then(response => response.json())
          .then(datagifs => {
            let map=datagifs.data.map(gif=>gif.images.original.url)
            console.log(map)
            this.setState({
              gifs: map
            })
        })

    }

    componentDidMount() {
        this.fetchgifs("dogs")
    }

    render() {
        return(
            <div>
                <GifSearch fetchgifs={this.fetchgifs}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}