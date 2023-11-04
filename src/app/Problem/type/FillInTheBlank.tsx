const FillInTheBlank = () => {
  return (
    <>
      <div>
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">填空题</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">在Windows中，路径一般分为相对路径与(   )路径</p>
        </div>
      </div>

      <div className="flex flex-wrap -m-4 align-middle">
        <div className="w-full text-center justify-center">
          <input type="text" placeholder={"请输入答案"}
                 className={"text-center outline-none leading-8 transition-colors duration-200 ease-in-out border-0 outline-0 decoration-2 decoration-gray-500 underline underline-offset-4 focus:decoration-blue-500 transform text-xl"}
          />
        </div>
      </div>
    </>
  )
}

export default FillInTheBlank;