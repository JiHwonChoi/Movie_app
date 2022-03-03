import React from "react";
import axios from 'axios'
import Movie from '../components/Movie'
import './Home.css'
import Navigation from "../components/Navigation";


class Home extends React.Component{

  // constructor(props){
  //   super(props)
  // }

  state = {
    isLoading: true,
    movies: [],
  }

  getMovies= async ()=>{
    //구조분해 할당을 통한 접근방법
    const{
      data:{
        data:{movies},
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
    this.setState({movies: movies, isLoading:false})

  }

  componentDidMount(){
    // 데이터 로딩시 사용함

    this.getMovies()
    
  //   setTimeout(()=>{
  //     this.setState({isLoading: false})
  //   },3000) //6000 밀리세컨드
  }

  render(){

    const {isLoading, movies} = this.state
    // 구조 분해할당으로 this.state 를 매번 입력하지 않아도 됨

    return (
      <section className="container">
        {isLoading ?(
          <div className="loader">
            <span className="loader__text">'Loading...'</span>
          </div>
        ) : (
          <div>
            <Navigation></Navigation>
            <div className="movies">
            
            {
              movies.map((movie)=>{
          
                return <Movie
                  key={movie.id}
                  id={movie.id}
                  year ={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genre ={movie.genres}
                ></Movie>
              })
            }
          </div>
          </div>
          
        )}
      </section>
    )
  }
}
export default Home;
