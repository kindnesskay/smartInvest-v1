export default function AccountActions() {
  return (
    <div className="w-full flex h-12 gap-2 font-mono mt-4 text-white">
      <button className="w-1/2 h-full rounded-xl border border-solid text-blue-700 border-blue-700 hover:bg-blue-500 hover:text-white text-md font-bold">
        Withdraw
      </button>
      <button className="w-1/2 h-full rounded-xl border border-solid text-blue-700 border-blue-700 hover:bg-blue-500 hover:text-white text-md font-bold">
        Top Up
      </button>
    </div>
  );
}
