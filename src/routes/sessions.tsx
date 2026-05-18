import { createFileRoute, redirect } from "@tanstack/react-router";

/** Merged into the main programme; old path preserved for bookmarks and links. */
export const Route = createFileRoute("/sessions")({
  beforeLoad: ({ location }) => {
    const hash = location.hash?.trim();
    throw redirect({
      to: `/program${hash && hash !== "#" ? hash : "#scientific-sessions"}`,
      replace: true,
    });
  },
});
