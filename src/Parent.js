import React, { Component } from 'react'

export default function Parent(props) {
    return (
        <>
          <h1>{props.name}</h1>
          <p>Возраст : {props.age}</p>
          {props.children}
          <p>Профессия : {props.profession}</p>
          {console.log(props.children)}

        </>
    )
  }


