import Question from "@/components/questions/question";
import Result from "@/components/questions/result";
import Logo from "@/components/template/logo";
import Page from "@/components/template/page";
import useQuestions from "@/data/hooks/useQuestions";
import { View } from "react-native";

export default function Index() {
  const { answers, finished, points, question, questionTotal, restart } =
    useQuestions();

  return (
    <Page>
      <View style={{ gap: 40 }}>
        <Logo />
        {finished ? (
          <Result
            points={points}
            questionTotal={questionTotal}
            restart={restart}
          />
        ) : (
          <Question question={question} selectedOption={answers} />
        )}
      </View>
    </Page>
  );
}
