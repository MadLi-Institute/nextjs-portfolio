import Image from "next/image";

const getAbouts = async () => {
  try {
    const res = await fetch("https://portfolio-app-sigma-two.vercel.app/api/personal", {
      cache: "no-store",
    });
    if (!res.ok) {
      console.log("Failed to fetch about data...");
      return;
    }
    return res.json();
  } catch (error) {
    console.log("Failed to fetch about data...");
  }
};

const About = async () => {
  const abouts = await getAbouts();
  const createMarkup = (raw) => {
    return {__html: raw}
  }
  return (
    <div className="flex flex-col w-full">
      <div className="grid flex-grow h-80 card bg-base-100 rounded-box place-items-center shadow-2xl">
        <Image
          src={`/images/${abouts[0].profile_pic}`}
          fill={true}
          priority={true}
          sizes="auto"
          alt="This is me"
          className="object-cover rounded-lg"
        />
      </div>
      <div className="divider"></div>
      <div className="grid flex-grow h-auto p-5 card rounded-box shadow-2xl">
        <div className="flex flex-col w-full lg:flex-row">
          <div className="grid flex-grow h-auto w-100 lg:w-96 p-5 card bg-base-100 rounded-box text-justify">
            <div className="mb-5">
              <h1 className="text-3xl font-bold">{abouts[0].full_name}</h1>
              <p className="text-md font-semibold">{abouts[0].title}</p>
            </div>
            <p dangerouslySetInnerHTML={createMarkup(abouts[0].about_desc)} className="text-sm font-semibold"></p>
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="grid flex-grow h-auto w-100 lg:w-4 p-5 card bg-base-100 rounded-box">
            <div className="collapse collapse-arrow">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Skills Background
              </div>
              <div className="collapse-content">
                <ul className="list-disc list-inside">
                  {abouts[0].skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="collapse collapse-arrow">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Educational Background
              </div>
              <div className="collapse-content">
                <ul className="list-disc list-inside">
                  {abouts[0].educational.map((education, i) => (
                    <li key={i}>{education}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="collapse collapse-arrow">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">Goals</div>
              <div className="collapse-content">
                <ul className="list-disc list-inside">
                  {abouts[0].goals.map((goal, i) => (
                    <li key={i}>{goal}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
