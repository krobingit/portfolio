/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React,{useEffect} from 'react'
import styled from 'styled-components'
import { medium,small,large } from '../responsive';
import shoptronics from "../assets/shoptronics.png"
import tictactoe from "../assets/tictactoe.png"
import filterSearch from "../assets/filterSearch.png"
import currencyApp from "../assets/currencyApp.png"
import weatherApp from "../assets/weatherApp.png"
import registerApp from "../assets/registerApp.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeaderContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 7rem;
margin-bottom: 2rem;
${large({marginTop:"9rem"})}
${medium({marginTop:"12rem"})}
${small({marginTop:"15rem"})}
`
const IconHeader=styled.div`
font-size: 1.3rem;
font-weight: 600;
`
const Container=styled.div`
display: flex;
justify-content: center;

`
const InnerContainer=styled.div`
width: 75%;

padding: 10px;
margin: 1rem;
`

const CardContainer=styled.div`
display: flex;
justify-content: center;
gap: 2rem;
flex-wrap: wrap;
`
const OuterCard=styled.div`

`
const InnerCard=styled.div`

`
const CardDetails=styled.div`
position: absolute;
display: none !important;
top: 0;
left: 0;
background-color: rgba(0,0,0, 0.4);
height: 100%;
width: 100%;

color: white;
text-align: center;
padding: 7px;
gap: 1rem;
`
const Card=styled.div`
width: 29rem;
height: 20rem;
position: relative;
${small({width:"20rem",padding:"5px"})}

