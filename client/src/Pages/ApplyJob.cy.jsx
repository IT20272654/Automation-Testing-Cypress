import React from 'react'
import ApplyJob from './ApplyJob'

describe('<ApplyJob />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ApplyJob />)
  })
})