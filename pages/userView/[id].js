import React, {useEffect, useState} from 'react';
import Tests from '../../src/components/Tests'
import {useRouter} from "next/router";


function UserView() {
    const router = useRouter();
    if(!router.isReady) return false;
  return (
      <>
        <Tests id={router.query.pid} />
      </>
  )
}

export default UserView;
