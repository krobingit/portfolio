import React,{useState,useContext} from 'react'
import { ThemeContext } from '../context'
import { Navbar,Container,Nav } from 'react-bootstrap'
import styled, { keyframes } from 'styled-components'
import "./Navbar.css"
import { BsFillSunFill,BsFillMoonFill } from "react-icons/bs";
import {Link as LinkS} from 'react-scroll'
import { small } from '../responsive'



export const NavLinks = styled(LinkS)`
    text-decoration: none;
    cursor: pointer;
`

const BarNav=styled(Navbar)`
background-color:${props => props.theme === "light" ? 'white' : '#102a43'} !important;
color: #ffeead !important;
position: fixed;
width: 100vw;
top:0;
z-index:1;
`

const Button=styled.div`
border-radius: 50%;
color: goldenrod !important;
font-size: 1.3rem;
transition:all 0.2s linear;
position: relative;
${small({display:"none"})}
&:hover {
     color:grey !important;
     transform: scale(1.1);
    }
`
const up=keyframes`
0%   {transform:translateX(40px)}

  100% {transform:translateX(0)}
`

const Tool=styled.div`
width: 10rem;
position: absolute;
padding:2px;
background-color: white;
right:1rem;
font-size: 0.8rem;
display: flex;
justify-content: center;
border-radius:5px;
align-items: center;
transition: all 0.2s linear;
animation: ${up} 2s linear;

`

const Button1=styled.div`
border-radius: 50%;
color: goldenrod !important;
font-size: 1.3rem;
transition:all 0.2s linear;
display: none;
${small({display:"inline-block"})}
&:hover {
     color:grey !important;
     transform: scale(1.1);
    }
`
export default function TopNavbar() {
    const [themeButton,setThemeButton]=useState("dark")
    const {theme,changeTheme}=useContext(ThemeContext)
    const [tool,setTool]=React.useState(true)

    console.log(theme)

    const handleTheme=()=>{

    changeTheme()

      if(themeButton==="dark")  setThemeButton("light")
      else setThemeButton("dark")
    }
    const hideTool=()=>{
      setTimeout(()=>setTool(false),3000)
    }
  React.useEffect(() => {
    hideTool()

  }, []);
    return (
        <div>
            <BarNav theme={theme}  expand="lg">
  <Container>
    <Navbar.Brand href="#home">
        <Button1 className="btn navbtn" onClick={handleTheme} style={{borderRadius:"50%",color:"grey",fontSize:"1.4rem"}}>
        {
            themeButton === "light"? <BsFillMoonFill/>:<BsFillSunFill/>
        }
        </Button1>
        </Navbar.Brand>
    <Navbar.Toggle className="toggler" aria-controls="basic-navbar-nav" style={{backgroundColor:"red !important",color:"white"}}/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav  className="ms-auto" style={{fontWeight:"600",fontSize:"1.3rem"}}>
        <Nav.Link  href="#home">
        <NavLinks style={{color:"goldenrod"}}  to='home' spy={true} smooth={true}  duration={500}>Home</NavLinks>
        </Nav.Link>
        <Nav.Link  href="#home">
        <NavLinks style={{color:"goldenrod"}}  to='projects' spy={true} smooth={true}  duration={500}>Projects</NavLinks>
        </Nav.Link>
        <Nav.Link  href="#home" >
        <NavLinks style={{color:"goldenrod"}} to='skills' spy={true} smooth={true}  duration={500}>Skills</NavLinks>
        </Nav.Link>
        <Nav.Link  href="#home">
        <NavLinks style={{color:"goldenrod"}}  to='contacts' spy={true} smooth={true} duration={500}>Contact</NavLinks>
        </Nav.Link>
        <div>
        <Button className="btn navbtn" onClick={handleTheme} style={{borderRadius:"50%",color:"grey",fontSize:"1.4rem"}}>
        {
             themeButton === "light"? <BsFillMoonFill/>:<BsFillSunFill/>
        }
        </Button>
        { tool &&
        <Tool>Click icon to change theme</Tool>
          }
        </div>
      </Nav>
    </Navbar.Collapse>
  </Container>
</BarNav>
        </div>
    )
}
