import React from 'react';
import AgGrid from '../containers/AgGrid'
import UserView from '../containers/UserView'


function Tests({id}) {

  return (
      <>
        <UserView id={id}/>
        <AgGrid witch={'user'} id={id}/>
      </>
  )
}

export default Tests;
