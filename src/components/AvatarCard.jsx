import defaultImage from "../assets/demoImage.jpg"
import Edit from "./Edit"

const AvatarCard = ({
  className = "",
  imageURL = "",
  firstName = "",
  lastName = "",
  id = "",
  description = "",
}) => {
  return (
    <div
      className={`h-[50dvh] w-[30dvh] min-w-80 lg:w-96 bg-secondaryBackgroundColor ${className} border-2 border-black rounded-xl relative`}
    >
      <div className=" h-[35%] bg-backgroundColor rounded-t-xl"></div>
      <div className="absolute left-1/2 top-[35%] transform -translate-x-1/2 -translate-y-1/2">
        {/* This container defines the circular shape and border */}
        <div className="h-64 w-64 rounded-full border-4 border-borderColor border-dashed overflow-hidden">
          {/* The image itself fills the circular container */}
          <img
            src={imageURL || defaultImage}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="h-[65%] pt-32 px-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold mt-4">
          {firstName} {lastName}
        </h2>
        <p className="text-gray-600 mt-2 text-center hidden lg:block">
          {description.length > 100
            ? description.substring(0, 100) + "..."
            : description}
        </p>
        <Edit />
      </div>
      
    </div>
  )
}

export default AvatarCard
