import styled from 'styled-components';

export const ProjectStyle = styled.section`
        height: calc(100vh - 60px + 620px);
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content:center;
        @media screen and (max-width:1300px){
            height: auto;
        }

        h2{
            margin-bottom:1rem;
        }
`

export const ProjectGridStyle = styled.div`
    max-width: 100%;
    min-width: 300px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    place-items:center;
    gap: 1rem;
    margin:1.5rem 0;
`