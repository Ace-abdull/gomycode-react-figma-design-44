
export function Card({title, description}) {
  return (
   <div className="bg-gray-700 p-2 rounded-lg border-2 border-red-600 flex flex-col gap-2">
        <div> <img src="/star.png" alt="star" /> </div>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-base font-normal">
          {description}
        </p>
      </div>
  )
}
