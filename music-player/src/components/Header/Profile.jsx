import { AiOutlineSearch } from "react-icons/ai";
import profile from "../../assets/images/bg.jpg";

const Profile = () => {
   
  return (
    <div className="profile flex items-center sm:flex-col sm:items-start sm:px-4 sm:py-2 md:flex-row md:items-center">
      <AiOutlineSearch size={22} className="mt-[8px] sm:mb-3 sm:mr-0 md:mr-4" />

      <button className="bg-forthColor text-firstColor px-6 py-1.5 rounded-full mx-3 object-cover cursor-pointer sm:mx-0 sm:mb-3 md:mb-0 border-2 border-transparent hover:border-orange-300 transition-all duration-300 ease-in-out">
        Upload
      </button>

      <img
        src={profile}
        alt="Profile"
        className="w-10 h-10 bg-red-300 rounded-full sm:mb-3 md:mb-0 hover:border cursor-pointer border-transparent hover:border-orange-300 transition-all duration-300 ease-in-out"
      />
    </div>
  );
};

export default Profile;
