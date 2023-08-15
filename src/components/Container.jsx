import React from "react";
import Button from "./ui/Button";
const Container = ({ data }) => {
  return (
    <div className="mx-auto w-[800px] px-5 bg-slate-50 py-5">
      <h6>
        Jobs/ {data?.job || "No job"} {data?.district || "No district"} -
        {data?.company || "No company"}
      </h6>
      <div className="border-3 border-gray-500">
        <p>
          {data?.district || "No district"} {data?.stacks[0] || ""}
        </p>
        <h4>
          {data?.job || "No job"} {data?.district || "No district"}
        </h4>
        <h6>{data?.company || "No company"}</h6>
      </div>
      <div>
        <p>📅 Posted on {data?.post_date}</p>
        <p>🧭 {data?.company_state}</p>
        <p>💼 {data?.work_type}</p>
        <p>🕑 Unspecified</p>
      </div>
      <div className="my-5">
        <Button variant="solid">Apply Now 🚀</Button>
      </div>
      <div className="my-5">
        <h6>✍️ Job Description</h6>
        <div className="mx-auto w-[700px] flex flex-col gap-20">
          <div className="my-5">
            {data.details.job_description.map((item, index) => {
              return <p>{item}</p>;
            })}
          </div>
        </div>
        <h6 className="my-5">🎓Qualification</h6>
        <div className="mx-auto w-[700px] flex flex-col gap-20">
          <div className="">
            {data.details.qualification.map((item, index) => {
              return <p>{item}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
