import styled from "styled-components"

export const ConnectWalletContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: ${props => props.theme.color.white};
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: .25rem;
    width: 40rem;
    box-shadow: ${props => props.theme.shadow.prepo};
    margin: 20% 50%;
    padding: 1rem;
    text-align: center;
`

export const Button = styled.button `
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: ${props => props.theme.color.primary};
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, ease-in-out;
    color: ${props => props.theme.color.white};
    border-color: ${props => props.theme.color.primary};
    margin: 0.5rem;
`

export const Paragraph = styled.p `
    display:flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, ease-in-out;
    color: ${props => props.theme.color.primaryDark};
    margin: 0.5rem;
    background: ${props => props.theme.color.lightGray};
`
export const Wrapper = styled.div`
    text-align: center;
    padding: 0.5rem;
`