import styled from 'styled-components';

export default function Header({ location }){
	if(!location) return null;
	return(
		<HeaderWrapper>
			<h1>Showing weather forecast for {location}</h1>
		</HeaderWrapper>
	)
}

const HeaderWrapper = styled.header`
	display: flex;
	width: 100%;
	justify-content: center;
`;