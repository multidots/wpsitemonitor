export const SITE_URL = process.env.NODE_ENV === 'development' ? 'http://sitemap_wp.test/' : 'http://wpsitemonitor.md-staging.com';
//export const SITE_URL = 'http://sitemap_wp.test/';
export const ROW_PER_PAGE = 10;
export const TOKEN = localStorage.getItem('token');
export const DEFAULT_ERROR = "Something went Wrong";
