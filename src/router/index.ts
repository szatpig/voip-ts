import Loadable from 'react-loadable'
import DelayLoading from './../components/DelayLoading'

const Dashboard = Loadable({
    loader:()=>import(/* webpackChunkName: "dashboard" */ './../pages/main/home/dashboard'),
    loading:DelayLoading,
    delay:3000
});
const Converse = Loadable({
    loader:()=>import(/* webpackChunkName: "dashboard" */ '../pages/main/home/converse'),
    loading:DelayLoading,
    delay:3000
});
const Gateway = Loadable({
    loader:()=>import(/* webpackChunkName: "dashboard" */ '../pages/main/home/gateway'),
    loading:DelayLoading,
    delay:3000
});
const Route = Loadable({
    loader:()=>import(/* webpackChunkName: "dashboard" */ '../pages/main/home/route'),
    loading:DelayLoading,
    delay:3000
});
const HLR = Loadable({
    loader:()=>import(/* webpackChunkName: "dashboard" */ '../pages/main/home/hlr'),
    loading:DelayLoading,
    delay:3000
});

export default [{
    path:'/dashboard',
    component:Dashboard
},{
    path:'/converse',
    component:Converse
},{
    path:'/gateway',
    component:Gateway
},{
    path:'/route',
    component:Route
},{
    path:'/hlr',
    component:HLR
}]