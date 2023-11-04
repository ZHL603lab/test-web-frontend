import {it} from "node:test";

const MultipleChoices = ({problem, selects}: {
  problem: string,
  selects: {
    id: string,
    text: string,
  }[],
}) => {
  return (
    <>
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">单选题</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{problem}</p>
      </div>

      <div className="flex flex-wrap -m-4">

        {
          selects.map((item) => {
            return (
              <>
                <div className="xl:w-1/3 md:w-1/2 p-4" key={item.id}>
                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{item.id}</h2>
                    <p className="leading-relaxed text-base">{item.text}</p>
                  </div>
                </div>
              </>
            )
          })
        }

      </div>
    </>
  )
}

export default MultipleChoices;