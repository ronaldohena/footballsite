import React from 'react';
import '../VideosList.css'

import VideosTemplate from '../VideosTemplate ';

const VideosRelated = (props) => (
    <div className="related">
       <VideosTemplate 
            data={props.data}
            teams={props.teams}
       />     
    </div>
)

export default VideosRelated;