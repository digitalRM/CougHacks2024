export default function Summary({ data, textColor, fontSize }) {
  return (
    <div>
      <div
        style={{ backgroundColor: textColor + "20" }}
        className="h-0.5 w-full my-4"
      />

      <div className="flex flex-col gap-4 mt-4">
        <p
          style={{
            color: textColor,
            fontSize: fontSize * 1,
            whiteSpace: "pre-line",
          }}
          className=""
        >
          {data.Summary}
        </p>
      </div>
    </div>
  );
}
