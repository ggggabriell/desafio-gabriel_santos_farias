import styled from "styled-components";

export const PeriodComponent = styled.div`
  width: 90%;
`;

export const PeriodWrapper = styled.div`
  padding-bottom: 28px;
`;
export const PText = styled.h1`
  font-size: 24px;
  color: white;
`;

export const PButttonDiv = styled.div`
  background: #e9ff1a;
  width: 12rem;
  height: 3rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    justify-content: center;
    width: 4rem;
  }
`;

export const PButtonT = styled.p`
  color: black;
  font-size: 16px;
  font-weight: bold;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const PTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 12px;
  padding-bottom: 24px;
`;

export const PSubjectList = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 1111px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 160px;
    justify-content: center;
  }
`;

export const PPlus = styled.img`
  width: 40px;
  height: 40px;
  background: none;
  margin-left: 4px;
`;
