import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import cart from '@/page/cart'
import login from '@/page/login'
import forgot from '@/page/login/forgot'
import register from '@/page/register'

import member from '@/page/member'
import myOrder from '@/page/member/my-order'
import orderDetails from '@/page/member/order-details'
import myInquire from '@/page/member/my-inquire'
import customerReply from '@/page/member/customer-reply'
import myFavorite from '@/page/member/my-favorite'
import personalInfo from '@/page/member/personal-info'
import personalInfoEdit from '@/page/member/personal-info-edit'
import addrInfo from '@/page/member/addr-info'
import editShipping from '@/page/member/edit-shipping'
import editBilling from '@/page/member/edit-billing'
import changePassword from '@/page/member/change-password'

import about from '@/page/about'
import contact from '@/page/about/contact'
import abbreviations from '@/page/about/abbreviations'
import qualityManual from '@/page/about/quality-manual'
import service from '@/page/about/service'
import howToOrder from '@/page/about/how-to-order'
import molarity from '@/page/about/molarity'
import sitemap from '@/page/about/sitemap'
import inquireForm from '@/page/about/inquire-form'
import termsConditions from '@/page/about/terms-conditions'
import freightPolicy from '@/page/about/freight-policy'

import privacy from '@/page/privacy'
import identifyingInfo from '@/page/privacy/identifying-info'
import nonIdentifyingInfo from '@/page/privacy/non-identifying-info'
import webCookie from '@/page/privacy/web-cookie'
import useInfo from '@/page/privacy/use-info'
import shareInfo from '@/page/privacy/share-info'
import protectInfo from '@/page/privacy/protect-info'
import policyChange from '@/page/privacy/policy-change'
import acceptTerms from '@/page/privacy/accept-terms'
import contactUs from '@/page/privacy/contact-us'

import terminology from '@/page/terminology'



Vue.use(Router)
import { Navbar, TabItem } from 'mint-ui'

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
export default new Router({
  mode: 'history' ,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/cart',
      name: 'cart',
      component: cart
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/login/forgot',
      name: 'forgot',
      component: forgot
    },{
      path: '/register',
      name: 'register',
      component: register
    },{
      path: '/member',
      name: 'member',
      component: member
    },{
      path: '/member/myOrder',
      name: 'myOrder',
      component: myOrder
    },{
      path: '/member/myInquire',
      name: 'myInquire',
      component: myInquire
    },{
      path: '/member/orderDetails',
      name: 'orderDetails',
      component: orderDetails
    },{
      path: '/member/customerReply',
      name: 'customerReply',
      component: customerReply
    },{
      path: '/member/myFavorite',
      name: 'myFavorite',
      component: myFavorite
    },{
      path: '/member/personalInfo',
      name: 'personalInfo',
      component: personalInfo
    },{
      path: '/member/personalInfoEdit',
      name: 'personalInfoEdit',
      component: personalInfoEdit
    },{
      path: '/member/addrInfo',
      name: 'addrInfo',
      component: addrInfo
    },{
      path: '/member/editShipping',
      name: 'editShipping',
      component: editShipping
    },{
      path: '/member/editBilling',
      name: 'editBilling',
      component: editBilling
    },{
      path: '/member/changePassword',
      name: 'changePassword',
      component: changePassword
    },{
      path: '/about',
      name: 'about',
      component: about
    },{
      path: '/about/contact',
      name: 'contact',
      component: contact
    },{
      path: '/about/abbreviations',
      name: 'abbreviations',
      component: abbreviations
    },{
      path: '/about/qualityManual',
      name: 'qualityManual',
      component: qualityManual
    },{
      path: '/about/service',
      name: 'service',
      component: service
    },{
      path: '/about/howToOrder',
      name: 'howToOrder',
      component: howToOrder
    },{
      path: '/about/molarity',
      name: 'molarity',
      component: molarity
    },{
      path: '/about/sitemap',
      name: 'sitemap',
      component: sitemap
    },{
      path: '/about/inquireForm',
      name: 'inquireForm',
      component: inquireForm
    },{
      path: '/about/termsConditions',
      name: 'termsConditions',
      component: termsConditions
    },{
      path: '/about/freightPolicy',
      name: 'freightPolicy',
      component: freightPolicy
    },{
      path: '/privacy',
      name: 'privacy',
      component: privacy
    },{
      path: '/privacy/identifyingInfo',
      name: 'identifyingInfo',
      component: identifyingInfo
    },{
      path: '/privacy/nonIdentifyingInfo',
      name: 'nonIdentifyingInfo',
      component: nonIdentifyingInfo
    },{
      path: '/privacy/webCookie',
      name: 'webCookie',
      component: webCookie
    },{
      path: '/privacy/useInfo',
      name: 'useInfo',
      component: useInfo
    },{
      path: '/privacy/shareInfo',
      name: 'shareInfo',
      component: shareInfo
    },{
      path: '/privacy/protectInfo',
      name: 'protectInfo',
      component: protectInfo
    },{
      path: '/privacy/policyChange',
      name: 'policyChange',
      component: policyChange
    },{
      path: '/privacy/acceptTerms',
      name: 'acceptTerms',
      component: acceptTerms
    },{
      path: '/privacy/contactUs',
      name: 'contactUs',
      component: contactUs
    },{
      path: '/terminology',
      name: 'terminology',
      component: terminology
    }
  ],
  scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
  }
})
