import styled from "styled-components";

interface AvatarProps {
  width: string;
  height: string;
}
export const AvatarComponent = styled.img<AvatarProps>`
  width: ${({ width }) => (width ? width : "22px")};
  height: ${({ height }) => (height ? height : "22px")};
  object-fit: contain;
`;
