import React from 'react';
import AgGrid from '../containers/AgGrid'
import UserView from '../containers/UserView'


function Tests({id}) {

  return (
      <div>
        <UserView id={id}/>
      </div>
  )
}

export default Tests;
