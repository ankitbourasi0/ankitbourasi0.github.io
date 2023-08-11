import { useEffect, useRef } from 'react';

const AdComponent = () => {
    const banner = useRef()
   const atOptions = {
	'key' : '69009e52dc685b7228ad44587f12faa3',
		'format' : 'iframe',
		'height' : 60,
		'width' : 468,
		'params' : {}
	};
  useEffect(() => {
    if(banner.current && !banner.current.firstChild){
        const conf = document.createElement('script')
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `//www.profitablecreativeformat.com/${atOptions.key}/invoke.js`
        conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`

        banner.current.append(conf)
        banner.current.append(script)
    }
  }, [banner]);

  

  return(
    
  <div className='mx-2 my-5  flex justify-center   items-center text-white text-center'>
      <div className="mx-2 my-5  flex justify-center   items-center text-white text-center" ref={banner}></div>
   <div className="mx-2 my-5  flex justify-center   items-center text-white text-center" ref={banner}></div>

  </div>  )
};
 
export default AdComponent;