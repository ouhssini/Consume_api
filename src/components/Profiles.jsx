import { useEffect, useState } from "react";
import Card from "./Card";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [allprofiles, setallprofiles] = useState([]);
  useEffect(() => {
    // fetch data from the API
    fetch("https://randomuser.me/api?results=24")
      .then((response) => response.json())
      .then((data) => {
        setProfiles(data.results);
        setallprofiles(data.results);
      })
      .catch((error) => console.error(error));
    // fetch data from the API end
  }, []);

  const [gender, setGender] = useState("all");
  const handlefilter = (e) => {
    setGender(e.target.innerText.toLowerCase());
    if ( e.target.innerText.toLowerCase() === "all") {
      setProfiles(allprofiles);
    }else {
        setProfiles(
            allprofiles.filter(
              (profile) => profile.gender === e.target.innerText.toLowerCase()
            )
        );
    }
  };

  return (
    <>
      <h1 className="text-2xl text-center  font-black uppercase my-4 text-green-500">
        Profiles
      </h1>
      <div className="container filter mx-auto">
        <div className="container mx-auto flex justify-center items-center gap-3 my-5">
          <button onClick={handlefilter} className={`${gender === "all"? "bg-green-500" : "bg-gray-500"}   text-white font-bold py-2 px-4 rounded-full`}>
            All
          </button>
          <button
            className={`${gender === "male"? "bg-green-500" : "bg-gray-500"}   text-white font-bold py-2 px-4 rounded-full`}
            onClick={handlefilter}
          >
            Male
          </button>
          <button
            className={`${gender === "female"? "bg-green-500" : "bg-gray-500"}   text-white font-bold py-2 px-4 rounded-full`}
            onClick={handlefilter}
          >
            female
          </button>
        </div>
      </div>
      <div className="container w-[80%] mx-auto flex justify-center flex-wrap items-stretch  gap-3">
        {profiles.map((profile, index) => (
          <Card key={profile.login.uuid} profile={profile} />
        ))}
      </div>
    </>
  );
};

export default Profiles;
