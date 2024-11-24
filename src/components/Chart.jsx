import chartData from "../utils/data.json";

export default function Chart() {
  const maxAmount = Math.max(...chartData.map((bar) => bar.amount));
  const scaleFactor = 140 / maxAmount;
  return (
    <div className="flex flex-col gap-2 w-full py-6 border-b">
      <div className="flex items-end justify-between">
        {chartData.map((bar, index) => (
          <div key={index} className={`flex flex-col items-center gap-2`}>
            <div
              style={{ height: `${bar.amount * scaleFactor}px` }}
              className={`w-[30px] rounded-sm ${
                bar.day === "wed" ? "bg-primary-cyan" : "bg-primary-soft-red"
              } `}
            ></div>
            <span className="text-xs text-neutral-medium-brown font-light">
              {bar.day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
