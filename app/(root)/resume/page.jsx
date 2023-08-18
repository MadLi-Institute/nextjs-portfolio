import ResumeButton from "@/components/resumebutton/ResumeButton";
import Image from "next/image";

const getResumes = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/personal", {
      cache: "no-store",
    });
    if (!res.ok) {
      console.log("Failed to fetch resume data...");
      return;
    }
    return res.json();
  } catch (error) {
    console.log("Failed to fetch resume data...");
  }
};

const Resume = async () => {
  const resumes = await getResumes();

  const createMarkup = (raw) => {
    return {__html: raw}
  }
  return (
    <div className="flex flex-col gap-10 lg:flex-row w-full">
      <div className="flex flex-col w-full lg:w-96">
        <div className="grid flex-grow h-64 bg-base-100 place-items-center relative rounded-xl shadow-xl">
          <Image
            src={`/images/${resumes[0].profile_pic}`}
            fill={true}
            priority={true}
            sizes="auto"
            alt="#"
            className="object-cover rounded-lg"
          />
        </div>
        <div className="divider"></div>
        <div className="grid h-fit bg-base-100 rounded-xl p-1 shadow-xl max-lg:hidden">
          <div className="font-semibold">
            <h2 className="text-5xl lg:text-2xl">Skills</h2>
            <ul className="list-disc list-inside text-xl lg:text-lg mt-1 p-1">
              {resumes[0].skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="font-semibold">
            <h2 className="text-5xl lg:text-2xl">Social Media</h2>
            <ul className="list-disc list-inside text-xl lg:text-lg mt-1 p-1">
              {resumes[0].social_media.map((socmed, i) => (
                <li key={i}>{socmed}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full text-justify">
        <div className="grid flex-grow h-fit rounded-xl shadow-xl px-1 max-lg:h-auto bg-base-100">
          <div className="flex justify-between items-center max-lg:justify-end max-lg:flex-col max-lg:items-end max-lg:text-end">
            <div className="order-1 font-bold text-end lg:order-2">
              <h1 className="text-5xl">{resumes[0].full_name}</h1>
              <p className="text-lg">{resumes[0].title}</p>
            </div>
            <div className="order-2 text-lg italic font-semibold lg:order-1">
              {Object.values(resumes[0].full_address).map((address, i) => (
                <p key={i}>{address}</p>
              ))}
              <p>{resumes[0].phone_no}</p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div dangerouslySetInnerHTML={createMarkup(resumes[0].resume_desc)} className="grid flex-grow h-auto bg-base-100 font-semibold rounded-xl shadow-xl px-1"></div>
        <div className="grid flex-grow max-lg:h-auto max-lg:place-items-center mt-5">
          <div className="px-20 text-center w-fit">
            <h2 className="text-lg font-bold underline underline-offset-3">
              {resumes[0].full_name}
            </h2>
            <p>Applicant</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="grid h-8 place-items-end">
          <ResumeButton />
        </div>
      </div>
    </div>
  );
};

export default Resume;
