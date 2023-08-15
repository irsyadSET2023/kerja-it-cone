import Card from "../components/Card";
import JOB_DATA from "../assets/job-directory-data.json";
import Header from "../components/Header";
import Button from "../components/ui/Button";

const Home = () => {
  // can write normal javascript here
  console.log(JOB_DATA, "Hello World");
  return (
    <div>
      <Header />
      <div className="mx-auto w-[1000px]">
        <div className="text-center m-10">
          <h3>Find Tech Jobs In Malaysia 🇲🇾</h3>
          <h6>Let employers find you. Or apply to companies directly.</h6>
        </div>
        <div class="flex justify-center items-center gap-x-1 text-center my-5">
          <Button variant="solid">🎯I want Companies to find me</Button>
          <Button variant="outline">🔍 Search Jobs</Button>
        </div>
        <div className="my-5">
          <h5>⌛Latest Jobs</h5>
        </div>
        <div className=" flex gap-x-[50px] gap-y-[50px] flex-wrap">
          {JOB_DATA.map((item, index) => {
            return (
              <Card
                key={index}
                id={item.id}
                title={item.job}
                workplace={item.company}
                description={item.details.job_description[0]}
                date={item.post_date}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
