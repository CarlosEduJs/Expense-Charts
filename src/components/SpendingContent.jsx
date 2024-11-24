import Chart from "./Chart";

const SpendingContent = () => {
  return (
    <div className="flex flex-col gap-2 justify-between bg-white max-sm:bg-neutral-very-pale-orange/90 px-6 py-4 rounded-xl">
      <h1 className="text-xl text-neutral-dark-brown font-bold">
        Spending - Last 7 days
      </h1>
      <Chart />
      <div className="py-4 flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-xs text-neutral-medium-brown">
            Total this months
          </h1>
          <h1 className="text-3xl text-neutral-dark-brown font-bold">
            $478.33
          </h1>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-xs font-bold text-neutral-dark-brown text-end">
            +2.4%
          </h1>
          <h1 className="text-xs text-neutral-medium-brown">from last month</h1>
        </div>
      </div>
    </div>
  );
};

export default SpendingContent;
