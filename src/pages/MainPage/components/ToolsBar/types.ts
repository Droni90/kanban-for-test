export interface ToolsBarOption  {
    value: string;
    Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    isActive?: boolean;
}