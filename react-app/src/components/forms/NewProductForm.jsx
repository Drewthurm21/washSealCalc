import { useState } from 'react'

const inputClass = 'block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:h-12 sm:text-lg sm:leading-6'
const labelClass = 'block text-sm font-medium leading-10 text-gray-900 sm:mt-3 sm:ml-56 sm:pt-2'
const wrapperClass = 'flex rounded-md shadow-sm ring-1 ring-inset m-auto ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'

const itemTypes = [
  {label:'Liquid (gal)', value: 1, measurement: 'galon'}, 
  {label:'Solid (lbs)', value: 2, measurement: 'pound'}, 
  {label:'Length (ft)', value: 3, measurement:'foot'}, 
  {label:'Misc (each)', value: 4, measurement: 'unit'}
]

export default function NewProductForm() {

  const [product, setProduct] = useState({
    name: '',
    description: '',
    type: itemTypes[0],
    sqft_per_unit: 0,
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'type') {
      const type = itemTypes.find((type) => type.value === parseInt(value))
      setProduct((prevProduct) => ({...prevProduct, type}))
      return
    }

    setProduct((prevProduct) => ({...prevProduct, [name]: value}))
  }


  return (
    <form className='mx-5'>
      <div className="space-y-12 sm:h-full sm:w-full">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Enter a New Product</h2>
        </div>
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Product Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Let's jot down some info about the product.</p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            
            <div className="col-span-full">
              <label htmlFor="name" className={labelClass}>
                Product Name:
              </label>
              <div className="mt-2">
                <div className={wrapperClass}>
                  <input
                    type="text"
                    name="name"
                    value={product.name}
                    id="name"
                    autoComplete="name"
                    className={inputClass}
                    placeholder="EZ-Tique Wash - Mocha..."
                    onChange={handleChange}

                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="description" className={labelClass}>
                Description:
              </label>
              <div className={wrapperClass}>
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  placeholder='"Include any specifics on this product..."'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-full sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
          

            <div className="col-span-full">
              <label htmlFor="type" className={labelClass}>
                Item Type:
              </label>
              <div className={wrapperClass}>
                <select
                  id="type"
                  name="type"
                  value={product.type.value}
                  onChange={handleChange}
                  autoComplete="type-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-full sm:text-sm sm:leading-6"
                >
                  {itemTypes.map((option) => (
                    <option 
                      key={option.label}
                      value={option.value}
                      >
                        {option.label}
                      </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="city" className={labelClass}>
                How many square feet does 1 {product.type.measurement} cover?
              </label>
              <div className={wrapperClass}>
              <input
                  id="sqft_per_unit"
                  name="sqft_per_unit"
                  type="number"
                  min={0}
                  max={10000}
                  className={inputClass}
                  value={product.sqft_per_unit}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-x-52">
        <button 
          type="button" 
          className="text-sm font-semibold leading-6 text-gray-900 mx-7"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-6 py-4 mx-7 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}