import React from 'react';
import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/NewsList';
import VideosList from '../widgets/VideosList/VideosList'


const Home = () =>{
    return(
        <div>
           <NewsSlider 
            type="featured"
            start={0}
            amount={4}
            settings ={{
                dots: false
            }}
           /> 

           <NewsList 
            type="card"
            loadmore={true}
            start={0}
            amount={4}
           />
           <VideosList 
            type="card"
            title={true}
            loadmore={false}
            start={0}
            amount={3}
           />
        </div>
    )
}

export default Home;