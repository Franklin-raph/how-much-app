import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

const Bottomnav = () => {
  useEffect(() => {

  },[])
  const navigate = useNavigate()

  return (
    <div className='fixed bottom-0 bg-black w-full flex justify-center items-center'>
        <i className="ri-barcode-box-line text-3xl relative bg-white rounded-full" onClick={(e) => navigate('/scanproduct')}></i>
    </div>
  )
}

export default Bottomnav