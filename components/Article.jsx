import Markdown from "markdown-to-jsx";
import LoadingArticle from "@/components/LoadingArticle";
import Summary from "@/components/Summary";

function decodeUnicode(str) {
  if (typeof str !== "string") {
    return "";
  }
  return str.replace(/\\u([\d\w]{4})/gi, function (match, grp) {
    return String.fromCharCode(parseInt(grp, 16)) + "\n\n \n\n";
  });
}

export default function Article({
  data,
  isData,
  enchancedData,
  isLoading,
  textColor,
  fontSize,
}) {
  return (
    <div className="max-w-5xl mx-auto mt-5">
      {isLoading ? <LoadingArticle textColor={textColor} /> : null}
      {isData ? (
        <>
          <Markdown
            children={data.Title + "\n\n \n\n \n\n" + data.Author}
            style={{ color: textColor, fontSize: fontSize * 1.5 }}
            className="mb-4 text-xl mt-3 font-medium"
            options={{
              overrides: {
                p: {
                  props: {
                    className: "md-h1-spec",
                  },
                },
              },
            }}
          />
          <p
            style={{ color: textColor, fontSize: fontSize * 1 }}
            className="text-sm text-gray-500"
          >
            {data.Summary}
          </p>

          <div
            style={{ backgroundColor: textColor + "20" }}
            className="h-0.5 w-full my-4"
          />
          <Markdown
            children={decodeUnicode((data && data.Text) || "")}
            style={{ color: textColor, fontSize: fontSize + "px" }}
            options={{
              overrides: {
                h1: {
                  props: {
                    className: "md-h1",
                  },
                },
                h2: {
                  props: {
                    className: "md-h2",
                  },
                },
                h3: {
                  props: {
                    className: "md-h3",
                  },
                },
                p: {
                  props: {
                    className: "md-p",
                  },
                },
              },
            }}
          />
        </>
      ) : null}

      {data && data.Photo && (
        <img
          src={data.Photo}
          alt={data.Summary}
          className="w-full h-auto my-4 rounded-lg border"
        />
      )}

      {isData ? (
        <Summary data={data} textColor={textColor} fontSize={fontSize} />
      ) : null}
    </div>
  );
}
