import { useEffect, useState } from "react";


export default function AreaCalc() {

  const [area, setArea] = useState({
    length: 0,
    width: 0
  });

  useEffect(() => {
    console.log(area);
  }, [area]);


  return (
    <div className="container bg-slate-100 justify-center text-4xl">
      
        <div className="m-12">
          <h2>Area Calculator</h2>
          <p>Enter the length and width.</p>
        </div>
      
        <div className="m-12 columns-2 w-1/2">
          <form>
          <div className="form-group before:">
              <label htmlFor="width">Length</label>
              <input
                type="number"
                name="length"
                id="length"
                autoComplete="length"
                className="block text-xl flex-1 border-0 bg-white py-1.5 pl-1 number-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="enter length"
                onChange={(e) => setArea({ ...area, length: e.target.value })}
              />
            </div>
            <div className="form-group before:">
              <label htmlFor="width">Width</label>
              <input
                type="text"
                name="width"
                id="width"
                autoComplete="width"
                className="block text-xl flex-1 border-0 bg-white py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="enter width"
                onChange={(e) => setArea({ ...area, width: e.target.value })}
              />
            </div>
          </form>
        </div>
          <div className="m-12">
              <h3>Area: {area.length * area.width} sqft</h3>
          </div>
      
    </div>
  )
}