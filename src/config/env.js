/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: api地址
 * routerMode: 路由模式
 *
 */
let baseUrl;
let routerMode;
let imageUrl;

if (process.env.NODE_ENV == 'development') {
	// baseUrl = 'http://47.93.234.102:9001/lingxi-aquaculture-runtime-1.0';
	  // baseUrl = 'http://localhost:8080/lingxi-aquaculture-runtime';
	baseUrl = 'http://192.168.17.232:8080/lingxi-aquaculture-runtime';
	routerMode = 'hash'
	baseUrl = 'http://localhost:8080/lingxi-aquaculture-runtime-1.0';
	routerMode = 'hash';
	imageUrl = '';
}else{
	baseUrl = '/lingxi-aquaculture-runtime-1.0';
	//baseUrl = '/lingxi-aquaculture-runtime-1.0';
	// baseUrl = 'http://47.93.234.102:9001/lingxi-aquaculture-runtime-1.0';
	routerMode = 'hash'
	imageUrl = '/jgxxpt';
}

export {
	baseUrl,
	routerMode,
	imageUrl
}