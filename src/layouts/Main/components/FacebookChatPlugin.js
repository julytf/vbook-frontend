import { useEffect, useRef } from 'react'

function FacebookChatPlugin() {
  const MessengerRef = useRef()
  useEffect(() => {
    MessengerRef.current.setAttribute('page_id', '103558932740703')
    MessengerRef.current.setAttribute('attribution', 'biz_inbox')

    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: 'v16.0',
      })
    }
    ;(function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js'
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')
  }, [])
  return (
    <div>
      <div id='fb-root' />
      <div id='fb-customer-chat' className='fb-customer-chat' ref={MessengerRef}></div>
    </div>
  )
}
export default FacebookChatPlugin
