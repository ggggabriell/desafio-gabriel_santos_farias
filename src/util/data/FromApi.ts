import axios from "axios";

interface ISendGrade {
  subject: string;
  period: string;
  grade: number;
}

const BASE_URL = "http://localhost:3333";

export default class FromApi {
  public async getList(): Promise<any> {
    let data;
    await axios
      .get(BASE_URL + "/grades")
      .then((response) => {
        data = response.data;
      })
      .catch((error) => error);

    return data;
  }

  public async delete(id: string): Promise<any> {
    let data;

    await axios
      .delete(BASE_URL + "/grades", {
        data: { id: id },
      })
      .then((response) => {
        data = response.data;
      })
      .catch((error) => error);

    return data;
  }

  public async create({ subject, period, grade }: ISendGrade): Promise<any> {
    let data;
    await axios
      .post(BASE_URL + "/grades", { subject, period, grade })
      .then((response) => {
        data = response.data;
      })
      .catch((error) => {
        data = error.response.data.message
          ? error.response.data
          : error.message;
      });

    return data;
  }
}
