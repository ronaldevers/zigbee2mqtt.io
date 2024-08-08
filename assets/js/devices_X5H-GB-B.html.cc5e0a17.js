"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[42950],{56447:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>m,data:()=>b});var a=o(57305);const i=(0,a.Lk)("h1",{id:"tuya-x5h-gb-b",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#tuya-x5h-gb-b"},[(0,a.Lk)("span",null,"Tuya X5H-GB-B")])],-1),d=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1),c=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"X5H-GB-B")],-1),s=(0,a.Lk)("td",null,"Vendor",-1),l=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Wall-mount thermostat")],-1),n=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"climate (current_heating_setpoint, local_temperature, local_temperature_calibration, system_mode, running_state, preset), sensor, schedule, lock (state), week, brightness_state, sound, frost_protection, factory_reset, heating_temp_limit, deadzone_temperature, upper_temp, linkquality")],-1),r=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/X5H-GB-B.png",alt:"Tuya X5H-GB-B"})])],-1),u=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"White-label"),(0,a.Lk)("td",null,"Beok TGR85-ZB, AVATTO ZWT-100-16A")],-1),h=(0,a.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>local_temperature_calibration</code>, <code>system_mode</code>, <code>running_state</code>, <code>preset</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>60</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>manual</code>, <code>program</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-9.9</code> and the maximum value is <code>9.9</code> with a step size of <code>0.1</code>.</li></ul><h3 id="sensor-enum" tabindex="-1"><a class="header-anchor" href="#sensor-enum"><span>Sensor (enum)</span></a></h3><p>Select temperature sensor to use. Value can be found in the published state on the <code>sensor</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensor&quot;: NEW_VALUE}</code>. The possible values are: <code>internal</code>, <code>external</code>, <code>both</code>.</p><h3 id="schedule-text" tabindex="-1"><a class="header-anchor" href="#schedule-text"><span>Schedule (text)</span></a></h3><p>There are 8 periods in the schedule in total. 6 for workdays and 2 for holidays. It should be set in the following format for each of the periods: <code>hours:minutes/temperature</code>. All periods should be set at once and delimited by the space symbol. For example: <code>06:00/20.5 08:00/15 11:30/15 13:30/15 17:00/22 22:00/15 06:00/20 22:00/15</code>. The thermostat doesn&#39;t report the schedule by itself even if you change it manually from device. Value can be found in the published state on the <code>schedule</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule&quot;: NEW_VALUE}</code>.</p><h3 id="child-lock-lock" tabindex="-1"><a class="header-anchor" href="#child-lock-lock"><span>Child lock (lock)</span></a></h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="week-enum" tabindex="-1"><a class="header-anchor" href="#week-enum"><span>Week (enum)</span></a></h3><p>Week format user for schedule. Value can be found in the published state on the <code>week</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;week&quot;: NEW_VALUE}</code>. The possible values are: <code>5+2</code>, <code>6+1</code>, <code>7</code>.</p><h3 id="brightness-state-enum" tabindex="-1"><a class="header-anchor" href="#brightness-state-enum"><span>Brightness state (enum)</span></a></h3><p>Screen brightness. Value can be found in the published state on the <code>brightness_state</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness_state&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="sound-binary" tabindex="-1"><a class="header-anchor" href="#sound-binary"><span>Sound (binary)</span></a></h3><p>Switches beep sound when interacting with thermostat. Value can be found in the published state on the <code>sound</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sound&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> sound is ON, if <code>OFF</code> OFF.</p><h3 id="frost-protection-binary" tabindex="-1"><a class="header-anchor" href="#frost-protection-binary"><span>Frost protection (binary)</span></a></h3><p>Antifreeze function. Value can be found in the published state on the <code>frost_protection</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;frost_protection&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> frost protection is ON, if <code>OFF</code> OFF.</p><h3 id="factory-reset-binary" tabindex="-1"><a class="header-anchor" href="#factory-reset-binary"><span>Factory reset (binary)</span></a></h3><p>Resets all settings to default. Doesn&#39;t unpair device.. Value can be found in the published state on the <code>factory_reset</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;factory_reset&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> factory reset is ON, if <code>OFF</code> OFF.</p><h3 id="heating-temp-limit-numeric" tabindex="-1"><a class="header-anchor" href="#heating-temp-limit-numeric"><span>Heating temp limit (numeric)</span></a></h3><p>Heating temperature limit. Value can be found in the published state on the <code>heating_temp_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;heating_temp_limit&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>60</code>. The unit of this value is <code>°C</code>. Besides the numeric values the following values are accepted: <code>default</code>.</p><h3 id="deadzone-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#deadzone-temperature-numeric"><span>Deadzone temperature (numeric)</span></a></h3><p>The delta between local_temperature and current_heating_setpoint to trigger Heat. Value can be found in the published state on the <code>deadzone_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;deadzone_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>0.5</code> and the maximum value is <code>9.5</code>. The unit of this value is <code>°C</code>. Besides the numeric values the following values are accepted: <code>default</code>.</p><h3 id="upper-temp-numeric" tabindex="-1"><a class="header-anchor" href="#upper-temp-numeric"><span>Upper temp (numeric)</span></a></h3><p>Value can be found in the published state on the <code>upper_temp</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;upper_temp&quot;: NEW_VALUE}</code>. The minimal value is <code>35</code> and the maximum value is <code>95</code>. The unit of this value is <code>°C</code>. Besides the numeric values the following values are accepted: <code>default</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',28),p={},m=(0,o(36920).A)(p,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[i,(0,a.Lk)("table",null,[d,(0,a.Lk)("tbody",null,[c,(0,a.Lk)("tr",null,[s,(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Tuya"},{default:(0,a.k6)((()=>[(0,a.eW)("Tuya")])),_:1})])]),l,n,r,u])]),h])}]]),b=JSON.parse('{"path":"/devices/X5H-GB-B.html","title":"Tuya X5H-GB-B control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya X5H-GB-B control via MQTT","description":"Integrate your Tuya X5H-GB-B via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-08-01T15:06:58.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Sensor (enum)","slug":"sensor-enum","link":"#sensor-enum","children":[]},{"level":3,"title":"Schedule (text)","slug":"schedule-text","link":"#schedule-text","children":[]},{"level":3,"title":"Child lock (lock)","slug":"child-lock-lock","link":"#child-lock-lock","children":[]},{"level":3,"title":"Week (enum)","slug":"week-enum","link":"#week-enum","children":[]},{"level":3,"title":"Brightness state (enum)","slug":"brightness-state-enum","link":"#brightness-state-enum","children":[]},{"level":3,"title":"Sound (binary)","slug":"sound-binary","link":"#sound-binary","children":[]},{"level":3,"title":"Frost protection (binary)","slug":"frost-protection-binary","link":"#frost-protection-binary","children":[]},{"level":3,"title":"Factory reset (binary)","slug":"factory-reset-binary","link":"#factory-reset-binary","children":[]},{"level":3,"title":"Heating temp limit (numeric)","slug":"heating-temp-limit-numeric","link":"#heating-temp-limit-numeric","children":[]},{"level":3,"title":"Deadzone temperature (numeric)","slug":"deadzone-temperature-numeric","link":"#deadzone-temperature-numeric","children":[]},{"level":3,"title":"Upper temp (numeric)","slug":"upper-temp-numeric","link":"#upper-temp-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1723142290000},"filePathRelative":"devices/X5H-GB-B.md"}')}}]);