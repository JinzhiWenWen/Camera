import Vue from 'vue'
import Router from 'vue-router'
import Zhu from '@/components/Zhu'
import Bottom from '@/components/Bottom'
import Home from '@/components/Home'
import Activity from '@/components/Activity'
import Find from '@/components/Find'
import My from '@/components/My'
import Preparation from '@/components/activitys/Preparation'
import Implement from '@/components/activitys/Implement'
import Follow from '@/components/activitys/Follow'
import Activitys from '@/components/activitys/Activitys'
import Basic from '@/components/Establish_activities/Basic'
import Address from '@/components/Establish_activities/Address'
import Title from '@/components/Establish_activities/Title'
import Next_step from '@/components/Establish_activities/Next_step' 
import Next_step2 from '@/components/Establish_activities/Next_step2'
import Next_step3 from '@/components/Establish_activities/Next_step3'
import Next_step4 from '@/components/Establish_activities/Next_step4'
import Search from '@/components/activity_search/Search'
import Sign_up from '@/components/sign_up/Sign_up'
import More_people from '@/components/sign_up/More_people'
import Map from '@/components/sign_up/Map'
import Evaluate from '@/components/sign_up/Evaluate'
import Sign_up_map from '@/components/sign_up/Sign_up_map'
import Organizer from '@/components/sign_up/sign_up_duty/Organizer'
import Supporter from '@/components/sign_up/sign_up_duty/Supporter'
import Participant from '@/components/sign_up/sign_up_duty/Participant'
import Initiator from '@/components/sign_up/sign_up_duty/Initiator'
import Super_player from '@/components/finds/Super_player'
import Schedule from '@/components/finds/Schedule'
import Consensus_node from '@/components/finds/Consensus_node'
import Attribute from '@/components/mays/Personal_information/Attribute'
import Card from '@/components/mays/Personal_information/Card'
import Head_portrait from '@/components/mays/Personal_information/Head_portrait'
import Nickname from '@/components/mays/Personal_information/Nickname'
import Personal_information from '@/components/mays/Personal_information/Personal_information'
import Personal_profile from '@/components/mays/Personal_information/Personal_profile'
import My_activities from '@/components/mays/my_activities/My_activities'
import Set_up from '@/components/mays/Set_up/Set_up'
import Wallet from '@/components/mays/wallet/Wallet'
import Warn from '@/components/mays/wallet/Warn'
import Recharge from '@/components/mays/wallet/Recharge'
import Modify from '@/components/mays/wallet/Modify'
import Email from '@/components/mays/Set_up/Email'
import ID from '@/components/mays/Set_up/ID'
import Living_thing from '@/components/mays/Set_up/Living_thing'
import Micro_blog from '@/components/mays/Set_up/Micro_blog'
import Phone from '@/components/mays/Set_up/Phone'
import QQ from '@/components/mays/Set_up/QQ'
import WeChat from '@/components/mays/Set_up/WeChat'
import Detailed from '@/components/home/Detailed'
import Exchange from '@/components/home/Exchange'
import Strategy from '@/components/home/Strategy'
import Register from '@/components/Register'
import Land from '@/components/Land'
import Player_details from '@/components/finds/Player_details'
import Mortgage from '@/components/mays/my_activities/Mortgage'
import Registration_information from '@/components/mays/my_activities/Registration_information'
import Toexamine from '@/components/mays/my_activities/Toexamine'
import Wallet_Detailed from '@/components/mays/wallet/Detailed'
// import {setStore,getStore} from '@/utill'
Vue.use(Router)

 const router= new Router({
 
  routes:[
      {
        path:'*',
        redirect:'/',
        component:Zhu
      },
      {
        path:'/Register',
        component:Register,
      },
      {
        path:'/Land',
        component:Land
      },
      {
        path:'/',
        component:Zhu,
        redirect:'/home',
        children:[
            {
              path:'/home',
              component:Home
            },
            {
              path:'/activity',
              component:Activity,
              children:[
                {
                  path:'/',
                  component:Preparation,
                },
                {
                  path:'/activity/preparation',
                  component:Preparation,
                },
                {
                  path:'/activity/implement',
                  component:Implement
                },
                {
                  path:'/activity/follow',
                  component:Follow
                },
                {
                  path:'/activity/activitys',
                  component:Activitys
                }
                
              ]
            },
            {
              path:'/find',
              component:Find,
              children:[
                
              ]
            },
            {
              path:'/my',
              component:My
            },
        ]
      },
     {
      path:'/basic',
      component:Basic,
    },
    {
      path:'/address',
      component:Address,
    },
    {
      path:'/title',
      component:Title,
    },
    {
      path:'/next_step',
      component:Next_step,
    },
    {
      path:'/next_step2',
      component:Next_step2,
    },
    {
      path:'/next_step3',
      component:Next_step3,
    },
    {
      path:'/next_step4',
      component:Next_step4,
    },
    {
      path:'/search',
      component:Search,
    },
    {
      path:'/sign_up',
      component:Sign_up,
    },
    {
      path:'/more_people',
      component:More_people
    },
    {
      path:'/map',
      component:Map,
    },
    {
      path:'/evaluate',
      component:Evaluate,
    },
    {
      path:'/sign_up_map',
      component:Sign_up_map,
    },
    {
      path:'/organizer',
      component:Organizer,
    },
    {
      path:'/Initiator',
      component:Initiator,
    },
    {
      path:'/supporter',
      component:Supporter,
    },
    {
      path:'/participant',
      component:Participant,
    },
    {
      path:'/find/super_player',
      component:Super_player
    },
    {
      path:'/find/schedule',
      component:Schedule
    },
    {
      path:'/find/consensus_node',
      component:Consensus_node
    },
    {
      path:'/attribute',
      component:Attribute
    },
    {
      path:'/card',
      component:Card
    },
    {
      path:'/Head_portrait',
      component:Head_portrait
    },
    {
      path:'/Nickname',
      component:Nickname
    },
    {
      path:'/Personal_information',
      component:Personal_information
    },
    {
      path:'/Personal_profile',
      component:Personal_profile 
    },
    {
      path:'/Wallet',
      component:Wallet 
    },
    {
      path:'/My_activities',
      component:My_activities 
    },
    {
      path:'/Set_up',
      component:Set_up 
    },
    {
      path:'/Warn',
      component:Warn 
    },
    {
      path:'/Recharge',
      component:Recharge 
    },
    {
      path:'/Modify',
      component:Modify 
    },
    {
      path:'/Email',
      component:Email 
    },
    {
      path:'/ID',
      component:ID 
    },
    {
      path:'/Living_thing',
      component:Living_thing 
    },
    {
      path:'/Micro_blog',
      component:Micro_blog 
    },
    {
      path:'/Phone',
      component:Phone 
    },
    {
      path:'/QQ',
      component:QQ 
    },
    {
      path:'/WeChat',
      component:WeChat 
    },
    {
      path:'/Strategy',
      component:Strategy 
    },
    {
      path:'/Exchange',
      component:Exchange 
    },
    {
      path:'/Detailed',
      component:Detailed 
    },
    {
      path:'/Player_details',
      component:Player_details
    },
    {
      path:'/Mortgage',
      component:Mortgage
    },
    {
      path:'/Registration_information',
      component:Registration_information
    },
    {
      path:'/Toexamine',
      component:Toexamine
    },
    {
      path:'/Wallet_Detailed',
      component:Wallet_Detailed
    }
  ]
})

export default router
// Router.beforeEach((to,from,next)=>{
//   const token=getStore('token')
//   if(token != 'undefined'){
//     next({ path: '/land', replace: true })
//   }else{
//     next({ path: '/register', replace: true })
//   }
// })