&:hover ${CardDetails}{
 display: flex !important;
flex-direction: column;
justify-content: center;
align-items: center;

}
`
const CardImg=styled.img`
width:100%;
height: 100%;
object-fit: cover;
border-radius: 5px;
border:2px solid black;
;
`

const DetailHeader =styled.div`
font-size: 1.3rem;
font-weight: 700;
`
const DetailSub =styled.div`
font-weight: 500;
font-size: 0.9rem;
`

const DetailBody =styled.div`
font-weight: 500;
`

const DetailFooter =styled.div`
display: flex;
gap: 0.5rem;
`
export default function Projects() {

    useEffect(() => {
        AOS.init({})
    }, [])
    const styles = { color: "inherit", textDecoration: "none" };

    return (
        <div id="projects">
            <HeaderContainer>

                    <IconHeader>My Projects</IconHeader>
            </HeaderContainer>
            <Container>
                <InnerContainer>
                    <CardContainer>
                        <OuterCard >
                            <InnerCard>
                                <Card data-aos="zoom-out" >
                                    <CardImg src={shoptronics}/>
                                    <CardDetails>
                                        <DetailHeader>Shoptronics</DetailHeader>
                                        <DetailSub>Ecommerce App</DetailSub>
                                        <DetailBody>A Full Stack Ecommerce application for buying Electronic products, built using ReactJs , NodeJs and MongoDB.</DetailBody>
                                        <DetailFooter>
                                            <div><button className="btn btn-primary"><a style={styles} target="_blank"  href="https://shoptronics-ecom.netlify.app/">Deployed Link</a></button></div>
                                            <div><button className="btn btn-success"><a  style={styles} target="_blank" href="https://github.com/krobingit/Shoptronics-Ecommerce-Client">View Code</a></button></div>
 <div><button className="btn btn-success"><a  style={styles} target="_blank" href="https://www.youtube.com/watch?v=6CXrdnfUnpU&t=212s">Video Demo</a></button></div>
                                        </DetailFooter>
                                    </CardDetails>
                                </Card>

                            </InnerCard>
                        </OuterCard>

                        <OuterCard>
                            <InnerCard>
                                <Card data-aos="zoom-out">
                                    <CardImg src={tictactoe}/>
                                    <CardDetails>
                                        <DetailHeader>Tic-Tac-Toe Game with LeaderBoard</DetailHeader>
                                        <DetailBody>Simple Game made using ReactJs using hooks in functional components</DetailBody>
                                        <DetailFooter>
                                            <div><button className="btn btn-primary"><a style={styles} target="_blank"  href="https://tic-tac-toe-reactjs-leaderboard.netlify.app/">Deployed Link</a></button></div>
                                            <div><button className="btn btn-success"><a  style={styles} target="_blank" href="https://github.com/krobingit/Tic-Tac-Toe-with-LeaderBoard">View Code</a></button></div>
                                        </DetailFooter>
                                    </CardDetails>
                                </Card>

                            </InnerCard>
                        </OuterCard>

                        <OuterCard>
                            <InnerCard>
                                <Card data-aos="zoom-out">
                                    <CardImg src={filterSearch}/>
                                    <CardDetails>
                                        <DetailHeader>Ecommerce Filter-Search Feature</DetailHeader>
                                        <DetailBody>A web application to demonstrate the multiple filters including search feature on List of Products  using Context Hook and Redux</DetailBody>
                                        <DetailFooter>
                                            <div><button className="btn btn-primary"><a style={styles} target="_blank"  href="https://ecom-filter-search.netlify.app/">Deployed Link</a></button></div>
                                            <div><button className="btn btn-success"><a  style={styles} target="_blank" href="https://github.com/krobingit/ecom-filter-search">View Code</a></button></div>
                                        </DetailFooter>
                                    </CardDetails>
                                </Card>

                            </InnerCard>
                        </OuterCard>

                        <OuterCard>
                            <InnerCard>
                                <Card data-aos="zoom-out">
                                    <CardImg src={currencyApp}/>
                                    <CardDetails>
                                        <DetailHeader>Currency Converter</DetailHeader>
                                        <DetailBody>Developed a simple and easy to use “Currency Converter” app useful to show users how their own currencies will fare
when exchanged with other foreign currency using HTML,CSS,JS</DetailBody>
                                        <DetailFooter>
                                            <div><button className="btn btn-primary"><a style={styles} target="_blank"  href="https://world-currency-converter.netlify.app/">Deployed Link</a></button></div>
                                            <div><button className="btn btn-success"><a  style={styles} target="_blank" href="https://github.com/krobingit/Currency-Converter-main">View Code</a></button></div>
                                        </DetailFooter>
                                    </CardDetails>
                                </Card>

                            </InnerCard>
                        </OuterCard>

                        <OuterCard>
                            <InnerCard>
                                <Card data-aos="zoom-out">
                                    <CardImg src={weatherApp}/>
                                    <CardDetails>
                                        <DetailHeader>Weather Application</DetailHeader>
                                        <DetailBody>A Weather app which reports weather all around the world with customizable search locations made using HTML,CSS,JS</DetailBody>
                                        <DetailFooter>
                                            <div><button className="btn btn-primary"><a style={styles} target="_blank"  href="https://weather4uapp.netlify.app/">Deployed Link</a></button></div>
                                            <div><button className="btn btn-success"><a  style={styles} target="_blank" href="https://github.com/krobingit/Weather4U-Using-HTML-CSS-JS">View Code</a></button></div>
                                        </DetailFooter>
                                    </CardDetails>
                                </Card>

                            </InnerCard>
                        </OuterCard>


                        <OuterCard>
                            <InnerCard>
                                <Card data-aos="zoom-out">
                                    <CardImg src={registerApp}/>
                                    <CardDetails>
                                        <DetailHeader>Registration for User</DetailHeader>
                                        <DetailBody>A Registration CRUD app build on MERN Stack which allows you to register,edit,delete and view all users</DetailBody>
                                        <DetailFooter>
                                            <div><button className="btn btn-primary"><a style={styles} target="_blank"  href="https://registration-crud-ui.netlify.app/">Deployed Link</a></button></div>
                                            <div><button className="btn btn-success"><a  style={styles} target="_blank" href="https://github.com/krobingit/Registration-CRUD-UI">View Code</a></button></div>
                                        </DetailFooter>
                                    </CardDetails>
                                </Card>

                            </InnerCard>
                        </OuterCard>



                    </CardContainer>
                </InnerContainer>
            </Container>
        </div>
    )
}
