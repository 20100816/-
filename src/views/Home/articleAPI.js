import request from './request';
export const getaticleAPI = function(_page, _limit) {
    return request.get('/articles', {
        params: {
            _page: _page,
            _limit: _limit,
        }
    })
}