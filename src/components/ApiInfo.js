import React from "react";

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
        let fullpath = `https://image.tmdb.org/t/p/w500`;
        if (!DataisLoaded) return <div>
            <h1> Please wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
              {
                items.map((item) => ( 
                
                <div class="cards" key = { item.id } >
                    
                    <div class="card card1">
                        <div class="container">
                            
                            <img src= {fullpath+item.poster_path}  alt="movie image"></img> 
                        </div>
                        <div class="details">
                            <h1>{item.original_title }</h1>
                            <p>{item.overview }</p>
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
