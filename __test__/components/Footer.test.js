import React from 'react'
import {mount} from 'enzyme'
import {create} from 'react-test-renderer'
import Footer from '../../components/Footer'

describe('<Footer/>',()=>{
  const footer= mount(<Footer/>)
  test('render del componente footer',()=>{
    expect(footer.length).toEqual(1)
  });
  test('content render',()=>{
    expect(footer.find('p').text()).toEqual("This project is not affiliated with the SpaceX company or any of its affiliates in any way. I'm just a web developer tinkering with React who loves space exploration and working with APIs.")
  })
})

describe('Footer snaaapshot', ()=>{
  test('Comprobar ui del footer',()=>{
    const footer= create(<Footer/>)
    expect(footer.toJSON()).toMatchSnapshot()
  })
})