import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Dropdown from "../dropdown"

describe('Dropdown', () => {
  it('renders activatorText', () => {
    const activatorText = 'Smashing'
    const { getByText } = render(<Dropdown activatorText={activatorText} />)

    const text = getByText(activatorText)
    expect(text).toBeInTheDocument()
  })
  it('renders a focusable button that activates the dropdown', () => {
    const activatorText = 'Bagley'
    const items = [{
      text: 'item 1',
      url: '#'
    },{
      text: 'item 2',
      url: '#'
    }]
    const dropdown = render(<Dropdown activatorText={activatorText} items={items} />)

    const activator = dropdown.getByTestId('dropdown-activator')
    activator.focus()

    expect(activator).toHaveFocus()

    fireEvent.click(activator)

    const dropdownList = dropdown.getByTestId('dropdown-itemList')

    const firstAnchor = dropdownList.querySelector('a')
    expect(firstAnchor).toHaveFocus()
  })

  it('closes the dropdown with the Escape key', () => {
    const activatorText = 'Rainier McCheddarton'
    const items = [{
      text: 'item 1',
      url: '#'
    },{
      text: 'item 2',
      url: '#'
    }]
    const dropdown = render(<Dropdown activatorText={activatorText} items={items} />)

    const activator = dropdown.getByTestId('dropdown-activator')
    activator.focus()
    fireEvent.click(activator)

    const dropdownList = dropdown.getByTestId('dropdown-itemList')

    const firstAnchor = dropdownList.querySelector('a')
    expect(firstAnchor).toHaveFocus()

    fireEvent.keyUp(firstAnchor, { key: 'Escape', code: 'Escape' })
    expect(activator).toHaveFocus()
  })
})