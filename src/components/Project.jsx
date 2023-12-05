
export default function Project(Props) {
  return (
    <>
      <div className="col text-center">
        <div className="text">
        {Props.title}
        </div>
        <br />
        <img src={Props.image} />
      </div>
    </>
  );
}