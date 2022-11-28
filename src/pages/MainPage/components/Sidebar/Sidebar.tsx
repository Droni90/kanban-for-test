import React, { memo } from "react";
import * as S from "./styles";
import { ReactComponent as Logo } from "../../../../assets/icons/logo.svg";
import { ReactComponent as DownIcon } from "../../../../assets/icons/down.svg";
import Avatar from "../../../../assets/images/Avatar.png";
import Input from "../../../../shared/ui/Input/Input";
import { SidebarOprions } from "./types";
import WorkspaceItem from "../WorkspaceItem/WorkspaceItem";

const Sidebar = memo(() => {
  const sidebarOptions: SidebarOprions = {
    Favorites: ["Marketing", "Mobile App"],
    "My Projects": [
      "Marketing",
      "Landing Pages",
      "Wedding",
      "Mobile App",
      "House Construction",
    ],
  };

  return (
    <S.Wrapper>
      <Logo />
      <S.MarginTop />
      <Input placeholder="Search..." />
      <WorkspaceItem avatar={Avatar} name="My workspace" />
      <S.SidebarMenu>
        {Object.keys(sidebarOptions).map((category) => {
          return (
            <React.Fragment key={category}>
              <S.Category>
                <DownIcon fill="#fff" />
                <S.CategoryItem>{category}</S.CategoryItem>
              </S.Category>
              {sidebarOptions[category].map((item) => (
                <S.SidebarLink key={item}>{item}</S.SidebarLink>
              ))}
            </React.Fragment>
          );
        })}
      </S.SidebarMenu>
    </S.Wrapper>
  );
});

export default Sidebar;
