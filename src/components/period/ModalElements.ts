import styled from "styled-components";

interface Props {
  background?: string;
  fontSize?: string;
  border?: boolean;
}

export const ModalBlur = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const ModalBG = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  border-radius: 3px;
  background: #0f0f0f;
  width: 600px;
  height: 300px;
  padding: 18px;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 90%;
    height: 400px;
  }
`;

export const ModalClose = styled.img`
  width: 34px;
  height: 34px;
  background: none;
`;

export const ModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 24px;
`;

export const ModalSubjects = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: min-content;
  padding-top: 16px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 60px;
    justify-content: center;
  }
`;

export const ModalSubject = styled.p<Props>`
  color: white;
  background: ${(p) => p.background};
  width: min-content;
  height: min-content;
  border-radius: 18px;
  padding: 10px 20px;
  font-weight: bold;
  border: ${(p) => (p.border ? "2px solid gray" : "none")};

  &:hover {
    border: 2px solid gray;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 120px;
    text-align: center;
  }
`;

export const ModalFooter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: max-content;
  padding-top: 8px;

  @media (max-width: 768px) {
    padding-top: 8px;
  }
`;

export const ModalGrade = styled.p<Props>`
  color: white;
  width: min-content;
  font-size: ${(p) => (p.fontSize ? p.fontSize : "14px")};
`;

export const ModalInput = styled.input`
  border: 1px solid gray;
  border-radius: 8px;
  background: transparent;
  width: 80px;
  text-align: center;
  padding: 14px 20px;
  -webkit-appearance: none;
  color: white;
  margin-top: 4px;
  min: 0;
  max: 10;
`;

export const ModalConfirm = styled.div`
  background: #e9ff1a;
  width: 10rem;
  height: 3rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  text-color: black;
  align-self: end;
  font-weight: bold;
  text-shadow: 0px 1px, 1px 0px, 1px 1px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 8rem;
    padding: 8px;
  }
`;
