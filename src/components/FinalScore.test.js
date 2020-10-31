// ANSWER TEST
import React, { Component } from 'react'
import { shallow } from 'enzyme'
import FinalScore from './FinalScore'; 

describe('FinalScore component', () => {
    
    let component
    beforeEach(() => {
        // shallow rendering renders component w/out children
        component = shallow(<FinalScore />)
    })

    it('should have a p tag with className "subheader"', () => {
        expect(component.find('.subheader'))
    })

    it('should return an img with className "trebek"', () => {
        expect(component.find('.trebek'))
    })
    
})


