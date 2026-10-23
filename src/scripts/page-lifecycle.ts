/** Rebind page controls after an Astro swap, disposing the outgoing page first. */
export function onPageLoad(
  setup: (signal: AbortSignal) => void | (() => void),
) {
  let controller: AbortController | undefined;
  let dispose: void | (() => void);
  function cleanup() {
    controller?.abort();
    dispose?.();
    dispose = undefined;
  }
  document.addEventListener("astro:before-swap", cleanup);
  document.addEventListener("astro:page-load", () => {
    cleanup();
    controller = new AbortController();
    dispose = setup(controller.signal);
  });
}
