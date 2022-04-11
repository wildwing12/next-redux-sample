import React from 'react';
import AgGrid from '../containers/user/AgGrid'
import UserView from '../containers/user/UserView'


function Tests({id}) {

  return (
      <div>
        <UserView id={id}/>
      </div>
  )
}

export default Tests;
