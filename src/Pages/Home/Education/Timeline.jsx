import { FaMagento, FaMarkdown } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  return (
    <div className=" bg-gray-300">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#12B788", color: "#000000" }}
          contentArrowStyle={{ borderRight: "7px solid  #12B788" }}
          date="2011 - present"
          iconStyle={{ background: "#12B788", color: "#fff" }}
          icon={<FaMagento />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#12B788", color: "#000000" }}
          contentArrowStyle={{ borderRight: "7px solid  #12B788" }}
          date="2010 - 2011"
          iconStyle={{ background: "#12B788", color: "#fff" }}
          icon={<FaMarkdown />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
