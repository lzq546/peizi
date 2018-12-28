import Vue from 'vue'
import Router from 'vue-router'
import start from '@/initial/start'
import login from '@/initial/login'
import register from '@/initial/register'
import index from '@/initial/index'
import recharge from '@/initial/recharge'
import transaction from '@/initial/transaction'
import my from '@/initial/my'
import Reset from '@/initial/Reset'
import foot from '@/components/foot'
import top from '@/components/top'
import topindex from '@/components/topindex'
import assets from '@/components/assets'
import transactionDownNav from '@/components/transactionDownNav'
import risk from '@/components/risk'
import Agreement from '@/components/Agreement'
import transaactionindex from '@/initial/transaction/transaactionindex'
import Purchases from '@/initial/transaction/Purchases'
import Sell from '@/initial/transaction/Sell'
import Chedan from '@/initial/transaction/Chedan'
import Position from '@/initial/transaction/Position'
import Transactionquery from '@/initial/transaction/Transactionquery'
import Transactionday from '@/initial/transaction/Transactionday'
import Entrustday from '@/initial/transaction/Entrustday'
import Transactionhistory from '@/initial/transaction/Transactionhistory'
import Entrusthistory from '@/initial/transaction/Entrusthistory'
import more from '@/initial/transaction/more'
import Onlinerecharge from '@/initial/recharge/Onlinerecharge'
import Offlinerecharge from '@/initial/recharge/Offlinerecharge'
import day from '@/initial/recharge/day'
import month from '@/initial/recharge/month'
import experience from '@/initial/recharge/experience'
import query from '@/initial/recharge/query'
import Additionalmargin from '@/initial/recharge/Additionalmargin'
import Additionalquota from '@/initial/recharge/Additionalquota'
import Reducingquota from '@/initial/recharge/Reducingquota'
import rule from '@/initial/index/rule'
import guide from '@/initial/index/guide'
import publicaddress from '@/initial/index/publicaddress'
import Messagecenter from '@/initial/my/Messagecenter'
import Consultation from '@/initial/my/Consultation'
import Mybankcard from '@/initial/my/Mybankcard'
import Addbankcard from '@/initial/my/Addbankcard'
import Cashwithdrawal from '@/initial/my/Cashwithdrawal'
import security from '@/initial/my/security'
import Capital from '@/initial/my/Capital'
import Administration from '@/initial/my/Administration'
import Settlement from '@/initial/my/Settlement'
import Invitation from '@/initial/my/Invitation'
import activity from '@/initial/my/activity'
import Apply from '@/initial/my/Apply'
import feedback from '@/initial/my/feedback'
import Helpcenter from '@/initial/my/Helpcenter'
import agent from '@/initial/my/agent'
import dialogue from '@/initial/my/dialogue'
import Myusers from '@/initial/my/Myusers'
import Rechargedetails from '@/initial/my/Rechargedetails'
import Presentationdetails from '@/initial/my/Presentationdetails'
import modify from '@/initial/my/modify'
import modifyCash from '@/initial/my/modifyCash'
import Commission from '@/initial/my/Commission'
import problem from '@/initial/my/problem'
import limit from '@/initial/my/limit'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'start',
    component: start
  },
  {
    path: '/start',
    name: 'start',
    component: start
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/Reset',
    name: 'Reset',
    component: Reset
  }, // 登录注册启动页
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/rule',
    name: 'rule',
    component: rule
  },
  {
    path: '/guide',
    name: 'guide',
    component: guide
  },
  {
    path: '/publicaddress',
    name: 'publicaddress',
    component: publicaddress
  }, // 首页
  {
    path: '/recharge',
    name: 'recharge',
    component: recharge
  },
  {
    path: '/Onlinerecharge',
    name: 'Onlinerecharge',
    component: Onlinerecharge
  },
  {
    path: '/Offlinerecharge',
    name: 'Offlinerecharge',
    component: Offlinerecharge
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
    path: '/query',
    name: 'query',
    component: query
  },
  {
    path: '/Additionalmargin',
    name: 'Additionalmargin',
    component: Additionalmargin
  },
  {
    path: '/Additionalquota',
    name: 'Additionalquota',
    component: Additionalquota
  },
  {
    path: '/Reducingquota',
    name: 'Reducingquota',
    component: Reducingquota
  }, // 充值
  {
    path: '/transaction',
    name: 'transaction',
    component: transaction
  },
  {
    path: '/transaactionindex',
    name: 'transaactionindex',
    component: transaactionindex,
    children: [
      {
        path: '/Purchases',
        name: 'Purchases',
        component: Purchases
      },
      {
        path: '/Sell',
        name: 'Sell',
        component: Sell
      },
      {
        path: '/Chedan',
        name: 'Chedan',
        component: Chedan
      },
      {
        path: '/Position',
        name: 'Position',
        component: Position
      },
      {
        path: '/Transactionquery',
        name: 'Transactionquery',
        component: Transactionquery
      }
    ]
  },
  {
    path: '/Transactionday',
    name: 'Transactionday',
    component: Transactionday
  },
  {
    path: '/Entrustday',
    name: 'Entrustday',
    component: Entrustday
  },
  {
    path: '/Transactionhistory',
    name: 'Transactionhistory',
    component: Transactionhistory
  },
  {
    path: '/Entrusthistory',
    name: 'Entrusthistory',
    component: Entrusthistory
  },
  {
    path: '/more',
    name: 'more',
    component: more
  }, // 交易
  {
    path: '/my',
    name: 'my',
    component: my
  },
  {
    path: '/Messagecenter',
    name: 'Messagecenter',
    component: Messagecenter
  },
  {
    path: '/Consultation',
    name: 'Consultation',
    component: Consultation
  },
  {
    path: '/Mybankcard',
    name: 'Mybankcard',
    component: Mybankcard
  },
  {
    path: '/Addbankcard',
    name: 'Addbankcard',
    component: Addbankcard
  },
  {
    path: '/Cashwithdrawal',
    name: 'Cashwithdrawal',
    component: Cashwithdrawal
  },
  {
    path: '/security',
    name: 'security',
    component: security
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
    path: '/Settlement',
    name: 'Settlement',
    component: Settlement
  },
  {
    path: '/Invitation',
    name: 'Invitation',
    component: Invitation
  },
  {
    path: '/activity',
    name: 'activity',
    component: activity
  },
  {
    path: '/Apply',
    name: 'Apply',
    component: Apply
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: feedback
  },
  {
    path: '/Helpcenter',
    name: 'Helpcenter',
    component: Helpcenter
  },
  {
    path: '/agent',
    name: 'agent',
    component: agent
  },
  {
    path: '/dialogue',
    name: 'dialogue',
    component: dialogue
  },
  {
    path: '/Myusers',
    name: 'Myusers',
    component: Myusers
  },
  {
    path: '/Rechargedetails',
    name: 'Rechargedetails',
    component: Rechargedetails
  },
  {
    path: '/Presentationdetails',
    name: 'Presentationdetails',
    component: Presentationdetails
  },
  {
    path: '/modify',
    name: 'modify',
    component: modify
  },
  {
    path: '/modifyCash',
    name: 'modifyCash',
    component: modifyCash
  },
  {
    path: '/Commission',
    name: 'Commission',
    component: Commission
  },
  {
    path: '/limit',
    name: 'limit',
    component: limit
  }, // 我的
  {
    path: '/transactionDownNav',
    name: 'transactionDownNav',
    component: transactionDownNav
  },
  {
    path: '/foot',
    name: 'foot',
    component: foot
  },
  {
    path: '/topindex',
    name: 'topindex',
    component: topindex
  },
  {
    path: '/top',
    name: 'top',
    component: top
  },
  {
    path: '/assets',
    name: 'assets',
    component: assets
  },
  {
    path: '/risk',
    name: 'risk',
    component: risk
  },
  {
    path: '/Agreement',
    name: 'Agreement',
    component: Agreement
  },
  {
    path: '/problem',
    name: 'problem',
    component: problem
  } // 公用组件
  ]
})
