import Loadable from 'react-loadable'
import DelayLoading from './../components/DelayLoading'

const Home = Loadable({
    loader:()=>import(/* webpackChunkName: "Home" */ './../pages/main/home/dashboard'),
    loading:DelayLoading,
    delay:3000
});

export default [{
    path:'/home',
    component:Home
}]