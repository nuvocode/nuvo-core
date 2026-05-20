import { Github, Mail } from "lucide-react";
import { NcButton } from "@/components/primitives/Button";
import { NcInput } from "@/components/primitives/Input";
import { NcGlowOrb } from "@/components/composites/GlowOrb";
import { NcGridBackground } from "@/components/composites/GridBackground";
import { NcLogo } from "@/components/composites/Logo";

export function AuthExample() {
  return (
    <div className="relative h-full overflow-hidden rounded-[14px] border border-border bg-bg">
      <NcGridBackground className="relative h-full">
        <NcGlowOrb tone="purple" size={420} blur={90} intensity={0.13} style={{ top: "-10%", left: "-10%" }} />
        <NcGlowOrb tone="pink" size={360} blur={80} intensity={0.10} style={{ bottom: "-15%", right: "-10%" }} />

        <div className="relative grid h-full place-items-center px-6">
          <div className="w-full max-w-[380px]">
            <div className="mb-8 flex flex-col items-center text-center">
              <NcLogo size={36} className="mb-5" />
              <h1 className="text-[24px] font-semibold tracking-[-0.025em] text-fg">Sign in to Nuvo</h1>
              <p className="mt-1 text-[13px] text-fg-subtle">
                Continue with your work account or email.
              </p>
            </div>

            <div className="rounded-[14px] border border-border bg-surface-1 p-6 shadow-[var(--shadow-card)]">
              <div className="flex flex-col gap-2">
                <NcButton variant="secondary" className="w-full justify-center">
                  <Github size={14} /> Continue with GitHub
                </NcButton>
                <NcButton variant="outline" className="w-full justify-center">
                  <Mail size={14} /> Continue with Google
                </NcButton>
              </div>

              <div className="my-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-border-subtle" />
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-fg-faint">or email</span>
                <div className="h-px flex-1 bg-border-subtle" />
              </div>

              <form className="flex flex-col gap-2.5">
                <label className="flex flex-col gap-1.5">
                  <span className="text-[11.5px] text-fg-subtle">Email</span>
                  <NcInput type="email" placeholder="you@company.com" />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-[11.5px] text-fg-subtle">Password</span>
                  <NcInput type="password" placeholder="••••••••••••" />
                </label>
                <NcButton variant="primary" className="mt-2 w-full justify-center">
                  Sign in
                </NcButton>
              </form>
            </div>

            <p className="mt-5 text-center text-[11.5px] text-fg-faint">
              By signing in, you agree to our Terms and Privacy Policy.
            </p>
          </div>
        </div>
      </NcGridBackground>
    </div>
  );
}
