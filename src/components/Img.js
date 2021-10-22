import { keyframes } from 'styled-components'
import styled from 'styled-components'

const shake = (mirror) => keyframes`
    100% { transform: ${mirror ? 'scale(-1,1) rotate(10deg)' : 'rotate(10deg)'} 
`;

const Img = styled.img`
transform: ${props => props.mirror ? 'scale(-1,1) rotate(45deg)' : 'rotate(45deg)'};
alignSelf: center;
animation: ${props => shake(props.mirror)}  0.75s linear infinite;
`

export default Img;
