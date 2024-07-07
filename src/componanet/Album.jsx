import { useNavigate } from "react-router-dom";

const Album = ({ image, name, desc, id }) => {
  const niv = useNavigate();

  return (
    <div
      onClick={() => niv(`/album/${id}`)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm ">{desc}</p>
    </div>
  );
};

export default Album;