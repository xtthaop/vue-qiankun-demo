<template>
  <div id="micro-app"></div>
</template>

<script>
import startQiankun from '@/micro'

export default {
  name: 'Portal',
  mounted(){
    if(!window.qiankunStarted){
      window.qiankunStarted = true
      const request = url => { return fetch(url, { headers: { 'X-Web-Base': 'platform-webbase-web' } }) }
      startQiankun({ fetch: request })
    }
  }
}
</script>
