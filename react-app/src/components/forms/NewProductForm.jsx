import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductThunk } from '../../store/products';

const inputClass = 'block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:h-12 sm:text-lg sm:leading-6'
const labelClass = 'block text-sm font-medium leading-10 text-gray-900 sm:mt-3 sm:ml-56 sm:pt-2'
const wrapperClass = 'flex rounded-md shadow-sm ring-1 ring-inset m-auto ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'
const buttonClass = "rounded-md bg-indigo-600 px-6 py-4 mx-7 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
const itemTypes = {
  '0' :{id: 1, label:'Select an item type', measurement: 'unit'}, 
  '1' :{id: 1, label:'Liquid (gal)', measurement: 'galon'}, 
  '2' :{id: 2, label:'Solid (lbs)', measurement: 'pound'}, 
  '3' :{id: 3, label:'Length (ft)', measurement:'foot'}, 
  '4' :{id: 4, label:'Misc (each)', measurement: 'unit'}
}


export default function NewProductForm() {
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: '',
    description: '',
    type: itemTypes['1'],
    sqft_per_unit: 0,
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({...prevProduct, [name]: value}));
  }

  const handleSubmit = (e) => {

    if (product.type === 0) return;

    const newProduct = {
      name: product.name,
      description: product.description,
      type: +product.type,
      sqft_per_unit: +product.sqft_per_unit,
    }

    dispatch(addProductThunk(newProduct));
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
                  value={product.description}
                  onChange={handleChange}
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
                  value={product.type.id}
                  onChange={handleChange}
                  autoComplete="type-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-full sm:text-sm sm:leading-6"
                >
                  {Object.values(itemTypes).map((option) => (
                    <option 
                      key={option.label}
                      value={option.id}
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
        <div 
          className={buttonClass}
          onClick={handleSubmit}
        >
          Add Product
        </div>
      </div>
    </form>
  )
}