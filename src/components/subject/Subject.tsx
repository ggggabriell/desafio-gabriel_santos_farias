import { useState } from "react";

import {
  SMain,
  SDate,
  SGrade,
  STitle,
  SubjectComponent,
  SGradeText,
  SGradeImg,
  STrash,
} from "./SubjectElements";
import FromApi from "../../util/data/FromApi";

interface IProps {
  id: string;
  period?: string;
  subject?: string;
  grade: string;
  createdAt?: string;
}
const Subject = ({ id, period, subject, grade, createdAt }: IProps) => {
  const [data, setData] = useState([]);
  const newDate = new Date(createdAt ? createdAt : "");
  const test = newDate.toLocaleString().slice(0, 10);

  let color = "";
  if (subject != null) {
    if (subject === "Artes") {
      color = "#05A2C2";
    } else if (subject === "Geografia") {
      color = "#C26719";
    } else if (subject === "Biologia") {
      color = "#CC4090";
    } else if (subject === "Sociologia") {
      color = "#9B19C2";
    }
  }

  const colorNumber = Number.parseFloat(grade);

  const fromApi = new FromApi();

  const deleteFromApi = async () => {
    const response = await fromApi.delete(id);
    setData(response);
    window.location.reload();
    return response;
  };

  return (
    <SMain>
      <SubjectComponent background={color}>
        <STitle>{subject}</STitle>
        <SDate>{test}</SDate>
        <SGrade>
          <SGradeImg src="Chart.png"></SGradeImg>
          <SGradeText
            color={
              colorNumber < 6
                ? "#FF5964"
                : "" || (colorNumber >= 6 && colorNumber < 8)
                ? "#FFFF99"
                : "" || colorNumber >= 8
                ? "#05FF00"
                : ""
            }
          >
            Nota: {grade}
          </SGradeText>
        </SGrade>
      </SubjectComponent>
      <STrash src="Trash.png" onClick={deleteFromApi} />
    </SMain>
  );
};

export default Subject;
