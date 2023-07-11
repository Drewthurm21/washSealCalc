import { useEffect, useState } from "react";



export default function AreaCalc() {

  const [totalArea, setTotalArea] = useState(0);
  const [sections, setSections] = useState([{
    id: `${Date.now()}`,
    length: 0,
    width: 0,
  }]);

  const updateSection = (id, newSection) => {
    const newSections = sections.map((curSection) => {
      if (curSection.id === id) {
        return newSection;
      }
      return curSection;
    });
    setSections(newSections);
  }

  const addSection = () => {
    const newSections = [...sections];
    newSections.push({
      id: `${Date.now()}`,
      length: 0,
      width: 0,
    });
    setSections(newSections);
  }

  const closeSection = (id) => {
    const newSections = sections.filter((section) => section.id !== id);
    setSections(newSections);
  }

  useEffect(() => {
    const totalArea = sections.reduce((acc, section) => {
      return acc + (section.length * section.width);
    }, 0);
    setTotalArea(totalArea);
  }, [sections]);

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 rounded bg-indigo-400">
        <div className="flex flex-row justify-end cursor-pointer" onClick={addSection}>
          <div
            /> add section
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path d="M12 4v16m8-8H4" />
            </svg>
        </div>

        <div className="sm:mx-auto">
          <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
            Area calculator
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto font-bold flex flex-row">
          {sections.map((section, idx) => (
            <div key={idx} className="flex flex-col justify-center mx-12">
              <FormSection section={section} updateSection={updateSection} closeSection={closeSection} />
            </div>
          ))}
        </div>
          <p className="mt-10 text-center text-2xl text-black">
            Total area: {totalArea}
          </p>
      </div>
    </>
  )
}

function FormSection({ section, updateSection, closeSection}) {

  const handleUpdate = (e) => {
    const { name, value } = e.target;
    updateSection(section.id, { ...section, [name]: value });
  }

  return (
    <form className="space-y-6" action="#" method="POST">
      <div className='flex flex-row justify-end' onClick={() => closeSection(section.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    <div>
      <div className="flex items-center justify-center">
        <label htmlFor="length" className="block text-xl leading-6 text-gray-900">
          Length
        </label>
      </div>
      <div className="mt-2">
        <input
          id="length"
          name="length"
          type="number"
          value={section.length}
          onChange={handleUpdate}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
        />
      </div>
    </div>

    <div>
      <div className="flex items-center justify-center">
        <label htmlFor="width" className="block text-xl leading-6 text-gray-900">
          Width
        </label>
      </div>
      <div className="mt-2">
        <input
          id="width"
          name="width"
          type="number"
          value={section.width}
          onChange={handleUpdate}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
        />
      </div>
      <p className="mt-10 text-center text-2xl text-black">
          Section area: {section.length * section.width}
      </p>
    </div>
  </form>
  )

}