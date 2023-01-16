import { useDynamicSvgImport } from '_hooks/useDynamicSvgImport';

import './style.css';

interface IProps {
  iconName: string;
  size?: number;
  color?: string;
  svgProp?: React.SVGProps<SVGSVGElement>;
}

export default (props: IProps) => {
  const { iconName, size = 24,color, svgProp } = props;
  const { loading, SvgIcon } = useDynamicSvgImport(iconName);

  if(loading || !SvgIcon) return null;

  return (
    <div 
      className="icon-wrapper"
      style={{ width: size, height: size }}
    >
      <SvgIcon 
        {...svgProp}
        style={{ width: size, height: size, fill: color }}
      />
    </div>
  );


};
