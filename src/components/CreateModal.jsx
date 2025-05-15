import { useState } from "react"
import { useGlobalContext } from "../context/GlobalContext"

const CreateModal = () => {
  const [firstName, setFirstName] = useState("")
  const [secondName, setSecondName] = useState("")
  const [imageURL, setImageURL] = useState("")

  const context = useGlobalContext()

  const handleSubmit = (e) => {
    console.log({
        firstName,
        secondName,
        imageURL
    })
    setImageURL("")
    setFirstName("")
    setSecondName("")

    context.successfulSubmission()
  }

  return (
    <div className=" absolute h-64 w-[22vw] min-w-96 bg-white right-2 lg:right-8 bottom-24 p-4 rounded-lg border-2 border-gray-300 shadow-lg ">
      <div className=" flex flex-col gap-8">
        <div>
          <h2>Enter Name</h2>
          <div className=" flex gap-2">
            <input
              placeholder="First Name"
              className=" h-10 w-[48%] border-2 border-gray-200 rounded-lg pl-2"
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
              value={firstName}
            />
            <input
              placeholder="Second Name"
              className=" h-10 w-[48%] border-2 border-gray-200 rounded-lg pl-2"
              onChange={(e) => {
                setSecondName(e.target.value)
              }}
              value={secondName}
            />
          </div>
        </div>
        <div>
          <h2 className=" font-sans font-semibold">Enter Avatar</h2>
          <input
            placeholder="Photo URL"
            className=" h-10 w-[98%] border-2 border-gray-200 rounded-lg pl-2"
            onChange={(e) => {
              setImageURL(e.target.value)
            }}
            value={imageURL}
          />
        </div>
        <div className=" w-full flex justify-end pr-4">
          <button className=" h-8 rounded-lg font-semibold font-mono bg-buttonColor text-white px-3 hover:bg-backgroundColor hover:text-black hover:scale-105 active:scale-95 transform transition duration-75" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateModal
