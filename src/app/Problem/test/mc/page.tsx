import MultipleChoices from "@/app/Problem/type/MultipleChoices";

const Page = () => {
  return (
    <>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-4">
              <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">1/10</h2>
            </div>

            <MultipleChoices
              problem={"SQL中DELETE的作用是（　　）。"}
              selects={[{
                id: 'A',
                text: '插入记录',
              }, {
                id: 'B',
                text: '删除记录',
              }]}
            />

            <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">提交</button>
          </div>
        </section>
      </div>
    </>
  )
}

export default Page;