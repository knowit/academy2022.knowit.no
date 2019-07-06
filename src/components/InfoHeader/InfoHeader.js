import React from "react";
import Icon from "../Icon";
import colors from "../../utils/colors";
import moment from "moment";
import "moment/locale/nb";
import css from "./InfoHeader.module.scss";

/**
 * Takes two strings with something that can be parsed to a date as input.
 * Returns a formatted string for use in the header.
 *
 * @param {*} from
 * @param {*} to
 */
const dateString = (from, to, confirmed = false) => {
  const startDate = moment(from);
  const endDate = moment(to);

  if (moment(startDate).isValid === false) {
    return "TBD";
  }

  if (confirmed === false) {
    return `${startDate.format("D MMM")} (ubekreftet)`;
  }

  let string = startDate.format("D MMM");
  if (endDate.isValid()) {
    string += ` - ${endDate.format("D MMM")}`;
  }
  string += ` ${startDate.format("YYYY")}`;

  return string;
};

/**
 * Returns the date field in the info header.
 *
 * @param {*} param0
 */
const Dates = ({ startDate, endDate, confirmed }) => {
  const style = confirmed
    ? { color: colors.knowit.green[0] }
    : { color: colors.knowit.red[0] };

  return (
    <div>
      <Icon style={style} name="date_range" />
      <span style={style} className={css.labels}>
        {dateString(startDate, endDate, confirmed)}
      </span>
    </div>
  );
};

const Teacher = ({ name }) => {
  return (
    <div>
      <Icon name="face" />
      <span className={css.labels}>{name}</span>
    </div>
  );
};

const Byline = ({ author, email }) => {
  if (!email) {
    email = "academy.knowit.no";
  }

  return (
    <>
      av <a href={`mailto:${email}`}>{author}</a>
    </>
  );
};

const Updated = ({ date, path, author, email }) => {
  let byline = !path.match(/\/courses/) ? (
    <Byline author={author} email={email} />
  ) : (
    ""
  );
  return (
    <div>
      <Icon name="access_time" />
      <span className={css.labels}>
        Oppdatert {moment(date).format("LL")} {byline}
      </span>
    </div>
  );
};

const Picture = ({ url }) => {
  // <img src={url} alt={`Lecturer is ${teacher}`} className={css.picture} />
  return (
    <div
      className={css.pictureWrapper}
      style={{
        backgroundImage: `url(${url})`,
        backgroundClip: "padding-box",
        backgroundPosition: "50% 30%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    />
  );
};

const Description = ({ description }) => {
  return <p className={css.description}>{description}</p>;
};

/**
 * Displays a header with the title and metadata about the workshop
 * @param {*} param0
 */
const InfoHeader = ({ data, showDescription }) => {
  const { frontmatter } = data;

  const confirmed = frontmatter.confirmed ? true : false;

  let dates = frontmatter.path.match(/\/courses/) ? (
    <Dates
      confirmed={confirmed}
      startDate={frontmatter.date}
      endDate={frontmatter.endDate}
    />
  ) : (
    ""
  );

  let teacher = frontmatter.path.match(/\/courses/) ? (
    <Teacher name={frontmatter.teacher} />
  ) : (
    ""
  );

  let picture = frontmatter.path.match(/\/courses/) ? (
    <Picture url={frontmatter.image} teacher={frontmatter.teacher} />
  ) : (
    ""
  );

  let description = showDescription ? (
    <Description description={frontmatter.description} />
  ) : (
    ""
  );

  return (
    <a
      href={frontmatter.path}
      key={frontmatter.path}
      className={css.infoHeaderLink}
    >
      <div className={css.infoHeader} key={frontmatter.path}>
        <div className={css.infoBox}>
          <h4>{frontmatter.title}</h4>
          <div className={css.byline}>
            {dates}
            {teacher}
            <Updated
              date={frontmatter.updated}
              path={frontmatter.path}
              author={frontmatter.author}
              email={frontmatter.email}
            />
          </div>
          {description}
        </div>
        {picture}
      </div>
    </a>
  );
};

export default InfoHeader;
