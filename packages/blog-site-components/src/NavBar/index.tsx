import React from "react";
import type { FC } from "react";
import './styles.less'
import classnames from 'classnames'
import { webSiteIcon } from "@/constants";
import { Card } from "..";
import { Link } from "react-router-dom";

export interface NavBarProps {
  /** 样式 */
  style?: React.CSSProperties, // string 支持识别 TypeScript 可选类型为非必选属性
  /** className */
  className?: string,

  navMenu?: { name: string, path: string }[]
}
const NavBar: FC<NavBarProps> = (props) => {
  const { style, className, navMenu = [] } = props
  const cls = classnames(className, 'nav-bar')
  return <Card className={cls} style={style}>
    <div className={'nav-bar-content'}>
      <div className="nav-bar-left">
        {webSiteIcon}
        zhao-huo-long's blog
      </div>
      <div className="nav-bar-menu">
        {
          navMenu.map(i => <Link to={i.path} key={i.path} className="nav-bar-menu-item">
            {i.name}
          </Link>)
        }
      </div>
    </div>
  </Card>
}

export default NavBar
