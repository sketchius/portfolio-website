import HtmlIcon from "../../public/assets/svg/html5.svg";
import CssIcon from "../../public/assets/svg/css3.svg";
import JavascriptIcon from "../../public/assets/svg/javascript.svg";
import ReactIcon from "../../public/assets/svg/react.svg";
import Checkmark from "../../public/assets/svg/checkmark.svg";
import Plus from "../../public/assets/svg/plus.svg";
import Chart from "../../public/assets/svg/chart.svg";
import Github from "../../public/assets/svg/github.svg";
import Linkedin from "../../public/assets/svg/linkedin.svg";
import Resume from "../../public/assets/svg/attach.svg";
import Node from "../../public/assets/svg/node.svg";
import Express from "../../public/assets/svg/express.svg";
import Mongo from "../../public/assets/svg/mongo.svg";
import Java from "../../public/assets/svg/java.svg";
import Illustrator from "../../public/assets/svg/illustrator.svg";
import Photoshop from "../../public/assets/svg/photoshop.svg";
import Resolve from "../../public/assets/svg/resolve.svg";
import Api from "../../public/assets/svg/api.svg";
import Code from "../../public/assets/svg/code.svg";
import Live from "../../public/assets/svg/live.svg";
import About from "../../public/assets/svg/about.svg";
import Next from "../../public/assets/svg/nextjs.svg";
import Vue from "../../public/assets/svg/vue.svg";
import Postgres from "../../public/assets/svg/postgres.svg";
import SpringBoot from "../../public/assets/svg/springboot.svg";

export const SvgImage = (props) => {
  let className = "svg-icon";

  if (props.small) {
    className = "svg-icon small";
  }

  switch (props.name) {
    case "html":
      return <HtmlIcon className={className} />;
    case "css":
      return <CssIcon className={className} />;
    case "javascript":
      return <JavascriptIcon className={className} />;
    case "react":
      return <ReactIcon className={className} />;
    case "checkmark":
      return <Checkmark className={className} />;
    case "plus":
      return <Plus className={className} />;
    case "chart":
      return <Chart className={className} />;
    case "github":
      return <Github className={className} />;
    case "linkedin":
      return <Linkedin className={className} />;
    case "resume":
      return <Resume className={className} />;
    case "node":
      return <Node className={className} />;
    case "express":
      return <Express className={className} />;
    case "mongo":
      return <Mongo className={className} />;
    case "java":
      return <Java className={className} />;
    case "illustrator":
      return <Illustrator className={className} />;
    case "photoshop":
      return <Photoshop className={className} />;
    case "resolve":
      return <Resolve className={className} />;
    case "api":
      return <Api className={className} />;
    case "code":
      return <Code className={className + " no-fill"} />;
    case "live":
      return <Live className={className + " no-fill"} />;
    case "about":
      return <About className={className + " no-fill"} />;
    case "next":
      return <Next className={className} />;
    case "vue":
      return <Vue className={className} />;
    case "postgres":
      return <Postgres className={className} />;
    case "spring":
      return <SpringBoot className={className} />;
    default:
      return <div>?</div>;
  }
};
