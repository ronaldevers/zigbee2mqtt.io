"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[75305],{30372:(e,i,t)=>{t.r(i),t.d(i,{comp:()=>m,data:()=>v});var n=t(57305);const a=(0,n.Lk)("h1",{id:"tuya-rt-zcz03z",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#tuya-rt-zcz03z"},[(0,n.Lk)("span",null,"Tuya RT_ZCZ03Z")])],-1),c=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1),o=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"RT_ZCZ03Z")],-1),d=(0,n.Lk)("td",null,"Vendor",-1),s=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Human presence sensor 24G")],-1),l=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"illuminance_lux, presence, detection_distance_max, detection_distance_min, target_distance, fading_time, presence_sensitivity, indicator, linkquality")],-1),u=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/RT_ZCZ03Z.png",alt:"Tuya RT_ZCZ03Z"})])],-1),r=(0,n.Lk)("h2",{id:"options",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#options"},[(0,n.Lk)("span",null,"Options")])],-1),h=(0,n.Fv)('<ul><li><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric"><span>Illuminance (lux) (numeric)</span></a></h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary"><span>Presence (binary)</span></a></h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="detection-distance-max-numeric" tabindex="-1"><a class="header-anchor" href="#detection-distance-max-numeric"><span>Detection distance max (numeric)</span></a></h3><p>Max detection distance. Value can be found in the published state on the <code>detection_distance_max</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_distance_max&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>840</code>. The unit of this value is <code>cm</code>.</p><h3 id="detection-distance-min-numeric" tabindex="-1"><a class="header-anchor" href="#detection-distance-min-numeric"><span>Detection distance min (numeric)</span></a></h3><p>Min detection distance. Value can be found in the published state on the <code>detection_distance_min</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_distance_min&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>840</code>. The unit of this value is <code>cm</code>.</p><h3 id="target-distance-numeric" tabindex="-1"><a class="header-anchor" href="#target-distance-numeric"><span>Target distance (numeric)</span></a></h3><p>Distance to target. Value can be found in the published state on the <code>target_distance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>cm</code>.</p><h3 id="fading-time-numeric" tabindex="-1"><a class="header-anchor" href="#fading-time-numeric"><span>Fading time (numeric)</span></a></h3><p>Delay time. Value can be found in the published state on the <code>fading_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fading_time&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>59</code>. The unit of this value is <code>s</code>.</p><h3 id="presence-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#presence-sensitivity-numeric"><span>Presence sensitivity (numeric)</span></a></h3><p>Presence sensitivity. Value can be found in the published state on the <code>presence_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;presence_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>10</code>.</p><h3 id="indicator-binary" tabindex="-1"><a class="header-anchor" href="#indicator-binary"><span>Indicator (binary)</span></a></h3><p>LED Indicator. Value can be found in the published state on the <code>indicator</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> indicator is ON, if <code>OFF</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',20),p={},m=(0,t(36920).A)(p,[["render",function(e,i){const t=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[a,(0,n.Lk)("table",null,[c,(0,n.Lk)("tbody",null,[o,(0,n.Lk)("tr",null,[d,(0,n.Lk)("td",null,[(0,n.bF)(t,{to:"/supported-devices/#v=Tuya"},{default:(0,n.k6)((()=>[(0,n.eW)("Tuya")])),_:1})])]),s,l,u])]),r,(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>[(0,n.eW)("How to use device type specific configuration")])),_:1})])]),h])}]]),v=JSON.parse('{"path":"/devices/RT_ZCZ03Z.html","title":"Tuya RT_ZCZ03Z control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya RT_ZCZ03Z control via MQTT","description":"Integrate your Tuya RT_ZCZ03Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-08-01T18:23:40.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Illuminance (lux) (numeric)","slug":"illuminance-lux-numeric","link":"#illuminance-lux-numeric","children":[]},{"level":3,"title":"Presence (binary)","slug":"presence-binary","link":"#presence-binary","children":[]},{"level":3,"title":"Detection distance max (numeric)","slug":"detection-distance-max-numeric","link":"#detection-distance-max-numeric","children":[]},{"level":3,"title":"Detection distance min (numeric)","slug":"detection-distance-min-numeric","link":"#detection-distance-min-numeric","children":[]},{"level":3,"title":"Target distance (numeric)","slug":"target-distance-numeric","link":"#target-distance-numeric","children":[]},{"level":3,"title":"Fading time (numeric)","slug":"fading-time-numeric","link":"#fading-time-numeric","children":[]},{"level":3,"title":"Presence sensitivity (numeric)","slug":"presence-sensitivity-numeric","link":"#presence-sensitivity-numeric","children":[]},{"level":3,"title":"Indicator (binary)","slug":"indicator-binary","link":"#indicator-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1723142290000},"filePathRelative":"devices/RT_ZCZ03Z.md"}')}}]);