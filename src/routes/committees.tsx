import { createFileRoute, redirect } from "@tanstack/react-router";

/** Stara putanja; preusmjerava na /organization (zadržava hash, npr. #venue). */
export const Route = createFileRoute("/committees")({
  beforeLoad: ({ location }) => {
    throw redirect({
      to: `/organization${location.hash ?? ""}`,
      replace: true,
    });
  },
});
