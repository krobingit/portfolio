import React from 'react'
import styled from 'styled-components'
import { medium } from '../responsive';
import { AiOutlineMail } from "react-icons/ai";
import { FiSmartphone, FiMapPin } from "react-icons/fi";

const HeaderContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 2rem;
`

const IconHeader=styled.div`
font-size: 1.3rem;
font-weight: 600;
`
const Container=styled.div`
display: flex;
justify-content: center;
margin-top: 2rem;

`
const InnerContainer=styled.div`
width: 75%;
padding: 10px;
margin: 1rem;
display: flex;
flex-direction: column;
gap: 1rem;
${medium({display:"block"})}
`
const ContactContainer=styled.div`
margin-top: 1rem;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
gap: 1rem;
`
const ContactItem = styled.div`
height:min-content;
background:goldenrod;
padding:1rem;
border-radius:1rem;
`

export default function Contact() {
    return (
        <div id="contacts">
            <HeaderContainer>
                    <IconHeader>Contact</IconHeader>
            </HeaderContainer>
            <Container>
               <InnerContainer>
                        <ContactContainer>
                            <ContactItem ><AiOutlineMail/><a style={{color:"inherit",textDecoration:"none"}} href="mailto:liorobin5@gmail.com">liorobin5@gmail.com</a></ContactItem>
                            <ContactItem ><FiSmartphone/><a style={{color:"inherit",textDecoration:"none"}} href="tel:+919789762942">+91-9789762942</a></ContactItem>
                            <ContactItem ><FiMapPin/>Trichy,Tamilnadu</ContactItem>
                        </ContactContainer>
               </InnerContainer>
            </Container>
        </div>
    )
}
