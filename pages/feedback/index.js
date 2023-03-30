import { buildFeedbackPath, extractFeedback } from '../api/feedback/index';
import { Fragment, useState } from 'react';

export const FeedbackPage = (props) => {
  const [feedbackData, setfeedbackData] = useState();
  const loadFeedbackHandler = (id) => {
    fetch(`api/feedback/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setfeedbackData(data.feedback);
      });
  };
  return (
    <Fragment>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}
            {''}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>Show button</button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
};

export default FeedbackPage;
