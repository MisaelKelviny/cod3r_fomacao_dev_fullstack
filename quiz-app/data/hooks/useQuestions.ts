import { useState } from "react";
import questions from "../contants/questions";
import QuestionModel from "../model/question";

export default function useQuestions() {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [answer, setAnswer] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel[]>(sortQuestion());

  function sortQuestion(): QuestionModel[] {
    const sortingQuestion = [...questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 10);

    return sortingQuestion;
  }

  return {
    get question() {
      return question[questionIndex];
    },
    get points() {
      return question
        .map((q) => q.answer)
        .map((r, i) => r === answer[i])
        .filter(Boolean).length;
    },
    get questionTotal() {
      return question.length;
    },
    get finished() {
      return questionIndex === question.length;
    },
    answers(answered: number) {
      setAnswer([...answer, answered]);
      setQuestionIndex(questionIndex + 1);
    },
    restart() {
      setQuestionIndex(0);
      setAnswer([]);
      setQuestion(sortQuestion());
    },
  };
}
