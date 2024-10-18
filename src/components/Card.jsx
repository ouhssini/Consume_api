import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="max-w-sm basis-72 rounded overflow-hidden shadow-md bg-white cursor-pointer flex flex-col justify-between">
        <img
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
          src={props.profile.picture.large}
          alt={props.profile.name.title}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {props.profile.name.title +
              "." +
              props.profile.name.first +
              " " +
              props.profile.name.last} 
              <span className="text-sm text-gray-600 ms-5 bg-slate-300 px-2 py-1 cursor-pointer rounded-full uppercase">{props.profile.gender}</span>
          </div>
          <p className="text-gray-700 text-base text-center">{props.profile.email}</p>
          <p className="text-gray-700  text-center">City: {props.profile.location.city} country : {props.profile.location.country}</p>
        </div>
        <div className="px-6 pt-4 pb-2 text-center bg-slate-200 flex justify-center items-center">
          <span className="inline-block bg-green-200 rounded-full px-3 py-1 my-1 text-sm  text-gray-700 mr-2">
            {props.profile.dob.age} years
          </span>
          <span className="inline-block bg-green-200 rounded-full px-3 py-1 my-1 text-sm  text-gray-700 mr-2">
          registered :{props.profile.registered.age}Y ago
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
