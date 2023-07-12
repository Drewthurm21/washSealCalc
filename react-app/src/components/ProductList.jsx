import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getProductsThunk } from "../store/products"


export default function ProductList() {
  const dispatch = useDispatch()

  const products = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(getProductsThunk())
  }, [dispatch])



  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md mx-5 p-20">
      
    <ul role="list" className="divide-y divide-gray-100">
    {Object.values(products).map((product) => (
      <li key={product.name} className="flex justify-between gap-x-6 py-5">
        <div className="flex gap-x-4">
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">{product.name}</p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{product.description}</p>
          </div>
        </div>
        <div className="hidden sm:flex sm:flex-col sm:items-end">
          <p className="text-sm leading-6 text-gray-900">Quantity on hand:</p>
            <div className="mt-1 flex items-center gap-x-1.5">
              <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                {
                  product.quantity_on_hand > 0 ?
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  :
                <div className="h-1.5 w-1.5 rounded-full bg-red-500" />
                }
              </div>
              <p className="text-xs leading-5 text-gray-500">{product.quantity_on_hand} {product.type.measurement_unit_abbreviation}</p>
            </div>
        </div>
      </li>
    ))}
  </ul>
  </div>
  )
}