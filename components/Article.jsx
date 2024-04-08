import Markdown from 'markdown-to-jsx'
import LoadingArticle from "@/components/LoadingArticle";
import Summary from "@/components/Summary";

function decodeUnicode(str) {
  return str.replace(/\\u([\d\w]{4})/gi, function (match, grp) {
    return String.fromCharCode(parseInt(grp, 16)) + '\n\n';
  }
);
}

export default function Article({data, isData, enchancedData, isLoading, textColor, fontSize}){
  return (
    <div className="max-w-5xl mx-auto mt-5">
    {isLoading ? (<LoadingArticle textColor={textColor} />) : null}
    {isData ? (
      <>
        <Markdown
          children={data.Title + '\n\n \n\n' + data.Author}
          style={{ color: textColor, fontSize: fontSize *1.5}}
          className="mb-4 text-xl mt-3"
          options={{
            overrides: {
              p: {
                props: {
                  className: 'md-h1-spec',
                },
              },
            },
          }}
        />
        <div style={{ backgroundColor: textColor + "20" }} className="h-0.5 w-full my-4"/>
        <Markdown
          children={decodeUnicode(enchancedData)}
          style={{ color: textColor, fontSize: fontSize + 'px' }}
          options={{
            overrides: {
              h1: {
                props: {
                  className: 'md-h1',
                },
              },
              h2: {
                props: {
                  className: 'md-h2',
                },
              },
              h3: {
                props: {
                  className: 'md-h3',
                },
              },
              p: {
                props: {
                  className: 'md-p',
                },
              },
            },
          }}
        />
      </>
    ) : null}

    {isData ? (<Summary data={data} textColor={textColor} fontSize={fontSize} />): null}
  </div>
  )
}
