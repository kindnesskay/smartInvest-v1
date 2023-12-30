import { formattedNumber } from "@/tools/index,";

export default function Transaction({ amount, type, status, date }) {
  amount=formattedNumber(amount)
  return (
    <div className="flex justify-between border border-solid items-center border-blue-700 mt-2 px-2 py-4 rounded-xl w-full h-20 font-mono">
      <div>
        <p className="font-bold text-md">{type}</p>
        <p className="text-sm font-semibold text-gray-500">{date}</p>
      </div>
      <div>
        <p className={`font-bold text-md text-right px-21 ${type == "Withdrawal" ?'text-red-500':'text-green-500'}` }>
          {type == "Withdrawal" ? '-' + amount : '+' + amount }
        </p>
        <p
          className={`text-sm font-semibold ${
            status == "Approved" ? "text-green-500" : "text-red-500"
          }`}
        >
          {status}
        </p>
      </div>
    </div>
  );
}
