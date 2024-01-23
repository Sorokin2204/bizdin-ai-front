import moment from 'moment/moment';
import 'moment/locale/ru'; // without this line it didn't work
moment.locale('ru');
export const groupChatByMonth = (list) => {
  const listDateFormat = list?.map((item) => ({ ...item, created_at: moment(item?.created_at)?.format('YYYY-MM-DD') }));
  let groupKey = 0;
  let groups = listDateFormat.reduce(function (r, o) {
    var m = o.created_at.split('-')[1];
    r[m] ? r[m].list.push({ id: o?.id, label: o?.topic }) : (r[m] = { group: moment(o.created_at)?.format('MMMM'), list: [o]?.map((item) => ({ id: item?.id, label: item?.topic, favorite: !!item?.favorite })) });
    return r;
  }, {});
  groups = Object.keys(groups).map(function (k) {
    return groups[k];
  });
  return groups;
};
