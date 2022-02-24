import React from "react";
import axios from 'axios'

class App extends React.Component{

  constructor(props){
    super(props)
  }

  state = {
    isLoading: true,
    movies: [],
  }

// 여기는 함수선언을 이렇게 하네 생활코딩이랑 다르네
  getMovies= async ()=>{
    const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json')

  }

  componentDidMount(){
    // 데이터 로딩시 사용함

    this.getMovies()
    
  //   setTimeout(()=>{
  //     this.setState({isLoading: false})
  //   },3000) //6000 밀리세컨드
  }

  render(){

    const {isLoading} = this.state
    // 구조 분해할당으로 this.state 를 매번 입력하지 않아도 됨

    return (
      <div>
        {isLoading ? 'Loading...' : 'We are ready'}
      </div>
    )
  }
}
export default App;
