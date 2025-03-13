import React from 'react'
import FormfacadeEmbed from "@formfacade/embed-react";



export default function AboutUsPage() {


  return (
    <div>
      <FormfacadeEmbed

        formFacadeURL="https://formfacade.com/include/106055315384201999886/form/1FAIpQLSf27e8aaJWqWFLlqFMTk6MFd4FC6Dv-MOW8iaFL4bui---smw/classic.js/?div=ff-compose"

        onSubmitForm={() => console.log('Form submitted')}

      />

    </div>
  )
}
