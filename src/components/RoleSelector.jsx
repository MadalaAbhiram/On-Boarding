const channels = [
  {
    id: "youtube",
    name: "YouTube",
    icon: "▶",
    iconClass: "bg-[#ff0000] text-white",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: "in",
    iconClass: "bg-[#0a66c2] text-white",
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: "◎",
    iconClass:
      "bg-[linear-gradient(135deg,#f9ce34,#ee2a7b,#6228d7)] text-white",
  },
  {
    id: "x",
    name: "X",
    icon: "X",
    iconClass: "bg-black text-white",
  },
];

export default function RoleSelector({
  selectedRole,
  selectedChannels,
  toggleChannel,
  search,
  setSearch,
  onBack,
  onSkip,
  onNext,
}) {
  const filteredChannels = channels.filter((channel) =>
    channel.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-6 border-b border-stroke">
          <button type="button" className="integration-tab integration-tab-active">
            Acme Co
          </button>
          <button type="button" className="integration-tab">
            Tesla Inc
          </button>
          <button type="button" className="integration-tab">
            Goop
          </button>
        </div>

        <div className="rounded-full border border-stroke bg-surfaceMuted p-1">
          <div className="rounded-full bg-brand px-4 py-2 text-sm text-white">
            {selectedRole === "admin" ? "Admin workspace" : "User workspace"}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-[14px] border border-stroke bg-surface px-4 py-3 text-textSoft">
        <span className="text-base">⌕</span>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search..."
          className="w-full border-0 bg-transparent text-sm outline-none placeholder:text-textSoft"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredChannels.map((channel) => {
          const isSelected = selectedChannels.includes(channel.id);

          return (
            <div
              key={channel.id}
              className={`rounded-[16px] border bg-surface p-4 transition ${
                isSelected ? "border-brand shadow-soft" : "border-stroke"
              }`}
            >
              <div
                className={`mb-4 flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold ${channel.iconClass}`}
              >
                {channel.icon}
              </div>
              <h3 className="text-xl font-semibold text-textMain">
                {channel.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-textSoft">
                Some descriptive text about this social channel
              </p>

              <div className="mt-5 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => toggleChannel(channel.id)}
                  className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition hover:bg-brandDark"
                >
                  {isSelected ? "Connected" : "Connect"}
                </button>
                <button type="button" className="text-sm font-medium text-textMain">
                  Learn how
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-medium text-textMain"
        >
          <span className="text-lg leading-none">‹</span>
          Back
        </button>

        <div className="flex items-center gap-3 self-end">
          <button type="button" onClick={onSkip} className="soft-button">
            Skip
          </button>
          <button type="button" onClick={onNext} className="primary-button">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
