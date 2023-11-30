import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import { Question } from "@/types/questions.types";

const FillInTheBlank = ({question}: {
  question: Question
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>填空题</CardTitle>
        <CardDescription>{question.body}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="-m-4 flex flex-wrap align-middle">
          <div className="w-full justify-center text-center">
            <input
              type="text"
              placeholder={"请输入答案"}
              className={
                "transform border-0 text-center text-xl leading-8 underline decoration-gray-500 decoration-2 underline-offset-4 outline-none outline-0 transition-colors duration-200 ease-in-out focus:decoration-blue-500"
              }
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default FillInTheBlank;