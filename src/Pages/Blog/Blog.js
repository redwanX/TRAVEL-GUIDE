import React from 'react'

const Blog = () => {
  return (
    <div className='pt-5 container' style={{textAlign:'justify'}}>
      <h1 className='text-center fw-bolder text-primary'>BLOG</h1>
      <hr />
      <div className=' text-secondary p-5 w-100 shadow rounded border'>
            <h2 className='fw-bold'>What is the difference between authorization and authentication?</h2>
            <article className='fs-4'>Authentication means checking if an user is permitted to accessing system by identity checking (ex. Email Password Login) . Authorization means checking permission of an authenticated user if he can use that particular resources or not. Authentication process is required before authorization. In authentication, system check if a person is a user or not and in authorization, system check if that user have permission to use that resource or not. For Example: “An user Login to facebook “ this us authentication, ” An normal user can change his profile picture but can’t change other users profile picture” This is Authorization.</article>
      </div>
      <div className=' text-secondary p-5 w-100 shadow rounded border'>
            <h2 className='fw-bold'>Why are you using firebase? What other options do you have to implement authentication?</h2>
            <article className='fs-4'>
            At this moment I’m using firebase for authentication. Firebase made it easy to authenticate an user without writing complex code and provide great security .I used firebase for email auth and social auth. Firebase has more options like database and others. 
            <br></br> Other Option for implementing authentication:
            <ul>
            <li>Auth0</li>
            <li>Passport</li>
            <li>Amazon Cognito</li>
            <li>Okta</li>	
            <li>JSON web Token</li>
            </ul>
            </article>
      </div>
      <div className=' text-secondary p-5 w-100 shadow rounded border'>
            <h2 className='fw-bold'> What other services does firebase provide other than authentication?</h2>
            <article className='fs-4'>
            Firebase provide so many services other than authentication such as:
            <ul>
              <li>Storage for content</li>
              <li>Hosting</li>
              <li>Real Time Database</li>
              <li>Machine Lerning</li>
              <li>Analytics</li>
              <li>Cloud Messaging</li>
              <li>Dynamic Links</li>
              <li>In-App Messaging</li>
            </ul>
         </article>
      </div>

    </div>
  )
}

export default Blog