import styled from "styled-components";

export const ExperienciaStyle = styled.section`
  max-height: max-content;
  height: calc(100vh - 60px + 950px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding-bottom: 0.5rem;
`;

export const SkillsSectionStyle = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, auto));
  grid-gap: 1rem;
  place-items: center;
  margin: 3rem 0;

  svg {
    width: 150px;
    height: 150px;
    cursor: pointer;
    transform-style: preserve-3d;
    transition: 0.8s;
    &:hover {
      transform: rotateY(180deg);
    }
  }
`;
export const ExprienciaSectionStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  ::-webkit-scrollbar{width: 0px;}
`;
