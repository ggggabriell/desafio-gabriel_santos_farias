import {
  Dispatch,
  SetStateAction,
  FunctionComponent,
  useState,
  useEffect,
} from "react";
import {
  ModalBG,
  ModalBlur,
  ModalClose,
  ModalTop,
  ModalSubject,
  ModalSubjects,
  ModalGrade,
  ModalFooter,
  ModalInput,
  ModalConfirm,
} from "./ModalElements";
import { PText } from "./PeriodElements";
import FromApi from "../../util/data/FromApi";

interface IProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  period: string;
}

interface Grade {
  _id: string;
  disciplina?: string;
  bimestre: string;
  nota: string;
  createdAt?: string;
}

const Modal: FunctionComponent<IProps> = (props: IProps) => {
  const [selectedSubjectText, setSelectedSubjectText] = useState("");
  const [selectedBiologia, setSelectedBiologia] = useState(false);
  const [selectedArtes, setSelectedArtes] = useState(false);
  const [selectedGeog, setSelectedGeog] = useState(false);
  const [selectedSocio, setSelectedSocio] = useState(false);
  const [gradeValue, setGradeValue] = useState("");
  const [response, setResponse] = useState([]);

  const [data, setData] = useState([]);
  const fromApi = new FromApi();

  useEffect(() => {
    const getFromApi = async () => {
      const response = await fromApi.getList();
      setData(response.map((r: Grade) => r.disciplina));
      setResponse(response);
      return response;
    };

    getFromApi();
  }, []);

  const handleSubject = (subject: string) => {
    let helper = false;

    response.map((grade: Grade) => {
      if (grade.bimestre === props.period) {
        if (grade.disciplina === subject) {
          helper = true;
        }
      }
    });

    if (!helper) {
      setSelectedSubjectText(subject);
    }
  };

  const sendData = async () => {
    const data = await fromApi.create({
      subject: selectedSubjectText,
      period: props.period,
      grade: parseFloat(gradeValue),
    });

    if (data.message) {
      window.alert(data.message);
    } else {
      window.location.reload();
    }
  };

  return (
    <ModalBlur>
      <ModalBG>
        <ModalTop>
          <PText>Bimestre 1</PText>
          <ModalClose
            src="X.png"
            onClick={() => {
              props.setOpenModal(false);
            }}
          />
        </ModalTop>
        <ModalGrade background="none" fontSize="18px">
          Disciplina
        </ModalGrade>

        {data && (
          <ModalSubjects>
            <ModalSubject
              background="#cc4090"
              onClick={() => {
                setSelectedBiologia(!selectedBiologia);
                handleSubject("Biologia");
              }}
              border={selectedBiologia}
            >
              Biologia
            </ModalSubject>
            <ModalSubject
              background="#05A2C2"
              onClick={() => {
                setSelectedArtes(!selectedArtes);
                handleSubject("Artes");
              }}
              border={selectedArtes}
            >
              Artes
            </ModalSubject>
            <ModalSubject
              background="#C26719"
              onClick={() => {
                setSelectedGeog(!selectedGeog);
                handleSubject("Geografia");
              }}
              border={selectedGeog}
            >
              Geografia
            </ModalSubject>
            <ModalSubject
              background="#9B19C2"
              onClick={() => {
                setSelectedSocio(!selectedSocio);
                handleSubject("Sociologia");
              }}
              border={selectedSocio}
            >
              Sociologia
            </ModalSubject>
          </ModalSubjects>
        )}
        <ModalFooter>
          <ModalGrade>Nota</ModalGrade>
          <ModalInput
            type="number"
            placeholder="0.0"
            value={gradeValue}
            onChange={(e) => {
              setGradeValue(e.target.value);
              console.log(gradeValue);
            }}
          />
          <ModalConfirm
            onClick={() => {
              sendData();
            }}
          >
            Confirmar
          </ModalConfirm>
        </ModalFooter>
      </ModalBG>
    </ModalBlur>
  );
};

export default Modal;
