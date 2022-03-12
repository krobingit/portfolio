import React from 'react'
import styled from 'styled-components'
import TextTransition, { presets } from "react-text-transition";
import { HiDocumentDownload } from "react-icons/hi";
import Resume from "../assets/Resume.pdf"
import {Link as LinkS} from 'react-scroll'
import { small } from '../responsive';

const MainContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 9rem;
${small({gap:"2rem"})}
`
export const NavLinks = styled(LinkS)`
    text-decoration: none;
    cursor: pointer;
    color: white;

`

const MainDiv=styled.div`
flex: 1;
`

const Container=styled.div`
display: flex;
padding: 10px;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top:9rem;
text-align: center;
${small({marginTop:"5rem"})}
`

const HeaderContainer=styled.div`
color:goldenrod;
font-size: 4rem;
font-weight: 700;
text-align: center;
`
const SContainer=styled.div`
font-size: 2.5rem;
font-weight: 700;
color:#627d98;
`
const TContainer=styled.div`
font-size: 2.5rem;
font-weight: 700;
color:goldenrod;
`

export default function Home() {
    const [index, setIndex] = React.useState(0);
  const TEXTS = [
     "Javascript",
        "React JS",
        "Node JS",
        "MongoDB",
      "Express JS",
      "Next JS"
    ];


    React.useEffect(() => {

      const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        1500
      );
      return () => clearTimeout(intervalId);

    }, []);
    return (
        <div id="home">
        <MainContainer>

            <MainDiv>
                <Container className="text-justify" >
                    <HeaderContainer> Robin K</HeaderContainer>
              <SContainer ><p >Full stack Developer</p></SContainer>
              <SContainer ><p style={{letterSpacing:"5px"}}>MERN STACK</p></SContainer>
              <TContainer>
                    <TextTransition
                        text={ TEXTS[index % TEXTS.length] }
                        springConfig={ presets.wobbly }
                    />
                    </TContainer>
                    <SContainer>
                        <button className="btn btn-secondary"><a style={{color:"inherit",textDecoration:"none"}} href={Resume} download><HiDocumentDownload style={{fontSize:"1.5rem"}}/>Resume</a></button>
                    </SContainer>
                </Container>
        </MainDiv >
        </MainContainer>
        </div>
    )
  }
