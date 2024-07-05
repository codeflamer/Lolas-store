import { useState } from 'react'
import * as riIcons from 'react-icons/ri'
import * as imIcons from 'react-icons/im'


function Warning(props) {
    const [toast, settoast] = useState(false);

    const closeToast = () => {
        settoast(true)
    }
    
  return (
    <>
        {!toast && (
            <div className='rounded bg-white fixed bottom-10 left-6 flex  xs:w-full sm:w-3/5 lg:w-2/5'>
                <div className='absolute bg-black inset-0 rounded blur-sm opacity-30'></div>
                <div className='flex bg-white relative p-3  items-center rounded' >
                    <div className="bg-warning w-2 mr-3 h-20"></div>
                    <div className='text-warning text-2xl pr-3 '>
                        <riIcons.RiErrorWarningFill/>
                    </div>
                    <div>
                        <p className='font-roboto font-bold text-input-border'>{props.warningMsg}</p>
                        <p className="text-zinc-500">{props.warningDetails}</p>
                    </div>
                    <div className='pr-3 text-input-borderKs'>
                        <imIcons.ImCross onClick={closeToast}/>
                    </div>
                </div>

            </div>)
        }
    </>
  )
}

export default Warning