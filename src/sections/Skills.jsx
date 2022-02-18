import React ,{useEffect}from 'react'
import styled from 'styled-components'
import { medium,small } from '../responsive';
import html from "../assets/html.svg";
import nextjs from "../assets/nextjs.svg";
import javascript from "../assets/javascript.svg";
import materialui from "../assets/material-ui.svg";
import react from "../assets/react.svg";
import css from "../assets/css3.svg";
import mongodb from "../assets/mongodb.svg";
import postgresql from "../assets/postgresql.svg";
import bootstrap from "../assets/bootstrap.svg";
import nodejs from "../assets/nodejs.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeaderContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 1rem;
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
display: flex;

${medium({display:"block"})}
${small({display:"block",width:"100%"})}
`
const LeftContainer=styled.div`
padding: 8px;
width: 50%;
display: flex;
flex-direction: column;
gap: 1.7rem;
margin-top: 2rem;
${medium({width:"100%"})}
${small({width:"80%"})}

`
const RightContainer=styled.div`
padding: 8px;
width: 50%;
display: flex;
flex-direction: column;
gap: 1.7rem;
margin-top: 2rem;
${medium({width:"100%"})}
${small({width:"80%"})}
`
const InputContainer=styled.div`
background-color: 	#0275d8;
color: white;
padding: 7px;
font-weight: 500;
font-size: 1.4rem;
display: flex;
gap:1rem;
`
const SkillImage = styled.img`
width:30px;
height:30px;
`

export default function Skills() {

    let leftArray = [{ name:"HTML",img:html},{ name:"CSS",img:css},{ name:"Javascript",img:javascript},{ name:"Bootstrap",img:bootstrap},{ name:"Material UI",img:materialui}]
    let rightArray=[{ name:"React JS",img:react},{ name:"Node JS",img:nodejs},{ name:"MongoDB",img:mongodb},{ name:"PostGreSQL",img:postgresql},{ name:"Next JS",img:nextjs}]

    useEffect(() => {
        AOS.init({})
    }, [])

    return (
        <div id="skills">
             <HeaderContainer>

                    <IconHeader>Skills & Technologies</IconHeader>
            </HeaderContainer>
            <Container>
                <InnerContainer>
                    <LeftContainer  data-aos="fade-down-right" data-aos-offset="100">

                          {
                              leftArray.map((a)=>{
                                return(
                                    <>

                                        <InputContainer>
                                                      <SkillImage src={a.img} alt="skill" />

                                    <div>{a.name}</div>
                                    </InputContainer>
                                    </>
                                )
                              })
                          }

                    </LeftContainer>
                    <RightContainer data-aos="fade-down-left" data-aos-offset="100" >
                    {
                              rightArray.map((a)=>{
                                return(
                                    <>
                                        <InputContainer>
                                            <SkillImage src={a.img} alt="skill" />

                                    <div>{a.name}</div>
                                    </InputContainer>
                                    </>
                                )
                              })
                          }
                    </RightContainer>
                </InnerContainer>
            </Container>
        </div>
    )
}
