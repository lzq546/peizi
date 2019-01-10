import Vue from 'vue'
import Router from 'vue-router'
import index from '@/initial/index'
import Recharge from '@/initial/Recharge'
import Helpcenter from '@/initial/Helpcenter'
import Accountcenter from '@/initial/Accountcenter'
import Bond from '@/initial/Recharge/Bond'
import myrecharge from '@/initial/Recharge/myrecharge'
import Cash from '@/initial/Recharge/Cash'
import bankcar from '@/initial/Recharge/bankcar'
import day from '@/initial/Recharge/day'
import month from '@/initial/Recharge/month'
import experience from '@/initial/Recharge/experience'
import Rechargerule from '@/initial/Recharge/Rechargerule'
import Contractenquiry from '@/initial/Recharge/Contractenquiry'
import Mydata from '@/initial/Accountcenter/Mydata'
import Accountrecharge from '@/initial/Accountcenter/Accountrecharge'
import Accountcash from '@/initial/Accountcenter/Accountcash'
import Capital from '@/initial/Accountcenter/Capital'
import Administration from '@/initial/Accountcenter/Administration'
import surplus from '@/initial/Accountcenter/surplus'
import Password from '@/initial/Accountcenter/Password'
import statement from '@/initial/Helpcenter/statement'
import risk from '@/initial/Helpcenter/risk'
import rule from '@/initial/Helpcenter/rule'
import problem from '@/initial/Helpcenter/problem'
import Aboutus from '@/initial/Helpcenter/Aboutus'
import top from '@/components/top'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/index',
    name: 'index',
    component: index
  }, // 首页
  {
    path: '/Recharge',
    name: 'Recharge',
    component: Recharge,
    children: [
      {
        path: '/Bond',
        name: 'Bond',
        component: Bond
      },
      {
        path: '/myrecharge',
        name: 'myrecharge',
        component: myrecharge
      },
      {
        path: '/Cash',
        name: 'Cash',
        component: Cash
      },
      {
        path: '/bankcar',
        name: 'bankcar',
        component: bankcar
      },
      {
        path: '/day',
        name: 'day',
        component: day
      },
      {
        path: '/month',
        name: 'month',
        component: month
      },
      {
        path: '/experience',
        name: 'experience',
        component: experience
      },
      {
        path: '/Contractenquiry',
        name: 'Contractenquiry',
        component: Contractenquiry
      },
      {
        path: '/Rechargerule',
        name: 'Rechargerule',
        component: Rechargerule
      }
    ]
  }, // 充值
  {
    path: '/Accountcenter',
    name: 'Accountcenter',
    redirect: 'Mydata',
    component: Accountcenter,
    children: [
      {
        path: '/Mydata',
        name: 'Mydata',
        component: Mydata
      },
      {
        path: '/Accountrecharge',
        name: 'Accountrecharge',
        component: Accountrecharge
      },
      {
        path: '/Accountcash',
        name: 'Accountcash',
        component: Accountcash
      },
      {
        path: '/Capital',
        name: 'Capital',
        component: Capital
      },
      {
        path: '/Administration',
        name: 'Administration',
        component: Administration
      },
      {
        path: '/surplus',
        name: 'surplus',
        component: surplus
      },
      {
        path: '/Password',
        name: 'Password',
        component: Password
      }
    ]
  }, // 账户中心
  {
    path: '/Helpcenter',
    name: 'Helpcenter',
    redirect: 'statement',
    component: Helpcenter,
    children: [
      {
        path: '/statement',
        name: 'statement',
        component: statement
      },
      {
        path: '/risk',
        name: 'risk',
        component: risk
      },
      {
        path: '/rule',
        name: 'rule',
        component: rule
      },
      {
        path: '/problem',
        name: 'problem',
        component: problem
      },
      {
        path: '/Aboutus',
        name: 'Aboutus',
        component: Aboutus
      }
    ]
  }, // 帮助中心
  {
    path: '/',
    name: 'top',
    component: top
  }// 公用组件
  ]
})
