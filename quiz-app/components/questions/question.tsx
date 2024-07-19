import QuestionModel from "@/data/model/question";
import { View } from "react-native";
import Option from "./option";
import Statement from "./statement";

export interface QuestionProps {
  question: QuestionModel;
  selectedOption: (index: number) => void;
}

export default function Question(props: Readonly<QuestionProps>) {
  return (
    <View style={{ gap: 20 }}>
      <Statement statement={props.question.question} />
      <View style={{ gap: 15 }}>
        {props.question.options.map((option, index) => (
          <Option
            key={option}
            index={index}
            text={option}
            onPress={() => props.selectedOption(index)}
          />
        ))}
      </View>
    </View>
  );
}
