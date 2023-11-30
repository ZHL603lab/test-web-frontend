import Card from "@/app/(route)/practice/(route)/list/_component/Card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

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
                category={"计算机二级测试"}
                title={"计算机二级测试乱序随机抽题练习"}
                description={"随机抽取计算机二级测试中的题目来训练"}
                subjectId="001"
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