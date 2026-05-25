"use client";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({
  reset,
}: ErrorProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <h1>
        Something went wrong
      </h1>

      <button onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}