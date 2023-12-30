import { formattedNumber } from "@/tools/index,";

export default function Assets({ balance, profit, percentage }) {
  
  return (
    <div className="font-mono text-white w-full h-40 rounded-2xl p-4 bg-blue-700 flex flex-col justify-between">
      <div className=" flex flex-col gap-2 p-2">
        < p className="">Balance</p>
        <p className="text-2xl">{formattedNumber(balance)}</p>
      </div>
      <div className="flex justify-between p-2 items-center">
        <div >
          <p className="text-sm ">Monthly Profit</p>
          <p>{formattedNumber(profit)}</p>
        </div>
        <div className="bg-blue-300 w-12 h-8  flex items-center font-semibold rounded-2xl px-2">
          <p>{percentage}</p>
        </div>
      </div>
    </div>
  );
}
