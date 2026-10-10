import PropTypes from "prop-types";
import Reveal from "./Reveal";

const SectionHeader = ({ index, eyebrow, title, intro }) => (
  <Reveal className="mb-12 max-w-2xl">
    <p className="eyebrow">
      <span className="text-muted">{index} /</span> {eyebrow}
    </p>
    <h2 className="section-title mt-3">{title}</h2>
    {intro && <p className="mt-4 text-muted leading-relaxed">{intro}</p>}
  </Reveal>
);

SectionHeader.propTypes = {
  index: PropTypes.string.isRequired,
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  intro: PropTypes.node,
};

export default SectionHeader;
