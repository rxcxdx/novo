export default function GridSimples() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-1">
        <div className="col-span-full sm:col-span-1">
          <div className="border border-pink-600">aaaaaaaaaaaaaaaaaaaaaaa</div>
        </div>
        <div>
          <div className="border border-blue-600">col-span-1</div>
        </div>
        <div>
          <div className="border border-orange-600">col-span-1</div>
        </div>
      </div>
    </div>
  )
}
