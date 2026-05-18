import { createFileRoute, redirect } from "@tanstack/react-router";

/** Alternate spelling / bookmarks → main programme page. */
export const Route = createFileRoute("/programm")({
  beforeLoad: ({ location }) => {
    throw redirect({
      to: `/program${location.hash ?? ""}`,
      replace: true,
    });
  },
});
