import styled from "styled-components";

interface TaskItemComponentProps {
  color?: string;
  isCompleted?: boolean;
  opacity?: number;
}
export const TaskItemComponent = styled.div<TaskItemComponentProps>`
  width: 270px;
  box-sizing: border-box;
  min: 70px;
  padding: 15px;
  background: ${({ color, isCompleted }) => {
    if (isCompleted) {
      return "#F0F0F0";
    }
    return color ? color : "#fff";
  }};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
`;

interface TextProps {
  isCompleted?: boolean;
}
export const Text = styled.p<TextProps>`
  font-size: 14px;
  line-height: 16px;
  color: ${({ isCompleted }) => (isCompleted ? "#A5A5A5" : "#222")};
  margin: 0 0 2px 0;
  text-decoration-line: ${({ isCompleted }) =>
    isCompleted ? "line-through" : "none"};
`;

interface TimeProps {
  color?: string;
  isCompleted?: boolean;
}
export const Time = styled.p<TimeProps>`
  font-size: 13px;
  line-height: 15px;
  margin: 0;
  color: ${({ color, isCompleted }) => {
    if (isCompleted) {
      return "#A5A5A5";
    }
    return color ? color : "#222";
  }};
`;
