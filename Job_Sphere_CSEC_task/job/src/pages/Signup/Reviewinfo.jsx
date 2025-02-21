import { useSignupInfo } from "../../store/signupinfo";
import { useStepper } from "../../store/stepper";

export const Reviewinfo = () => {
  const { back } = useStepper();
  const { personalInformation, handleInformation } = useSignupInfo();

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-200 mt-15">
      <div className="border-b pb-3 mb-3">
        <h2 className="text-xl font-semibold text-[#0034D1]">Review Your Information</h2>
      </div>

      <div className="space-y-4">
        {/* Personal Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Personal Information</h3>
          <p className="text-gray-600">Name: <span className="font-medium">{personalInformation.firstName} {personalInformation.lastName}</span></p>
          <p className="text-gray-600">Email: <span className="font-medium">{personalInformation.email}</span></p>
          <p className="text-gray-600">Phone Number: <span className="font-medium">{personalInformation.phoneNumber}</span></p>
        </div>

        <hr className="border-gray-300" />

        {/* Handle Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Handle Information</h3>
          <p className="text-gray-600">LeetCode: <span className="font-medium">{handleInformation.leetcode}</span></p>
          <p className="text-gray-600">Codeforces: <span className="font-medium">{handleInformation.codeforce}</span></p>
          <p className="text-gray-600">GitHub: <span className="font-medium">{handleInformation.github}</span></p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col gap-2">
        <button
          onClick={back}
          className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition"
        >
          Go Back
        </button>
        <button
          onClick={() => alert("Submitted")}
          className="w-full bg-[#0034D1] text-white py-2 px-4 rounded-md hover:bg-[#0024A3] transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
