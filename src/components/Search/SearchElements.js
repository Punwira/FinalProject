import styled from "styled-components";


export const Container = styled.div`
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const SearchH1 = styled.h1`
    font-size: 3rem;
    color: #01bf71;
   
    margin-top: -350px;
    
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`




export const Form = styled.h1`

font-family: sans-serif;
	width: 65vw;
	margin: 7vh auto;
    .c-form {
		width: 100%;
		position: relative;
		&_e-input {
			border: none;
			border-radius: 10px;
			width: 100%;
			height: 80px;
			padding: 0 75px 0 15px;
			font-family:sans-serif;
			font-size: 18px;
			font-weight: bold;
			box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
		}
		&_e-button {
			position: absolute;
			top: 0;
			right: 0;
			height: 80px;
			padding: 0 25px;
			border: none;
			border-radius: 0 5px 5px 0;
			background-color: #40b7ec;
			font-size: 20px;
			cursor: pointer;
			&:hover {
				background-color: darken(#40b7ec, 10%);
			}
		}
	}

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`