import { useParams } from "react-router-dom";
import JOB_DATA from "../assets/job-directory-data.json";
import Header from "../components/Header";
import Container from "../components/Container";

const Job = () => {
  const params = useParams();
  const filteredData = JOB_DATA.find((element) => {
    return element.id === Number(params?.id);
  });
  console.log(filteredData);
  return (
    <div className="bg-slate-300">
      <Header />
      <Container data={filteredData} />
      {/* <h1>Job</h1>
      <p>Job id -{params?.id || "Invalid Id"}</p> */}
      {/* <pre>{JSON.stringify(filteredData, 4)}</pre> */}
    </div>
  );
};

export default Job;
