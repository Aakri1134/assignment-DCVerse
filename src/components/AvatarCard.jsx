import defaultImage from "../assets/demoImage.jpg"

const AvatarCard = ({ className = "", imageURL = "" }) => {
  return (
    <div
      className={`h-[100%] w-96 bg-secondaryBackgroundColor ${className} border-2 border-black rounded-lg relative`}
    >
      <div className=" h-[25%] bg-backgroundColor"></div>
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
    </div>
  )
}

export default AvatarCard
