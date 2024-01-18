import "./Cube.css";

export default function Cube({images, number, drop}) {
  number = number || 0
  return (
    <div className="Cube">
      <img
        className="Cube__image"
        src={images[number]}
      />
      <div >
        <button className="Button" onClick={drop}>Drop</button>
      </div>
    </div>
  )
}