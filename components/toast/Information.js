import { useState } from 'react'
import * as aiIcons from 'react-icons/ai'
import * as imIcons from 'react-icons/im'


function Information(props) {
    const [toast, settoast] = useState(false);

    const closeToast = () => {
        settoast(true)
    }
    
  return (
    <>
        {!toast && (
            <div className='rounded bg-white fixed bottom-10 left-6 flex  xs:w-full sm:w-3/5 lg:w-2/5'>
                <div className='absolute bg-black inset-0 rounded blur-sm opacity-30' ></div>
                <div className='flex bg-white relative p-3  items-center rounded'>
                    <div className="bg-information w-2 mr-3 h-20"></div>
                    <div className='text-information text-2xl pr-3 '>
                        <aiIcons.AiFillInfoCircle/>
                    </div>
                    <div>
                        <p className='font-roboto font-bold text-input-border'>{props.infoMsg}</p>
                        <p className="text-zinc-500">{props.infoDetails}</p>
                    </div>
                    <div className='pr-3 text-input-border'>
                        <imIcons.ImCross onClick={closeToast}/>
                    </div>
                </div>

            </div>)
        }
    </>
  )
}

export default Information