import { useEffect, useRef } from 'react';

const AdScript = () => {
    const banner = useRef()
   const atOptions = {
		'key' : 'e6ad1de2865735043fef3bfb7a3eda26',
		'format' : 'iframe',
		'height' : 90,
		'width' : 728,
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
 
export default AdScript;