import React from 'react'
import Questionnaire from './Questionnaire'
import Score from './Score'
import Question from './Question'
import { shallow } from 'enzyme'

describe('<Questionnaire />', () => {

    const wrapper = shallow(<Questionnaire />)

    // renders 1 question component 
    it ('renders one <Question /> component', () => {
        expect(wrapper.find(Question)).toHaveLength(1)
    })

    // renders 1 score component
    it ('renders one <Score /> component', () => {
        expect(wrapper.find(Score)).toHaveLength(1)
    })


})