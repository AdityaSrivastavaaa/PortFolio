import React from 'react'

const Experience = () => {
  return (
    <div className='py-10 bg-[#232325]' id='experience'>
      <h2 className='mb-8 text-3xl text-white text-center'>My <span>Experience</span></h2>
      <div className='mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] mx-auto sm:max-w-[600px]'>
        <p>Robust Result Private Limited</p>
        <p className='text-gray-400'>(June 2022- July 2022)</p>
        <p className='text-gray-500'>
          <List as='ul'>
    <ListItem as='li'>Developed a full-stack blog website utilizing HTML, CSS, and JavaScript for the frontend, and SQL and PHP for the backend.</ListItem>
    <ListItem as='li'>Designed and implemented an admin panel to enhance management capabilities, streamlining content moderation and user management processes.</ListItem>
    <ListItem as='li'>
    Gained hands-on experience in full-stack development, working on both client-side and server-side components.
    </ListItem>
    <ListItem as='li'>Collaborated with a team of developers to deliver a functional and user-friendly web application within a tight timeline.</ListItem>
  </List>
        </p>
      </div>
      <div className='h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto'></div>
      <p>More to Go.....</p>
      {/* <div className='mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] mx-auto sm:max-w-[600px]'>
        <p>FirstCompany</p>
        <p className='text-gray-400'>(June 2021- July 2021)</p>
        <p className='text-gray-500'>
            Description of your experience in this company.
        </p>
      </div>
      <div className='h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto'></div> */}
      {/* <div className='mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] mx-auto sm:max-w-[600px]'>
        <p>FirstCompany</p>
        <p className='text-gray-400'>(June 2021- July 2021)</p>
        <p className='text-gray-500'>
            Description of your experience in this company.
        </p>
      </div>
      <div className='h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto'></div>
      <div className='mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] mx-auto sm:max-w-[600px]'>
        <p>FirstCompany</p>
        <p className='text-gray-400'>(June 2021- July 2021)</p>
        <p className='text-gray-500'>
            Description of your experience in this company.
        </p>
      </div> */}
      <div className='h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto'></div>
    </div>
  )
}

export default Experience
