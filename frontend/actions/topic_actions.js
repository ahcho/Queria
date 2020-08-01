import * as ApiUtil from '../util/topic_api_util';
import { RECEIVE_ALL_ANSWERS, RECEIVE_ANSWER } from './answer_actions';
import { RECEIVE_ALL_TOPICS } from './topic_actions';

export const RECEIVE_ALL_TOPICS = 'RECEIVE_ALL_TOPICS';
export const RECEIVE_ALL_TOPIC = 'RECEIVE_ALL_TOPIC';

const receiveTopics = (topics) => {
    return ({
        type: RECEIVE_ALL_TOPICS,
        topics: topics,
    })
};

const receiveTopic = (payload) => {
    return ({
        type: RECEIVE_TOPIC,
        payload: payload,
    })
}

export const fetchTopics = () => dispatch => {
    return TopicApiUtil.fetchTopics().then(
        (topics) => dispatch(receiveTopics(topics))
    )
};

export const fetchTopic = (id) => dispatch => {
    return TopicApiUtil.fetchTopic(id).then(
        (payload) => dispatch(receiveTopic(payload))
    )
};