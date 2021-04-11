/**
 * @async
 * @function fetchAll
 * @param {Array} requests - List of API, params and output Mappings
 * @return {Object} Response of all APIS merged in Object.
 */
export async function fetchAll(requests = []) {
  const reqs = requests.map(({ api, params, mapping }) =>
    api(params).then((result) => ({ [mapping]: result }))
  );
  return await Promise.all(reqs).reduce(
    (prev, current) => Object.assign({}, prev, current),
    {}
  );
}
