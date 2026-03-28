export default function ProgressBar({ currentStep, totalSteps = 5 }) {
  const width = `${(currentStep / totalSteps) * 100}%`;

  return (
    <div className="space-y-2">
      <p className="text-sm font-semibold text-brand">
        Step {currentStep} of {totalSteps}
      </p>
      <div className="h-1.5 w-32 overflow-hidden rounded-full bg-surfaceMuted">
        <div className="h-full rounded-full bg-brand" style={{ width }} />
      </div>
    </div>
  );
}
