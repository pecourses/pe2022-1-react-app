import CONFIGS from './../configs';

function getUsers(options) {
  const defaultOptions = {
    page: 1,
    results: CONFIGS.RESULTS_COUNT,
    seed: CONFIGS.RESULTS_ORDER,
    inc: CONFIGS.INCLUDUNG_RESULTS,
  };

  const realOptions = {
    ...defaultOptions,
    ...options,
  };

  const { page, results, seed, inc } = realOptions;

  return fetch(
    `${CONFIGS.BASE_URL}?page=${page}&results=${results}&seed=${seed}&inc=${inc}`
  ).then(response => response.json());
}

export default getUsers;
