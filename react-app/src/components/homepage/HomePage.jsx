import AreaCalc from "./AreaCalc";
const logoURL = "https://img1.wsimg.com/isteam/ip/58f5b0de-360c-4750-aed8-0e6e936245e2/WASH%20%26%20SEAL%20KC-9.png/:/rs=w:200,h:200,cg:true,m/cr=w:200,h:200/qt=q:95"

export default function HomePage() {

  return (
    <>
      <AreaCalc />
      <div>
        <img
          className="mx-auto h-30 w-auto"
          src={logoURL}
          alt="Workflow"
        />
      </div>
    </>
  )
}