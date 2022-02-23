import React from "react";
import Food from "./Food";
import PropTypes from 'prop-types';

const foodILike =[
  {
    id:1,
    name: 'Kimchi',
    image: 'https://img.koreatimes.co.kr/upload/newsV2/images/202106/dd467848c7e349e9b456fea85ff36c1f.jpg/dims/resize/740/optimize',
    rating:2.3,
  },
  {
    id:2,
    name:'Namul',
    image:'https://folkency.nfm.go.kr/upload/img/20190228/20190228170057_t_.jpg',
    rating: 3.5,
  },
  {
    id:3,
    name:'Ogokbob',
    image:'https://recipe1.ezmember.co.kr/cache/recipe/2020/02/06/289006ee2e01e950c528a810afba63e71.jpg',
    rating: 4.5,
  }
]



function App() {
  return (
    <div className="App">
      {/* map을 사용해 여러개의 컴포넌트 한번에 만들기 */}
      {foodILike.map(dish=>(<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}></Food>))}
      </div>
      
  )
}

Food.propTypes={
  name:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired,
}

export default App;
