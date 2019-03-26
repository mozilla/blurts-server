"use strict";

const lastAddedBreach = (options) => {
  const latestBreach = options.data.root.latestBreach;
  const result = [(options.fn(latestBreach, { breach : {itemIndex : 0} } ))];
  return result.join("");
};

module.exports = {
  lastAddedBreach,
};
