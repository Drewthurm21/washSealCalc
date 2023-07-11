import { useState } from 'react'

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
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Enter a New Product</h2>
          
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Product Information</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Let's jot down some info about the product.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Product Name:
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="name"
                    value={product.name}
                    id="name"
                    autoComplete="name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="EZ-Tique Wash - Mocha..."
                    onChange={handleChange}

                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Description:
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  placeholder='"This product is great for..."'
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
          

            <div className="sm:col-span-3">
              <label htmlFor="type" className="block text-sm font-medium leading-6 text-gray-900">
                Item Type:
              </label>
              <div className="mt-2">
                <select
                  id="type"
                  name="type"
                  value={product.type.value}
                  onChange={handleChange}
                  autoComplete="type-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
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

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                How many square feet does 1 {product.type.measurement} cover?
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}