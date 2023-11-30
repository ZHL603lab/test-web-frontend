import {z} from "zod";
import {unstable_noStore} from "next/cache";

const QuestionSchema = z.object({
  subjectId: z.string(),
  chapterId: z.string(),
  num: z.coerce.number(),
  order: z.enum(['random', ''])
})

const FetchQuestions = QuestionSchema.omit({
})

export async function fetchQuestions( parmars : {
  subjectId: string,
  chapterId: string,
  num: number,
  order: string,
}) {

  unstable_noStore();

  const {subjectId, chapterId, num, order} = FetchQuestions.parse({
    subjectId: parmars.subjectId,
    chapterId: parmars.chapterId,
    num: parmars.num,
    order: parmars.order
  })

  var searchParmars = new URLSearchParams();
  searchParmars.append("subject_id", subjectId);
  searchParmars.append("chapter_id", chapterId);
  searchParmars.append("num", num.toString());
  searchParmars.append("order", order);

  const APIURL = "http://0.0.0.0:3001/questions";
  const fetchURL = APIURL + "?" + searchParmars.toString();

  const res = await fetch(fetchURL, {
    method: "GET",
  })
  const data = await res.json();
  return data;
}