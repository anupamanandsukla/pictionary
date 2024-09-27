import React from 'react'
// import { ImgCrossSVG } from '../../assest/svgs'

const Fileinput = (props) => {
  return (
    <div>
      {
        props?.title ? <div className='text-lightgray my-1 text-sm'>
        </div> :
          <div className='text-lightgray my-1 text-sm'>
            {props?.placeholder?.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}
          </div>
      }
      <div className="">

        {props?.valueimg ?
          <div className='bg-gray-50 border-2 border-dashed border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  
                    flex justify-center items-center relative h-28'>
            <img src={props?.valueimg} alt="Preview" className='h-20 rounded border border-gray-400' style={{ maxWidth: '100px' }} />
            <div className='relative -left-4 -top-8 cursor-pointer'
              name={props?.name}
              onClick={(e) => {
                props?.onChange(e, props?.name)
              }}
            >
              {/* <ImgCrossSVG /> */}
            </div>
          </div> : <div className='h-24 ' >


            <div className="flex items-center justify-center w-auto relative">
              <label htmlFor={props?.name} className="">

                <div className="flex items-center h-full">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clip-rule="evenodd" d="M8.59205 1.66898C8.81736 1.44367 9.18264 1.44367 9.40795 1.66898L13.2541 5.51513C13.4794 5.74043 13.4794 6.10572 13.2541 6.33102C13.0288 6.55633 12.6635 6.55633 12.4382 6.33102L9.57692 3.46974V11.3077C9.57692 11.6263 9.31863 11.8846 9 11.8846C8.68137 11.8846 8.42308 11.6263 8.42308 11.3077V3.46974L5.56179 6.33102C5.33649 6.55633 4.9712 6.55633 4.7459 6.33102C4.5206 6.10572 4.5206 5.74043 4.7459 5.51513L8.59205 1.66898ZM2.07692 10.7308C2.39555 10.7308 2.65385 10.9891 2.65385 11.3077V14.3846C2.65385 14.6396 2.75515 14.8842 2.93547 15.0645C3.1158 15.2448 3.36037 15.3462 3.61538 15.3462H14.3846C14.6396 15.3462 14.8842 15.2448 15.0645 15.0645C15.2448 14.8842 15.3462 14.6396 15.3462 14.3846V11.3077C15.3462 10.9891 15.6045 10.7308 15.9231 10.7308C16.2417 10.7308 16.5 10.9891 16.5 11.3077V14.3846C16.5 14.9457 16.2771 15.4837 15.8804 15.8804C15.4837 16.2771 14.9457 16.5 14.3846 16.5H3.61538C3.05435 16.5 2.51629 16.2771 2.11958 15.8804C1.72287 15.4837 1.5 14.9457 1.5 14.3846V11.3077C1.5 10.9891 1.7583 10.7308 2.07692 10.7308Z" fill="#151515" />
                  </svg>
                </div>
                <input
                  type="file"
                  className="hidden"
                  {...props}
                  name={props?.name}
                  id={props?.name}
                  accept={props?.accept || "image/*"}

                />
              </label>
            </div>
          </div>
        }

      </div>
    </div>
  )
}

export default Fileinput