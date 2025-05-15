import { useState } from "react"
import CreateModal from "./CreateModal"

const CreateButton = () => {

    const [showModal, setShowModal] = useState(false)

    function toggleVisibility() {
      setShowModal(x => !x)
    }

  return (
    <div>
{(showModal)? <CreateModal toggleVisibility ={toggleVisibility}/>: null}
        
    <button 
    onClick={() => {setShowModal(x => !x)}}
    className="h-16 w-48 fixed bottom-5 right-5 z-50 bg-buttonColor text-white px-4 py-2 rounded-lg font-semibold text-lg shadow-lg hover:bg-secondaryBackgroundColor hover:text-textColor transition">
      Create New Avatar
    </button>
    </div>
  )
}

export default CreateButton
