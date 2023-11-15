import FillInTheBlank from "@/app/Problem/type/FillInTheBlank";

const Page = () => {
  return (
    <>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-4">
              <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">1/10</h2>
            </div>

            <FillInTheBlank problem={"在Windows中，路径一般分为相对路径与(   )路径"} />

            <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">提交</button>
          </div>
        </section>
      </div>
    </>
  )
}

export default Page;