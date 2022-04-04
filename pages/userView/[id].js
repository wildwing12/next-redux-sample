import React from 'react';
import Tests from '../../src/components/Tests'
import {useRouter} from "next/router";


function UserView() {
    const router =useRouter();
  return (
      <>
      <Tests />
      </>
  )
}

export default UserView;
