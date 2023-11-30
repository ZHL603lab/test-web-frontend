import {it} from "node:test";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import { Question } from "@/types/questions.types";

const MultipleChoices = ({question}: {question: Question}) => {
  console.log(question);
  const problem = question.body;
  const selects = question.selects;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>单选题 {question.uuid}</CardTitle>
        <CardDescription>{problem}</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue="option-a">
        {
          selects?.map((item) => {
            const select_id = question.uuid + item.id;
            return (
              <div className="flex items-center space-x-2" key={select_id}>
                <RadioGroupItem value={select_id} id={select_id} />
                <Label
                  htmlFor={select_id}
                  className=" leading-5 hover:cursor-pointer hover:text-gray-400 transition duration-300 ease-in-out"
                >
                  {item.id}. {item.text}
                </Label>
              </div>
            );
          })
        }
        </RadioGroup>
      </CardContent>
    </Card>
  )
}

export default MultipleChoices;