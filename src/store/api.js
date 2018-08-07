import axios from 'axios';

export const getRecommend = async(options = {}) => {
  const params = {
    next_date: options.next_date,
    loc_id: options.loc_id || '108288',
    gender: options.gender,
    birthday: options.birthday,
    uuid: options.uuid || '9fcefbf2acf1dfc991054ac40ca5114be7cd092f',
    for_mobile: 1
  }

  const res = await axios.get('/rex_api/recommend_feed', {
    params
  });
  return res.data;
}

export const getSubCollection = async(subject) => {
  const params = {
    os: 'windows',
    start: 0,
    count: 8,
    loc_id: 0,
    _: 0
  }

  const res = await axios.get(`/rex_api/subject_collection/${subject}/items`, {
    params
  });

  return res.data;
}

export const getBook = async(id) => {
  const res = await axios.get(`/api/book/${id}`);
  return res.data;
}

export const getBookMarket = async(id) => {
  const res = await axios.get(`/rex_api/market/book/${id}?appVersion=4.18&ck=&for_mobile=1`);
  return res.data;
}

export const getElessar = async(id) => {
  const res = await axios.get(`/rex_api/elessar/subject/${id}`);
  return res.data;
}