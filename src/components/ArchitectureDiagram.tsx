import type { Architecture } from "../data/projects";

export default function ArchitectureDiagram({ architecture }: { architecture: Architecture }) {
  const { layers, externalServices, note } = architecture;
  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-raised)] p-5 sm:p-7">
      <div className="mx-auto flex max-w-md flex-col items-stretch">
        {layers.map((layer, i) => (
          <div key={layer}>
            <div className="rounded-xl border border-[var(--color-border-strong)] bg-[var(--color-bg-card)] px-4 py-3.5 text-center">
              <p className="text-sm font-medium text-[var(--color-text)]">{layer}</p>
            </div>
            {i < layers.length - 1 && (
              <div className="flex justify-center py-1.5">
                <svg width="16" height="22" viewBox="0 0 16 22" fill="none" aria-hidden="true">
                  <path d="M8 0v18M2 13l6 6 6-6" stroke="#5eead4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        ))}

        {externalServices && externalServices.length > 0 && (
          <>
            <div className="flex justify-center py-1.5">
              <svg width="16" height="22" viewBox="0 0 16 22" fill="none" aria-hidden="true">
                <path d="M8 0v18M2 13l6 6 6-6" stroke="#5eead4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {externalServices.map((svc) => (
                <span
                  key={svc}
                  className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-3 py-2 font-mono text-xs text-[var(--color-text-dim)]"
                >
                  {svc}
                </span>
              ))}
            </div>
          </>
        )}
      </div>

      {note && <p className="mx-auto mt-6 max-w-lg text-center text-sm text-[var(--color-text-faint)]">{note}</p>}
    </div>
  );
}
