export default function StepCard({
  title,
  desc,
  status,
  optional = false,
  onClick,
  clickable = false,
}) {
  const badgeClass =
    status === "complete"
      ? "bg-success text-white"
      : status === "active"
        ? "bg-brand text-white"
        : "bg-surface text-textSoft border border-stroke";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!clickable}
      className={`flex w-full gap-4 text-left ${
        clickable ? "cursor-pointer" : "cursor-default"
      }`}
    >
      <div className="flex flex-col items-center">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${badgeClass}`}
        >
          {status === "complete" ? "✓" : status === "active" ? "•" : "○"}
        </div>
        <div className="mt-2 min-h-10 w-px bg-stroke" />
      </div>

      <div className="pb-8">
        <p className="text-[15px] font-semibold text-textMain">
          {title}
          {optional ? (
            <span className="ml-1 text-sm font-normal text-textSoft">
              (optional)
            </span>
          ) : null}
        </p>
        <p className="mt-2 max-w-xs text-sm leading-6 text-textSoft">{desc}</p>
      </div>
    </button>
  );
}
