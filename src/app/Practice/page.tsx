import Card from "@/app/Practice/_component/Card";

const Page = () => {
  return (
    <>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">在线刷题</h1>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">学而不思则罔，思而不学则殆</p>

              <div className="flex w-2/3 justify-center items-end mb-8 mt-4">
                <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                  <input type="text" id="hero-field" name="hero-field"
                         className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                         placeholder="搜索试题..."
                  />
                </div>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Search</button>
              </div>

            </div>


            <div className="flex flex-wrap -m-4">

              <Card
                image={"https://dummyimage.com/720x400"}
                category={"大学计算机基础"}
                title={"题库"}
                description={"大学生计算机基础课程的题库"}
                link={"Problem"}
                watch={12}
                comment={6} />

              <Card
                image={"https://dummyimage.com/720x400"}
                category={"CATEGORY"}
                title={"The Catalyzer"}
                description={"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."}
                link={""}
                watch={12}
                comment={6} />

              <Card
                image={"https://dummyimage.com/720x400"}
                category={"CATEGORY"}
                title={"The Catalyzer"}
                description={"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."}
                link={""}
                watch={12}
                comment={6} />

              <Card
                image={"https://dummyimage.com/720x400"}
                category={"CATEGORY"}
                title={"The Catalyzer"}
                description={"Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."}
                link={""}
                watch={12}
                comment={6} />

            </div>
          </div>
        </section>
      </div>
    </>
)
}

export default Page;