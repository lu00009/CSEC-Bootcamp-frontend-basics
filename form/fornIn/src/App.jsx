import React from "react";
import './index.css'
import CredentialsInformation from "./components/CredentialsInformation";
import HandlesInformation from "./components/HandlesInformation";
import PersonalInformations from "./components/PersonalInformations";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100">
      <div className="w-full max-w-md space-y-6 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-xl font-bold text-center">User Information</h1>
        <PersonalInformations />
        <CredentialsInformation />
        <HandlesInformation />
        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;
