import styled from "styled-components";

export const ThemeContainer=styled.div`
 color: ${props => props.theme === "light" ? '#102a43': 'whitesmoke'};
background-color:${props => props.theme === "light" ? 'whitesmoke' : '#102a43'}; ;
`