require('./config$');

function success() {
require('../..//app');
require('../..//pages/component/index');
require('../..//pages/component/brand/brand/brand');
require('../..//pages/component/brand/brandlist/brandlist');
require('../..//pages/component/informw/inform/inform');
require('../..//pages/component/informw/detail/detail');
require('../..//pages/component/me/me');
require('../..//pages/component/healthgoods/product/product');
require('../..//pages/component/healthgoods/gdetail/gdetail');
require('../..//pages/component/healthgoods/goodslist/goodslist');
require('../..//pages/component/liferoom/yst/yst');
require('../..//pages/component/shopc/scart/scart');
require('../..//pages/component/shopc/settle/settle');
require('../..//pages/component/shopc/editaddr/editaddr');
require('../..//pages/component/shopc/alipay/alipay');
require('../..//pages/component/shopc/paid/paid');
require('../..//pages/component/shopc/orderdetail/orderdetail');
require('../..//pages/component/shopc/chooseaddr/chooseaddr');
require('../..//pages/component/shopc/cleargoods/cleargoods');
require('../..//pages/component/about/about');
require('../..//pages/component/setaddr/setaddr');
require('../..//pages/component/myorder/order/order');
require('../..//pages/component/myorder/ordetail/ordetail');
require('../..//pages/component/rating/rating');
require('../..//pages/component/bind/bind');
require('../..//pages/component/search/search');
require('../..//pages/component/searchlist/searchlist');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
