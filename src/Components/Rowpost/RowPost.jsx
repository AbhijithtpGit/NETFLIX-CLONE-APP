
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import './RowPost.css'
import { imageUrl, API_KEY } from '../../constants/constants';
import axios from '../../axios'

function RowPost(props) {
  const [movies, setMovie] = useState([])
  const [urlIid, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then(Response => {
      console.log(Response.data)
      setMovie(Response.data.results)

    }).catch(err => {
      // alert('erro');
    })

  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handlemovie = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(Response => {
      if (Response.data.results.length !== 0) {
        setUrlId(Response.data.results[0])
      } else {
        console.log('Array not avaiable');
      }
    })


  }


  return (
    <div className='row'>

      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) =>
          <img onClick={() => handlemovie(obj.id)} className={props.issmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="poster" />

        )}


      </div>
      {urlIid && <YouTube opts={opts} videoId={urlIid.key} />}
    </div>
  )
}

export default RowPost
