export default function DashboardAdmin() {
  return (
    <main className="min-h-screen bg-primary px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-[28px] border border-stroke bg-surface p-8 shadow-soft">
          <p className="text-sm font-semibold text-brand">Admin Workspace</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-textMain">
            Control dashboard
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-textSoft">
            A lighter admin view that matches the new onboarding experience.
          </p>
        </header>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="panel-card">
            <p className="text-sm text-textSoft">User Management</p>
            <p className="mt-4 text-3xl font-semibold text-textMain">128</p>
            <p className="mt-2 text-sm leading-6 text-textSoft">
              Active members in the workspace.
            </p>
          </div>
          <div className="panel-card">
            <p className="text-sm text-textSoft">Analytics</p>
            <p className="mt-4 text-3xl font-semibold text-textMain">82%</p>
            <p className="mt-2 text-sm leading-6 text-textSoft">
              System engagement this week.
            </p>
          </div>
          <div className="panel-card">
            <p className="text-sm text-textSoft">System Logs</p>
            <p className="mt-4 text-3xl font-semibold text-textMain">12</p>
            <p className="mt-2 text-sm leading-6 text-textSoft">
              Recent administrative events recorded.
            </p>
          </div>
          <div className="panel-card">
            <p className="text-sm text-textSoft">Controls</p>
            <p className="mt-4 text-3xl font-semibold text-textMain">04</p>
            <p className="mt-2 text-sm leading-6 text-textSoft">
              Core workspace settings available.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
