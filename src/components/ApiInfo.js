import React from "react";
import image from "./star.jpg"

export class ApiInfo extends React.Component {
    
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
"https://api.themoviedb.org/3/movie/top_rated?api_key=55957fcf3ba81b137f8fc01ac5a31fb5&language=en-US&page=1")
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    items: res.results,
                    DataisLoaded: true
                });
            
            })
            
    }
    
    render() {
        
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Please wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
              {
                items.map((item) => ( 
                <div classname="cards" key = { item.id } >
                    <div className="card">
                        <div className="card__image-holder">
                            <img class="card__image" src={image} alt="movie image"></img>
                        </div>
                        <div className="card-title">
                            <h1>{item.original_title }</h1>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    );
}
}



export default ApiInfo;
