'use strict';
import $ from 'jquery'

setTimeout(()=>{
  const classes = [
    'comment_box_h_main',
    'cm_cnt',
    'b-suggest-correction',
    'login-col',
    'b-tab-meta',
    't_comments',
    'stats',
    'b-player-panel',
    'b-player-fake-side',
    'js-survey-banner',
    'adv-sms-fixed--btn-round',
    'b-tpw-tools',
    'bdrunion.h-menu',
    'footer_wrp'
  ]
  classes.forEach((cl) => {
    $(`.${cl}`).remove()
  })
  $('.b.bdrunion')[0].remove()
},1000)

setInterval(()=>{
  $('#js-fake-page-container').remove()
  $('.ad-layer-start').remove()
}, 2000)
