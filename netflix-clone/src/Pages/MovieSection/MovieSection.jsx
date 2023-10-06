import React from 'react'

import "./MovieSection.css"

import lgMovie1 from '../../Images/large-movie1.jpg';
import lgMovie2 from '../../Images/large-movie2.jpg';
import lgMovie3 from '../../Images/large-movie3.jpg';
import lgMovie4 from '../../Images/large-movie4.jpg';
import lgMovie5 from '../../Images/large-movie5.jpg';
import lgMovie6 from '../../Images/large-movie6.jpg';
import lgMovie7 from '../../Images/large-movie7.jpg';
import lgMovie8 from '../../Images/large-movie8.jpg';


import smMovie1 from '../../Images/small-movie1.jpg';
import smMovie2 from '../../Images/small-movie2.jpg';
import smMovie3 from '../../Images/small-movie3.jpg';
import smMovie4 from '../../Images/small-movie4.jpg';
import smMovie5 from '../../Images/small-movie5.jpg';
import smMovie6 from '../../Images/small-movie6.jpg';
import smMovie7 from '../../Images/small-movie7.jpg';
import smMovie8 from '../../Images/small-movie8.jpg';


import imgTop1 from '../../Images/top1.jpg';
import imgTop2 from '../../Images/top2.jpg';
import imgTop3 from '../../Images/top3.jpg';
import imgTop4 from '../../Images/top4.jpg';
import imgTop5 from '../../Images/top5.jpg';
import imgTop6 from '../../Images/top6.jpg';
import imgTop7 from '../../Images/top7.jpg';
import imgTop8 from '../../Images/top8.jpg';


import comMovie1 from '../../Images/small-movie1.jpg';
import comMovie2 from '../../Images/small-movie2.jpg';
import comMovie3 from '../../Images/small-movie3.jpg';
import comMovie4 from '../../Images/small-movie4.jpg';
import comMovie5 from '../../Images/small-movie5.jpg';
import comMovie6 from '../../Images/small-movie6.jpg';
import comMovie7 from '../../Images/small-movie7.jpg';
import comMovie8 from '../../Images/small-movie8.jpg';


import horMovie1 from '../../Images/top1.jpg';
import horMovie2 from '../../Images/top2.jpg';
import horMovie3 from '../../Images/top3.jpg';
import horMovie4 from '../../Images/top4.jpg';
import horMovie5 from '../../Images/top5.jpg';
import horMovie6 from '../../Images/top6.jpg';
import horMovie7 from '../../Images/top7.jpg';
import horMovie8 from '../../Images/top8.jpg';



const MovieSection = () => {
  return (
    <div>
        <div class="row">
        <h2>NETFIX ORIGINAL</h2>
        <div class="row__posters">
            <img src={lgMovie1} class="row__poster row__psterLarrge" alt='Priview Pic'/>
            <img src={lgMovie2} class="row__poster row__psterLarrge" alt='Priview Pic'/>
            <img src={lgMovie3} class="row__poster row__psterLarrge" alt='Priview Pic'/>
            <img src={lgMovie4} class="row__poster row__psterLarrge" alt='Priview Pic'/>
            <img src={lgMovie5} class="row__poster row__psterLarrge" alt='Priview Pic'/>
            <img src={lgMovie6} class="row__poster row__psterLarrge" alt='Priview Pic'/>
            <img src={lgMovie7} class="row__poster row__psterLarrge" alt='Priview Pic'/>
            <img src={lgMovie8} class="row__poster row__psterLarrge" alt='Priview Pic'/>
        </div>
    </div>

{/* TRENDING NOW */}

        <div class="row">
            <h2>TRENGING NOW</h2>
            <div class="row__posters">
                <img src={smMovie1} class="row__poster " alt='Preview Pic'/>
                <img src={smMovie2} class="row__poster " alt='Preview Pic'/>
                <img src={smMovie3} class="row__poster " alt='Preview Pic'/>
                <img src={smMovie4} class="row__poster " alt='Preview Pic'/>
                <img src={smMovie5} class="row__poster " alt='Preview Pic'/>
                <img src={smMovie6} class="row__poster " alt='Preview Pic'/>
                <img src={smMovie7} class="row__poster " alt='Preview Pic'/>
                <img src={smMovie8} class="row__poster " alt='Preview Pic'/>
            </div>
        </div>
    
{/* TOP RATED */}

        <div class="row">
            <h2>TOP RATED</h2>
            <div class="row__posters">
                <img src={imgTop1} class="row__poster " alt='Preview Pic'/>
                <img src={imgTop2} class="row__poster " alt='Preview Pic'/>
                <img src={imgTop3} class="row__poster " alt='Preview Pic'/>
                <img src={imgTop4} class="row__poster " alt='Preview Pic'/>
                <img src={imgTop5} class="row__poster " alt='Preview Pic'/>
                <img src={imgTop6} class="row__poster " alt='Preview Pic'/>
                <img src={imgTop7} class="row__poster " alt='Preview Pic'/>
                <img src={imgTop8} class="row__poster " alt='Preview Pic'/>
            </div>
        </div>

{/* COMEDY MOVIES*/}
        <div class="row">
            <h2>COMEDY MOVIES</h2>
            <div class="row__posters">
                <img src={comMovie1} class="row__poster " alt='Preview Pic'/>
                <img src={comMovie2} class="row__poster " alt='Preview Pic'/>
                <img src={comMovie3} class="row__poster " alt='Preview Pic'/>
                <img src={comMovie4} class="row__poster " alt='Preview Pic'/>
                <img src={comMovie5} class="row__poster " alt='Preview Pic'/>
                <img src={comMovie6} class="row__poster " alt='Preview Pic'/>
                <img src={comMovie7} class="row__poster " alt='Preview Pic'/>
                <img src={comMovie8} class="row__poster " alt='Preview Pic'/>
            </div>
        </div>
{/* HORROR MOVIES*/}
        <div class="row">
            <h2>HORROR MOVIES</h2>
            <div class="row__posters">
                <img src={horMovie1} class="row__poster " alt='Preview Pic'/>
                <img src={horMovie2} class="row__poster " alt='Preview Pic'/>
                <img src={horMovie3} class="row__poster " alt='Preview Pic'/>
                <img src={horMovie4} class="row__poster " alt='Preview Pic'/>
                <img src={horMovie5} class="row__poster " alt='Preview Pic'/>
                <img src={horMovie6} class="row__poster " alt='Preview Pic'/>
                <img src={horMovie7} class="row__poster " alt='Preview Pic'/>
                <img src={horMovie8} class="row__poster " alt='Preview Pic'/>
            </div>
        </div>``
    </div>
  )
}

export default MovieSection;