import { useState, useEffect } from "react";
import {
  PText,
  PeriodComponent,
  PButttonDiv,
  PTop,
  PSubjectList,
  PButtonT,
  PPlus,
  PeriodWrapper,
} from "./PeriodElements";
import Subject from "../subject/Subject";
import Modal from "./Modal";
import FromApi from "../../util/data/FromApi";

interface Grade {
  _id: string;
  disciplina: string;
  bimestre: string;
  nota: string;
  createdAt: string;
}

const Period = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [periodSelected, setPeriodSelected] = useState("");

  useEffect(() => {
    const fromApi = new FromApi();

    const getFromApi = async () => {
      const response = await fromApi.getList();
      setData(response);
      return response;
    };

    getFromApi();
  }, []);

  return (
    <PeriodComponent>
      {modalOpen && (
        <Modal setOpenModal={setModalOpen} period={periodSelected} />
      )}

      {data && (
        <>
          <PeriodWrapper>
            <PTop>
              <PText>Bimestre 1</PText>
              <PButttonDiv
                onClick={() => {
                  setModalOpen(true);
                  setPeriodSelected("PRIMEIRO");
                }}
              >
                <PButtonT>Lançar nota</PButtonT>
                <PPlus src="Plus.png" />
              </PButttonDiv>
            </PTop>
            <PSubjectList>
              {data !== null &&
                data !== undefined &&
                data.map((grade: Grade) => {
                  if (grade.bimestre === "PRIMEIRO") {
                    return (
                      <Subject
                        id={grade._id}
                        subject={grade.disciplina}
                        createdAt={grade.createdAt}
                        grade={grade.nota}
                      />
                    );
                  }
                })}
            </PSubjectList>
          </PeriodWrapper>
          <PeriodWrapper>
            <PTop>
              <PText>Bimestre 2</PText>
              <PButttonDiv
                onClick={() => {
                  setModalOpen(true);
                  setPeriodSelected("SEGUNDO");
                }}
              >
                <PButtonT>Lançar nota</PButtonT>
                <PPlus src="Plus.png" />
              </PButttonDiv>
            </PTop>
            <PSubjectList>
              {data !== null &&
                data !== undefined &&
                data.map((grade: Grade) => {
                  if (grade.bimestre === "SEGUNDO") {
                    return (
                      <Subject
                        id={grade._id}
                        subject={grade.disciplina}
                        createdAt={grade.createdAt}
                        grade={grade.nota}
                      />
                    );
                  }
                })}
            </PSubjectList>
          </PeriodWrapper>
          <PeriodWrapper>
            <PTop>
              <PText>Bimestre 3</PText>
              <PButttonDiv
                onClick={() => {
                  setModalOpen(true);
                  setPeriodSelected("TERCEIRO");
                }}
              >
                <PButtonT>Lançar nota</PButtonT>
                <PPlus src="Plus.png" />
              </PButttonDiv>
            </PTop>
            <PSubjectList>
              {data !== null &&
                data !== undefined &&
                data.map((grade: Grade) => {
                  if (grade.bimestre === "TERCEIRO") {
                    return (
                      <Subject
                        id={grade._id}
                        subject={grade.disciplina}
                        createdAt={grade.createdAt}
                        grade={grade.nota}
                      />
                    );
                  }
                })}
            </PSubjectList>
          </PeriodWrapper>
          <PeriodWrapper>
            <PTop>
              <PText>Bimestre 4</PText>
              <PButttonDiv
                onClick={() => {
                  setModalOpen(true);
                  setPeriodSelected("QUARTO");
                }}
              >
                <PButtonT>Lançar nota</PButtonT>
                <PPlus src="Plus.png" />
              </PButttonDiv>
            </PTop>
            <PSubjectList>
              {data !== null &&
                data !== undefined &&
                data.map((grade: Grade) => {
                  if (grade.bimestre === "QUARTO") {
                    return (
                      <Subject
                        id={grade._id}
                        subject={grade.disciplina}
                        createdAt={grade.createdAt}
                        grade={grade.nota}
                      />
                    );
                  }
                })}
            </PSubjectList>
          </PeriodWrapper>
        </>
      )}
    </PeriodComponent>
  );
};

export default Period;
