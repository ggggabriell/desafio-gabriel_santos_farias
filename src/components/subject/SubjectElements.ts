import styled from "styled-components";

interface IProps {
  background?: string;
  color?: string;
}
export const SMain = styled.div`
  display: flex;
`;

export const SubjectComponent = styled.div<IProps>`
  background: ${(p) => p.background && p.background};
  width: 12rem;
  height: 8rem;
  border-radius: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 8rem;
    height: 8rem;
  }

  @media (max-width: 360px) {
    width: 7rem;
    height: 8rem;
  }
`;

export const STitle = styled.p`
  font-size: 22px;
  background: none;
  font-weight: bold;
  padding-top: 16px;
  padding-left: 20px;
  color: white;

  @media (max-width: 768px) {
    font-size: 18px;
    padding-top: 12px;
    padding-left: 12px;
  }
`;

export const SDate = styled.p`
  font-size: 14px;
  background: none;
  padding-top: 6px;
  padding-left: 20px;
  color: white;

  @media (max-width: 768px) {
    font-size: 12px;
    padding-left: 12px;
  }
`;

export const SGrade = styled.div`
  margin-top: 8px;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 12px;
    padding: 6px;
  }
`;

export const SGradeText = styled.p<IProps>`
  color: ${(p) => p.color && p.color};
  font-size: 16px;
  background: none;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SGradeImg = styled.img<IProps>`
  width: 22px;
  background: none;
  margin-right: 8px;

  @media (max-width: 768px) {
    width: 18px;
  }
`;

export const STrash = styled.img`
  width: 40px;
  height: 40px;
  background: none;
  margin-left: 4px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
