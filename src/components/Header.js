import styled from 'styled-components';

export default function Header(){
	return(
		<HeaderWrapper>
			<h1>Example weather app</h1>
		</HeaderWrapper>
	)
}

const HeaderWrapper = styled.header`
	display: flex;
	width: 100%;
	justify-content: center;
`;