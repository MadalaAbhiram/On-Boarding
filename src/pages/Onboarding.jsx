import { useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import RoleSelector from "../components/RoleSelector";
import ProgressBar from "../components/ProgressBar";

const steps = [
  {
    id: 1,
    title: "Personal information",
    desc: "Add your name, email, phone number, and password.",
  },
  {
    id: 2,
    title: "Your Choices",
    desc: "Choose your theme preference and tell us a bit about yourself.",
    optional: true,
  },
  {
    id: 3,
    title: "Setup Integrations",
    desc: "Connect social platforms for your selected workspace.",
    optional: true,
  },
  {
    id: 4,
    title: "Launch your personal Workspace",
    desc: "Review everything and launch the correct workspace.",
  },
];

const inputClass =
  "w-full rounded-[14px] border border-stroke bg-surface px-4 py-3 text-sm text-textMain outline-none transition placeholder:text-textSoft focus:border-brand";

export default function Onboarding({ setRole }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [maxUnlockedStep, setMaxUnlockedStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState("user");
  const [search, setSearch] = useState("");
  const [selectedChannels, setSelectedChannels] = useState([]);
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [choices, setChoices] = useState({
    theme: "light",
    bio: "",
  });
  const [launchReady, setLaunchReady] = useState(false);

  const title = useMemo(() => {
    if (currentStep === 1) return "Personal Information";
    if (currentStep === 2) return "Your Choices";
    if (currentStep === 3) return "Setup Integrations";
    return "Launch your personal Workspace";
  }, [currentStep]);

  const subtitle = useMemo(() => {
    if (currentStep === 1) {
      return "Please enter your basic details to begin the onboarding workflow.";
    }
    if (currentStep === 2) {
      return "Pick the theme you prefer and write a short bio to personalize the workspace.";
    }
    if (currentStep === 3) {
      return "Please select one or multiple social channels from available ones for each of the clients you’ve added before.";
    }
    return "Review your setup, choose the workspace mode, and launch when you are ready.";
  }, [currentStep]);

  function goToStep(stepId) {
    if (stepId <= maxUnlockedStep) {
      setCurrentStep(stepId);
    }
  }

  function unlockNextStep(stepId) {
    setMaxUnlockedStep((previous) => Math.max(previous, Math.min(stepId + 1, 4)));
    if (stepId < 4) {
      setCurrentStep(stepId + 1);
    }
  }

  function handlePersonalSubmit(event) {
    event.preventDefault();

    const { name, phone, email, password } = personalInfo;
    if (!name || !phone || !email || !password) return;

    unlockNextStep(1);
  }

  function handleChoicesSubmit(event) {
    event.preventDefault();

    if (!choices.bio.trim()) return;

    unlockNextStep(2);
  }

  function handleIntegrationNext() {
    unlockNextStep(3);
  }

  function handleLaunch(event) {
    event.preventDefault();
    if (!launchReady) return;
    setRole(selectedRole);
  }

  function toggleChannel(channelId) {
    setSelectedChannels((previous) =>
      previous.includes(channelId)
        ? previous.filter((id) => id !== channelId)
        : [...previous, channelId]
    );
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(79,124,255,0.12),_transparent_25%),linear-gradient(180deg,#f8fbff_0%,#edf4fb_100%)] p-4 sm:p-6">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto mb-3 w-fit rounded-b-2xl bg-white/70 px-8 py-2 text-sm text-textSoft shadow-sm">
          on boarding ui workflow project
        </div>

        <section className="glass-panel overflow-hidden">
          <div className="grid min-h-[760px] lg:grid-cols-[420px_1fr]">
            <Sidebar
              steps={steps}
              currentStep={currentStep}
              maxUnlockedStep={maxUnlockedStep}
              goToStep={goToStep}
            />

            <div className="bg-surface px-6 py-8 sm:px-8 lg:px-10">
              <div className="mx-auto flex h-full max-w-[560px] flex-col">
                <ProgressBar currentStep={currentStep} totalSteps={steps.length} />

                <div className="mt-6">
                  <h1 className="text-[38px] font-semibold tracking-[-0.05em] text-textMain sm:text-[42px]">
                    {title}
                    {currentStep >= 2 && currentStep <= 3 ? (
                      <span className="ml-2 text-2xl font-normal text-textSoft">
                        (optional)
                      </span>
                    ) : null}
                  </h1>
                  <p className="mt-4 text-lg leading-8 text-textSoft">
                    {subtitle}
                  </p>
                </div>

                <div className="mt-8 flex-1">
                  {currentStep === 1 ? (
                    <form className="space-y-5" onSubmit={handlePersonalSubmit}>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <input
                          className={inputClass}
                          type="text"
                          placeholder="Full name"
                          value={personalInfo.name}
                          onChange={(event) =>
                            setPersonalInfo((previous) => ({
                              ...previous,
                              name: event.target.value,
                            }))
                          }
                        />
                        <input
                          className={inputClass}
                          type="tel"
                          placeholder="Phone number"
                          value={personalInfo.phone}
                          onChange={(event) =>
                            setPersonalInfo((previous) => ({
                              ...previous,
                              phone: event.target.value,
                            }))
                          }
                        />
                      </div>
                      <input
                        className={inputClass}
                        type="email"
                        placeholder="Email address"
                        value={personalInfo.email}
                        onChange={(event) =>
                          setPersonalInfo((previous) => ({
                            ...previous,
                            email: event.target.value,
                          }))
                        }
                      />
                      <input
                        className={inputClass}
                        type="password"
                        placeholder="Password"
                        value={personalInfo.password}
                        onChange={(event) =>
                          setPersonalInfo((previous) => ({
                            ...previous,
                            password: event.target.value,
                          }))
                        }
                      />

                      <div className="flex justify-end pt-3">
                        <button type="submit" className="primary-button">
                          Next
                        </button>
                      </div>
                    </form>
                  ) : null}

                  {currentStep === 2 ? (
                    <form className="space-y-6" onSubmit={handleChoicesSubmit}>
                      <div>
                        <p className="mb-3 text-sm font-medium text-textMain">
                          Select your preferred theme
                        </p>
                        <div className="flex gap-3">
                          <button
                            type="button"
                            onClick={() =>
                              setChoices((previous) => ({
                                ...previous,
                                theme: "light",
                              }))
                            }
                            className={`rounded-full px-5 py-3 text-sm font-medium transition ${
                              choices.theme === "light"
                                ? "bg-brand text-white"
                                : "border border-stroke bg-surface text-textMain"
                            }`}
                          >
                            Light Mode
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setChoices((previous) => ({
                                ...previous,
                                theme: "dark",
                              }))
                            }
                            className={`rounded-full px-5 py-3 text-sm font-medium transition ${
                              choices.theme === "dark"
                                ? "bg-brand text-white"
                                : "border border-stroke bg-surface text-textMain"
                            }`}
                          >
                            Dark Mode
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="mb-3 block text-sm font-medium text-textMain">
                          Write about you
                        </label>
                        <textarea
                          className={`${inputClass} min-h-36 resize-none`}
                          placeholder="Write a short bio..."
                          value={choices.bio}
                          onChange={(event) =>
                            setChoices((previous) => ({
                              ...previous,
                              bio: event.target.value,
                            }))
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between pt-3">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="soft-button"
                        >
                          Back
                        </button>
                        <button type="submit" className="primary-button">
                          Next
                        </button>
                      </div>
                    </form>
                  ) : null}

                  {currentStep === 3 ? (
                    <RoleSelector
                      selectedRole={selectedRole}
                      selectedChannels={selectedChannels}
                      toggleChannel={toggleChannel}
                      search={search}
                      setSearch={setSearch}
                      onBack={() => setCurrentStep(2)}
                      onSkip={handleIntegrationNext}
                      onNext={handleIntegrationNext}
                    />
                  ) : null}

                  {currentStep === 4 ? (
                    <form className="space-y-6" onSubmit={handleLaunch}>
                      <div className="rounded-[18px] border border-stroke bg-surfaceMuted p-6">
                        <p className="text-sm font-medium text-textMain">
                          Workspace mode
                        </p>
                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                          <button
                            type="button"
                            onClick={() => setSelectedRole("user")}
                            className={`rounded-[16px] border px-4 py-4 text-left transition ${
                              selectedRole === "user"
                                ? "border-brand bg-white shadow-soft"
                                : "border-stroke bg-surface"
                            }`}
                          >
                            <p className="font-semibold text-textMain">
                              User Workspace
                            </p>
                            <p className="mt-2 text-sm leading-6 text-textSoft">
                              Open the personal dashboard for daily activity and
                              progress.
                            </p>
                          </button>
                          <button
                            type="button"
                            onClick={() => setSelectedRole("admin")}
                            className={`rounded-[16px] border px-4 py-4 text-left transition ${
                              selectedRole === "admin"
                                ? "border-brand bg-white shadow-soft"
                                : "border-stroke bg-surface"
                            }`}
                          >
                            <p className="font-semibold text-textMain">
                              Admin Workspace
                            </p>
                            <p className="mt-2 text-sm leading-6 text-textSoft">
                              Open the admin dashboard for control, analytics,
                              and workspace settings.
                            </p>
                          </button>
                        </div>
                      </div>

                      <div className="rounded-[18px] border border-stroke bg-surface p-5">
                        <p className="text-sm font-medium text-textMain">
                          Final checklist
                        </p>
                        <div className="mt-4 space-y-2 text-sm text-textSoft">
                          <p>Name added: {personalInfo.name || "Not filled"}</p>
                          <p>Theme selected: {choices.theme}</p>
                          <p>Channels connected: {selectedChannels.length}</p>
                        </div>

                        <label className="mt-5 flex items-start gap-3">
                          <input
                            type="checkbox"
                            checked={launchReady}
                            onChange={(event) =>
                              setLaunchReady(event.target.checked)
                            }
                            className="mt-1 h-4 w-4 rounded border-stroke"
                          />
                          <span className="text-sm leading-6 text-textSoft">
                            I have reviewed the onboarding data and I am ready
                            to launch the workspace.
                          </span>
                        </label>
                      </div>

                      <div className="flex items-center justify-between pt-3">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(3)}
                          className="soft-button"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className={`primary-button ${
                            !launchReady ? "cursor-not-allowed opacity-60" : ""
                          }`}
                        >
                          Launch Workspace
                        </button>
                      </div>
                    </form>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
