export default function InteriorTipPage() {
    const dummyData = {
      title: "테스트 타이틀",
      contents: "<p>테스트 컨텐츠</p><p>테스트</p><p></p>",
    };

    return (
        <>
            <section className="flex min-h-screen flex-col items-center p-10">
                <p className="text-5xl">{dummyData.title}</p>
              <div className="mt-16">
                <div dangerouslySetInnerHTML={{__html: dummyData.contents}}></div>
              </div>
              <div>
                <p>여기 다른 팁들 보여주면 됨.</p>
              </div>
            </section>
        </>
    )
}