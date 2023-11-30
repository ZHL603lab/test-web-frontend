import FillInTheBlank from "@/app/(route)/practice/(route)/room/type/FillInTheBlank";
import { fetchQuestions } from "@/app/(route)/practice/(route)/room/(action)/fetchQuestions";
import MultipleChoices from "@/app/(route)/practice/(route)/room/type/MultipleChoices";
import { Question } from "@/types/questions.types";

export default async function Page({
  searchParams,
}: {
  searchParams: { subject_id: string };
}) {
  const subjectId = searchParams.subject_id;
  const data: Question[] = await fetchQuestions({
    subjectId,
    chapterId: "",
    num: 20,
    order: "random",
  });

  return (
    <>
      <div className="container mx-auto flex w-3/4 flex-col px-5">
        {data?.map((question: Question) => {
          let innerQuestion;
          if (question.type == "1") {
            innerQuestion = (
              <MultipleChoices key={question.uuid} question={question} />
            );
          } else if (question.type == "16") {
            innerQuestion = (
              <FillInTheBlank key={question.uuid} question={question} />
            );
          } else {
            innerQuestion = <div key={question.uuid}>暂不支持。</div>;
          }
          return <div className="my-2 py-2 w-2/3">{innerQuestion}</div>;
        })}
        <button className="mx-auto mt-16 flex rounded border-0 bg-indigo-500 px-8 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none">
          提交
        </button>
      </div>
      <div className=" fixed right-40 top-40">
        题目列表
      </div>
    </>
  );
}
