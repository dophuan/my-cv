const Footer = () => {
  return (
    <div className="footer p-12 bg-gray-800 fixed bottom-0 left-0 w-screen">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-start-1 col-span-2 bg-gray-400">1</div>
        <div className="col-start-3 col-span-1 bg-gray-500">2</div>
        <div className="col-start-4 col-span-1 bg-gray-500">2</div>
        <div className="col-start-1 col-span-4 bg-gray-600">4</div>
      </div>
    </div>
  )
}

export default Footer
