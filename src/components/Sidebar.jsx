import StepCard from "./StepCard";

export default function Sidebar({ steps, currentStep, maxUnlockedStep, goToStep }) {
  return (
    <aside className="rounded-l-[28px] bg-surfaceMuted px-6 py-8 sm:px-8 lg:px-9">
      <div className="flex h-full flex-col">
        <div className="mb-10 flex h-11 w-11 items-center justify-center rounded-2xl border border-brand/20 bg-white text-brand shadow-sm">
          <span className="text-xl font-bold">UI</span>
        </div>

        <p className="mb-3 max-w-xs text-[17px] leading-7 text-textSoft">
          Complete the following steps to setup your profile and launch the
          workspace.
        </p>
        <p className="mb-10 text-sm font-medium text-textSoft">
          on boarding ui workflow project
        </p>

        <div>
          {steps.map((step) => (
            <StepCard
              key={step.id}
              title={step.title}
              desc={step.desc}
              optional={step.optional}
              status={
                step.id < currentStep
                  ? "complete"
                  : step.id === currentStep
                    ? "active"
                    : "upcoming"
              }
              clickable={step.id <= maxUnlockedStep}
              onClick={() => goToStep(step.id)}
            />
          ))}
        </div>

        <div className="mt-auto pt-6">
          <button type="button" className="soft-button px-4 py-2.5">
            <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-textMain text-xs text-white">
              ?
            </span>
            Help
          </button>
        </div>
      </div>
    </aside>
  );
}
