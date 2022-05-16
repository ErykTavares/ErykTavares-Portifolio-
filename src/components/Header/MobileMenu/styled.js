import styled from 'styled-components';

export const MenuMobileStyle = styled.nav`
    display:none;
    position: absolute;
    width: 80%;
    height: 50px;
    align-items:center;
    justify-content:center;
    border-radius: 0 0 10px 10px;
    top: 100px;
    background-color:var(--black200);
    transition: 1s;
    @media screen and (max-width:760px){
           display:${({state})=>state};
    }
    @media screen and (max-width:400px){
           height: 200px;
        }

    ul{
        width: 100%;
        height: 100%;
        margin: 0;
        @media screen and (max-width:400px){
           flex-direction:column;
        }
    }

    li{
        
    }

`