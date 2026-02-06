export default function Sandbox() {
  return (
    <div>
      <div>Sandboxx</div>

      <div className="grid grid-cols-3 gap-1">

        <div className="col-span-1">
          <div>label1</div>
          <div><input className="border border-blue-500 w-full"/></div>
        </div>

        <div>
          <div>label2</div>
          <div><input className="border border-blue-500 w-full"/></div>
        </div>

        <div>
          <div>label3</div>
          <div><input className="border border-blue-500 w-full"/></div>
        </div>

      </div>
    </div>
  )
}
