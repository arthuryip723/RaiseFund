export const selectBench = ({ campaigns }, id) => campaigns[id] || {};

export const asArray = ({ campaigns }) => Object.keys(campaigns).map(key => campaigns[key]);
