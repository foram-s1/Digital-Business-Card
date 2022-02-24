import Head from "next/head";
import { Carousel } from 'react-responsive-carousel';
import React, { Component, useRef } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default function Home() {

	return(
    <div className="container ">
     	<Head>
			 <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
		 	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
          	<link rel="icon" href="/favicon.ico" />
      	</Head>

      <main>
	  	<div className="row border border-dark">
			<div className="col-12 mb-3 mb-lg-0 p-0 border border-dark col-lg-4">
				<div className="row">
					<div className="col-12 p-0">
						<Carousel showThumbs={false} showArrows={false} autoPlay={true} interval={3000} infiniteLoop={true} showStatus={false}>
							<div className="container-fluid">
								<img src="/pic1.png" alt="image1"/>
							</div>
							
							<div className="container-fluid">
								<img src="/pic2.png" alt="image2" />
							</div>

							<div className="container-fluid">
								<img src="/pic1.png" alt="image3"/>
							</div>

							<div className="container-fluid">
								<img src="/pic2.png" alt="image4"/>
							</div>

							<div className="container-fluid">
								<img src="/pic1.png" alt="image5"/>
							</div>
						</Carousel>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="container-img">
							<img src="/pic1.png"/>
						</div>
					</div>
				</div>
				<div className="row justify-content-around text-center">
					<p className="description">Nirav Shah</p>
					<p className="sub-title">Independent Distributor</p>
					<div className="col-12 yt">
						<div className="embed-responsive h-100 w-100 embed-responsive-16by9">
							<iframe className="embed-responsive-item h-100 w-100" src="https://youtube.com/embed/u5LJEIukGYs?rel=0" allowfullscreen></iframe>
						</div>
					</div>	
				</div>
			</div>
			<div className="col-12 col-lg-8 mb-3">
				<div className="row">
					<div className="col-12 text-center p-5">
						<div className="accordion accordian-flush" id="accordionExample">
							<div className="accordion-item">
								<h2 className="accordion-header" id="headingOne">
									<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
										About Product
									</button>
								</h2>
								<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
									<div className="accordion-body">
										&emsp;&emsp; In simple terms Kangen Water is a name form ionized water made by Enagic's kangen water machine that converts normal tap water into either alkaline or acidic water, depending on the setting you choose (most kangen machines can produce water between 2.7 PH and 11.5 PH). The machine takes the water through a process known as electrolysis, which consists of electrocuting the water and splitting it into high PH (Alkaline) and low PH (Acidic), which is why most kangen water machines have 2 tubes coming out of them, except for the commercial model, that has 2 alkaline water tubes instead of one. One (or two) for Alkaline water and other for Acidic. Learn a little more about what is kangen water.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row justify-content-around">
					<div className="col-auto"> 
						<button type="button" className="btn me-2 rounded-circle btn-primary"> 
							<EmailIcon/> 
						</button> 
						<button type="button" className="btn me-2 btn-dark rounded-circle btn-icon"> 
							<InstagramIcon/>
						</button> 
						<button type="button" className="btn me-2 btn-danger rounded-circle btn-icon"> 
							<CallIcon/>
						</button> 
						<button type="button" className="btn me-2 btn-info rounded-circle btn-icon"> 
							<FacebookIcon/> 
						</button> 
						<button type="button" className="btn me-2 btn-success rounded-circle btn-icon"> 
							<YouTubeIcon/> 
						</button> 
					</div>
				</div>
			</div>
		</div>
      </main>
      <style jsx>{`
        .container {
          min-height: 10vh;
          display: block;
          flex-direction: column;
          justify-content: center;
          align-items: center;
		
        }
		
		.yt{
			height:14rem;
      		width: 28rem;
		}
		.container-fluid {
			width: 100%;
			height:40vh;
			display: block;
			text-align:center;
			justify-content:center;
			align-items: center;
        }
		.container-fluid img{
			width:100%;
			height:100%;
			display:block;
		}
		
		.container-img img{
			width:100%;
			height:100%;
			display:block;
			border-radius:50%;
			z-index:1;
			position:relative;
		}

		.container-img{
			width: 30%;
			height:15vh;
			display: block;
			text-align:center;
			justify-content:center;
			align-items: center;
			margin-inline:auto;
			margin-top:-4%;
		}

		span{
			font-weight: bolder;
			font-size: x-large;
		}
        main {
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

		.sub-title{
			text-align: center;
    		padding-inline: 35%;
    		margin-top: auto;
			font-size:0.9rem;
		}
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
		  margin-block:0;
		  font-weight: bolder;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
