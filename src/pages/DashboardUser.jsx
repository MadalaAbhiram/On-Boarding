export default function DashboardUser() {
  return (
    <main className="min-h-screen bg-primary px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-[28px] border border-stroke bg-surface p-8 shadow-soft">
          <p className="text-sm font-semibold text-brand">User Workspace</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-textMain">
            Personal dashboard
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-textSoft">
            A clean workspace for tasks, progress, and updates after onboarding.
          </p>
        </header>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <div className="panel-card">
            <p className="text-sm text-textSoft">Tasks</p>
            <p className="mt-4 text-3xl font-semibold text-textMain">07</p>
            <p className="mt-2 text-sm leading-6 text-textSoft">
              Open tasks assigned this week.
            </p>
          </div>
          <div className="panel-card">
            <p className="text-sm text-textSoft">Progress</p>
            <p className="mt-4 text-3xl font-semibold text-textMain">64%</p>
            <p className="mt-2 text-sm leading-6 text-textSoft">
              Weekly completion across your active work.
            </p>
          </div>
          <div className="panel-card">
            <p className="text-sm text-textSoft">Notifications</p>
            <p className="mt-4 text-3xl font-semibold text-textMain">03</p>
            <p className="mt-2 text-sm leading-6 text-textSoft">
              Recent updates waiting for review.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
