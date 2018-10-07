import styled from 'styled-components'
import { Col } from 'reactstrap'
// import { scheme } from '../../../consts/scheme'
import { Link } from 'react-router-dom'	

export const Img = styled.img`
`
export const DeadContainer = styled(Col)`
	height: calc(100vh - 124px);
	p {
		width: 100%;
		text-align: center;
		position: absolute;
	}
`
export const Router = styled(Link)`
`