import styled from 'styled-components';

export const ExperienciaStyle = styled.section`
    height: calc(100vh - 60px + 950px);
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-around;
    @media screen and (max-width:920px){
        height: auto;
    }
`

export const SkillsSectionStyle = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, auto));
    grid-gap: 1rem;
    place-items: center;
    margin: 3rem 0;


    svg{
        width: 150px;
        height: 150px;
        cursor: pointer;
        transform-style: preserve-3d;
        transition: .8s;
        &:hover{
            transform: rotateY(180deg);
        }
    }
`
export const ExprienciaSectionStyle = styled.div`
    width: 100%;
    height: auto;
    display:flex;
    flex-direction: column;
    align-items:center;
    @media screen and (max-width:920px){
        height: auto;
    }
    



`
